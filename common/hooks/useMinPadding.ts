import { useMemo } from 'react';
import useDeviceSize from './useDeviceSize';

const device = {
  desktopXl: {
    width: 1920,
    minPaddingBetweenSections: 100,
  },
  desktop: {
    width: 1280,
    minPaddingBetweenSections: 88,
  },
  tablet: {
    width: 768,
    minPaddingBetweenSections: 48,
  },
  mobile: {
    width: 375,
    minPaddingBetweenSections: 40,
  },
};

function useMinPaddingBetweenSections() {
  const { width } = useDeviceSize();

  return useMemo(() => {
    const foundDevice = Object.values(device).find(({ width: deviceWidth }) => width >= deviceWidth) || device.mobile;

    return foundDevice.minPaddingBetweenSections;
  }, [width]);
}

export default useMinPaddingBetweenSections;
