import { useEffect } from "react";
import { Favourite, Meaning } from "../context/domain";
import DefinitionList from "./DefinitionList";
import { deleteFav, getFavsFunction } from "../service/favouritesService";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="fav-container">
      <div
        className="word-container"
        onClick={() => {
          navigate(`/word/${props.fav.word}`);
        }}
      >
        <div className="word-box">{props.fav.word}</div>
        <div className="spacer"></div>
        <div className="date-box">Date Added: {props.fav.dateAdded}</div>
      </div>
      <button
        className="delete-button"
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
