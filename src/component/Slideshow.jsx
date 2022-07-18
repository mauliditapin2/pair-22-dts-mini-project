import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
  return (
    <div>
      <Carousel fade style={{ }}>
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
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="https://akcdn.detik.net.id/visual/2022/05/27/satria-dewa-gatotkacafoto-imdbcomimdb_169.jpeg?w=480&q=90"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="https://images.bisnis-cdn.com/thumb/posts/2022/05/03/1529676/film-bioskop-terbaru-doctor-strange-in-the-multiverse-of-madness.jpg?w=600&h=400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
