import { BASE_URL, API_KEY, LENGUAGE } from "./config";

export const getDetailMovie = async (idMovie) => {
  try {
    let url = `${BASE_URL}${idMovie}?api_key=${API_KEY}&language=${LENGUAGE}`;
    let response = await fetch(url);
    let data = await response.json();
    return { data };
  } catch (err) {
    console.log(err);
  }
};
