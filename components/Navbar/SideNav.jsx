import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/header/navbar-logo.png";
import { Row } from "react-bootstrap";
import styles from "../../styles/SideNav.module.scss";

const SideNav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row className="">
        <div
          className={`${styles.menuBar} d-flex justify-content-between align-items-center`}
        >
          <div>
            <i
              className={`${styles.openIcon} bi bi-menu-down p-3`}
              onClick={() => {
                setVisible(true);
              }}
            ></i>
          </div>
          <Image
            src={Logo}
            alt="Logo"
            max-width={120}
            max-height={36}
            className="text-center"
          />
        </div>
      </Row>
      <aside
        className={`d-block d-lg-none ${styles.navbar} ${
          !visible ? styles.hidden : ""
        }`}
      >
        <div className={styles.sidenav}>
          <i
            className={`${styles.closeIcon} bi bi-x-square p-3`}
            onClick={() => {
              setVisible(false);
            }}
          ></i>
          <ul className="list-group p-3">
            <Link href={"/"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                {" "}
                Home
              </a>
            </Link>
            <Link href={"#about"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                About
              </a>
            </Link>
            <Link href={"#services"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Services
              </a>
            </Link>
            <Link href={"#work"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Work
              </a>
            </Link>
            <Link href={"#team"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Team
              </a>
            </Link>
            <Link href={"#contact"}>
              <a
                className={`${styles.link} py-1`}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Contact
              </a>
            </Link>
            <button className="fullButton">
              <Link href={"#contact"}>
                <a
                  className={`${styles.link} py-1`}
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  Get a quote
                </a>
              </Link>
            </button>
          </ul>
          <hr />
          <ul className="m-0 px-2 d-flex justify-content-between align-items-center">
            <Link href="/facebook">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <i
                  className={`bi bi-facebook ${styles.icon} ${styles.icon__fb}`}
                ></i>
              </a>
            </Link>
            <Link href="/twitter">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <i
                  className={`bi bi-twitter ${styles.icon} ${styles.icon__tw}`}
                ></i>
              </a>
            </Link>
            <Link href="/youtube">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <i
                  className={`bi bi-youtube ${styles.icon} ${styles.icon__yt}`}
                ></i>
              </a>
            </Link>
            <Link href="/instagram">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <i
                  className={`bi bi-instagram ${styles.icon} ${styles.icon__in}`}
                ></i>
              </a>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
