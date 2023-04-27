import SearchBar from "./components/SearchBar";
import Header from "./components/header";
import "./App.css";
import { SearchProvider } from "./context/SearchContext";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header></Header>
      <SearchProvider>
        <SearchBar></SearchBar>
        <Main />
      </SearchProvider>
    </div>
  );
}

export default App;
