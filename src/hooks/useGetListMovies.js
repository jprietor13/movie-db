import { useState, useEffect, useCallback } from "react";
import { getListMovies } from "../services/getListMovies";

export const useGetListMovies = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const { results } = await getListMovies(1);
    setData(results);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data };
};
