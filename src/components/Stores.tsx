"use client";

import useBreakpoints from "@/hooks/useBreakPoints";
import { SHOPS } from "@/utils/constants";
import clsx from "clsx";
import { FC } from "react";

const Stores: FC = ({}) => {
  const { isSm } = useBreakpoints();

  return (
    <section className="flat-spacing-9 pb_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Visítanos en nuestras tiendas</span>
        </div>
        <div className="flat-tab-store flat-animate-tab">
          <ul className="widget-tab-2" role="tablist">
            {SHOPS.map((shop, index) => (
              <li className="nav-tab-item" role="presentation" key={shop.id}>
                <a href={`#${shop.id}`} className={index === 0 ? "active" : ""} data-bs-toggle="tab">
                  {shop.nickname}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {SHOPS.map((shop, index) => (
              <div
                className={clsx("tab-pane", { "active show": index === 0 || isSm })}
                id={shop.id}
                role="tabpanel"
                key={shop.id}
              >
                <div className="widget-card-store align-items-center tf-grid-layout md-col-2">
                  <div className="store-item-info">
                    <h5 className="store-heading">{shop.mallName}</h5>
                    <div className="description">
                      <p>{shop.address}</p>
                      <p>
                        {shop.businessHours.map((hour) => (
                          <span key={hour}>{hour}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="store-img">
                    <img className="lazyload" data-src={shop.image} src={shop.image} alt="store-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
