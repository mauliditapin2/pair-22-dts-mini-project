// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
//import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// "./ListMovies.css";
import CardMovie from "../component/CardMovie";

const DetailMovie = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

  const [movies, setMovies] = useState([]);
  let params = useParams();
  useEffect(() => {
    // const chosenAnimal = params.movies.id;

    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/movie/507086"
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <Box sx={{ padding: "1em", backgroundColor: "#3E065F" }}>
      <Typography
        sx={{
          padding: "1em",
          color: "#3E065F",
          backgroundColor: "white",
          fontWeight: "bold",
          margin: "auto",
          width: "30em",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
      >
        MOVIE DETAIL
      </Typography>

      <Card className="boxy" sx={{ margin: "5px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <Box className="boxy" sx={{ width: "20em" }}>
            <CardMedia
              component="img"
              image={`${baseUrlForMovie}${movies.poster_path}`}
              alt={movies.title}
            ></CardMedia>
            
          </Box>
          
          <Box className="boxy" sx={{ width: '100%', textAlign: 'left'}}>
            <Typography variant="h3" sx={{textAlign: 'center'}}>{movies.title}</Typography>
            <br/><br/><br/>
            <Typography>Release Date : {movies.release_date}</Typography>
            <Rating value={movies.vote_average / 2} precision={0.1} readOnly />
            <br/><br/><br/>
            <Typography>Tagline : {movies.tagline}</Typography>
            <br/>
            <Typography>Overvie : {movies.overview}</Typography>
            <br/>
            <Typography>Country : {movies.spoken_languages.name}</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default DetailMovie;
