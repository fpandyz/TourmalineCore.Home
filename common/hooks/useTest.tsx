import OverlayScrollbars from 'overlayscrollbars';
import { useEffect } from 'react';

function useTest() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      OverlayScrollbars(document.querySelectorAll('body'), { });
    });

    return () => {
      document.removeEventListener('DOMContentLoaded', () => {
        OverlayScrollbars(document.querySelectorAll('body'), { });
      });
    };
  });
}

export default useTest;
