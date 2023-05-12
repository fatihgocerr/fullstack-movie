

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



export const authKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQyZTA1ZmQxZDE2N2JiOWMzYzFlYzUiLCJ1c2VyTmFtZSI6InVzZXIgMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzYyOTk2MCwiZXhwIjoxNjgzNzE2MzYwfQ.uSGEA-2QeVrpOjpSTI24_qORLu4yVqzRWVH2c2por0Y'
