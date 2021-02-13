import { useState, useEffect } from "react";
import { getActorsForMovie } from "../services/getActorsForMovie";

export const useGetActorForMovie = (idMovie) => {
  const [actorsForMovie, setActorsForMovie] = useState([]);

  useEffect(() => {
    getActorsForMovie(idMovie).then(({ cast }) => {
      setActorsForMovie(cast);
    });
  }, [idMovie]);

  return { actorsForMovie };
};
