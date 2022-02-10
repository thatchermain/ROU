import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
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
          width={270}
          height={312}
          className={`${styles.image}`}
        />
        <div
          className={`${styles.overlay} d-flex flex-column justify-content-around`}
        >
          <Link href="/facebook">
            <a className={`${styles.link} p-2`}>
              <BsFacebook className={styles.icon} />
            </a>
          </Link>

          <Link href="/instagram">
            <a className={`${styles.link} p-2`}>
              <BsInstagram className={styles.icon} />
            </a>
          </Link>
          <Link href="/twitter">
            <a className={`${styles.link} p-2`}>
              <BsTwitter className={styles.icon} />
            </a>
          </Link>
        </div>
      </div>
      <h5 className={`${styles.name} text-center pt-4`}>{props.name}</h5>
      <h5 className={`${styles.title} text-center pt-2`}>{props.title}</h5>
    </div>
  );
};

export default TeamCard;
