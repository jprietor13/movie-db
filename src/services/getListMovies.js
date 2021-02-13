import { BASE_URL, API_KEY, LENGUAGE } from "./config";

export const getListMovies = async (idPage) => {
  try {
    let url = `${BASE_URL}popular?api_key=${API_KEY}&language=${LENGUAGE}`;
    let response = await fetch(url);
    let { results } = await response.json();
    return { results };
  } catch (err) {
    console.log(err);
  }
};
