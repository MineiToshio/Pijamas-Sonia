type SubMenuItem = {
  id: string;
  name: string;
  url: string;
};

export type MenuItem = {
  id: string;
  name: string;
  url?: string;
  subMenu?: SubMenuItem[];
};
