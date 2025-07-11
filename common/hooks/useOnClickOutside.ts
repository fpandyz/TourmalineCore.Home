import { MutableRefObject, useEffect } from 'react';

export function useOnClickOutside(ref: MutableRefObject<HTMLElement | null>, handler: (evt: Event) => unknown) {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node | null)) {
          return;
        }

        handler(event);
      };

      document.addEventListener(`mousedown`, listener);
      document.addEventListener(`touchstart`, listener);

      return () => {
        document.removeEventListener(`mousedown`, listener);
        document.removeEventListener(`touchstart`, listener);
      };
    },

    [ref, handler],
  );
}
