import { useEffect, useState } from 'react';
import useDeviceSize from './useDeviceSize';

function useCalcOffset() {
  const [offset, setOffset] = useState(80);
  const deviceSize = useDeviceSize();

  useEffect(() => {
    function getOffset() {
      if (deviceSize.width >= 1920) {
        return 200;
      }
      if (deviceSize.width >= 1280) {
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
  const minPadding = useCalcOffset();

  useEffect(() => {
    const allSection: NodeListOf<HTMLElement> = document.querySelectorAll('section[data-auto-padding]');

    allSection.forEach((section, index) => {
      const element = section.querySelector<HTMLElement>('div[name]');

      if (element) {
        element.style.paddingTop = '0px';
        element.style.paddingBottom = '0px';
      }

      const paddingTopPx = section.style.paddingTop;
      const paddingBottomPx = section.style.paddingBottom;

      const paddingTop = Number(paddingTopPx.substring(0, paddingTopPx.length - 2));
      const paddingBottom = Number(paddingBottomPx.substring(0, paddingBottomPx.length - 2));

      const screenHeight = deviceSize.height;
      const elementHeight = section.clientHeight - paddingTop - paddingBottom;

      const heightDifference = screenHeight - elementHeight;
      const paddingCalculat = heightDifference > 0 ? Math.round(heightDifference / 2) : 0;

      const isMinPadding = minPadding > paddingCalculat;
      const paddingValue = isMinPadding ? minPadding : paddingCalculat;

      if (index === allSection.length - 1) {
        section.style.paddingTop = `${paddingValue}px`;
        return;
      }

      if (!element) {
        section.style.paddingTop = `${paddingValue}px`;
        section.style.paddingBottom = `${paddingValue}px`;
        return;
      }

      element.style.paddingTop = `${paddingCalculat}px`;
      element.style.paddingBottom = `${paddingCalculat}px`;

      if (isMinPadding) {
        section.style.paddingTop = `${minPadding - paddingCalculat}px`;
        section.style.paddingBottom = `${minPadding - paddingCalculat}px`;
      } else {
        section.style.paddingTop = '0px';
        section.style.paddingBottom = '0px';
      }
    });
  }, [deviceSize]);
}

export default useAutoPaddings;
