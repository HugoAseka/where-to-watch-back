import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const baseUrl = "https://api.themoviedb.org/3/movie/";
const api_key = process.env.API_KEY;

export async function reqMovieById(id: string) {
  return await axios.get(baseUrl + id + "?api_key=" + api_key);
}

export async function reqMoviesInTheater() {
//   return await axios.get(
//     baseUrl + "now_playing?api_key=" + api_key + "&language=en-US&page=1"
//   );
  return await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=d14c3c3285ff3f1e05204d31ea4b510b&language=en-US&page=1"
  );
}
