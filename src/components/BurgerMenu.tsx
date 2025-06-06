import { BUSINESS, MENU_LINKS } from "@/utils/constants";
import { FC, Fragment } from "react";

const BurgerMenu: FC = ({}) => {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {MENU_LINKS.map((link) => (
              <li className="nav-mb-item" key={link.id}>
                <a
                  href={link.subMenu ? `#${link.id}` : link.url}
                  className={`mb-menu-link ${link.subMenu ? "collapsed current" : ""}`}
                  {...(link.subMenu && {
                    "data-bs-toggle": "collapse",
                    "aria-expanded": "true",
                    "aria-controls": link.id,
                  })}
                >
                  <span>{link.name}</span>
                  {link.subMenu && <span className="btn-open-sub" />}
                </a>
                {link.subMenu && (
                  <div id={link.id} className="collapse">
                    <ul className="sub-nav-menu">
                      {link.subMenu.map((menu) => (
                        <li key={menu.id}>
                          <a href={menu.url} className="sub-nav-link">
                            {menu.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="mb-other-content">
            <div className="mb-notice">
              <a href="/contacto" className="text-need">
                Visita nuestras tiendas
              </a>
            </div>
            <ul className="mb-info">
              {BUSINESS.stores.map((store) => (
                <li key={store.mallName}>
                  <strong>{store.mallName}</strong>
                  <br />
                  {store.address}
                  {store.shops.map((shop) => (
                    <Fragment key={shop.name}>
                      <br />
                      <p>{shop.name}</p>
                    </Fragment>
                  ))}
                  <br />
                </li>
              ))}
            </ul>
            <p className="mb_4">
              Celular: <b>{BUSINESS.contact.phone}</b>
            </p>
            <ul className="tf-social-icon d-flex gap-20 style-default">
              {BUSINESS.contact.socials.map((social) => (
                <li key={social.url}>
                  <a
                    title={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="box-icon link round social-facebook border-line-black"
                  >
                    <i className={`icon fs-14 ${social.icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
