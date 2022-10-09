import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const api_key = process.env.API_KEY;

export async function requestTrendingShows() {
  return await axios
    .get("https://api.themoviedb.org/3/trending/tv/week?api_key=" + api_key)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw { code: "Not Found", message: "List not found, try again later." };
    });
}

export async function requestTrendingMovies() {
  return await axios
    .get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + api_key)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw { code: "Not Found", message: "List not found, try again later." };
    });
}
