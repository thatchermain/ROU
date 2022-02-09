import React from "react";
import { Col, Row } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

const Testimonials = (props) => {
  return (
    <section>
      <div className="py-3 container-lg">
        <Row className="g-0">
          <Col md={6} className="p-2 p-md-5">
            <TestimonialCard
              description={"They are Awesome!"}
              name={"Kabir Manja"}
              job={"Music producer"}
            />
          </Col>
          <Col md={6} className="p-2 p-md-5">
            <TestimonialCard
              description={"They are Awesome!"}
              name={"Kabir Manja"}
              job={"Music producer"}
            />
          </Col>
          <Col md={6} className="p-2 p-md-5">
            <TestimonialCard
              description={"They are Awesome!"}
              name={"Kabir Manja"}
              job={"Music producer"}
            />
          </Col>
          <Col md={6} className="p-2 p-md-5">
            <TestimonialCard
              description={"They are Awesome!"}
              name={"Kabir Manja"}
              job={"Music producer"}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
