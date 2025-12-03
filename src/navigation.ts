import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // --- HEADER NAVIGATION LINKS ---
  links: [
    {
      text: 'Home',
      href: getPermalink('/'), // Direct link to Home
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog', // Keep Blog for Content Marketing
      href: getBlogPermalink(),
    },
    {
      text: 'Resources', // Dropdown for legal and supplementary pages
      links: [
        {
          text: 'Privacy Policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Terms & Conditions',
          href: getPermalink('/terms'),
        },
        {
          text: 'Case Studies',
          href: getPermalink('/case-studies'), // Placeholder for future page
        },
      ],
    },
  ],
  // --- HEADER CALL-TO-ACTION BUTTON ---
  actions: [
    {
      text: 'Book Strategy Call',
      href: getPermalink('/contact'), // Direct link to the Contact/Booking page
      target: '_self',
      variant: 'primary',
    },
  ],
};

// --- FOOTER DATA ---
export const footerData = {
  links: [
    {
      title: 'DFY Services',
      links: [
        { text: 'Website Design', href: getPermalink('/services#website') },
        { text: 'AI Chatbot Automation', href: getPermalink('/services#chatbot') },
        { text: 'SEO & Content Marketing', href: getPermalink('/services#seo') },
        { text: 'Pricing & Bundles', href: getPermalink('/pricing') },
        { text: 'View Case Studies', href: getPermalink('/case-studies') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Knowledge Click', href: getPermalink('/about') },
        { text: 'Careers', href: getPermalink('/careers') }, // Placeholder
        { text: 'Our Blog', href: getBlogPermalink() },
        { text: 'Contact & Support', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Client Login', href: '#' },
        { text: 'Help Center (FAQs)', href: '#' },
        { text: 'Start a Support Ticket', href: 'mailto:support@knowledgeclick.com' },
        { text: 'Knowledge Base', href: '#' },
        { text: 'Service Status', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
        { text: 'Cookie Policy', href: getPermalink('/cookie-policy') }, // Placeholder
        { text: 'Disclaimer', href: getPermalink('/disclaimer') }, // Placeholder
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms & Conditions', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' }, // LinkedIn is better for B2B agency
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/knowledge-click' }, // Update with KC's repository
  ],
  footNote: `
    © 2025 Knowledge Click DFY Agency. All rights reserved.
  `,
};
