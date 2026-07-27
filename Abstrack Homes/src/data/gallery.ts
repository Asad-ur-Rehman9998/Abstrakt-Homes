export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'sliding' | 'casement' | 'doors' | 'interior' | 'commercial';
}

export const galleryItems: GalleryItem[] = [
  { id: '1', src: '/images/sliding 1.jpg', alt: 'Premium uPVC sliding window installation by Abstrakt Homes', category: 'sliding' },
  { id: '2', src: '/images/sliding 2.jpg', alt: 'Deceuninck uPVC sliding window with modern design', category: 'sliding' },
  { id: '3', src: '/images/sliding 3.jpg', alt: 'Luxury sliding window system for contemporary homes', category: 'sliding' },
  { id: '4', src: '/images/sliding 4.jpg', alt: 'Energy efficient sliding uPVC windows Lahore', category: 'sliding' },
  { id: '5', src: '/images/sliding 5.jpg', alt: 'Premium sliding window with glass panels', category: 'sliding' },
  { id: '6', src: '/images/sliding 6.jpg', alt: 'Modern sliding window installation project', category: 'sliding' },
  { id: '7', src: '/images/casement.jpg', alt: 'uPVC casement window premium installation', category: 'casement' },
  { id: '8', src: '/images/casement 1.jpg', alt: 'Deceuninck casement window profile system', category: 'casement' },
  { id: '9', src: '/images/casement 2.jpg', alt: 'Premium casement window with secure locking', category: 'casement' },
  { id: '10', src: '/images/casement 3.jpg', alt: 'Aluminium casement window modern design', category: 'casement' },
  { id: '11', src: '/images/casement 4.jpg', alt: 'ASSA ABLOY window handle and lock hardware', category: 'casement' },
  { id: '12', src: '/images/casement 5.jpg', alt: 'High quality casement window installation', category: 'casement' },
  { id: '13', src: '/images/casement 6.jpg', alt: 'Luxury casement window for residential project', category: 'casement' },
  { id: '14', src: '/images/casement 7.jpg', alt: 'Modern casement window with double glazing', category: 'casement' },
  { id: '15', src: '/images/casement 8.jpg', alt: 'Premium architectural casement window', category: 'casement' },
  { id: '16', src: '/images/French doors.png', alt: 'Premium French doors with multi-point locks', category: 'doors' },
  { id: '17', src: '/images/cliding 7.jpg', alt: 'Sliding door system premium installation', category: 'doors' },
  { id: '18', src: '/images/alu 1.png', alt: 'Aluminium sliding window system', category: 'commercial' },
  { id: '19', src: '/images/header.jpg', alt: 'Abstrakt Homes premium window and door showroom', category: 'commercial' },
  { id: '20', src: '/images/pvcwindow.jpg', alt: 'uPVC window premium quality installation', category: 'sliding' },
  { id: '21', src: '/images/kitchen-9874063_1280.png', alt: 'Modern kitchen with premium window installation', category: 'interior' },
  { id: '22', src: '/images/kids-playing-their-room.jpg', alt: 'Energy efficient windows in family home', category: 'interior' },
  { id: '23', src: '/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.jpg', alt: 'Commercial window installation restaurant project', category: 'commercial' },
  { id: '24', src: '/images/full-shot-couple-with-plan.jpg', alt: 'Home improvement window consultation Abstrakt Homes', category: 'interior' },
];

export const galleryCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'sliding', label: 'Sliding Windows' },
  { key: 'casement', label: 'Casement Windows' },
  { key: 'doors', label: 'Doors' },
  { key: 'interior', label: 'Interiors' },
  { key: 'commercial', label: 'Commercial' },
] as const;
