import { MENU_LINKS } from "@/utils/constants";
import Link from "next/link";
import { FC } from "react";

const BurgerMenu: FC = ({}) => {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {MENU_LINKS.map(link => (
              <li className="nav-mb-item" key={link.id}>
                <Link
                  href={link.url ?? `#${link.id}`}
                  className={`mb-menu-link ${link.subMenu ? "collapsed current" : ""}`}
                  {...(link.subMenu && {
                    "data-bs-toggle": "collapse",
                    "aria-expanded": "true",
                    "aria-controls": link.id
                  })}
                >
                  <span>{link.name}</span>
                  {link.subMenu && <span className="btn-open-sub" />}
                </Link>
                {link.subMenu && (
                  <div id={link.id} className="collapse">
                    <ul className="sub-nav-menu">
                      {link.subMenu.map(menu => (
                        <li key={menu.id}>
                          <Link href={menu.url} className="sub-nav-link">
                            {menu.name}
                          </Link>
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
              <a href="contact-1.html" className="text-need">
                Visita nuestras tiendas
              </a>
            </div>
            <ul className="mb-info">
              <li>
                Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001
              </li>
              <li>
                Email: <b>info@fashionshop.com</b>
              </li>
              <li>
                Phone: <b>(212) 555-1234</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
