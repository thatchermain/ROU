import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Service.module.scss";

import Camera from "../../public/service/camera.png";
import Cart from "../../public/service/cart.png";
import Phones from "../../public/service/phones.png";
import Placeholder from "../../public/service/placeholder.png";
import Squares from "../../public/service/squares.png";
import Upload from "../../public/service/upload.png";
import Card from "./Card";
const Service = () => {
  return (
    <div>
      <section id="services" className={`${styles.services}  pt-5`}>
        <div className={`${styles.wrapper} mx-auto`}>
          <h4 className={`${styles.h4}  text-center py-5`}>what we do</h4>
          <h1 className={`${styles.h1}  text-center `}>
            Service to solve all kind of business problems
          </h1>
        </div>
        <div className="container-xl  py-5 mt-5 ">
          <Row className="d-flex justify-content-center align-align-items-center">
            <Col lg={4} md={5} className="d-flex justify-content-center">
              <Card src={Squares} title={"Business Automation"} />
            </Col>
            <Col lg={4} md={5} className="d-flex justify-content-center">
              <Card src={Cart} title={"E-commerce Support"} />
            </Col>
            <Col lg={4} md={5} className="d-flex justify-content-center">
              <Card src={Camera} title={"Video Production"} />
            </Col>
            <Col lg={4} md={5} className="d-flex justify-content-center">
              <Card src={Phones} title={"Realtime Support"} />
            </Col>
            <Col lg={4} md={5} className="d-flex justify-content-center">
              <Card src={Placeholder} title={"Location Marking"} />
            </Col>
            <Col lg={4} md={5} className="d-flex justify-content-center">
              <Card src={Upload} title={"File Upload"} />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Service;
