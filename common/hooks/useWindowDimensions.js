import { useEffect, useState } from 'react';

// ToDo copied from Clever, maybe extract to react-bex-helpers?
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

function getWindowDimensions() {
  if (typeof window === 'undefined') {
    return {
      width: 1920,
      height: 1080,
    };
  }

  const {
    innerWidth: width,
    innerHeight: height,
  } = window;

  return {
    width,
    height,
  };
}
