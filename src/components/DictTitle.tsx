import { useSearch } from "../context/SearchContext";
import imgPlayUrl from "../assets/images/icon-play.svg";
import { addFav, getFavsFunction } from "../service/favouritesService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Favourite } from "../context/domain";

const DictTitle = () => {
  const { entries, text, handleTextInput, favs, setFavs } = useSearch();

  const playAudio = () => {
    const audio = new Audio(entries?.phonetics[0]?.audio);
    audio.loop = false;
    audio.play();
  };

  return (
    <div className="title-container">
      <div className="title-phonetic">
        <h1 className="word">{entries?.word}</h1>
        <div className="phonetic-text">{entries?.phonetic}</div>
      </div>
      <button
        className="favs-button"
        onClick={() => {
          const a = favs.filter((fav) => {
            return fav.word === entries!.word;
          });
          if (a.length <= 0) {
            addFav(entries!.word);
            const shen = async () => {
              const a: Favourite[] = await getFavsFunction();
              setFavs(a);
            };
            shen();
            toast.info("Word added to favourites");
          } else {
            toast.error("Word already in favourites");
          }
        }}
      >
        Add to favourites
      </button>{" "}
      <ToastContainer />
      <button className="play-button" onClick={playAudio}>
        <img className="img-play-icon" src={imgPlayUrl} alt="play button" />
      </button>
    </div>
  );
};

export default DictTitle;
