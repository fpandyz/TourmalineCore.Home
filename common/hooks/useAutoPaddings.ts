import { useEffect, useCallback } from 'react';
import useCalcOffset from './useCalcOffset';
import useDeviceSize from './useDeviceSize';

type AllSection = NodeListOf<HTMLElement>;
type Section = HTMLElement;
type Element = HTMLElement;

const SECTION_SELECTOR = 'section[data-auto-padding]';
const ELEMENT_SELECTOR = 'div[name]';

function useAutoPaddings() {
  const deviceSize = useDeviceSize();
  const minPadding = useCalcOffset();

  const paddingCalculate = useCallback((section: Section) => {
    const {
      paddingTop,
      paddingBottom,
    } = getPadding(section);

    const screenHeight = deviceSize.height;
    const elementHeight = section.clientHeight - paddingTop - paddingBottom;

    const heightDifference = screenHeight - elementHeight;
    return heightDifference > 0 ? Math.round(heightDifference / 2) : 0;
  }, [deviceSize]);

  useEffect(() => {
    const allSection: AllSection = document.querySelectorAll(SECTION_SELECTOR);

    allSection.forEach((section, index) => {
      const element = section.querySelector<Element>(ELEMENT_SELECTOR);

      if (element) {
        element.style.paddingTop = '0px';
        element.style.paddingBottom = '0px';
      }

      const paddingCalculated = paddingCalculate(section);

      const isMinPadding = minPadding > paddingCalculated;
      const paddingValue = isMinPadding ? minPadding : paddingCalculated;

      if (index === 0) {
        if (!element) {
          section.style.paddingTop = `${paddingValue * 2}px`;
          return;
        }

        element.style.paddingTop = `${paddingCalculated}px`;

        if (isMinPadding) {
          section.style.paddingTop = `${(minPadding * 2) - paddingCalculated}px`;
        } else {
          section.style.paddingTop = '0px';
        }

        setPaddingBottom({
          allSection,
          section,
          index,
          element,
          paddingCalculated,
          paddingValue,
          isMinPadding,
        });
      } else if (index === allSection.length - 1) {
        setPaddingTop({
          allSection,
          section,
          index,
          element,
          paddingCalculated,
        });
      } else {
        setPaddingTop({
          allSection,
          section,
          index,
          element,
          paddingCalculated,
        });

        setPaddingBottom({
          allSection,
          section,
          index,
          element,
          paddingCalculated,
          paddingValue,
          isMinPadding,
        });
      }
    });
  }, [deviceSize]);

  function setPaddingTop({
    allSection,
    section,
    index,
    element,
    paddingCalculated,
  }: {
    allSection: AllSection;
    section: Section;
    index: number;
    element: Element | null;
    paddingCalculated: number;
  }) {
    const backPadding = getBackPaddingBottom(allSection[index - 1]);

    if (!element) {
      section.style.paddingTop = `${backPadding}px`;
      return;
    }

    const isBackMoreCurrentPadding = backPadding > paddingCalculated;

    if (isBackMoreCurrentPadding) {
      element.style.paddingTop = `${paddingCalculated}px`;
      section.style.paddingTop = `${backPadding - paddingCalculated}px`;
    } else {
      element.style.paddingTop = `${backPadding}px`;
      section.style.paddingTop = '0px';
    }
  }

  function setPaddingBottom({
    allSection,
    section,
    index,
    element,
    paddingCalculated,
    paddingValue,
    isMinPadding,
  }: {
    allSection: AllSection;
    section: Section;
    index: number;
    element: Element | null;
    paddingCalculated: number;
    paddingValue: number;
    isMinPadding: boolean;
  }) {
    const nextPadding = getNextPaddingTop(allSection[index + 1]);

    if (!element) {
      section.style.paddingBottom = `${Math.round((paddingValue + nextPadding) / 2)}px`;
      return;
    }

    const paddingBottomCalculated = Math.round((paddingCalculated + nextPadding) / 2);
    element.style.paddingBottom = `${paddingBottomCalculated}px`;

    if (isMinPadding) {
      section.style.paddingBottom = `${minPadding - paddingBottomCalculated}px`;
    } else {
      section.style.paddingBottom = '0px';
    }
  }

  function getPadding(section: Section) {
    const paddingTopPx = section.style.paddingTop;
    const paddingBottomPx = section.style.paddingBottom;

    const paddingTop = Number(paddingTopPx.substring(0, paddingTopPx.length - 2));
    const paddingBottom = Number(paddingBottomPx.substring(0, paddingBottomPx.length - 2));

    return {
      paddingTop,
      paddingBottom,
    };
  }

  function getNextPaddingTop(section: Section) {
    const paddingCalculated = paddingCalculate(section);

    const element = section.querySelector<Element>(ELEMENT_SELECTOR);

    if (!element) {
      const isMinPadding = minPadding > paddingCalculated;
      return isMinPadding ? minPadding : paddingCalculated;
    }

    const {
      paddingTop,
    } = getPadding(element);

    const paddingBottomCalculated = paddingCalculated + paddingTop;

    const isMinPadding = minPadding > paddingBottomCalculated;
    return isMinPadding ? minPadding : paddingBottomCalculated;
  }

  function getBackPaddingBottom(section: Section) {
    const element = section.querySelector<Element>(ELEMENT_SELECTOR);

    const { paddingBottom: sectionPaddingBottom } = getPadding(section);

    if (!element) {
      return sectionPaddingBottom;
    }

    const { paddingBottom: elementPaddingBottom } = getPadding(element);

    return sectionPaddingBottom + elementPaddingBottom;
  }
}

export default useAutoPaddings;
