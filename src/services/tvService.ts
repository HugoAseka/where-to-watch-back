import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const baseUrl = "https://api.themoviedb.org/3/tv/";
const api_key = process.env.API_KEY;

export async function reqShowById(id: string) {
  return await axios.get(baseUrl + id + "?api_key=" + api_key);
}

export async function reqShowProviders(id: string) {
  return await axios.get(baseUrl + id + "/watch/providers?api_key=" + api_key);
}
