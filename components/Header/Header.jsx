import React from "react";
import styles from "../../styles/Header.module.scss";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
};

export default Header;
