// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Rating, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import YouTube from "react-youtube";
const DetailMovie = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

  const [movies, setMovies] = useState([]);
  let params = useParams();
  const MovieID = params.MovieID;
  const baseURL = `https://api.themoviedb.org/3/movie/${MovieID}?api_key=556ecd387272c98def9d1545c8a02076&append_to_response=videos`;
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovies(response.data);
    });
  }, []);

  if (!movies) return null;

  return (
    <Box sx={{ padding: "1em", backgroundColor: "#3E065F" }}>
      <Typography
        sx={{
          padding: "1em",
          color: "#3E065F",
          backgroundColor: "white",
          fontWeight: "bold",
          margin: "auto",
          width: "100%",
        }}
      >
        MOVIE DETAIL
      </Typography>

      <Table>
        <tr>
          <td style={{ backgroundColor: "white", padding: "5em" }}>
            <Table striped bordered hover>
              <tr>
                <td rowSpan={6} style={{display:'flex'}}>
                  <CardMedia
                    component="img"
                    image={`${baseUrlForMovie}${movies.poster_path}`}
                    alt={movies.title}
                    sx={{ minWidth: "5em", maxWidth: "20em" }}
                  ></CardMedia>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="h3" sx={{ textAlign: "center" }}>
                    {movies.title}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography>Release Date : {movies.release_date}</Typography>
                  <Rating
                    value={movies.vote_average / 2}
                    precision={0.1}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Typography>Tagline : {movies.tagline}</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography>Overvie : {movies.overview}</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography>
                    Original Language : {movies.original_language}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <YouTube
                    videoId={movies.videos?.results[0].key}
                    style={{ width: "100%" }}
                  />
                </td>
                <td>
                  <YouTube
                    videoId={movies.videos?.results[1].key}
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
            </Table>
          </td>
        </tr>
      </Table>
    </Box>
  );
};

export default DetailMovie;
