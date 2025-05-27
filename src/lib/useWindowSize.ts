import { useState, useEffect } from 'react';

const useWindowSize = () => {
  // Initialize state with a default value (e.g., 0) or a server-safe value
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window !== 'undefined') {
      // Function to update window width
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };

      // Set initial window width
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return [windowWidth, windowHeight];
};

export default useWindowSize;
