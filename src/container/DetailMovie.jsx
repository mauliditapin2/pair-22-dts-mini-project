// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, Typography,Pagination , Stack  } from "@mui/material";
import { useParams } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// "./ListMovies.css";
import CardMovie from "../component/CardMovie";

const DetailMovie = () => {
  const [movies, setMovies] = useState([]);
  let params = useParams();
  useEffect(() => {
   // const chosenAnimal = params.movie.id;
  
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/movie/507086"
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseDariTMDB.data.results);
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
        POPULAR MOVIE
      </Typography>
      
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          marginBottom: "1em",
          marginTop: '1em',
          width: '100%'
        }}
      >
        {/* <OwlCarousel
        loop
        items={6}
        autoplay
        stagePadding={50}
      > */}
        {movies.map((movie) => {
          return <CardMovie movie={movie} />;
        })}

        {/* </OwlCarousel> */}
      </Box>
    </Box>
  );
};

export default DetailMovie;
