import qs from 'qs';
import { cmsFetch } from "./http-client";
import {
  FooterNavigationItem,
  HeaderNavigationItem,
  LayoutData,
  LayoutResponse,
  NavigationLink,
} from '../../../common/types';

export async function getLayoutData(locale: string): Promise<LayoutData> {
  const queryParams = {
    populate: [
      `header.socialLinks`,
      `header.navigationLists`,
      `header.navigationLists.navItems`,
      `footer.navigationLists`,
      `footer.navigationLists.links`,
      `footer.navigationLists.socialLinks`,
    ],
    locale,
  };

  const layoutResponse = await cmsFetch<LayoutResponse>(`/layout?${qs.stringify(queryParams)}`);

  const {
    headerContent,
    footerContent,
  } = mapLayoutResponse(layoutResponse);

  return {
    headerContent,
    footerContent,
  };
}

function mapLayoutResponse(response: LayoutResponse | null): LayoutData {
  if (!response?.data) {
    return {
      headerContent: {
        buttonLabel: ``,
        emailCaption: ``,
        emailAddress: ``,
        navigationLists: [],
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
      navigationLists: header?.navigationLists as HeaderNavigationItem[],
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
