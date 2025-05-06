export type SubNavItem = {
  title: string;
  href: string;
};

export type NavItem = {
  subitems?: SubNavItem[];
} & SubNavItem;
