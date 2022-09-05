import { useEffect, useCallback } from 'react';
import useMinPaddingBetweenSections from './useMinPadding';
import useDeviceSize from './useDeviceSize';

type Section = HTMLElement;
type Element = HTMLElement;

const SECTION_SELECTOR = 'section[data-auto-padding]';
const ELEMENT_SELECTOR = 'div[name]';

const ZERO_HTML_PADDING = '0px';

function useSectionAutoPaddings() {
  const deviceSize = useDeviceSize();
  const minPadding = useMinPaddingBetweenSections();

  const calculateRequiredCountPadding = useCallback((section: Section) => {
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
        element.style.paddingTop = ZERO_HTML_PADDING;
        element.style.paddingBottom = ZERO_HTML_PADDING;
      }

      const calculatedPadding = calculateRequiredCountPadding(section);

      const isMinPaddingMoreCalculated = minPadding > calculatedPadding;
      const paddingValue = isMinPaddingMoreCalculated ? minPadding : calculatedPadding;

      const isNotLastSection = index < allSections.length - 1;
      const isFirstSection = index === 0;

      if (isNotLastSection) {
        setPaddingBottom({
          allSections,
          section,
          index,
          element,
          calculatedPadding,
          paddingValue,
          isMinPaddingMoreCalculated,
        });
      }

      if (isFirstSection) {
        if (!element) {
          section.style.paddingTop = convertToHtmlPadding(paddingValue);
          return;
        }

        element.style.paddingTop = convertToHtmlPadding(calculatedPadding);
        section.style.paddingTop = convertToHtmlPadding(
          isMinPaddingMoreCalculated
            ? minPadding - calculatedPadding
            : 0,
        );

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
      section.style.paddingTop = convertToHtmlPadding(previousSectionPadding);
      return;
    }

    if (previousSectionPadding > calculatedPadding) {
      element.style.paddingTop = convertToHtmlPadding(calculatedPadding);
      section.style.paddingTop = convertToHtmlPadding(previousSectionPadding - calculatedPadding);
    } else {
      element.style.paddingTop = convertToHtmlPadding(previousSectionPadding);
      section.style.paddingTop = ZERO_HTML_PADDING;
    }
  }

  function setPaddingBottom({
    allSections,
    section,
    index,
    element,
    calculatedPadding,
    paddingValue,
    isMinPaddingMoreCalculated,
  }: {
    allSections: NodeListOf<Section>;
    section: Section;
    index: number;
    element: Element | null;
    calculatedPadding: number;
    paddingValue: number;
    isMinPaddingMoreCalculated: boolean;
  }) {
    const nextSectionPadding = getNextSectionPaddingTop(allSections[index + 1]);

    if (!element) {
      section.style.paddingBottom = convertToHtmlPadding(Math.round((paddingValue + nextSectionPadding) / 2));
      return;
    }

    const calculatedPaddingBottom = Math.round((calculatedPadding + nextSectionPadding) / 2);
    element.style.paddingBottom = convertToHtmlPadding(calculatedPaddingBottom);

    section.style.paddingBottom = convertToHtmlPadding(
      isMinPaddingMoreCalculated
        ? minPadding - calculatedPaddingBottom
        : 0,
    );
  }

  function getPadding(section: Section) {
    const paddingTop = convertToNumberPadding(section.style.paddingTop);
    const paddingBottom = convertToNumberPadding(section.style.paddingBottom);

    return {
      paddingTop,
      paddingBottom,
    };
  }

  function getNextSectionPaddingTop(section: Section) {
    const calculatedPadding = calculateRequiredCountPadding(section);

    const element = section.querySelector<Element>(ELEMENT_SELECTOR);

    if (!element) {
      const isMinPaddingMoreCalculated = minPadding > calculatedPadding;
      return isMinPaddingMoreCalculated ? minPadding : calculatedPadding;
    }

    const {
      paddingTop,
    } = getPadding(element);

    const calculatedPaddingTop = calculatedPadding + paddingTop;

    const isMinPaddingMoreCalculated = minPadding > calculatedPaddingTop;
    return isMinPaddingMoreCalculated ? minPadding : calculatedPaddingTop;
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

  function convertToHtmlPadding(padding: number) {
    return `${padding}px`;
  }

  function convertToNumberPadding(padding: string) {
    return Number(padding.replace('px', ''));
  }
}

export default useSectionAutoPaddings;
