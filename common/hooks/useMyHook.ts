import { useEffect, useState } from 'react';

function useOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function getOffset() {
      const { height } = window.screen;
      if (height >= 1024 && height < 1366) {
        return -300;
      }
      if (height >= 1366 && height < 1920) {
        return -400;
      }
      if (height >= 1920 && height < 2560) {
        return -500;
      } if (height >= 2560) {
        return -600;
      }

      return 0;
    }

    setOffset(getOffset());
  }, []);

  return offset;
}

export default useOffset;
