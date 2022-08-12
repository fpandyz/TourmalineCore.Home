import { useEffect, useState } from 'react';

function useOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function getOffset() {
      const { height } = window.screen;
      if (height < 1366) {
        return -48;
      }
      if (height < 1920) {
        return -88;
      }

      return 0;
    }

    setOffset(getOffset());
  }, []);

  return offset;
}

export default useOffset;
