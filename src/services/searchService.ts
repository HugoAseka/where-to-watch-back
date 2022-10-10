import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const baseUrl = "https://api.themoviedb.org/3/search/multi?api_key=";
const api_key = process.env.API_KEY;

export async function reqSearch(query) {
  return await axios.get(
    baseUrl +
      api_key +
      "&language=en-US&query=" +
      query +
      "&page=1&include_adult=false"
  );
}
