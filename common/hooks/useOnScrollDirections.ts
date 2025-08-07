import { useEffect, useState } from 'react';

export function useOnScrollDirections() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const bodyElement = document.querySelector(`body`);
    const handleScroll = () => {
      const currentScrollY = bodyElement?.scrollTop || 0;

      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 50) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 50) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    bodyElement?.addEventListener(`scroll`, handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [lastScrollY]);

  return isHidden;
}
