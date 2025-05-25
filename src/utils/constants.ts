import { MenuItem } from "./types";

export const BUSINESS = {
  name: "Pijamas Sonia",
  fullName: "Inversiones Sonia Ferrer",
  contact: {
    phone: "993 188 303",
    socials: [
      {
        name: "whatsapp",
        icon: "icon-whatsapp",
        text: "993 188 303",
        url: "https://wa.me/51993188303?text=Estoy%20buscando%20pijamas",
      },
      {
        name: "tiktok",
        icon: "icon-tiktok",
        text: "@pijamassonia",
        url: "https://www.tiktok.com/@pijamassonia",
      },
    ],
  },
  stores: [
    {
      mallName: "Galería Centro Gamarra",
      address: "Prolg. Gamarra Nº 700",
      shops: ["Tienda 212"],
    },
    {
      mallName: "Galería Guizado",
      address: "Prolg. Gamarra Nº 654",
      shops: ["Tienda 211 - 2º piso", "Tienda 315 - 3º piso"],
    },
  ],
};

export const MENU_LINKS: MenuItem[] = [
  {
    id: "home-menu",
    name: "Inicio",
    url: "/",
  },
  {
    id: "products-menu",
    name: "Productos",
    url: "/productos",
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
