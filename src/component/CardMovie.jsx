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
// Di sini kita mengetahui bahwa nantinya CardMovie akan menerima
// suatu data dari ListMovie, maka kita langsung saja
// menerima props di sini
const CardMovie = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

  return (
    // di sini kita menggunakan Component Card dari MUI
    <Card className="boxy" sx={{ margin: '5px' }}>
      <Link style={{ textDecoration: "none" }} to={`/DetailFilm/${props.movie.id}`}>
        <Box className="boxy">
          <CardMedia
            component="img"
            image={`${baseUrlForMovie}${props.movie.poster_path}`}
            alt={props.movie.title}
          ></CardMedia>
          <CardContent>
            <Typography component="div" variant="body1">
              {props.movie.title}
            </Typography>
            <Rating
              value={props.movie.vote_average / 2}
              precision={0.1}
              readOnly
            />
            <Typography variant="body2">
              Release date: {props.movie.release_date}
            </Typography>
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
};

export default CardMovie;
