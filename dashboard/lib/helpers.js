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

// export const authKey = useSelector(state => state.user.user.token)



