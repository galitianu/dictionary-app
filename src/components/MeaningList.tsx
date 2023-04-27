import { useSearch } from "../context/SearchContext";
import DictTitle from "./DictTitle";
import MeaningItem from "./MeaningItem";
import Source from "./Source";

const MeaningList = () => {
  const { entries } = useSearch();

  return (
    <>
      <DictTitle key={0} />
      <ul className="meaning-list">
        {entries?.meanings.map((meaning) => (
          <MeaningItem
            key={entries.meanings.findIndex((m) => m === meaning) + 1}
            meaning={meaning}
          />
        ))}
      </ul>
      <Source />
    </>
  );
};

export default MeaningList;
