import { useEffect, useState } from 'react';
import useDeviceSize from './useDeviceSize';

const device = {
  desktopXl: {
    width: 1920,
    padding: 100,
  },
  desktop: {
    width: 1280,
    padding: 88,
  },
  tablet: {
    width: 768,
    padding: 48,
  },
  mobile: {
    width: 375,
    padding: 40,
  },
};

function useCalcOffset() {
  const [offset, setOffset] = useState(device.mobile.padding);
  const { width } = useDeviceSize();

  useEffect(() => {
    function getOffset() {
      if (width >= device.desktopXl.width) {
        return device.desktopXl.padding;
      }
      if (width >= device.desktop.width) {
        return device.desktop.padding;
      }
      if (width >= device.tablet.width) {
        return device.tablet.padding;
      }

      return device.mobile.padding;
    }

    setOffset(getOffset());
  }, [width]);

  return offset;
}

export default useCalcOffset;
