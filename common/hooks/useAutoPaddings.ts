import { useEffect } from 'react';

function useAutoPaddings() {
  useEffect(() => {
    const screenHeight = document.documentElement.clientHeight;

    const allSection: NodeListOf<HTMLElement> = document.querySelectorAll('section[data-auto-padding]');

    allSection.forEach((section, index) => {
      const elementHeight = section?.clientHeight;

      const paddingCalculat = (screenHeight - elementHeight) / 2;

      const paddingValue = paddingCalculat >= 0 ? Math.round(paddingCalculat) : 10;

      if (index > 0) {
        section.style.paddingTop = `${paddingValue}px`;
      }

      section.style.paddingBottom = `${paddingValue}px`;
    });
  }, []);
}

export default useAutoPaddings;
