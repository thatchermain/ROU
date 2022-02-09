import Link from "next/link";
import React from "react";
import styles from "../styles/NotFound.module.scss";

const NotFound = () => {
  return (
    <div
      className={`${styles.container} d-flex justify-content-center align-items-center my-auto`}
    >
      <div
        className={`${styles.wrapper} d-flex flex-column justify-content-between align-items-center p-5`}
      >
        <h1 className="display-1">Page Not Found.</h1>
        <h3 className="display-6 text-center py-5">
          The page You are looking for is currently under construction.
        </h3>
        <Link href="/">
          <a>
            <button className={styles.button}>Home Page</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
