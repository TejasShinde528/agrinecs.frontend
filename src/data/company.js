/**
 * Central company configuration for AGRINECS BIOCHEMICALS.
 */
export const company = {
  name: 'AGRINECS BIOCHEMICALS',
  legalName: 'AGRINECS BIOCHEMICALS',
  shortName: 'Agrinecs Bio',
  tagline: 'Growing a Better Future, Naturally.',
  shortDescription:
    'Organic farming solutions from Nashik, Maharashtra — supporting low-cost, sustainable, and profitable produce with nutrient-rich crop nutrition for healthier food.',
  foundedNote: 'Focused on organic farming inputs and grower-first product development.',
  domain: 'https://www.agrinecsbiochemicals.com',
  email: 'agrinecsbiochemicals@gmail.com',
  phone: '+91 72190 01812',
  whatsapp: '917219001812',
  address: {
    line1: 'Plot No E12/88, Malegaon MIDC',
    line2: 'Tal. Sinnar',
    city: 'Nashik',
    state: 'Maharashtra',
    postalCode: '',
    country: 'India',
  },
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM IST' },
    { days: 'Saturday', time: '9:00 AM – 1:00 PM IST' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
    youtube: '',
  },
  mission:
    'To help farmers grow low-cost, sustainable, and profitable organic produce through carefully formulated biostimulants and crop nutrition products that support plant health and nutrient-rich harvests.',
  vision:
    'To set high Indian standards in organic farming inputs — focused on customer health, farmer profitability, and access to nutrient-rich food for every household.',
  story: [
    'AGRINECS BIOCHEMICALS is an agriculture business based in Malegaon MIDC, Sinnar, Nashik, Maharashtra. We develop and supply organic-focused crop nutrition and biostimulant products designed for real farm conditions across India.',
    'Our work centres on sustainable agriculture: helping growers improve plant vigour, manage crop stress, and pursue profitable organic produce without losing sight of soil health and food quality. We are expanding our range with more products in the same responsible direction.',
  ],
  values: [
    {
      title: 'Organic-first farming',
      description:
        'We prioritise formulations that support organic and sustainable production systems for healthier crops and food.',
    },
    {
      title: 'Farmer profitability',
      description:
        'Our goal is practical value in the field — solutions that help growers pursue better produce quality and sustainable returns.',
    },
    {
      title: 'Customer health focus',
      description:
        'We believe nutrient-rich harvests begin with responsible crop nutrition and careful product development.',
    },
    {
      title: 'Indian quality standards',
      description:
        'We aim to build products and processes aligned with high Indian standards for trust, clarity, and consistent quality.',
    },
  ],
  philosophy:
    'Healthy soil and well-supported plants are the foundation of nutritious food. We combine seaweed extracts, humic substances, amino acids, and related biochemical nutrition to help crops perform under everyday farm stress while supporting sustainable growing practices.',
  qualityApproach:
    'Each product is presented with clear composition information from our labelling. We encourage growers and distributors to follow the directions on the product pack and to choose the right solution for crop stage and field conditions.',
  sustainability:
    'We are committed to low-cost, sustainable, and profitable organic produce — benefiting consumers through healthier food and supporting farmers through practical, field-ready products. Future launches will continue in this organic farming direction.',
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ],
  productCategories: ['Growth Promoter', 'Anti Stress', 'Plant Biostimulant'],
}

export const contactConfig = {
  businessEmail: company.email,
  whatsappNumber: company.whatsapp,
  whatsappEnabled: Boolean(company.whatsapp),
  emailEnabled: Boolean(company.email),
  /**
   * FormSubmit delivers enquiry emails without a custom backend.
   * First-time use: confirm the inbox when FormSubmit sends a verification email.
   */
  formSubmitEndpoint: `https://formsubmit.co/ajax/${company.email}`,
}
