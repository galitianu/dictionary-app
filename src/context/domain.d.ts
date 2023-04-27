export interface Phonetic {
  text: string;
  audio: string;
}

export interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: any[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface Entry {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
  meanings: Meaning[];
}

export interface Favourite {
  id: string;
  word: string;
  dateAdded: string;
}

declare global {
  interface Window {
    _env_: any;
  }
}
