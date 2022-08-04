import {
  useMemo, useState, useEffect, RefObject,
} from 'react';

function useOnScreen(ref: RefObject<HTMLLIElement>, defaultIntersecting = false) {
  const [isIntersecting, setIsIntersecting] = useState(defaultIntersecting);

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), [ref]);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export default useOnScreen;
