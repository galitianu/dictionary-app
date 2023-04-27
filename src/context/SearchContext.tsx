import React from "react";
import {
  ChangeEvent,
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from "react";
import { Entry } from "./domain";
import { fetchEntries } from "../api/publicAPI";

const useSearchContext = () => {
  const [text, setText] = useState("");
  const [searchedText, setSearchedText] = useState("");

  const [entries, setEntries] = useState<Entry>();
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const getEntries = async (text: string) => {
    setError(false);
    setNotFound(false);
    setLoading(true);
    try {
      const fetchedEntries = await fetchEntries(text);
      const dto: Entry = {
        word: fetchedEntries[0].word,
        phonetic: fetchedEntries[0].phonetic,
        meanings: fetchedEntries[0].meanings,
        sourceUrls: fetchedEntries[0].sourceUrls,
        phonetics: fetchedEntries[0].phonetics,
      };
      setEntries(dto);
    } catch (err: any) {
      if (err.response.status === 404) setNotFound(true);
      else setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchedText(e.target.value);
  }, []);

  return {
    searchedText,
    setSearchedText,
    text,
    setText,
    handleTextInput,
    getEntries,
    loading,
    error,
    entries,
    notFound,
  };
};

type UseCounterContextType = ReturnType<typeof useSearchContext>;

const initContextState: UseCounterContextType = {
  text: "",
  setText: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
  getEntries: async (text: string) => {},
  error: false,
  notFound: false,
  loading: false,
  entries: undefined,
  searchedText: "",
  setSearchedText: () => {},
};

export const SearchContext =
  createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement[] | undefined;
};

export const SearchProvider = ({
  children,
  ...initState
}: ChildrenType): ReactElement => {
  return (
    <SearchContext.Provider value={useSearchContext()}>
      {children}
    </SearchContext.Provider>
  );
};

type useSearchHookType = {
  text: string;
  setText: any;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
  entries: Entry | undefined;
  error: boolean;
  loading: boolean;
  notFound: boolean;
  getEntries: (word: string) => {};
  searchedText: string;
  setSearchedText: any;
};

export const useSearch = (): useSearchHookType => {
  const {
    text,
    setText,
    handleTextInput,
    error,
    loading,
    entries,
    notFound,
    getEntries,
    searchedText,
    setSearchedText,
  } = useContext(SearchContext);
  return {
    text,
    setText,
    handleTextInput,
    error,
    loading,
    entries,
    notFound,
    getEntries,
    searchedText,
    setSearchedText,
  };
};
