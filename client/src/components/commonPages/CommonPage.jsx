import React from "react";
import { Link } from "react-router-dom";

const CommonPage = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                    <strong className="brand-name">𝓗𝓪𝓶𝓻𝓸 𝓢𝓱𝓸𝓹</strong>
                  </h1>
                  <p className="my-3">{props.description}</p>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn-get-started">
                      {props.btnHome}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.homeImg}
                    alt="homeImg"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPage;
