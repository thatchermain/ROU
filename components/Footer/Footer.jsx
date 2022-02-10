import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../../public/header/navbar-logo.png";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <div className="container">
        <Row className="mx-auto">
          <Col lg={4} md={6} className="p-5">
            <Image src={Logo} alt="Logo" width={120} height={36}></Image>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ut sint quasi ipsa, nobis mollitia excepturi dolores
              voluptatem aspernatur ex optio quam!
            </p>
          </Col>
          <Col lg={4} md={6} className="p-5 d-flex justify-content-around">
            <div className={styles.info}>
              <div className={styles.infoTitle}>About</div>
              <div className={`${styles.infoLinks} py-3 d-flex flex-column`}>
                <Link href="/about_us">
                  <a className={styles.infoLink}>About Us</a>
                </Link>
                <Link href="/our_story">
                  <a className={styles.infoLink}>Our Story</a>
                </Link>
                <Link href="/success">
                  <a className={styles.infoLink}>Success</a>
                </Link>
                <Link href="/support">
                  <a className={styles.infoLink}>Support</a>
                </Link>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoTitle}>Service</div>
              <div className={`${styles.infoLinks} py-3 d-flex flex-column`}>
                <Link href="/development">
                  <a className={styles.infoLink}>Development</a>
                </Link>
                <Link href="/maintenance">
                  <a className={styles.infoLink}>Maintenance</a>
                </Link>
                <Link href="/consultancy">
                  <a className={styles.infoLink}>Consultancy</a>
                </Link>
                <Link href="/design">
                  <a className={styles.infoLink}>Design</a>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} className="p-5">
            <div className={styles.info}>
              <h6 className={styles.infoTitle}>ROU 2022</h6>
              <h6>All rights reserved</h6>
              <hr />
              <p>Follow Us</p>
              <div>
                <ul className="m-0 px-2 d-flex justify-content-between align-items-center">
                  <Link href="/facebook">
                    <a className="px-1">
                      <i
                        className={`bi bi-facebook ${styles.icon} ${styles.icon__fb}`}
                      ></i>
                    </a>
                  </Link>
                  <Link href="/twitter">
                    <a className="px-1">
                      <i
                        className={`bi bi-twitter ${styles.icon} ${styles.icon__tw}`}
                      ></i>
                    </a>
                  </Link>
                  <Link href="/youtube">
                    <a className="px-1">
                      <i
                        className={`bi bi-youtube ${styles.icon} ${styles.icon__yt}`}
                      ></i>
                    </a>
                  </Link>
                  <Link href="/instagram">
                    <a className="px-1">
                      <i
                        className={`bi bi-instagram ${styles.icon} ${styles.icon__in}`}
                      ></i>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
