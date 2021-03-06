import React from "react";
import { Col, Row } from "react-bootstrap";
import Pink from "../../public/projects/pink.png";
import Blue from "../../public/projects/blue.png";
import Yellow from "../../public/projects/yellow.png";

import styles from "../../styles/Projects.module.scss";
import ProjectInfoCard from "./ProjectInfoCard";
import Image from "next/image";
const Projects = () => {
  return (
    <section id="work" className="pt-5">
      <div className={`${styles.wrapper} mx-auto container`}>
        <h4 className={`${styles.h4}  text-center py-5 mt-5`}>our projects</h4>
        <h1 className={`${styles.h1}  text-center `}>
          Check the real innovation of problem solving
        </h1>
      </div>
      <div className="container-xl  py-5 mt-5 ">
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col sm={6} className={`${styles.image} mx-auto`}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src={Pink}
                alt="Cactus in a pot"
                width={340}
                height={340}
              />
            </div>
          </Col>
          <Col md={6}>
            <ProjectInfoCard
              title={"Development"}
              color={"styles.pink"}
              description={
                "Laudantiumrerum corrupti officiis ea nesciunt eligendi quos eius voluptatibus quod. Consequuntur."
              }
            />
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col md={6}>
            <ProjectInfoCard
              title={"Research & Analitics"}
              description={
                "Impedit, iste. Facilis magni quidem aperiam quo? Magnam dolore nostrum atque, utmodi dolorum!"
              }
            />
          </Col>
          <Col
            sm={6}
            className={`${styles.image} ${styles.image__blue} mx-auto`}
          >
            <div className="d-flex justify-content-center align-items-center">
              <Image src={Blue} alt="An orange" width={340} height={340} />
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col
            sm={6}
            className={`${styles.image} ${styles.image__yellow} mx-auto `}
          >
            <div className="d-flex justify-content-center align-items-center">
              <Image src={Yellow} alt="Old phone" width={340} height={340} />
            </div>
          </Col>
          <Col md={6}>
            <ProjectInfoCard
              title={"UI/UX Engineering"}
              description={
                "Eos reiciendis nobis quia ullam voluptas modi voluptatem beatae corrupti odit nihil, labore culpa nisi! Animi."
              }
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Projects;
