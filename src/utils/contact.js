import { company, contactConfig } from '../data/company'

export function validateEnquiry(values) {
  const errors = {}

  if (!values.name?.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email?.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (values.phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.product?.trim()) {
    errors.product = 'Please select a product of interest.'
  }

  if (!values.message?.trim()) {
    errors.message = 'Please share a short message about your enquiry.'
  } else if (values.message.trim().length < 12) {
    errors.message = 'Please provide a little more detail (at least a short sentence).'
  }

  if (!values.consent) {
    errors.consent = 'Please confirm that we may use your details to respond to this enquiry.'
  }

  return errors
}

export function buildEnquiryPayload(values) {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    company: values.company?.trim() || 'Not provided',
    product: values.product,
    message: values.message.trim(),
    _subject: `Business enquiry from ${values.name.trim()} — ${values.product}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: values.email.trim(),
  }
}

export async function sendEnquiryEmail(values) {
  const payload = buildEnquiryPayload(values)
  const response = await fetch(contactConfig.formSubmitEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message =
      data.message ||
      data.error ||
      'We could not send your enquiry right now. Please try again or email us directly.'
    throw new Error(message)
  }

  return data
}

export function buildEnquiryEmail(values) {
  const subject = encodeURIComponent(
    `Business enquiry from ${values.name.trim()} — ${values.product}`,
  )
  const body = encodeURIComponent(
    [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Company: ${values.company?.trim() || 'Not provided'}`,
      `Product of interest: ${values.product}`,
      '',
      'Message:',
      values.message.trim(),
      '',
      '---',
      `Sent via the ${company.name} website enquiry form.`,
    ].join('\n'),
  )

  return `mailto:${contactConfig.businessEmail}?subject=${subject}&body=${body}`
}

export function buildWhatsAppLink(values) {
  if (!contactConfig.whatsappEnabled) return null
  const text = encodeURIComponent(
    [
      `Hello ${company.name},`,
      '',
      `My name is ${values.name.trim()}.`,
      `I am interested in: ${values.product}.`,
      values.company?.trim() ? `Company: ${values.company.trim()}` : null,
      '',
      values.message.trim(),
      '',
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
    ]
      .filter(Boolean)
      .join('\n'),
  )
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${text}`
}

export const emptyEnquiry = {
  name: '',
  email: '',
  phone: '',
  company: '',
  product: '',
  message: '',
  consent: false,
}
