import React from "react";
import styles from "../../styles/TestimonialCard.module.scss";

const TestimonialCard = (props) => {
  return (
    <div className={`${styles.card} p-3`}>
      <h3 className={`${styles.h3} py-2`}>TESTIMONIAL</h3>
      <h2 className={`${styles.h2} py-2`}>{props.description}</h2>
      <p className={`${styles.paragraph} py-2`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit
        doloremque quaerat veritatis enim ex. Asperiores tempore quam nesciunt,
        harum id quod velit libero eius deserunt praesentium corrupti optio
        sequi est, odio illo officia facilis porro iusto autem veniam
        perferendis?
      </p>
      <h5 className={`${styles.h5} py-2`}>{props.name}</h5>
      <span className={`${styles.span} py-2`}>{props.job}</span>
    </div>
  );
};

export default TestimonialCard;
