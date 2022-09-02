import { useMemo } from 'react';
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

function useMinPadding() {
  const { width } = useDeviceSize();

  return useMemo(() => {
    const foundDevice = Object.values(device).find(({ width: deviceWidth }) => width >= deviceWidth) || device.mobile;

    return foundDevice.padding;
  }, [width]);
}

export default useMinPadding;
