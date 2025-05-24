import { MenuItem } from "./types";

export const BUSINESS = {
  name: "Pijamas Sonia",
  fullName: "Inversiones Sonia Ferrer",
  contact: {
    phone: "993 188 303",
    whatsapp: {
      name: "993 188 303",
      url: "https://wa.me/51993188303?text=Estoy%20buscando%20pijamas",
    },
    tiktok: {
      name: "@pijamassonia",
      url: "https://www.tiktok.com/@pijamassonia",
    }
  },
  stores: [{

  }]
}

export const MENU_LINKS: MenuItem[] = [
  {
    id: "home-menu",
    name: "Inicio",
    url: "/",
  },
  {
    id: "products-menu",
    name: "Productos",
    subMenu: [
      {
        id: "men-products-menu",
        name: "Hombres",
        url: "/products?filter=hombres",
      },
      {
        id: "women-products-menu",
        name: "Mujeres",
        url: "/products?filter=mujeres",
      },
      {
        id: "kids-products-menu",
        name: "Niños",
        url: "/products?filter=ninos",
      },
    ],
  },
  {
    id: "us-menu",
    name: "Nosotros",
    url: "/nosotros",
  },
  {
    id: "contact-menu",
    name: "Contacto",
    url: "/contacto",
  },
];