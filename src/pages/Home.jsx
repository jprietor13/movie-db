import React from "react";
import { useGetListMovies } from "../hooks/useGetListMovies";

export const Home = () => {
  const { data } = useGetListMovies();
  return (
    <div>
      <h4>Home</h4>
      {console.log(data)}
    </div>
  );
};
