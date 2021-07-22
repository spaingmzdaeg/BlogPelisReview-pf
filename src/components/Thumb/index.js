import React from "react";
// Links
import { Link } from "react-router-dom";
// Estilos
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
    ;
  </div>
);

export default Thumb;
