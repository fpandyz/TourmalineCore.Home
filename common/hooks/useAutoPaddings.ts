import { useEffect, useState } from 'react';

function useAutoPaddings() {
  const [paddings, setPaddings] = useState<number[]>([]);

  useEffect(() => {
    const screenHeight = document.documentElement.clientHeight;

    const allSection = document.querySelectorAll('section[data-auto-padding]');

    const paddingValues: number[] = [];

    allSection.forEach((section) => {
      const elementHeight = section?.clientHeight;

      if (elementHeight) {
        const paddingCalculat = (screenHeight - elementHeight) / 2;

        const paddingValue = paddingCalculat > 0 ? paddingCalculat : 10;

        paddingValues.push(Math.floor(paddingValue));
      }
    });

    setPaddings(paddingValues);
  }, []);

  return paddings;
}

export default useAutoPaddings;
