type HeaderLink = {
  id: number;
  name: string;
  link: string;
};

export type HeaderNavigationItem = HeaderLink & {
  navItems: HeaderLink[];
};

export type HeaderRedesignProps = {
  navigationLists: HeaderNavigationItem[];
  button: {
    label: string;
  };
  email: {
    caption: string;
    address: string;
  };
  socialLinks: HeaderLink[];
};
