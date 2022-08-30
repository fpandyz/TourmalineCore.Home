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
  const [offset, setOffset] = useState(0);

  const deviceSize = useDeviceSize();
  const minPadding = useCalcOffset();

  useEffect(() => {
    const allSection: NodeListOf<HTMLElement> = document.querySelectorAll('section[data-auto-padding]');

    allSection.forEach((section, index) => {
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

      if (paddingCalculat <= 0) {
        setOffset(minPadding - paddingCalculat - 20);
      } else if (isMinPadding) {
        setOffset(minPadding - paddingCalculat);
      } else {
        setOffset(0);
      }

      if (index === allSection.length - 1) {
        section.style.paddingTop = `${paddingValue}px`;
        return;
      }

      section.style.paddingTop = `${paddingValue}px`;
      section.style.paddingBottom = `${paddingValue}px`;
    });
  }, [deviceSize]);

  console.log(offset);

  return offset;
}

export default useAutoPaddings;
