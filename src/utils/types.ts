import { GENDERS, MATERIALS } from "./constants";

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
  description: string;
  features?: string[];
  slug: string;
  price: number;
  gender: (typeof GENDERS)[keyof typeof GENDERS];
  material: (typeof MATERIALS)[keyof typeof MATERIALS];
  mainImage: string;
  hoverImage: string;
  sizes: string[];
  colors: {
    name: string;
    value: string;
    image: string;
  }[];
};
