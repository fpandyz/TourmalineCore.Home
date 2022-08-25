import { useEffect } from 'react';

function useAutoPaddings() {
  useEffect(() => {
    const screenHeight = document.documentElement.clientHeight;

    const allSection: NodeListOf<HTMLElement> = document.querySelectorAll('section[data-auto-padding]');

    allSection.forEach((section, index) => {
      const elementHeight = section?.clientHeight;
      const isNotMobileWidth = section?.clientWidth >= 756;

      const paddingCalculat = (screenHeight - elementHeight) / 2;

      const paddingValue = paddingCalculat >= 0 ? Math.round(paddingCalculat) : 10;

      if (index === allSection.length - 1) {
        section.style.paddingTop = isNotMobileWidth ? `${paddingValue}px` : '80px';
        return;
      }

      section.style.paddingTop = isNotMobileWidth ? `${paddingValue}px` : '80px';
      section.style.paddingBottom = isNotMobileWidth ? `${paddingValue}px` : '80px';
    });
  }, []);
}

export default useAutoPaddings;
