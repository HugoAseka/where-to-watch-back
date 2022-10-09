import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const baseUrl = "https://api.themoviedb.org/3/movie/";
const api_key = process.env.API_KEY;
// "642885?api_key=d14c3c3285ff3f1e05204d31ea4b510b&language=en-US"

export async function reqMovieById(id: number) {
  return await axios.get(baseUrl + id + "?api_key=" + api_key);
//   return await axios.get(
//     "https://api.themoviedb.org/3/movie/642885?api_key=d14c3c3285ff3f1e05204d31ea4b510b&language=en-US"
//   );
}
