import React from "react";
import Arrow from "../../public/service/arrow.png";
import Image from "next/image";
import styles from "../../styles/ServiceCard.module.scss";
const Card = (props) => {
  return (
    <div>
      <div
        className={`${styles.card}  d-flex flex-column justify-content-center align-items-center p-2 p-sm-3`}
      >
        <Image src={props.src} alt="Service icon" width={80} height={80} />
        <h5 className={`${styles.h5} text-center p-3 mt-3`}>{props.title}</h5>
        <p className={`${styles.paragraph} text-center pb-2`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          asperiores dolore quam aut, labore autem!
        </p>
        <Image src={Arrow} alt="An arrow." width={42} height={26} />
      </div>
    </div>
  );
};

export default Card;
