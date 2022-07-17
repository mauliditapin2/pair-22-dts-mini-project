// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

// "./ListMovies.css";
import CardMovieDetail from "../component/CardMovieDetail";

const DetailMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/movie/top_rated"
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
    
    <Box  sx={{display: 'inline-flex',flexWrap: 'wrap', margin: 'auto', padding: 10 }}>
        {movies.map((movie) => {
        return <CardMovieDetail movie={movie} />;
      })}  
    </Box>
  );
};

export default DetailMovie;