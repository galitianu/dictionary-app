import logo from "../assets/images/logo.svg";
import arrowImgUrl from "../assets/images/icon-arrow-down.svg";
import moonImg from "../assets/images/icon-moon.svg";

import React, { useState, useEffect } from "react";

import { db } from "../config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useSearch } from "../context/SearchContext";
import FavItem from "./FavItem";
import { addFav, getFavsFunction } from "../service/favouritesService";
import { Favourite } from "../context/domain";
const Favourites = () => {
  const {
    handleTextInput,
    text,
    setText,
    searchedText,
    getEntries,
    favs,
    setFavs,
  } = useSearch();

  useEffect(() => {
    const shenanigans = async () => {
      const a: Favourite[] = await getFavsFunction();
      setFavs(a);
    };
    shenanigans();
  }, []);

  return (
    <>
      <ul className="favs-list">
        {favs.map((fav) => (
          <FavItem key={fav.id} fav={fav} />
        ))}
      </ul>
    </>
  );
};

export default Favourites;
