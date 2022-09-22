import OverlayScrollbars from 'overlayscrollbars';
import { useEffect, useState } from 'react';

function useScroll() {
  useEffect(() => {
    // document.addEventListener('scroll', (evt: any) => {
    //   console.log('animated in', evt);

    //   isTest(evt);
    // });

    OverlayScrollbars(document.querySelectorAll('body'), {
      className: 'os-theme-light',
      scrollbars: {
        autoHide: 'scroll',
      },
    });
  });
}

export default useScroll;
