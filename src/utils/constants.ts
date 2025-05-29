import { MenuItem } from "./types";

export const BUSINESS = {
  name: "Pijamas Sonia",
  fullName: "Inversiones Sonia Ferrer",
  contact: {
    phone: "993 188 303",
    socials: [
      {
        name: "Whatsapp",
        icon: "icon-whatsapp",
        text: "993 188 303",
        url: "https://wa.me/51993188303?text=Estoy%20buscando%20pijamas",
      },
      {
        name: "Tiktok",
        icon: "icon-tiktok",
        text: "@pijamassonia",
        url: "https://www.tiktok.com/@pijamassonia",
      },
    ],
  },
  stores: [
    {
      mallName: "Galería Guizado",
      address: "Prolg. Gamarra Nº 654",
      lat: -12.064724946001478,
      lng: -77.0139742796159,
      shops: [
        {
          id: "store-1",
          name: "Tienda 211, Int. 5, 2º piso",
          nickname: "Guizado",
          image: "images/stores/store1.jpeg",
          businessHours: ["Lunes a Sábados, 10:00am - 07:30pm", "Domingos no atendemos"],
        },
      ],
    },
    {
      mallName: "Galería Centro Gamarra",
      address: "Prolg. Gamarra Nº 700",
      lat: -12.065270652720251,
      lng: -77.01351825408436,
      shops: [
        {
          id: "store-2",
          name: "Tienda 212, 2º piso",
          nickname: "Centro Gamarra",
          image: "images/stores/store2.jpeg",
          businessHours: ["Lunes a Sábados, 10:00am - 07:30pm", "Domingos no atendemos"],
        },
      ],
    },
    {
      mallName: "Galería El Rey",
      address: "Jr. Sebastián Barranca Nº 1575",
      lat: -12.0627339919957,
      lng: -77.01423985266548,
      shops: [
        {
          id: "store-3",
          name: "Tienda 108C, Sótano",
          nickname: "El Rey",
          image: "images/stores/store1.jpeg",
          businessHours: ["Lunes a Sábados, 10:00am - 07:30pm", "Domingos no atendemos"],
        },
      ],
    },
    {
      mallName: "Galería Unicachi",
      address: "Prolg. Huánuco Nº 1568",
      lat: -12.063400572789968,
      lng: -77.01547376842302,
      shops: [
        {
          id: "store-4",
          name: "Tienda 123",
          nickname: "Unicachi",
          image: "images/stores/store2.jpeg",
          businessHours: ["Lunes a Sábados, 10:00am - 07:30pm", "Domingos no atendemos"],
        },
      ],
    },
  ],
};

export const SHOPS = BUSINESS.stores.flatMap((store) =>
  store.shops.map((shop) => ({
    ...shop,
    mallName: store.mallName,
    address: store.address,
  })),
);

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

export const COLORS = {
  pink: {
    name: "Rosado",
    value: "bg_rosado",
  },
  lilac: {
    name: "Lila",
    value: "bg_lila",
  },
  melon: {
    name: "Melón",
    value: "bg_melon",
  },
  waterGreen: {
    name: "Verde Agua",
    value: "bg_verdeAgua",
  },
  bubblegum: {
    name: "Chicle",
    value: "bg_chicle",
  },
  limeGreen: {
    name: "Verde Limón",
    value: "bg_verdeLimon",
  },
  italianBlue: {
    name: "Azul Italiano",
    value: "bg_azulItaliano",
  },
  lead: {
    name: "Plomo",
    value: "bg_plomo",
  },
  steel: {
    name: "Acero",
    value: "bg_acero",
  },
  corn: {
    name: "Maíz",
    value: "bg_maiz",
  },
  skyBlue: {
    name: "Celeste",
    value: "bg_celeste",
  },
  antike: {
    name: "Antike",
    value: "bg_antike",
  },
  blue: {
    name: "Azul",
    value: "bg_azul",
  },
  leaf: {
    name: "Hoja",
    value: "bg_hoja",
  },
  azuline: {
    name: "Azulino",
    value: "bg_azulino",
  },
  coral: {
    name: "Coral",
    value: "bg_coral",
  },
  barnie: {
    name: "Barnie",
    value: "bg_barnie",
  },
  turquoise: {
    name: "Turquesa",
    value: "bg_turquesa",
  },
  maroon: {
    name: "Guinda",
    value: "bg_guinda",
  },
  militaryGreen: {
    name: "Verde Militar",
    value: "bg_verdeMilitar",
  },
  fuchsia: {
    name: "Fucsia",
    value: "bg_fucsia",
  },
  white: {
    name: "Blanco",
    value: "bg_blanco",
  },
  wine: {
    name: "Vino",
    value: "bg_vino",
  },
  rosewood: {
    name: "Palo Rosa",
    value: "bg_paloRosa",
  },
};
