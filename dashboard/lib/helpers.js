import {useSelector} from "react-redux";



export const trChars = (str) => {
 const letters = {
  'ğ': 'g',
  'ü': 'u',
  'ş': 's',
  'ı': 'i',
  'ö': 'o',
  'ç': 'c',
  'Ğ': 'G',
  'Ü': 'U',
  'Ş': 'S',
  'İ': 'I',
  'Ö': 'O',
  'Ç': 'C',
 };

 str = str.replace(/[ğüşıöçĞÜŞİÖÇ]/gu, letter => letters[letter]);
 return str.toLowerCase()
}


// const localData = JSON.parse(localStorage.getItem('data'))
// export const authKey =  localData ? localData.token : null

export const authKey = ''


export const shuffle = (array) => {
 let currentIndex = array.length, randomIndex;
 while (currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex], array[currentIndex]];
 }
 return array;
}
