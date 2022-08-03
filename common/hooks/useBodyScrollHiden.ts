import { useEffect } from 'react';

const BODY_SCROLL_HIDEN = 'body--scroll-hiden';

export function useBodyScrollHiden(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(BODY_SCROLL_HIDEN);
    } else {
      document.body.classList.remove(BODY_SCROLL_HIDEN);
    }

    return () => {
      document.body.classList.remove(BODY_SCROLL_HIDEN);
    };
  }, [isOpen]);
}
