type SubMenuItem = {
  id: string;
  name: string;
  url: string;
};

export type MenuItem = SubMenuItem & {
  subMenu?: SubMenuItem[];
};
