import { useMemo, useState } from 'react'
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import { products } from '../../data/products'
import { company, contactConfig } from '../../data/company'
import { emptyEnquiry, sendEnquiryEmail, validateEnquiry } from '../../utils/contact'
import Button from './Button'

export default function EnquiryForm({ defaultProduct = '' }) {
  const [values, setValues] = useState({ ...emptyEnquiry, product: defaultProduct })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const productOptions = useMemo(
    () => ['General enquiry', ...products.map((product) => product.name)],
    [],
  )

  const update = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (status !== 'idle') {
      setStatus('idle')
      setStatusMessage('')
    }
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateEnquiry(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('sending')
    setStatusMessage('')

    try {
      await sendEnquiryEmail(values)
      setStatus('sent')
      setStatusMessage(
        `Thank you. Your enquiry has been sent to ${company.email}. Our team will respond during business hours.`,
      )
      setValues({ ...emptyEnquiry, product: defaultProduct })
    } catch (error) {
      setStatus('error')
      setStatusMessage(
        error.message ||
          `Unable to send right now. Please email ${company.email} or continue on WhatsApp.`,
      )
    }
  }

  return (
    <div className="rounded-[1.75rem] border border-line bg-surface p-5 shadow-soft sm:p-7">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Name"
            id="enquiry-name"
            required
            error={errors.name}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            autoComplete="name"
          />
          <Field
            label="Email address"
            id="enquiry-email"
            type="email"
            required
            error={errors.email}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
          />
          <Field
            label="Phone number"
            id="enquiry-phone"
            type="tel"
            required
            error={errors.phone}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
          />
          <Field
            label="Company or organisation"
            id="enquiry-company"
            optional
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="enquiry-product" className="mb-1.5 block text-sm font-medium text-ink">
            Product of interest <span className="text-rose">*</span>
          </label>
          <select
            id="enquiry-product"
            value={values.product}
            onChange={(e) => update('product', e.target.value)}
            className={inputClass(errors.product)}
            required
          >
            <option value="">Select a product</option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.product ? <ErrorText>{errors.product}</ErrorText> : null}
        </div>

        <div>
          <label htmlFor="enquiry-message" className="mb-1.5 block text-sm font-medium text-ink">
            Enquiry message <span className="text-rose">*</span>
          </label>
          <textarea
            id="enquiry-message"
            rows={5}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            className={inputClass(errors.message)}
            required
          />
          {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm text-ink-muted">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update('consent', e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-line text-rose focus:ring-rose"
            />
            <span>
              I agree that AGRINECS BIOCHEMICALS may use my details to respond to this business enquiry.{' '}
              <span className="text-rose">*</span>
            </span>
          </label>
          {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit" className="w-full sm:w-auto" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              'Send Enquiry'
            )}
          </Button>
          {contactConfig.whatsappEnabled ? (
            <Button
              href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(`Hello ${company.name}, I would like to know more about your products.`)}`}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </Button>
          ) : null}
        </div>
      </form>

      {status === 'sent' ? (
        <div className="mt-6 flex gap-3 rounded-2xl border border-agri-green/30 bg-agri-green/10 p-4 text-sm text-ink" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-agri-green" aria-hidden="true" />
          <p>{statusMessage}</p>
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="mt-6 space-y-3 rounded-2xl border border-burgundy/25 bg-soft-pink/70 p-4 text-sm text-ink" role="alert">
          <p>{statusMessage}</p>
          <p className="text-ink-muted">
            You can also email{' '}
            <a className="font-semibold text-rose hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            {' '}
            or continue on WhatsApp.
          </p>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-ink-muted">
        Enquiries are delivered to {company.email} using a secure frontend email relay (no custom server). On first
        use, please confirm the FormSubmit activation email sent to this inbox.
      </p>
    </div>
  )
}

function Field({
  label,
  id,
  error,
  optional = false,
  required = false,
  type = 'text',
  value,
  onChange,
  autoComplete,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}{' '}
        {required ? <span className="text-rose">*</span> : null}
        {optional ? <span className="font-normal text-ink-muted">(optional)</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className={inputClass(error)}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  )
}

function ErrorText({ children }) {
  return <p className="mt-1 text-sm text-burgundy">{children}</p>
}

function inputClass(error) {
  return [
    'w-full rounded-xl border bg-elevated px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-rose',
    error ? 'border-burgundy' : 'border-line',
  ].join(' ')
}
