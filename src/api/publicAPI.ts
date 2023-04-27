import axios from "axios";

const publicApi = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

export const fetchEntries = async (text: string) => {
  const req = await publicApi.get(`/${text}`);

  return req.data;
};
