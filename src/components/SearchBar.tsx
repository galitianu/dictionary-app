import { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { handleTextInput, text, setText, searchedText, getEntries } =
    useSearch();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(text, searchedText);
  }, [text, searchedText]);

  return (
    <div className="search-bar">
      <input
        className="search-text-box"
        id="searchQueryInput"
        type="text"
        name="searchQueryInput"
        placeholder="Search"
        onChange={handleTextInput}
      />
      <button
        className="submit-button"
        id="searchQuerySubmit"
        type="submit"
        name="searchQuerySubmit"
        onClick={() => {
          setText(searchedText);
          getEntries(searchedText);
          navigate(`/word/${searchedText}`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
