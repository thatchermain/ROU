import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import styles from "../../styles/Header.module.scss";
import Hero from "../../public/header/hero.png";
import SideNav from "../Navbar/SideNav";
import Link from "next/link";
const Header = () => {
  return (
    <div className={`${styles.header} `}>
      <Navbar />
      <SideNav />
      <div className={`${styles.hero}  mt-5 pt-5 container`}>
        <Row className="text-center pt-5 mt-lg-5">
          <Col
            className="d-flex flex-column justify-content-evenly align-items-center mx-auto  py-5"
            xl={5}
            lg={6}
            md={8}
          >
            <h1 className={`${styles.h1}`}>
              Work Smart with Endless Possibilities
            </h1>
            <h5 className={`${styles.h5} my-4 my-lg-5 py-3`}>
              Consectetur adipisicing elit. Similique hic assumenda molestias
              provident.{" "}
            </h5>
            <Link href="#about">
              <a className={styles.link}>
                <button className="fullButton">Get Started</button>
              </a>
            </Link>
          </Col>
          <Col
            className={`${styles.image} mx-auto py-5 py-lg-5 my-lg-5`}
            xl={7}
            lg={6}
            sm={8}
          >
            <div className="">
              <Image
                src={Hero}
                alt="Hero picture"
                // layout="responsive"
                // objectFit="contain"
                width={860}
                height={620}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
