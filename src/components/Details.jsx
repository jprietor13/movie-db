import React from "react";
import { useGetActorForMovie } from "../hooks/useGetActorForMovie";
import { useGetDetailsMovie } from "../hooks/useGetDetailMovie";
import { Link } from "react-router-dom";
import { URL_IMAGE } from "../services/config";
import imageNotFound from "../assets/images/img_not_found.jpg";
import "../assets/styles/Details.css";

export const Details = ({ match }) => {
  const { idMovie } = match.params;
  const { detailMovie } = useGetDetailsMovie(idMovie);
  const { actorsForMovie } = useGetActorForMovie(idMovie);
  console.log(
    "🚀 ~ file: Details.jsx ~ line 11 ~ Details ~ actorsForMovie",
    actorsForMovie
  );

  const dateData = new Date();
  return (
    <div className="details">
      <Link to="/">
        <span className="link-home">Home</span>
      </Link>
      <div className="detail">
        <span className="detail__item-description">
          <img
            className="detail__item-description--item-image"
            src={`${URL_IMAGE}${detailMovie.poster_path}`}
            alt=""
          />
          <div className="detail__item-description--description">
            <span className="detail__item-description--container">
              <span className="detail__item-description-title">
                {detailMovie.original_title}
              </span>
              <span className="detail__item-description-date">
                {detailMovie.release_date}
              </span>
            </span>
          </div>
        </span>
      </div>

      <div className="actor">
        <h1>Actors</h1>
        {actorsForMovie.map((item) => (
          <div className="actor__item-description" key={item.id}>
            <img
              className="actor__item-description--item-image"
              src={
                item.profile_path === null
                  ? imageNotFound
                  : `${URL_IMAGE}${item.profile_path}`
              }
              alt={`${item.original_name}`}
            />
            <span className="actor__item-description--description">
              <span className="actor__item-description-name">
                {item.original_name}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
