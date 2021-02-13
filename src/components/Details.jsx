import React from "react";
import { useGetDetailsMovie } from "../hooks/useGetDetailMovie";

export const Details = ({ match }) => {
  const { idMovie } = match.params;
  const { detailMovie } = useGetDetailsMovie(idMovie);
  return <div className="details">{detailMovie.original_title}</div>;
};
