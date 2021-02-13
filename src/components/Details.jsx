import React from "react";
import { useGetActorForMovie } from "../hooks/useGetActorForMovie";
import { useGetDetailsMovie } from "../hooks/useGetDetailMovie";

export const Details = ({ match }) => {
  const { idMovie } = match.params;
  const { detailMovie } = useGetDetailsMovie(idMovie);
  const { actorsForMovie } = useGetActorForMovie(idMovie);
  return <div className="details">{detailMovie.original_title}</div>;
};
