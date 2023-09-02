import React, { useEffect, useState } from "react";
import { client } from "../api/fetchClient";
import FilmList from "./FilmList";
import type { FilmsResponse } from "../types/Film";
import Loader from "./Loader";
import "../styles/global.css";

export const App = () => {
  const [films, setFilms] = useState<FilmsResponse | null>(null);

  const fetchFilmsFromServer = async () => {
    try {
      const fetchedFilms = await client.get("/api/films");

      setFilms(fetchedFilms as FilmsResponse);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Unable to load a todos: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    fetchFilmsFromServer();
  }, []);

  return (
    <>
      {films 
        ? <FilmList films={films} /> 
        : <Loader />
      }
    </>
  );
};
