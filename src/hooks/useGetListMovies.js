import { useState, useEffect, useCallback } from "react";
import { getListMovies } from "../services/getListMovies";

export const useGetListMovies = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  let isMounted = true;
  const getData = useCallback(async () => {
    const { results } = await getListMovies(page);
    setData([...data, ...results]);
  }, [page]);

  useEffect(() => {
    getData();
    return (isMounted = false);
  }, [getData]);

  useEffect(() => {
    let counter = 1;
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + counter);
        counter++;
      }
    };
  }, []);

  return { data };
};
