import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Logo from "../../public/header/navbar-logo.png";
import styles from "../../styles/Header.module.scss";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className={`${styles.nav} d-none d-lg-block `}>
      <div className={`${styles.container} container `}>
        <Row className="p-4 d-flex align-items-center">
          <Col className="logo p-0 d-flex align-items-center" lg={2}>
            <Image src={Logo} alt="Logo" width={120} height={36} />
          </Col>
          <Col className="d-lg-block d-none" lg={8}>
            <ul className="m-0 d-flex justify-content-between align-items-center">
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
              <Link href="#about">
                <a className={styles.link}>About</a>
              </Link>
              <Link href="#services">
                <a className={styles.link}>Services</a>
              </Link>
              <Link href="#work">
                <a className={styles.link}>Work</a>
              </Link>
              <Link href="#team">
                <a className={styles.link}>Team</a>
              </Link>
              <Link href="#contact">
                <a className={styles.link}>Contact</a>
              </Link>
              <Link href="#contact">
                <a className={styles.link}>
                  <button className="emptyButton">Get a quote</button>
                </a>
              </Link>
            </ul>
          </Col>
          <Col className="d-lg-block d-none" lg={2}>
            <ul className="m-0 px-2 d-flex justify-content-between align-items-center">
              <Link href="/facebook">
                <a className="px-1">
                  <BsFacebook className={`${styles.icon} ${styles.icon__fb}`} />
                </a>
              </Link>
              <Link href="/twitter">
                <a className="px-1">
                  <BsTwitter className={`${styles.icon} ${styles.icon__tw}`} />
                </a>
              </Link>
              <Link href="/youtube">
                <a className="px-1">
                  <BsYoutube className={`${styles.icon} ${styles.icon__yt}`} />
                </a>
              </Link>
              <Link href="/instagram">
                <a className="px-1">
                  <BsInstagram
                    className={`${styles.icon} ${styles.icon__in}`}
                  />
                </a>
              </Link>
            </ul>
          </Col>
        </Row>
      </div>
    </nav>
  );
};

export default Navbar;
