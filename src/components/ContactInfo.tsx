import { BUSINESS } from "@/utils/constants";
import { FC, Fragment } from "react";

const ContactInfo: FC = ({}) => {
  return (
    <section className="flat-spacing-20">
      <div className="container">
        <div className="tf-grid-layout gap30 lg-col-2">
          <div className="tf-content-left">
            <h5 className="mb_20">Visita nuestras tiendas</h5>
            {BUSINESS.stores.map((store) => (
              <div className="mb_20" key={store.mallName}>
                <p>
                  <strong>{store.mallName}</strong>
                </p>
                <p>
                  {store.address}
                  {store.shops.map((shop) => (
                    <Fragment key={shop.id}>
                      <br />
                      {shop.name}
                    </Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="tf-content-right">
            <h5 className="mb_20">Horario de atención</h5>
            <div className="mb_20">
              {BUSINESS.stores[0].shops[0].businessHours.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
            </div>
            <h5 className="mb_20">Estemos en contacto</h5>
            <p className="mb_24">
              Si estás interesado en comprar una pijama o en realizar ventas al por mayor, ¡contáctanos!
            </p>
              <div className="mb_20">
                <p>
                  <strong>Celular</strong>
                </p>
                <a href={`tel:${BUSINESS.contact.phone}`}>{BUSINESS.contact.phone}</a>
              </div>
              {BUSINESS.contact.socials.map((social) => (
                <div className="mb_20" key={social.name}>
                  <p>
                    <strong>{social.name}</strong>
                  </p>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.text}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
