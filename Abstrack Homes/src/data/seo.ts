export const SITE_URL = 'https://abstrakthomes.com';
export const SITE_NAME = 'Abstrakt Homes';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  path: string;
  ogType?: string;
}

export const defaultSEO: PageSEO = {
  title: 'Abstrakt Homes | Premium Deceuninck uPVC Windows & Doors | Lahore',
  description:
    'Abstrakt Homes — Lahore\'s premium window and door company. Deceuninck uPVC windows, ASSA ABLOY hardware, aluminium systems, sliding & casement windows. Expert installation.',
  keywords:
    'Deceuninck Windows, Deceuninck Doors, uPVC Windows, uPVC Doors, ASSA ABLOY Hardware, Premium Windows, Sliding Windows, Casement Windows, Window Installation, Lahore, Luxury Windows, Energy Efficient Windows',
  path: '/',
};

export const pageSEO: Record<string, PageSEO> = {
  '/': defaultSEO,
  '/category-layout': {
    title: 'Our Products | Deceuninck uPVC & Aluminium Windows | Abstrakt Homes',
    description:
      'Browse our complete range of premium uPVC doors, aluminium windows, ASSA ABLOY hardware, and Deceuninck profiles. Quality architectural solutions in Lahore.',
    keywords:
      'uPVC Windows, Aluminium Windows, Window Hardware, Deceuninck Profiles, Premium Door Hardware, Window Company Lahore',
    path: '/category-layout',
  },
  '/upvc-doors-windows': {
    title: 'uPVC Doors & Windows | Deceuninck Sliding & Casement | Abstrakt Homes',
    description:
      'Premium Deceuninck uPVC doors and windows — sliding, casement, folding doors, and curtain wall systems. Energy efficient, low maintenance, modern design.',
    keywords:
      'uPVC Windows, uPVC Doors, Deceuninck Windows, Sliding Windows, Casement Windows, Folding Doors, Double Glazed Windows',
    path: '/upvc-doors-windows',
  },
  '/aluminium-doors-windows': {
    title: 'Aluminium Doors & Windows | Modern Architectural Systems | Abstrakt Homes',
    description:
      'Premium aluminium doors and windows with slim sightlines. Sliding and casement systems for residential and commercial projects in Lahore.',
    keywords:
      'Aluminium Windows, Aluminium Doors, Architectural Windows, Modern Windows, Sliding Windows, Casement Windows',
    path: '/aluminium-doors-windows',
  },
  '/hardware': {
    title: 'ASSA ABLOY Hardware | Premium Window & Door Hardware | Abstrakt Homes',
    description:
      'Authorized ASSA ABLOY distributor in Pakistan. Multi-point locks, handles, hinges, and weatherstripping for premium window and door systems.',
    keywords:
      'ASSA ABLOY Hardware, Window Hardware, Door Hardware, Multi-point Locks, Premium Door Hardware, Window Handles',
    path: '/hardware',
  },
  '/profiles': {
    title: 'Deceuninck & ASAS Profiles | Premium uPVC Window Systems | Abstrakt Homes',
    description:
      'Deceuninck and ASAS premium uPVC profiles — casement and sliding systems engineered for thermal efficiency and secure locking.',
    keywords:
      'Deceuninck Profiles, Deceuninck Windows, uPVC Profiles, ASAS Profiles, Premium Window Systems',
    path: '/profiles',
  },
};

export const getProductSEO = (title: string, description: string, id: number): PageSEO => ({
  title: `${title} | Abstrakt Homes`,
  description,
  keywords: `${title}, Premium Windows, uPVC Doors, Window Installation, Abstrakt Homes Lahore`,
  path: `/product/${id}`,
  ogType: 'product',
});
