import { BASE_URL, API_KEY, LENGUAGE } from "./config";

export const getActorsForMovie = async (idMovie) => {
  try {
    let url = `${BASE_URL}${idMovie}/credits?api_key=${API_KEY}&language=${LENGUAGE}`;
    let response = await fetch(url);
    let { cast } = await response.json();
    return { cast };
  } catch (err) {
    console.log(err);
  }
};
