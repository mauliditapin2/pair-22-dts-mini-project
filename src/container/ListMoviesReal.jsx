// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, CardContent, CardMedia, Rating, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

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
    <>
    <Typography sx={{
      padding: '1em',
      textAlign: 'center',
      backgroundColor: '#3E065F',
      color: 'white',
      margin: '1em'

    }}>Popular Movie</Typography>
    <Swiper
      spaceBetween={5}
      slidesPerView={8}
      autoplay
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {movies.map((movie) => {
        return (
          <SwiperSlide key={movie.id}>
            <Card className="boxy" sx={{ margin: "5px" }}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/DetailFilm/${movie.id}`}
              >
                <Box className="boxy" sx={{ width: "10em" }}>
                  <CardMedia
                    component="img"
                    image={`${baseUrlForMovie}${movie.poster_path}`}
                    alt={movie.title}
                  ></CardMedia>
                  <CardContent>
                    <Typography component="div" variant="body1">
                      {movie.title}
                    </Typography>
                    <Rating
                      value={movie.vote_average / 2}
                      precision={0.1}
                      readOnly
                    />
                    <Typography variant="body2">
                      Release date: {movie.release_date}
                    </Typography>
                  </CardContent>
                </Box>
              </Link>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </>
  
  );
};

export default ListMovies;
