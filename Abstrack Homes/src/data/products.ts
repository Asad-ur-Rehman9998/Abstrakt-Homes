export interface ProductItem {
  id: number;
  title: string;
  category: 'upvc' | 'aluminium' | 'hardware' | 'profiles';
  description: string;
  image: string;
  features?: string[];
}

const products: ProductItem[] = [
  {
    id: 101,
    title: 'uPVC Sliding Window',
    category: 'upvc',
    description: 'Sleek sliding uPVC window with excellent insulation and low maintenance.',
    image: '/images/sliding 2.jpg',
    features: ['Smooth sliding', 'Corrosion resistant', 'Energy efficient'],
  },
  {
    id: 102,
    title: 'uPVC Casement Window',
    category: 'upvc',
    description: 'Durable casement with high-security locking and weather resistance.',
    image: '/images/casement.jpg',
  },

  {
    id: 201,
    title: 'Aluminium Sliding Window',
    category: 'aluminium',
    description: 'Lightweight aluminium frame with modern slim sightlines and durability.',
    image: '/images/alu 1.png',
  },
  {
    id: 202,
    title: 'Aluminium Casement Window',
    category: 'aluminium',
    description: 'Strong aluminium casement ideal for commercial and residential projects.',
    image: '/images/casement 3.jpg',
  },

  {
    id: 301,
    title: 'French Door',
    category: 'hardware',
    description: 'French doors built with precision-engineered multi-point locks for strength, safety, and durability',
    image: '/images/French doors.png',
  },
  {
    id: 302,
    title: 'Window Handle & Lock',
    category: 'hardware',
    description: 'Ergonomic handles with integrated locking for smooth operation.',
    image: '/images/casement 4.jpg',
  },

  {
    id: 401,
    title: 'ASAS Elite 60 Casement',
    category: 'profiles',
    description: 'Premium profile engineered for thermal efficiency and secure locking.',
    image: '/images/casement 1.jpg',
  },
  {
    id: 402,
    title: 'Deceuninck Classic 60',
    category: 'profiles',
    description: 'Reliable profile system with excellent sealing and durability.',
    image: '/images/casement 2.jpg',
  },
];

export default products;
