import { BUSINESS } from "@/utils/constants";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <footer id="footer" className="footer md-pb-70">
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <img src="images/logo.png" alt="logo" />
                  </div>
                  <ul>
                    <li>
                      <p>
                        Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001
                      </p>
                    </li>
                    <li>
                      <p>
                        Email: <a href="#">info@fashionshop.com</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Phone: <a href="#">(212) 555-1234</a>
                      </p>
                    </li>
                  </ul>
                  <a href="contact-1.html" className="tf-btn btn-line">
                    Dirección<i className="icon icon-arrow1-top-left"></i>
                  </a>
                  <ul className="tf-social-icon d-flex gap-10">
                    {BUSINESS.contact.socials.map((social) => (
                      <Link
                        key={social.name}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={social.url}
                        className="box-icon w_34 round social-line"
                      >
                        <i className={`icon fs-14 ${social.icon}`}></i>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Mapa del Sitio</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Help</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  <li>
                    <a href="privacy-policy.html" className="footer-menu_item">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="delivery-return.html" className="footer-menu_item">
                      {" "}
                      Returns + Exchanges{" "}
                    </a>
                  </li>
                  <li>
                    <a href="shipping-delivery.html" className="footer-menu_item">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="terms-conditions.html" className="footer-menu_item">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="faq-1.html" className="footer-menu_item">
                      FAQ’s
                    </a>
                  </li>
                  <li>
                    <a href="compare.html" className="footer-menu_item">
                      Compare
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html" className="footer-menu_item">
                      My Wishlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © {new Date().getFullYear()} {BUSINESS.fullName}. Todos los derechos reservados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
