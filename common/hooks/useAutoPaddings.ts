import { useEffect, useState } from 'react';
import useDeviceSize from './useDeviceSize';

function calcOffset() {
  const [offset, setOffset] = useState(80);
  const deviceSize = useDeviceSize();

  useEffect(() => {
    function getOffset() {
      if (deviceSize.width >= 1920) {
        return 200;
      }
      if (deviceSize.width >= 1366) {
        return 176;
      }
      if (deviceSize.width >= 768) {
        return 96;
      }

      return 80;
    }

    setOffset(getOffset());
  }, [deviceSize.width]);

  return offset;
}

function useAutoPaddings() {
  const deviceSize = useDeviceSize();

  const minPadding = calcOffset();

  useEffect(() => {
    const allSection: NodeListOf<HTMLElement> = document.querySelectorAll('section[data-auto-padding]');

    allSection.forEach((section, index) => {
      const screenHeight = document.documentElement.clientHeight;
      const elementHeight = section?.clientHeight;

      const paddingCalculat = (screenHeight - elementHeight) / 2;

      const paddingValue = paddingCalculat > minPadding ? Math.round(paddingCalculat) : minPadding;

      if (index === allSection.length - 1) {
        section.style.paddingTop = `${paddingValue}px`;
        return;
      }

      section.style.paddingTop = `${paddingValue}px`;
      section.style.paddingBottom = `${paddingValue}px`;
    });
  }, [deviceSize]);
}

export default useAutoPaddings;
