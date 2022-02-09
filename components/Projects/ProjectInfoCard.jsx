import React from "react";
import styles from "../../styles/ProjectInfoCard.module.scss";
const ProjectInfoCard = (props) => {
  return (
    <div className="py-3">
      <h3 className={`${styles.h3} py-2`}>{props.title}</h3>
      <h2 className={`${styles.h2} py-2`}>{props.description}</h2>
      <p className={`${styles.paragraph} py-2`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quas
        harum accusamus blanditiis, architecto voluptatem ad numquam laudantium
        tempora quae veritatis alias ullam dolores sapiente?
      </p>
      <button className={`emptyButton my-3`}>View Project</button>
    </div>
  );
};

export default ProjectInfoCard;
