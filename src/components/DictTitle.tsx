import { useSearch } from "../context/SearchContext";
import imgPlayUrl from "../assets/images/icon-play.svg";

const DictTitle = () => {
  const { entries, text, handleTextInput, handleSearchButtonClick } =
    useSearch();

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
      <button className="play-button" onClick={playAudio}>
        <img className="img-play-icon" src={imgPlayUrl} alt="play button" />
      </button>
    </div>
  );
};

export default DictTitle;
