import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import styles from "../../styles/Header.module.scss";
import Hero from "../../public/header/hero.png";
const Header = () => {
  return (
    <div className={`${styles.header} `}>
      <Navbar />
      <div className={`${styles.hero}  mt-5 `}>
        <Row className="text-center">
          <Col
            className="d-flex flex-column justify-content-evenly align-items-center mx-auto px-5 py-5"
            xl={5}
            lg={6}
            md={8}
          >
            <h1 className={`${styles.h1}`}>
              Work Smart with Endless Possibilities
            </h1>
            <h4 className={`${styles.h4} my-4 my-lg-0`}>
              Consectetur adipisicing elit. Similique hic assumenda molestias
              provident.{" "}
            </h4>
            <button className={styles.heroBtn}>Get Started</button>
          </Col>
          <Col
            className={`${styles.image} mx-auto py-5 py-lg-0`}
            xl={7}
            lg={6}
            sm={8}
          >
            <div className="">
              <Image
                src={Hero}
                alt="Hero"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
