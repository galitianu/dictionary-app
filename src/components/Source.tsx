import { useSearch } from "../context/SearchContext";
import newWindow from "../assets/images/icon-new-window.svg";

const Source = () => {
  const { entries } = useSearch();
  return (
    <div className="source-container">
      <div className="horizontal-line-2"></div>
      <div className="source-keyword">Source</div>
      <a className="source-url" target="_blank" href={entries?.sourceUrls[0]}>
        {entries?.sourceUrls[0]}
        <img className="new-window-img" src={newWindow} />
      </a>
    </div>
  );
};

export default Source;
