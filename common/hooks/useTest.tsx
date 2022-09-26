import OverlayScrollbars from 'overlayscrollbars';
import { useEffect } from 'react';
import AOS from 'aos';

function useScroll() {
  useEffect(() => {
    OverlayScrollbars(document.querySelectorAll('body'), {
      className: 'os-theme-light',
      scrollbars: {
        autoHide: 'scroll',
      },
      callbacks: {
        onScroll: () => {
          AOS.refresh();
        },
      },
    });
  }, []);
}

export default useScroll;
