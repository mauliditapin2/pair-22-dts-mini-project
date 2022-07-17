import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
  return (
    <div>
      <Carousel fade style={{ marginBottom: -70}}>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="https://jabarekspres.com/wp-content/uploads/2022/07/Trailer-Thor-Love-and-Thunder.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
