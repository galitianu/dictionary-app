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

const useSearchContext = () => {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState<Entry>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getEntries = async (text: string) => {
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
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSearchButtonClick = () => {
    getEntries(text);
  };

  return {
    text,
    setText,
    handleTextInput,
    handleSearchButtonClick,
    getEntries,
    loading,
    error,
    entries,
  };
};

const fetchEntries = async (text: string): Promise<Entry[]> => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
  );
  const data = await res.json();

  return data;
};

type UseCounterContextType = ReturnType<typeof useSearchContext>;

const initContextState: UseCounterContextType = {
  text: "",
  setText: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
  handleSearchButtonClick: () => {},
  getEntries: async (text: string) => {},
  error: false,
  loading: false,
  entries: undefined,
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
  handleSearchButtonClick: () => void;
  entries: Entry | undefined;
  error: boolean;
  loading: boolean;
};

export const useSearch = (): useSearchHookType => {
  const {
    text,
    setText,
    handleTextInput,
    handleSearchButtonClick,
    error,
    loading,
    entries,
  } = useContext(SearchContext);
  return {
    text,
    setText,
    handleTextInput,
    handleSearchButtonClick,
    error,
    loading,
    entries,
  };
};
