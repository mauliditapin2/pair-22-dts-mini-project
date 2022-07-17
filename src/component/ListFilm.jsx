import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListFilm() {
  // sekarang kita membutuhkan state untuk menampung Movie yang diambil dari TMDB
  const [movies, setMovies] = useState([]);

  // sekarang kita membutuhkan "awalan" pada saat Component ini dibuat, akan menembak
  // endpoint dan mengambil data, untuk itu butuh useEffect
  useEffect(
    () => {
      // useEffect tidak bisa menerima async, jadi kita declare async function di dalam sini
      const fetchDataMovies = async () => {
        try {
          // Gunakan axios di sini
          const responseDariTMDB = await axios.get(
            // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
            "https://api.themoviedb.org/3/movie/popular?api_key=INSERT_API_KEY_HERE"
          );

          // Jangan lupa set statenya
          // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
          setMovies(responseDariTMDB.data.results);
        } catch (err) {
          console.log(err);
        }
      };

      // Jangan lupa dipanggil di sini
      fetchDataMovies();
    },
    // karena hanya ingin jalan satu kali, dependency listnya kita kosongkan
    []
  );

  return (
    <Box className="boxy">
      <Typography variant="h5">Container ListMovies (Data Real)</Typography>

      {/* Di sini patokan kita sudah berdasarkan state movies */}
      {movies.map((movie) => {
        // Selebihnya di dalam sini sama
        return <CardMovie movie={movie} />;
      })}
    </Box>
  );
}
