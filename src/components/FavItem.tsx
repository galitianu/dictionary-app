import { useEffect } from "react";
import { Favourite, Meaning } from "../context/domain";
import DefinitionList from "./DefinitionList";
import { deleteFav, getFavsFunction } from "../service/favouritesService";
import { useSearch } from "../context/SearchContext";

interface props {
  fav: Favourite;
}

const FavItem = (props: props) => {
  const {
    handleTextInput,
    text,
    setText,
    searchedText,
    getEntries,
    favs,
    setFavs,
  } = useSearch();
  return (
    <div className="fav-container">
      <div className="word-box">Word: {props.fav.word}</div>
      <div className="date-box">Date Added: {props.fav.dateAdded}</div>
      <button
        onClick={() => {
          deleteFav(props.fav.id);
          const shenanigans = async () => {
            const a: Favourite[] = await getFavsFunction();
            setFavs(a);
          };
          shenanigans();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default FavItem;
