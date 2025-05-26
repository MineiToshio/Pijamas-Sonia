import { FC } from "react";

const Stores: FC = ({}) => {
  return (
    <section className="flat-spacing-9 pb_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Visitanos en nuestras tiendas</span>
        </div>
        <div className="flat-tab-store flat-animate-tab">
          <ul className="widget-tab-2" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <a href="#centro" className="active" data-bs-toggle="tab">
                Centro de gamarra
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#guizado2" data-bs-toggle="tab">
                Guizado 2º piso
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#guizado3" data-bs-toggle="tab">
                Guizado 3º piso
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="centro" role="tabpanel">
              <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">Galeria Centro de Gamarra</h5>
                  <div className="description">
                    <p>
                      Tnd 212, Prolg. Gamarra Nº 700
                      <br />
                      TikTok: pijamassonia <br />
                      (08) 8942 1299
                    </p>
                    <p>
                      Lunes a Viernes, 10:00am - 07:30pm
                      <br />
                      Sábados, 10:00am - 07:30pm <br />
                      Domingos no atendemos
                    </p>
                  </div>
                </div>
                <div className="store-img">
                  <img
                    className="lazyload"
                    data-src="images/shop/store/centro01.jpg"
                    src="images/shop/store/centro01.JPG"
                    alt="store-img"
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="guizado2" role="tabpanel">
              <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">Galeria Guizado</h5>
                  <div className="description">
                    <p>
                      Tnd 211 - 2º piso, Prolg. Gamarra Nº 654
                      <br />
                      TikTok: pijamassonia <br />
                      (08) 8942 1299
                    </p>
                    <p>
                      Lunes a Viernes, 10:00am - 07:30pm
                      <br />
                      Sábados, 10:00am - 07:30pm <br />
                      Domingos no atendemos
                    </p>
                  </div>
                </div>
                <div className="store-img">
                  <img
                    className="lazyload"
                    data-src="images/shop/store/ourstore2.png"
                    src="images/shop/store/ourstore2.png"
                    alt="store-img"
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="guizado3" role="tabpanel">
              <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">Galeria Guizado</h5>
                  <div className="description">
                    <p>
                      Tnd 315 - 3º piso, Prolg. Gamarra Nº 654
                      <br />
                      TikTok: pijamassonia <br />
                      (08) 8942 1299
                    </p>
                    <p>
                      Lunes a Viernes, 10:00am - 07:30pm
                      <br />
                      Sábados, 10:00am - 07:30pm <br />
                      Domingos no atendemos
                    </p>
                  </div>
                </div>
                <div className="store-img">
                  <img
                    className="lazyload"
                    data-src="images/shop/store/ourstore3.png"
                    src="images/shop/store/ourstore3.png"
                    alt="store-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
