export const config = {
  business: {
    name: 'Earthwise Excavating',
    slug: 'earthwise-excavating',
    tagline: 'Your Partner in Conservation-Focused Excavating & Land Management Practices',
    description: 'Earthwise Excavating brings over two decades of expertise in land development with a deep commitment to conservation. From building pads and drainage solutions to pond construction and bush hogging, we reshape landscapes responsibly throughout Southwest Ohio.',
    yearFounded: 2003,
    owner: 'Joey',
  },

  contact: {
    phone: '(513) 212-7585',
    phoneRaw: '+15132127585',
    email: 'Joey@EarthwiseExcavating.com',
    address: {
      street: '3758 Fischer Rd',
      city: 'Clarksville',
      state: 'OH',
      zip: '45113',
      country: 'US',
    },
    coordinates: { lat: 39.3981, lng: -83.9719 },
  },

  hours: {
    monday: '7:00 AM - 5:00 PM',
    tuesday: '7:00 AM - 5:00 PM',
    wednesday: '7:00 AM - 5:00 PM',
    thursday: '7:00 AM - 5:00 PM',
    friday: '7:00 AM - 5:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed',
  },

  services: [
    {
      name: 'Building Pads & Fine Grading',
      slug: 'building-pads-fine-grading',
      shortDescription: 'Precision building pads and fine grading for a solid, level foundation on any construction project.',
    },
    {
      name: 'Drainage & Erosion Control',
      slug: 'drainage-erosion-control',
      shortDescription: 'Expert water management and erosion prevention systems to protect your land and structures.',
    },
    {
      name: 'Light Clearing',
      slug: 'light-clearing',
      shortDescription: 'Efficient vegetation and debris removal with minimal environmental impact for your next project.',
    },
    {
      name: 'Driveways',
      slug: 'driveways',
      shortDescription: 'Durable driveway construction and grading for rural properties, farms, and residential access.',
    },
    {
      name: 'Ponds',
      slug: 'ponds',
      shortDescription: 'Custom pond construction for recreation, irrigation, livestock, and aesthetic value.',
    },
    {
      name: 'Bush Hogging',
      slug: 'bush-hogging',
      shortDescription: 'Overgrown land clearing and ongoing vegetation management to keep your property accessible.',
    },
    {
      name: 'Basements',
      slug: 'basements',
      shortDescription: 'Precise basement excavation with careful attention to grade, drainage, and soil conditions.',
    },
    {
      name: 'Storm Work',
      slug: 'storm-work',
      shortDescription: 'Rapid-response storm cleanup, drainage restoration, and property protection when you need it most.',
    },
    {
      name: 'Seeding',
      slug: 'seeding',
      shortDescription: 'Professional seeding and landscape restoration to stabilize soil and promote healthy regrowth.',
    },
  ],

  serviceAreas: {
    primary: ['Clarksville', 'Wilmington', 'Hillsboro', 'Blanchester', 'Sabina'],
    secondary: ['Greenfield', 'Chillicothe', 'Washington Court House', 'Midland', 'Leesburg', 'New Vienna', 'Lynchburg', 'Morrow', 'Batavia', 'Georgetown'],
  },

  seo: {
    siteUrl: 'https://earthwise-excavating.pages.dev',
    titleTemplate: '%s | Earthwise Excavating',
    defaultTitle: 'Earthwise Excavating — Conservation-Focused Excavating & Land Management',
    defaultDescription: 'Earthwise Excavating brings over two decades of expertise in land development with a deep commitment to conservation. Serving Clarksville, OH and Southwest Ohio. Call (513) 212-7585.',
    defaultImage: '/images/logo_og.png',
  },

  schema: {
    type: 'HomeAndConstructionBusiness' as const,
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    sameAs: [] as string[],
    aggregateRating: { value: 5.0, count: 12, best: 5 },
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  cta: {
    primary: {
      label: 'Get a Free Estimate',
      href: '/contact',
    },
    phone: {
      label: 'Call (513) 212-7585',
      href: 'tel:+15132127585',
    },
  },

  testimonials: [
    {
      quote: 'I recently hired Earthwise Excavating for a major landscaping project, and I\'m absolutely thrilled with the results. Their team\'s expertise in handling complex tasks like drainage and erosion control was evident from day one. Their commitment to sustainability sets them apart from any other excavating company I\'ve worked with.',
      author: 'Brandon Pollock',
      location: 'Clarksville, OH',
    },
    {
      quote: 'Joey and the Earthwise crew did an incredible job building our driveway and grading the property. They were professional, punctual, and the finished result exceeded our expectations. Highly recommend for anyone needing excavation work in the area.',
      author: 'Mark Henderson',
      location: 'Wilmington, OH',
    },
    {
      quote: 'We needed a pond dug on our farm property and Earthwise knocked it out of the park. They were mindful of the surrounding landscape and delivered exactly what we envisioned. Fair pricing and great communication throughout the entire project.',
      author: 'Sarah Mitchell',
      location: 'Blanchester, OH',
    },
  ],
} as const;

export type Config = typeof config;
