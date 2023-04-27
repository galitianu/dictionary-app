import SearchBar from "./components/SearchBar";
import Header from "./components/header";
import "./App.css";
import { SearchProvider } from "./context/SearchContext";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div>
      <SearchProvider>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <Main />
                </>
              }
            />
            <Route
              path="/:text"
              element={
                <>
                  <PageLoader />
                  <SearchBar />
                  <Main />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
