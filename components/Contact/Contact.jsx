import React from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import styles from "../../styles/Contact.module.scss";
const Contact = () => {
  return (
    <section id="contact" className="pt-5">
      <div className="container-lg">
        <div className={`${styles.wrapper} mx-auto `}>
          <h4 className={`${styles.h4}  text-center py-5`}>contact us</h4>
          <h1 className={`${styles.h1}  text-center `}>
            Stay connected with us for any reason
          </h1>
        </div>
        <Row className="p-md-5 ">
          <Col lg={6} className="p-5">
            <h3 className="display-6">Write us a message</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="name" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Your email" />
                <Form.Text className="text-muted">
                  We will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="Message..."
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="fullButton">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} className=" my-auto">
            <div className="p-5 d-flex flex-column justify-content-between align-items-start">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dolorem rerum facere quidem veniam soluta.
              </p>
              <div className={`${styles.contact} d-flex p-2`}>
                <i className={`${styles.icon} bi bi-telephone`}></i>{" "}
                <div className={`${styles.data} d-flex flex-column px-3`}>
                  <span className={styles.type}>Phone</span>
                  <span className={styles.description}>01-234-567-890</span>
                </div>
              </div>
              <div className={`${styles.contact} d-flex p-2`}>
                <i className={`${styles.icon} bi bi-envelope`}></i>{" "}
                <div className={`${styles.data} d-flex flex-column px-3`}>
                  <span className={styles.type}>Email</span>
                  <span className={styles.description}>contact@rou.com</span>
                </div>
              </div>
              <div className={`${styles.contact} d-flex p-2`}>
                <i className={`${styles.icon} bi bi-geo-alt lg={5}`}></i>
                <div className={`${styles.data} d-flex flex-column px-3`}>
                  <span className={styles.type}>Address</span>
                  <span className={styles.description}>
                    1, Yemen Road, Yemen
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
