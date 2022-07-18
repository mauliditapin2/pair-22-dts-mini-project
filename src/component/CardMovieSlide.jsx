import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

// Di sini kita mengetahui bahwa nantinya CardMovie akan menerima
// suatu data dari ListMovie, maka kita langsung saja
// menerima props di sini
const CardMovieSlide = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

  return (
    // di sini kita menggunakan Component Card dari MUI
    <Card className="boxy" sx={{ margin: "5px" }}>
      <Link style={{ textDecoration: "none" }} to="/DetailFilm">
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
        <Box className="boxy">
          <CardMedia
            component="img"
            image=
            alt={props.movie.title}
          ></CardMedia>
        </Box>
      </Link>
    </Card>
  );
};

export default CardMovieSlide;
