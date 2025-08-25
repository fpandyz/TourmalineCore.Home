export interface LayoutData {
  headerContent: HeaderRedesignProps;
}

export interface HeaderRedesignProps {
  navigationLists: HeaderNavigationItem[];
  button: {
    label: string;
  };
  email: {
    caption: string;
    address: string;
  };
  socialLinks: HeaderLink[];
}

export interface HeaderNavigationItem extends HeaderLink {
  navItems: HeaderLink[];
}

interface HeaderLink {
  id: number;
  name: string;
  link: string;
}
