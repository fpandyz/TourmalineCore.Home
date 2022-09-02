import { useEffect, useCallback } from 'react';
import useMinPadding from './useMinPadding';
import useDeviceSize from './useDeviceSize';

type Section = HTMLElement;
type Element = HTMLElement;

const SECTION_SELECTOR = 'section[data-auto-padding]';
const ELEMENT_SELECTOR = 'div[name]';

function useAutoPaddings() {
  const deviceSize = useDeviceSize();
  const minPadding = useMinPadding();

  const calculatePadding = useCallback((section: Section) => {
    const {
      paddingTop,
      paddingBottom,
    } = getPadding(section);

    const screenHeight = deviceSize.height;
    const elementHeight = section.clientHeight - paddingTop - paddingBottom;

    const differenceHeight = screenHeight - elementHeight;
    return differenceHeight > 0 ? Math.round(differenceHeight / 2) : 0;
  }, [deviceSize]);

  useEffect(() => {
    const allSections: NodeListOf<Section> = document.querySelectorAll(SECTION_SELECTOR);

    allSections.forEach((section, index) => {
      const element = section.querySelector<Element>(ELEMENT_SELECTOR);

      if (element) {
        element.style.paddingTop = '0px';
        element.style.paddingBottom = '0px';
      }

      const calculatedPadding = calculatePadding(section);

      const isMinPadding = minPadding > calculatedPadding;
      const paddingValue = isMinPadding ? minPadding : calculatedPadding;

      const isNotLastSection = index < allSections.length - 1;
      const firstSection = index === 0;

      if (isNotLastSection) {
        setPaddingBottom({
          allSections,
          section,
          index,
          element,
          calculatedPadding,
          paddingValue,
          isMinPadding,
        });
      }

      if (firstSection) {
        if (!element) {
          section.style.paddingTop = `${paddingValue}px`;
          return;
        }

        element.style.paddingTop = `${calculatedPadding}px`;
        section.style.paddingTop = `${
          isMinPadding
            ? minPadding - calculatedPadding
            : 0
        }px`;

        return;
      }

      setPaddingTop({
        allSections,
        section,
        index,
        element,
        calculatedPadding,
      });
    });
  }, [deviceSize]);

  function setPaddingTop({
    allSections,
    section,
    index,
    element,
    calculatedPadding,
  }: {
    allSections: NodeListOf<Section>;
    section: Section;
    index: number;
    element: Element | null;
    calculatedPadding: number;
  }) {
    const previousSectionPadding = getPreviousSectionPaddingBottom(allSections[index - 1]);

    if (!element) {
      section.style.paddingTop = `${previousSectionPadding}px`;
      return;
    }

    const isPreviousMoreCurrentPadding = previousSectionPadding > calculatedPadding;

    if (isPreviousMoreCurrentPadding) {
      element.style.paddingTop = `${calculatedPadding}px`;
      section.style.paddingTop = `${previousSectionPadding - calculatedPadding}px`;
    } else {
      element.style.paddingTop = `${previousSectionPadding}px`;
      section.style.paddingTop = '0px';
    }
  }

  function setPaddingBottom({
    allSections,
    section,
    index,
    element,
    calculatedPadding,
    paddingValue,
    isMinPadding,
  }: {
    allSections: NodeListOf<Section>;
    section: Section;
    index: number;
    element: Element | null;
    calculatedPadding: number;
    paddingValue: number;
    isMinPadding: boolean;
  }) {
    const nextSectionPadding = getNextSectionPaddingTop(allSections[index + 1]);

    if (!element) {
      section.style.paddingBottom = `${Math.round((paddingValue + nextSectionPadding) / 2)}px`;
      return;
    }

    const calculatedPaddingBottom = Math.round((calculatedPadding + nextSectionPadding) / 2);
    element.style.paddingBottom = `${calculatedPaddingBottom}px`;

    section.style.paddingBottom = `${
      isMinPadding
        ? minPadding - calculatedPaddingBottom
        : 0
    }px`;
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

  function getNextSectionPaddingTop(section: Section) {
    const calculatedPadding = calculatePadding(section);

    const element = section.querySelector<Element>(ELEMENT_SELECTOR);

    if (!element) {
      const isMinPadding = minPadding > calculatedPadding;
      return isMinPadding ? minPadding : calculatedPadding;
    }

    const {
      paddingTop,
    } = getPadding(element);

    const calculatedPaddingTop = calculatedPadding + paddingTop;

    const isMinPadding = minPadding > calculatedPaddingTop;
    return isMinPadding ? minPadding : calculatedPaddingTop;
  }

  function getPreviousSectionPaddingBottom(section: Section) {
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
