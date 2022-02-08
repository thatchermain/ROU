import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Team.module.scss";
import TeamCard from "./TeamCard";
import Ceo from "../../public/team/ceo.png";
import Manager from "../../public/team/manager.png";
import Developer from "../../public/team/developer.png";
import Designer from "../../public/team/designer.png";
const Team = () => {
  return (
    <section>
      <div className={`${styles.wrapper} mx-auto pb-5`}>
        <h4 className={`${styles.h4}  text-center py-5`}>meet our team</h4>
        <h1 className={`${styles.h1}  text-center `}>
          Awesome people with great business skills
        </h1>
      </div>
      <Row className="container-xl mx-auto py-5 mt-5">
        <Col sm={8} md={5} lg={3} className="mx-auto">
          <TeamCard src={Ceo} title="Founder & CEO" name="Bruce Wayne" />
        </Col>
        <Col sm={8} md={5} lg={3} className="mx-auto">
          <TeamCard src={Manager} title="Manager" name="Clark Kent" />
        </Col>
        <Col sm={8} md={5} lg={3} className="mx-auto">
          <TeamCard src={Developer} title="Developer" name="Jessica Parker" />
        </Col>
        <Col sm={8} md={5} lg={3} className="mx-auto">
          <TeamCard src={Designer} title="Designer" name="Justin Pakerman" />
        </Col>
      </Row>
    </section>
  );
};

export default Team;
