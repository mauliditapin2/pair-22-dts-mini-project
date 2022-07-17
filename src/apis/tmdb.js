import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    api_key: "556ecd387272c98def9d1545c8a02076",
  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;