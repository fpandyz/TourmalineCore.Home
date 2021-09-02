import { useEffect, useCallback } from 'react';

export function useAutoClose(ref, setIsOpen) {
  const handleClosure = useCallback(
    (event) => ref.current && !ref.current.contains(event.target) && setIsOpen(false),
    [setIsOpen, ref],
  );

  useEffect(() => {
    window.addEventListener('click', handleClosure);
    window.addEventListener('focusin', handleClosure);

    return () => {
      window.removeEventListener('click', handleClosure);
      window.removeEventListener('focusin', handleClosure);
    };
  }, [handleClosure, ref]);
}
