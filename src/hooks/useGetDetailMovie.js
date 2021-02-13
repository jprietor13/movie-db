import { useState, useEffect } from "react";
import { getDetailMovie } from "../services/getDetailMovie";

export const useGetDetailsMovie = (idMovie) => {
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    getDetailMovie(idMovie).then(({ data }) => {
      setDetailMovie(data);
    });
  }, [idMovie]);

  return { detailMovie };
};
