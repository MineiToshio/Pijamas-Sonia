import { FC } from "react";

const NotFound: FC = ({}) => {
  return (
    <section className="page-404-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="image">
              <img src="/images/item/404.svg" alt="" />
            </div>
            <div className="title">Oops... Esta página no existe.</div>
            <p>Disculpe las molestias. Vaya a nuestra página principal o vea nuestro catálogo de productos.</p>
            <a href="/productos" className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
              Nuestros Productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
