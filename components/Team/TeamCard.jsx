import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/TeamCard.module.scss";
const TeamCard = (props) => {
  return (
    <div
      className={`${styles.card} "d-flex flex-column justify-content-between align-items-center py-3 mb-5"`}
    >
      <div className={`${styles.imageWrapper}`}>
        <Image
          src={props.src}
          alt={props.title}
          className={`${styles.image}`}
        />
        <div
          className={`${styles.overlay} d-flex flex-column justify-content-around`}
        >
          <Link href="/">
            <a className="px-1">
              <i
                className={`bi bi-facebook ${styles.icon} ${styles.icon__in}`}
              ></i>
            </a>
          </Link>
          <Link href="/">
            <a className="px-1">
              <i
                className={`bi bi-instagram ${styles.icon} ${styles.icon__in}`}
              ></i>
            </a>
          </Link>
          <Link href="/">
            <a className="px-1">
              <i
                className={`bi bi-twitter ${styles.icon} ${styles.icon__in}`}
              ></i>
            </a>
          </Link>
        </div>
      </div>
      <h4 className={`${styles.name} text-center pt-4`}>{props.name}</h4>
      <h4 className={`${styles.title} text-center pt-2`}>{props.title}</h4>
    </div>
  );
};

export default TeamCard;
