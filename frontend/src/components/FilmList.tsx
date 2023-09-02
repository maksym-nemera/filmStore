import React from "react";
import type { FilmsResponse } from "../types/Film";
import FilmInfo from "./FilmInfo";

interface FilmListProps {
  films: FilmsResponse;
}

const FilmList: React.FC<FilmListProps> = ({ films }) => (
  <ul>
    {films.data.map((film) => (
      <FilmInfo key={film.id} film={film} />
    ))}
  </ul>
);

export default FilmList;
