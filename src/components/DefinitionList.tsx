import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { Meaning } from "../context/domain";
import DefinitionItem from "./DefinitionItem";

interface props {
  meaning: Meaning;
}

const DefinitionList = (props: props) => {
  let a: string[] = [];
  const search = useSearch();
  const navigate = useNavigate();

  const getSynonyms = () => {
    props.meaning.definitions.forEach((b) => {
      a = a.concat(b.synonyms);
    });
    return a;
  };

  return (
    <>
      <label className="meaning-keyword">Meaning</label>
      <ul className="definition-list">
        {props.meaning.definitions.map((definition) => (
          <DefinitionItem
            key={props.meaning.definitions.findIndex((d) => d === definition)}
            definition={definition}
          />
        ))}
      </ul>
      {getSynonyms().length > 0 && (
        <div className="synonym-container">
          <div className="synonym-keyword">Synonyms</div>
          <div
            className="synonym-link"
            onClick={() => {
              search.setText(getSynonyms()[0]);
              search.getEntries(getSynonyms()[0]);
              navigate(`/${getSynonyms()[0]}`);
            }}
          >
            {getSynonyms()[0]}
          </div>
        </div>
      )}
    </>
  );
};

export default DefinitionList;
