import React from "react";
import { useGetListMovies } from "../hooks/useGetListMovies";
import { URL_IMAGE } from "../services/config";

export const Home = () => {
  const { data } = useGetListMovies();
  return (
    <div className="home-container">
      <h4 className="home-container__title">Home</h4>
      {data.map((item) => (
        <div className="home-container__item" key={item.id} idmovie={item.id}>
          <img src={URL_IMAGE + item.poster_path} alt={item.title} />
          <span className="home-container__item-title">{item.title}</span>
          <span className="home-container__item-date">{item.release_date}</span>
        </div>
      ))}
      {console.log(data)}
    </div>
  );
};
