import { Col, Row } from "react-bootstrap";
import styles from "../../styles/About.module.scss";
import Left from "../../public/about/left.png";
import Right from "../../public/about/right.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className="container p-5" id="about">
      <Row className="d-flex justify-content-between align-items-center">
        <Col lg={5}>
          <div
            className={`${styles.wrapper} d-flex flex-column align-items-center my-5`}
          >
            <h2 className={`${styles.h2} py-2 `}>
              Most innovative creative team
            </h2>
            <h6 className={`${styles.h6} py-2`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              explicabo.
            </h6>
            <p className={`${styles.paragraph} py-2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              repellendus sunt quidem suscipit, harum fuga non distinctio
              accusantium culpa voluptatem blanditiis vel.
            </p>
            <Link href="#team">
              <a className={styles.link}>
                <button className={`fullButton py-2`}>KNOW MORE</button>
              </a>
            </Link>
          </div>
        </Col>
        <Col>
          <div className={`${styles.wrapper} d-flex align-items-between`}>
            <div className="pb-0 pb-lg-5 mb-0 mb-lg-5 ">
              <Image
                src={Left}
                alt="Old clock"
                objectFit="contain"
                width={400}
                height={400}
              />
            </div>
            <div className="pt-0 pt-lg-5 mt-0 mt-lg-5">
              <Image
                src={Right}
                alt="Group of people"
                objectFit="contain"
                width={400}
                height={400}
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
