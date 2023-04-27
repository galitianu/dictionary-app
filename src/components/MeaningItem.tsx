import { Meaning } from "../context/domain";
import DefinitionList from "./DefinitionList";

interface props {
  meaning: Meaning;
}

const MeaningItem = (props: props) => {
  return (
    <div className="meaning-element">
      <div className="pos-meaning">
        <div className="meaning-pos">{props.meaning.partOfSpeech}</div>
        <div className="horizontal-line"></div>
      </div>
      <DefinitionList meaning={props.meaning} />
    </div>
  );
};

export default MeaningItem;
