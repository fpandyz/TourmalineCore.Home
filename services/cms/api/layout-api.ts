import qs from 'qs';
import { cmsFetch } from "./http-client";
import {
  FooterNavigationItem,
  HeaderNavigationItem,
  HeaderRedesignProps,
  LayoutData,
  LayoutResponse,
  NavigationLink,
  NavigationListResponse,
} from '../../../common/types';

export async function getLayoutData(locale: string): Promise<LayoutData> {
  const navigationQueryParams = {
    populate: `*`,
    locale,
    filters: {
      isFirstLevelNavItem: true,
    },
    sort: `rank:asc`,
  };

  const layoutQueryParams = {
    populate: [
      `header.socialLinks`,
      `footer.navigationLists`,
      `footer.navigationLists.links`,
      `footer.navigationLists.socialLinks`,
    ],
    locale,
  };

  const [navigationResponse, layoutResponse] = await Promise.all(
    [cmsFetch<NavigationListResponse>(`/navigations?${qs.stringify(navigationQueryParams)}`), cmsFetch<LayoutResponse>(`/layout?${qs.stringify(layoutQueryParams)}`)],
  );

  const navigationLists = mapNavigationResponse(navigationResponse);

  const {
    headerContent,
    footerContent,
  } = mapLayoutResponse(layoutResponse);

  return {
    headerContent: {
      navigationLists,
      ...headerContent,
    },
    footerContent,
  };
}

function mapNavigationResponse(navigationResponse: NavigationListResponse | null) {
  if (!navigationResponse?.data) {
    return [];
  }

  return navigationResponse.data as HeaderNavigationItem[];
}

type OmitLayoutData = Omit<LayoutData, 'headerContent'> & {
  headerContent: Omit<HeaderRedesignProps, 'navigationLists'>;
};

function mapLayoutResponse(response: LayoutResponse | null): OmitLayoutData {
  if (!response?.data) {
    return {
      headerContent: {
        buttonLabel: ``,
        emailCaption: ``,
        emailAddress: ``,
        socialLinks: [],
      },
      footerContent: {
        emailCaption: ``,
        emailAddress: ``,
        navigationLists: [],
      },
    };
  }

  const {
    data,
  } = response;

  const {
    header, footer, emailAddress,
  } = data;

  return {
    headerContent: {
      buttonLabel: header?.buttonLabel ?? ``,
      emailCaption: header?.emailCaption ?? ``,
      emailAddress: emailAddress ?? ``,
      socialLinks: header?.socialLinks as NavigationLink[],
    },
    footerContent: {
      emailCaption: footer?.emailCaption ?? ``,
      emailAddress: emailAddress ?? ``,
      navigationLists: footer?.navigationLists?.map((navigation) => ({
        ...navigation,
        links: navigation.isSocialNetworks ? navigation.socialLinks : navigation.links,
      })) as FooterNavigationItem[],
    },
  };
}
