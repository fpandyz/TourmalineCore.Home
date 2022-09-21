import OverlayScrollbars from 'overlayscrollbars';
import { useEffect } from 'react';

const config = {};

function useScroll() {
  useEffect(() => {
    OverlayScrollbars(document.querySelectorAll('body'), config);

    console.log(document.querySelectorAll('body'));
  });
}

export default useScroll;
