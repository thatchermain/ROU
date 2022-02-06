import Image from "next/image";
import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
import Logo from "../../public/header/navbar-logo.png";
import styles from "../../styles/Header.module.scss";
const Navbar = () => {
  return (
    <div>
      <div className={`${styles.container} container`}>
        <Row className="p-4 d-flex align-items-center">
          <Col className="logo p-0 d-flex align-items-center" lg={2}>
            <Image src={Logo} alt="Logo" max-width={120} max-height={36} />
          </Col>
          <Col className="d-block" lg={8}>
            <ul className="m-0 d-flex justify-content-between align-items-center">
              <Link href="./">
                <a className={styles.link}>Home</a>
              </Link>
              <Link href="./">
                <a className={styles.link}>About</a>
              </Link>
              <Link href="./">
                <a className={styles.link}>Service</a>
              </Link>
              <Link href="./">
                <a className={styles.link}>Works</a>
              </Link>
              <Link href="./">
                <a className={styles.link}>News</a>
              </Link>
              <Link href="./">
                <a className={styles.link}>Contact</a>
              </Link>
              <button className={styles.button}>Get A Quote</button>
            </ul>
          </Col>
          <Col className="d-block" lg={2}>
            <ul className="m-0 px-2 d-flex justify-content-between align-items-center">
              <Link href="./">
                <a className="px-1">
                  <i
                    className={`bi bi-facebook ${styles.icon} ${styles.icon__fb}`}
                  ></i>
                </a>
              </Link>
              <Link href="./">
                <a className="px-1">
                  <i
                    className={`bi bi-twitter ${styles.icon} ${styles.icon__tw}`}
                  ></i>
                </a>
              </Link>
              <Link href="./">
                <a className="px-1">
                  <i
                    className={`bi bi-youtube ${styles.icon} ${styles.icon__yt}`}
                  ></i>
                </a>
              </Link>
              <Link href="./">
                <a className="px-1">
                  <i
                    className={`bi bi-instagram ${styles.icon} ${styles.icon__in}`}
                  ></i>
                </a>
              </Link>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Navbar;
