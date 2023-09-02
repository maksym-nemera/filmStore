import React from "react";
import type { FilmData } from "../types/Film";
import { BASE_URL } from "../api/fetchClient";

interface FilmInfoProps {
  film: FilmData;
}

const FilmInfo: React.FC<FilmInfoProps> = ({ film }) => (
  <li className="mb-10 border border-gray-300 p-4 rounded-lg">
    <div className="mb-5">
      <ul className="flex flex-col gap-5 md:flex-row md:gap-20 items-center justify-center justify-start">
        {film.attributes.images.map((image) => (
          <li key={image} className="overflow-hidden rounded-lg">
            <img
              src={`${BASE_URL}/uploads/${image}`}
              alt={`${image}`}
              className="w-64 h-96 transform hover:scale-105 transition-transform duration-300"
            />
          </li>
        ))}
      </ul>
    </div>

    <h2 className="mb-5 text-2xl">{film.attributes.name}</h2>

    <p className="mb-5">{film.attributes.description}</p>

    <p>Release Date: {film.attributes.release_date}</p>
  </li>
);

export default FilmInfo;
