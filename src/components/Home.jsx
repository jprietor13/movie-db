import React from "react";
import { useGetListMovies } from "../hooks/useGetListMovies";
import { Link } from "react-router-dom";
import { URL_IMAGE } from "../services/config";
import "../assets/styles/Home.css";

export const Home = () => {
  const { data } = useGetListMovies();
  return (
    <div className="home">
      {data.map((item) => (
        <div className="home__item-description" key={item.id} idmovie={item.id}>
          <Link to={`/details/${item.id}`}>
            <img
              className="home__item-description--item-image"
              src={`${URL_IMAGE}${item.poster_path}`}
              alt={item.title}
            />
            <span className="home__item-description--description">
              <span className="home__item-description--description-title">
                {item.title}
              </span>
              <span className="home__item-description--description-date">
                {item.release_date}
              </span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};
