import { useSearch } from "../context/SearchContext";
import MeaningList from "./MeaningList";

const Main = () => {
  const { loading, error, entries, notFound } = useSearch();

  if (loading) {
    return <div className="information">Loading...</div>;
  }

  if (error) {
    return <div className="error">Something went wrong!</div>;
  }

  if (notFound) {
    return (
      <div className="error">This word cannot be found in the dictionary!</div>
    );
  }
  if (entries === undefined) return <div></div>;

  return (
    <div>
      {/* <div className="main">{JSON.stringify(entries)}</div> */}
      <MeaningList />
    </div>
  );
};

export default Main;
