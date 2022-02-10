import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/header/navbar-logo.png";
import { Row } from "react-bootstrap";
import styles from "../../styles/SideNav.module.scss";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsMenuUp,
  BsBoxArrowLeft,
} from "react-icons/bs";

const SideNav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row className="">
        <div
          className={`${styles.menuBar} d-flex justify-content-between align-items-center`}
        >
          <div>
            <BsMenuUp
              className={`${styles.openIcon} p-2 mt-2 ms-2`}
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>
          <Image
            src={Logo}
            alt="Logo"
            width={120}
            height={36}
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
          <div>
            <BsBoxArrowLeft
              className={`${styles.closeIcon} p-2 mt-2 ms-2`}
              onClick={() => {
                setVisible(false);
              }}
            />
          </div>
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
                <BsFacebook className={`${styles.icon} ${styles.icon__fb}`} />
              </a>
            </Link>
            <Link href="/twitter">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <BsTwitter className={`${styles.icon} ${styles.icon__tw}`} />
              </a>
            </Link>
            <Link href="/youtube">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <BsYoutube className={`${styles.icon} ${styles.icon__yt}`} />
              </a>
            </Link>
            <Link href="/instagram">
              <a
                className="px-1"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <BsInstagram className={`${styles.icon} ${styles.icon__in}`} />
              </a>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
