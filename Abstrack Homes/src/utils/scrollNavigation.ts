import { useNavigate } from 'react-router-dom';

export const useScrollNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Check if it's a hash link
    if (path.startsWith('/#')) {
      // If we're already on the home page
      if (window.location.pathname === '/') {
        const element = document.querySelector(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        // Navigate first, then try to scroll after navigation completes.
        // We can't await navigate, so navigate and then attempt scroll after a short delay.
        navigate(path);
        setTimeout(() => {
          const el = document.querySelector(path.substring(1));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
    } else {
      // Regular route navigation
      navigate(path);
    }
  };

  return handleNavigation;
};