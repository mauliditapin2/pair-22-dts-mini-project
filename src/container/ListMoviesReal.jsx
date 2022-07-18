// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import {  Typography } from "@mui/material";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// "./ListMovies.css";
import CardMovie from "../component/CardMovie";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/movie/popular"
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
    <div>
      <Typography sx={{padding: '1em',backgroundColor: '#3E065F', textTransform: 'uppercase', color: 'white', margin: '1em'}}>Popular Movie</Typography>
      <OwlCarousel
        loop
        items={6}
        autoplay
        stagePadding={50}
      >
        {movies.map((movie) => {
          return <CardMovie movie={movie} />;
        })}
      </OwlCarousel>
    </div>
  );
};

export default ListMovies;
