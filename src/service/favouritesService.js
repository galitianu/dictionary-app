import { db } from "../config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const favsCollectionRef = collection(db, "favourites");

export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours().toString(2);
  let minute = newDate.getMinutes();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}, ${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }`;
}

export const addFav = async (word) => {
  await addDoc(favsCollectionRef, {
    word: word,
    dateAdded: getCurrentDate(),
  });
};

export const deleteFav = async (id) => {
  const favsDoc = doc(db, "favourites", id);
  await deleteDoc(favsDoc);
};

export const getFavsFunction = async () => {
  const data = await getDocs(favsCollectionRef);
  return data.docs.map((doc) => ({
    word: doc.data().word,
    dateAdded: doc.data().dateAdded,
    id: doc.id,
  }));
};
