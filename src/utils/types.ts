type SubMenuItem = {
  id: string;
  name: string;
  url: string;
};

export type MenuItem = SubMenuItem & {
  subMenu?: SubMenuItem[];
};

export type Product = {
  id: number;
  disabled?: boolean;
  favorite?: boolean;
  name: string;
  price: string;
  mainImage: string;
  hoverImage: string;
  sizes: string[];
  colors: {
    name: string;
    value: string;
    image: string;
  }[];
};