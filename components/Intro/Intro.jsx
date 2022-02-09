import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Intro.module.scss";
import anchor from "../../public/intro/anchor.png";
import archive from "../../public/intro/archive.png";
import user from "../../public/intro/user.png";
import Image from "next/image";
const Intro = () => {
  return (
    <section className={`${styles.intro}  container pt-5`} id="about">
      <div className={`${styles.wrapper} mx-auto`}>
        <h4 className={`${styles.h4}  text-center py-5`}>build trust first</h4>
        <h1 className={`${styles.h1}  text-center `}>
          Control Your business with a single tap
        </h1>
      </div>
      <Row
        className={`${styles.cards} container d-flex justify-content-center align-items-center mx-auto py-5`}
      >
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xl={4}
          md={6}
        >
          <div
            className={`${styles.card} ${styles.card__red} d-flex flex-column justify-content-center align-items-center p-2 p-sm-3`}
          >
            <Image src={anchor} alt="anchor" max-width={120} max-height={36} />
            <h5 className={`${styles.h5} text-center p-3`}>
              Complete business control
            </h5>
            <p className={`${styles.paragraph} text-center`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus asperiores dolore quam aut, labore autem!
            </p>
          </div>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xl={4}
          md={6}
        >
          <div
            className={`${styles.card} ${styles.card__green} d-flex flex-column justify-content-center align-items-center p-2 p-sm-3`}
          >
            <Image
              src={archive}
              alt="archive"
              max-width={120}
              max-height={36}
            />
            <h5 className={`${styles.h5} text-center p-3`}>
              Critical analitics
            </h5>
            <p className={`${styles.paragraph} text-center`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus asperiores dolore quam aut, labore autem!
            </p>
          </div>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          xl={4}
          md={6}
        >
          <div
            className={`${styles.card} ${styles.card__orange} d-flex flex-column justify-content-center align-items-center p-2 p-sm-3`}
          >
            <Image src={user} alt="user" max-width={120} max-height={36} />
            <h5 className={`${styles.h5} text-center p-3`}>
              User satisfaction guaranteed
            </h5>
            <p className={`${styles.paragraph} text-center`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus asperiores dolore quam aut, labore autem!
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Intro;
