const fs = require('fs');






const replaceGenre =async () => {
 const genreData = fs.readFileSync('genres.json');
 const genres = await JSON.parse(genreData);
 const genresName = [
  "Action",
  "Adventure",
  "Animated",
  "Biography",
  "Comedy",
  "Crime",
  "Dance",
  "Disaster",
  "Documentary",
  "Drama",
  "Erotic",
  "Family",
  "Fantasy",
  "Found Footage",
  "Historical",
  "Horror",
  "Independent",
  "Legal",
  "Live Action",
  "Martial Arts",
  "Musical",
  "Mystery",
  "Noir",
  "Performance",
  "Political",
  "Romance",
  "Satire",
  "Science Fiction",
  "Short",
  "Silent",
  "Slasher",
  "Sports",
  "Spy",
  "Superhero",
  "Supernatural",
  "Suspense",
  "Teen",
  "Thriller",
  "War",
  "Western"
 ];

// genre.json dosyasındaki her bir öğe için
 for (let i = 0; i < genres.length; i++) {
  const genre = genres[i];

  // genre adlı dizideki değer ile güncelleme yap
  if (genresName[i]) {
   genre.name = genresName[i];
  }
 }

// Değişiklikleri genre.json dosyasına yazdır
 fs.writeFileSync('genres.json', JSON.stringify(genres));


};
const addIdDirectors =async () => {
 const directorData = fs.readFileSync('directors.json');
 const directors = await JSON.parse(directorData);
 const objectList = [
  {
   "_id": "645bf94916ff65bce0f485ec"
  },
  {
   "_id": "645bf949b0a94b1b719fb7a4"
  },
  {
   "_id": "645bf9493d39c15b1f5a329a"
  },
  {
   "_id": "645bf9492161a4caf5597cad"
  },
  {
   "_id": "645bf949ccd5eba67e4531bd"
  },
  {
   "_id": "645bf949b651eb5561cae066"
  },
  {
   "_id": "645bf94933a3cbaf91d9696c"
  },
  {
   "_id": "645bf949e4bc803d83321ecb"
  },
  {
   "_id": "645bf949eeba7c87f260de51"
  },
  {
   "_id": "645bf9497f40f4a6d43de453"
  },
  {
   "_id": "645bf949350c711208b9681e"
  },
  {
   "_id": "645bf949b324d9b163ae8c44"
  },
  {
   "_id": "645bf9498f5889e17390e743"
  },
  {
   "_id": "645bf9494f189c76c7629141"
  },
  {
   "_id": "645bf949efffdff56a98a533"
  },
  {
   "_id": "645bf9491e025cb9f0c73bab"
  },
  {
   "_id": "645bf949a517d8d241dfc02c"
  },
  {
   "_id": "645bf949aecbfe25194e72b1"
  },
  {
   "_id": "645bf9491555854df75c3bf8"
  },
  {
   "_id": "645bf949becdff2cd349c8ac"
  },
  {
   "_id": "645bf949ff9fd284bf549ea4"
  },
  {
   "_id": "645bf9494e88d03bf97a09a4"
  },
  {
   "_id": "645bf9494708a12ec6c43f8d"
  },
  {
   "_id": "645bf949b7a5dea22a100fde"
  },
  {
   "_id": "645bf949748f7484ff1f5b87"
  },
  {
   "_id": "645bf94999680d873d505175"
  },
  {
   "_id": "645bf94973cebdcc922334bc"
  },
  {
   "_id": "645bf949a729e2409a3cbe6e"
  },
  {
   "_id": "645bf949c0c25ced4bc8355c"
  },
  {
   "_id": "645bf9494178e350c9ff15cc"
  },
  {
   "_id": "645bf9493847c07d938e60b5"
  },
  {
   "_id": "645bf949d60f70a4bbe1fbc9"
  },
  {
   "_id": "645bf94964965431f137e7eb"
  },
  {
   "_id": "645bf949ad7ac6aa9d23eb5c"
  },
  {
   "_id": "645bf949848071542930a1fe"
  },
  {
   "_id": "645bf949d35b13f0731571c1"
  },
  {
   "_id": "645bf949a861cb1203440320"
  },
  {
   "_id": "645bf94911caafef8ff49ad0"
  },
  {
   "_id": "645bf949bf26ec4f2587ea24"
  },
  {
   "_id": "645bf9492ea232c88a85bc08"
  },
  {
   "_id": "645bf949b553d68dd005cdb8"
  },
  {
   "_id": "645bf9493b7c8a7ed0882209"
  },
  {
   "_id": "645bf949c2c8ef59fc27b6a1"
  },
  {
   "_id": "645bf949254221b5c338d690"
  },
  {
   "_id": "645bf9497e2ddb460f1eac60"
  },
  {
   "_id": "645bf949d64f9fac041aec2d"
  },
  {
   "_id": "645bf949c9d6c8628c258297"
  },
  {
   "_id": "645bf94995197e1a52b223f4"
  },
  {
   "_id": "645bf9498b41b74a8906e1c6"
  },
  {
   "_id": "645bf949599b7ed1d3a26d0f"
  },
  {
   "_id": "645bf9493336947d7ac4b043"
  },
  {
   "_id": "645bf949aaf6e111addc6edd"
  },
  {
   "_id": "645bf9493b2be18a98391b56"
  },
  {
   "_id": "645bf9497f14eae75daf4936"
  },
  {
   "_id": "645bf94962b7d74a1e795628"
  },
  {
   "_id": "645bf949e16d5e1e6a31129c"
  },
  {
   "_id": "645bf9496d242c0bd9b96e97"
  },
  {
   "_id": "645bf949a84a05b79a85a692"
  },
  {
   "_id": "645bf949f17d41a37688c6c0"
  },
  {
   "_id": "645bf949e2d6d09c2ae73fb6"
  },
  {
   "_id": "645bf949a11f0162275058d9"
  },
  {
   "_id": "645bf94948a70ba4ad823be7"
  },
  {
   "_id": "645bf9494bf01b5698434117"
  },
  {
   "_id": "645bf9491990c439c67ff3e8"
  },
  {
   "_id": "645bf94901c8792ccdaf189c"
  },
  {
   "_id": "645bf9491ac123d8e86c72fb"
  },
  {
   "_id": "645bf9490dcb6dd0ce6f559f"
  },
  {
   "_id": "645bf949292dd3f5044bb2f4"
  },
  {
   "_id": "645bf949f6ba62f41eeb4c27"
  },
  {
   "_id": "645bf9495af0abfcc9fc7294"
  },
  {
   "_id": "645bf949f594ceff2353de11"
  },
  {
   "_id": "645bf94963dd9d9e2082378e"
  },
  {
   "_id": "645bf949dfc1649939c3c9b0"
  },
  {
   "_id": "645bf949ad9aaab39feb0c5a"
  },
  {
   "_id": "645bf9495fc170db3ade5853"
  },
  {
   "_id": "645bf949ca30601e51ec2b72"
  },
  {
   "_id": "645bf94923d79b038192234a"
  },
  {
   "_id": "645bf94932c5d9a06f0cb475"
  },
  {
   "_id": "645bf949bf267ea9ff3d34d0"
  },
  {
   "_id": "645bf9499ef7977003e9c4ac"
  },
  {
   "_id": "645bf949f8e439143c0ff065"
  },
  {
   "_id": "645bf949445218644d8da0e7"
  },
  {
   "_id": "645bf94983770b6035b8341a"
  },
  {
   "_id": "645bf949e1350aea44ab2ba9"
  },
  {
   "_id": "645bf949efdc833bd2e7f14e"
  },
  {
   "_id": "645bf9499dde735238cbd9a0"
  },
  {
   "_id": "645bf94915eba73216cf172b"
  },
  {
   "_id": "645bf949c4a48ad9f500a839"
  },
  {
   "_id": "645bf949ab1d65244e083446"
  },
  {
   "_id": "645bf949ceb76e1b40e10510"
  },
  {
   "_id": "645bf94983cfc4427bff21bb"
  },
  {
   "_id": "645bf94984437d323605f28a"
  },
  {
   "_id": "645bf949ae632c5d883911dd"
  },
  {
   "_id": "645bf9499652605eb9c8663d"
  },
  {
   "_id": "645bf949b3cf3d96d5ec6443"
  },
  {
   "_id": "645bf949ec92857c143e2447"
  },
  {
   "_id": "645bf949e5b7b1df21057483"
  },
  {
   "_id": "645bf94909d42007240e07b9"
  },
  {
   "_id": "645bf949c26bd18d2b467276"
  },
  {
   "_id": "645bf9492195b7badafb512a"
  },
  {
   "_id": "645bf949ed062bed3589ac71"
  },
  {
   "_id": "645bf9497bcd184351d4405f"
  },
  {
   "_id": "645bf949188b7f4e89b3ff9f"
  },
  {
   "_id": "645bf949702ce067ae261e43"
  },
  {
   "_id": "645bf94990b22c8e6ccf2130"
  },
  {
   "_id": "645bf9497c9cbbdd88d05337"
  },
  {
   "_id": "645bf9497703bcf1b99d67cf"
  },
  {
   "_id": "645bf949041ab37e353d549a"
  },
  {
   "_id": "645bf9498619071a9e2d0180"
  },
  {
   "_id": "645bf94914c7c98a45d9bdd3"
  },
  {
   "_id": "645bf9496cd950bcde59a895"
  },
  {
   "_id": "645bf9498ee2ab43d4cf62cf"
  },
  {
   "_id": "645bf949c5ddc19e940ae2d6"
  },
  {
   "_id": "645bf9493feedac479419afe"
  },
  {
   "_id": "645bf94910c798b997ce2ab4"
  },
  {
   "_id": "645bf949f819357a9236565d"
  },
  {
   "_id": "645bf94962d66a4f0c1a54f3"
  },
  {
   "_id": "645bf949b774f6f4e2f60aa7"
  },
  {
   "_id": "645bf9496185242fd54875f6"
  },
  {
   "_id": "645bf9497877f5d2d70dfca4"
  },
  {
   "_id": "645bf9492a65898b13f0fbef"
  },
  {
   "_id": "645bf94943baada43ee1b6d6"
  },
  {
   "_id": "645bf949e5e6975f8edab239"
  },
  {
   "_id": "645bf94909846d1ff1c3a125"
  },
  {
   "_id": "645bf9497c9ad87d13b261e7"
  },
  {
   "_id": "645bf949db1abd8cb1784296"
  },
  {
   "_id": "645bf949a9429facf5afffd7"
  },
  {
   "_id": "645bf94993db604a7870d144"
  },
  {
   "_id": "645bf949196f2fc95389300e"
  },
  {
   "_id": "645bf949b91af7d99cd07ea7"
  },
  {
   "_id": "645bf9494da9ca22a0ecd182"
  },
  {
   "_id": "645bf949dc377901003c3f1a"
  },
  {
   "_id": "645bf949868797c3b252ffa4"
  },
  {
   "_id": "645bf94986c66dedd3c81497"
  },
  {
   "_id": "645bf949729d31470169b3ef"
  },
  {
   "_id": "645bf949213b14f4e4f5b626"
  },
  {
   "_id": "645bf949dcef9404fdb0a287"
  },
  {
   "_id": "645bf949eeb744d867700a25"
  },
  {
   "_id": "645bf9490262a57a5073e02a"
  },
  {
   "_id": "645bf949879d28f7fcb9e5ef"
  },
  {
   "_id": "645bf949606d750247a1d396"
  },
  {
   "_id": "645bf9497c175ace2d1bea5f"
  },
  {
   "_id": "645bf9496152978d1b5b096a"
  },
  {
   "_id": "645bf94910cd33ee9fad3f8e"
  },
  {
   "_id": "645bf949cc0d0b201626d671"
  },
  {
   "_id": "645bf949b62a55778331d2bf"
  },
  {
   "_id": "645bf94999fb08dcc6e2bb43"
  },
  {
   "_id": "645bf949d96fcbde3dde59a8"
  },
  {
   "_id": "645bf949ab84538694ade472"
  },
  {
   "_id": "645bf9499d99e83f2475c858"
  },
  {
   "_id": "645bf949662f57175b21c993"
  },
  {
   "_id": "645bf949758c2f039916759f"
  },
  {
   "_id": "645bf9491960d876ba8f2667"
  },
  {
   "_id": "645bf9499bf94c2873e5ac49"
  },
  {
   "_id": "645bf949e6268fb723da0191"
  },
  {
   "_id": "645bf949e7faae93584f6d88"
  },
  {
   "_id": "645bf9492ba910688d68b3bb"
  },
  {
   "_id": "645bf9498239d3c2de80c89f"
  },
  {
   "_id": "645bf949b5c620ae47b8b55f"
  },
  {
   "_id": "645bf949af80178c10caaa71"
  },
  {
   "_id": "645bf949b05d69eb673253a7"
  },
  {
   "_id": "645bf9498bfe9d9edf0c0c78"
  },
  {
   "_id": "645bf949e50b84cbccb54000"
  },
  {
   "_id": "645bf94931eaacc745dcc880"
  },
  {
   "_id": "645bf949fb5b99298fb57899"
  },
  {
   "_id": "645bf949deafd54097c77acd"
  },
  {
   "_id": "645bf949ad5b5391118c31b7"
  },
  {
   "_id": "645bf94927364ee2ce03b928"
  },
  {
   "_id": "645bf9490e5103f6db2a2d90"
  },
  {
   "_id": "645bf949f2fbdcf723fb8cb2"
  },
  {
   "_id": "645bf94901a9b314fe7bc743"
  },
  {
   "_id": "645bf9495795733dcb3330a5"
  },
  {
   "_id": "645bf9494b8eab21fccf9577"
  },
  {
   "_id": "645bf949fe02152a48ec848c"
  },
  {
   "_id": "645bf949bd39434401442208"
  },
  {
   "_id": "645bf949a66283ce88a02e33"
  },
  {
   "_id": "645bf9497867a506ce4d86ca"
  },
  {
   "_id": "645bf949a5f74e132cb071e6"
  },
  {
   "_id": "645bf94952a489e7df0064a6"
  },
  {
   "_id": "645bf949a8b93087fc076ee1"
  },
  {
   "_id": "645bf949c68329a90b35c475"
  },
  {
   "_id": "645bf9494387f8de3f24f4ef"
  },
  {
   "_id": "645bf949c477190e4c67246c"
  },
  {
   "_id": "645bf949ab635c7287e7f31a"
  },
  {
   "_id": "645bf94974dca15d911d54e8"
  },
  {
   "_id": "645bf9497deeb7be029e470e"
  },
  {
   "_id": "645bf94981c4502426faf0ce"
  },
  {
   "_id": "645bf94985e38802a4f330ad"
  },
  {
   "_id": "645bf949b1baa5bb683d9e16"
  },
  {
   "_id": "645bf949a5ffca08733ce059"
  },
  {
   "_id": "645bf949999be317eb9c350b"
  },
  {
   "_id": "645bf9498e1624d0b2ecb143"
  },
  {
   "_id": "645bf94914d218eabe90915e"
  },
  {
   "_id": "645bf9490f3f1e1a8e5767bd"
  },
  {
   "_id": "645bf9496685abeba362ef89"
  },
  {
   "_id": "645bf94962e56c8605e6ab27"
  },
  {
   "_id": "645bf949dd3b14509873381d"
  },
  {
   "_id": "645bf9496126cf6e99d6bf90"
  },
  {
   "_id": "645bf949594e260c1e2d8fcc"
  },
  {
   "_id": "645bf949b29934475290d55c"
  },
  {
   "_id": "645bf949fbd5c6f987f29cc7"
  },
  {
   "_id": "645bf94926391d23dc0dff42"
  },
  {
   "_id": "645bf94905e811b7986dd660"
  },
  {
   "_id": "645bf9494230c340ba001995"
  },
  {
   "_id": "645bf949103c05b2c5edeb4b"
  },
  {
   "_id": "645bf949b3cb4fd4adb77609"
  },
  {
   "_id": "645bf949276649a33db320a9"
  },
  {
   "_id": "645bf9490955df4e0e9f7067"
  },
  {
   "_id": "645bf949cfe4633c6fe81816"
  },
  {
   "_id": "645bf949f50d918fe874bd37"
  },
  {
   "_id": "645bf9490122eb1c276d90b1"
  },
  {
   "_id": "645bf949e356aab71a19eee5"
  },
  {
   "_id": "645bf949dd44aa60524f426c"
  },
  {
   "_id": "645bf949e76bb330d8da4986"
  },
  {
   "_id": "645bf94949bd347b5dfb6d1b"
  },
  {
   "_id": "645bf9493ada94e0aa484358"
  },
  {
   "_id": "645bf949b26a863ae369e57b"
  },
  {
   "_id": "645bf949d7b6a93419bcab47"
  },
  {
   "_id": "645bf9492e604193a6d64989"
  },
  {
   "_id": "645bf949c1f501b46cfb420e"
  },
  {
   "_id": "645bf9493227cc140ec35d87"
  },
  {
   "_id": "645bf94903ed03e493c37279"
  },
  {
   "_id": "645bf94951fac481f6b56f05"
  },
  {
   "_id": "645bf9494c8a285c59a45c05"
  },
  {
   "_id": "645bf949314da4ac583cb4d9"
  },
  {
   "_id": "645bf9498bc677cbddd0e1d1"
  },
  {
   "_id": "645bf949a8b3375d46d10893"
  },
  {
   "_id": "645bf9496c6d04a4b53812f2"
  },
  {
   "_id": "645bf94997140c2e6b003b55"
  },
  {
   "_id": "645bf949478e8e53e53ff5f6"
  },
  {
   "_id": "645bf949eba19a7bb750de67"
  },
  {
   "_id": "645bf949eba032cdf9cee7af"
  },
  {
   "_id": "645bf949ced5d0f492442422"
  },
  {
   "_id": "645bf949753ebc985b52ed10"
  },
  {
   "_id": "645bf9495a48245bb4c7d68f"
  },
  {
   "_id": "645bf949ec26fe88846c19eb"
  },
  {
   "_id": "645bf949bb4e422a9e3cb9af"
  },
  {
   "_id": "645bf94947fe4e2c2b0e29c1"
  },
  {
   "_id": "645bf94937bb30bb3657b2e3"
  },
  {
   "_id": "645bf949a424ba4ff1e7f13a"
  },
  {
   "_id": "645bf949827ebd03cc15a4bc"
  },
  {
   "_id": "645bf94981b2c6b73ace8ee8"
  },
  {
   "_id": "645bf949ce6c8356caf9f412"
  },
  {
   "_id": "645bf949174bc21d3648c25e"
  },
  {
   "_id": "645bf949b36dd05026815592"
  },
  {
   "_id": "645bf94932ec38ebf4b127cb"
  },
  {
   "_id": "645bf949bba8ae6e552d8338"
  },
  {
   "_id": "645bf949a392a925fd84ad6d"
  },
  {
   "_id": "645bf9497b5a30c0a2659e63"
  },
  {
   "_id": "645bf9491cc7fe35958a8aa7"
  },
  {
   "_id": "645bf9497d432b8afb02eb90"
  },
  {
   "_id": "645bf94926ac69aa430d04a6"
  },
  {
   "_id": "645bf949593c78e7ad6f2e08"
  },
  {
   "_id": "645bf949909a29faa77f7a6c"
  },
  {
   "_id": "645bf949d1488ee9fd9ef300"
  },
  {
   "_id": "645bf949f1c2c653d7c86ab8"
  },
  {
   "_id": "645bf949f7078665d01c9297"
  },
  {
   "_id": "645bf94954ec97013cadbb68"
  },
  {
   "_id": "645bf9494a0b70d552355e1d"
  },
  {
   "_id": "645bf949cf8131de5779c5f9"
  },
  {
   "_id": "645bf949c91482f73fff934d"
  },
  {
   "_id": "645bf949a6e806004f0f6629"
  },
  {
   "_id": "645bf94958d978d95dfa0986"
  },
  {
   "_id": "645bf94946c63239d07d0ed4"
  },
  {
   "_id": "645bf94992736de4eba0c27c"
  },
  {
   "_id": "645bf9494fbf4ac8cdd8bd2d"
  },
  {
   "_id": "645bf9492ff84bed464d9e85"
  },
  {
   "_id": "645bf94938651d47ef5e4af3"
  },
  {
   "_id": "645bf94990739d5b86f8239e"
  },
  {
   "_id": "645bf949e4117db2828a8ca6"
  },
  {
   "_id": "645bf94926e940fbf4e1b462"
  },
  {
   "_id": "645bf94922563726e84161b7"
  },
  {
   "_id": "645bf9494828e721876de499"
  },
  {
   "_id": "645bf949489054fb25aa0697"
  },
  {
   "_id": "645bf949406030985e5b824a"
  },
  {
   "_id": "645bf949cc89bd6ea4112c72"
  },
  {
   "_id": "645bf9498faf1b401d57d48e"
  },
  {
   "_id": "645bf949275754d8e8e271a1"
  },
  {
   "_id": "645bf949ac33a6a9b5cce46c"
  },
  {
   "_id": "645bf949d367de25421ea142"
  },
  {
   "_id": "645bf9491593c65a989f64c8"
  },
  {
   "_id": "645bf9496c91b1f61fcbb40d"
  },
  {
   "_id": "645bf949aada1f4b6601eb0a"
  },
  {
   "_id": "645bf94934bb3565af3987b6"
  },
  {
   "_id": "645bf94906aa8a7777049ada"
  },
  {
   "_id": "645bf94999dcb96c208de3d2"
  },
  {
   "_id": "645bf949b19773865604f5b4"
  },
  {
   "_id": "645bf949ca26b3472b8746c6"
  },
  {
   "_id": "645bf94959a8c4e3f659fac0"
  },
  {
   "_id": "645bf9493e2e52b22983ab97"
  },
  {
   "_id": "645bf9494846f32fe00b4889"
  },
  {
   "_id": "645bf94970c323e3d9a305f8"
  },
  {
   "_id": "645bf949d942cbf18ddb9101"
  },
  {
   "_id": "645bf9492944445eb16ea5da"
  },
  {
   "_id": "645bf949ddf46cbb5d3efa98"
  },
  {
   "_id": "645bf949f4122c4d6eefc66f"
  },
  {
   "_id": "645bf949a5ed8472150cd864"
  },
  {
   "_id": "645bf949eaed0dd1005ae912"
  },
  {
   "_id": "645bf949d60e57f87dbc8689"
  },
  {
   "_id": "645bf9493c83643d645aed70"
  },
  {
   "_id": "645bf9499052b11e6e6c858d"
  },
  {
   "_id": "645bf949d1be9f669333c9ba"
  },
  {
   "_id": "645bf9495badfd538a99b3a8"
  },
  {
   "_id": "645bf94976309c4c5293f28d"
  },
  {
   "_id": "645bf949666b6e7912722b62"
  },
  {
   "_id": "645bf949a948538bfb83f96f"
  },
  {
   "_id": "645bf949936d3dd4a90ec9e4"
  },
  {
   "_id": "645bf949f976363b90a60e43"
  },
  {
   "_id": "645bf949f545d36e567da59f"
  },
  {
   "_id": "645bf949dfb69bb023f5f737"
  },
  {
   "_id": "645bf9493862254d682967a2"
  },
  {
   "_id": "645bf949ea7831a58f67a984"
  },
  {
   "_id": "645bf9497a6199b93ad1a434"
  },
  {
   "_id": "645bf94976c6cbed3e8b5020"
  },
  {
   "_id": "645bf949f58b8b2eea6b586a"
  },
  {
   "_id": "645bf9496cf96844ba3966aa"
  },
  {
   "_id": "645bf94917ea423942db5b2e"
  },
  {
   "_id": "645bf94928937ce9320200fa"
  },
  {
   "_id": "645bf949331e18fe3e897aab"
  },
  {
   "_id": "645bf94979ed28ad979a860e"
  },
  {
   "_id": "645bf949ab10ca3491643ba4"
  },
  {
   "_id": "645bf94935cbdfabdf934108"
  },
  {
   "_id": "645bf949022b0cce1d2203a0"
  },
  {
   "_id": "645bf9492dbf76b02d9ea5a5"
  },
  {
   "_id": "645bf949bac677f27c4cf4d6"
  },
  {
   "_id": "645bf9496b517e2c090191af"
  },
  {
   "_id": "645bf949985ca2e3bb3a04e7"
  },
  {
   "_id": "645bf9491ea1a7caf32718ed"
  },
  {
   "_id": "645bf94918b289f26c43b466"
  },
  {
   "_id": "645bf949a950ffd732f11b53"
  },
  {
   "_id": "645bf9492424658ab8c3ecf5"
  },
  {
   "_id": "645bf94943fe816a4bae6473"
  },
  {
   "_id": "645bf949b60f766b4bcb656a"
  },
  {
   "_id": "645bf9490720c30ec2d7e4c7"
  },
  {
   "_id": "645bf949e01fd649ed039983"
  },
  {
   "_id": "645bf949649d932169e0e15d"
  },
  {
   "_id": "645bf949e24687997dcdc82e"
  },
  {
   "_id": "645bf949e1676b03f3ba9a9b"
  },
  {
   "_id": "645bf949948acd862ec7f358"
  },
  {
   "_id": "645bf949b61908f2d92a2359"
  },
  {
   "_id": "645bf9496cc021d513a0de82"
  },
  {
   "_id": "645bf949231db422acdad778"
  },
  {
   "_id": "645bf9497c995d5a7b2011e0"
  },
  {
   "_id": "645bf94975eafac9fe0055be"
  },
  {
   "_id": "645bf949c57b4996407b1f90"
  },
  {
   "_id": "645bf94956183ea02bca5e9e"
  },
  {
   "_id": "645bf9498c2545c40edf8b6c"
  },
  {
   "_id": "645bf94947f27707035b391f"
  },
  {
   "_id": "645bf949e0c93b2e0f297609"
  },
  {
   "_id": "645bf949aec2feabdfa53a86"
  },
  {
   "_id": "645bf949c71b82cf73b812cb"
  },
  {
   "_id": "645bf949eedcf139d828578a"
  },
  {
   "_id": "645bf9499b39b12d187be476"
  },
  {
   "_id": "645bf9491516476920cc5350"
  },
  {
   "_id": "645bf9495a02860f029ab70e"
  },
  {
   "_id": "645bf94927aa506dd53961f0"
  },
  {
   "_id": "645bf949d8305befcfaf28c0"
  },
  {
   "_id": "645bf949b901a49f8fb557fe"
  },
  {
   "_id": "645bf9499b12242c49816b1b"
  },
  {
   "_id": "645bf949431bb47d9791e673"
  },
  {
   "_id": "645bf94995eb3def85cece98"
  },
  {
   "_id": "645bf9493521c3dd7e9ad746"
  },
  {
   "_id": "645bf9492481b29442d8140d"
  },
  {
   "_id": "645bf949538c6121408a90d6"
  },
  {
   "_id": "645bf94901a32f014f166a29"
  },
  {
   "_id": "645bf949b2b4c16dee2f209f"
  },
  {
   "_id": "645bf9490e33702e5f78e389"
  },
  {
   "_id": "645bf949b25a0a383ec1c43b"
  },
  {
   "_id": "645bf949c2d6911b737b7405"
  },
  {
   "_id": "645bf9496a462cc93b5bb54b"
  },
  {
   "_id": "645bf949f1021db43fdca0d3"
  },
  {
   "_id": "645bf949e0bae53ced051b4a"
  },
  {
   "_id": "645bf949fc0c10a12bb411c4"
  }
 ]

//genre.json dosyasındaki her bir öğe için
 for (let i = 0; i < directors.length; i++) {
  const director = directors[i];

  // genre adlı dizideki değer ile güncelleme yap
  if (objectList[i]) {
   director._id = objectList[i]._id;
  }
 }

// Değişiklikleri genre.json dosyasına yazdır
 fs.writeFileSync('directors.json', JSON.stringify(directors));

};


const starsedit =async () => {
 const starsData = fs.readFileSync('stars.json');
 const stars = await JSON.parse(starsData);
 const objectList = [
  {
   "_id": "645c005edec4859844b2d063"
  },
  {
   "_id": "645c005ead64774ddedeb68c"
  },
  {
   "_id": "645c005ebdb584919d7cbf94"
  },
  {
   "_id": "645c005ee6de473c108b4a19"
  },
  {
   "_id": "645c005edab8aa4698a99e34"
  },
  {
   "_id": "645c005e159f6594e71624d8"
  },
  {
   "_id": "645c005e2b851a83a0df7ca5"
  },
  {
   "_id": "645c005e190c7578df698249"
  },
  {
   "_id": "645c005ec3202338a267f9e5"
  },
  {
   "_id": "645c005ece732905296828c0"
  },
  {
   "_id": "645c005e96854e7fcf3a3268"
  },
  {
   "_id": "645c005eb432ece1c990cb5b"
  },
  {
   "_id": "645c005e6213a4d08c3ee560"
  },
  {
   "_id": "645c005e8d744c9ae368997e"
  },
  {
   "_id": "645c005e4c017c6f91e75987"
  },
  {
   "_id": "645c005e31aad4d6448c41ae"
  },
  {
   "_id": "645c005e3909b7fc3ea62a12"
  },
  {
   "_id": "645c005eccf4a5cd9b670e4a"
  },
  {
   "_id": "645c005e6455e2bdd40dca3d"
  },
  {
   "_id": "645c005e70617051e7856583"
  },
  {
   "_id": "645c005edc3d5260a912ad81"
  },
  {
   "_id": "645c005e88ce2494185c7efa"
  },
  {
   "_id": "645c005e2ca0450b706667f8"
  },
  {
   "_id": "645c005ea759578ea53c38db"
  },
  {
   "_id": "645c005ef613f61563d222e1"
  },
  {
   "_id": "645c005edf3bc35a2df0be74"
  },
  {
   "_id": "645c005eeba15c107d06c6b4"
  },
  {
   "_id": "645c005eddfbddc969d5a37f"
  },
  {
   "_id": "645c005e766712c0feb0d5e0"
  },
  {
   "_id": "645c005e878c6aecef6e0ffd"
  },
  {
   "_id": "645c005e020d307e63085500"
  },
  {
   "_id": "645c005eea73fe83b6cb14bc"
  },
  {
   "_id": "645c005e69b22c65771e1c60"
  },
  {
   "_id": "645c005eea3949553a81d913"
  },
  {
   "_id": "645c005ea85ff021bbe5ff43"
  },
  {
   "_id": "645c005ea194b3e3787db598"
  },
  {
   "_id": "645c005e4bf1f25d16720125"
  },
  {
   "_id": "645c005eab02078382880105"
  },
  {
   "_id": "645c005ea857d45b0c99258c"
  },
  {
   "_id": "645c005e609444dcc2ea4fe9"
  },
  {
   "_id": "645c005e449a4b58938881d2"
  },
  {
   "_id": "645c005e868f553caa4fc795"
  },
  {
   "_id": "645c005ea59e2251bf50cebd"
  },
  {
   "_id": "645c005e28627298c98a90fa"
  },
  {
   "_id": "645c005e3ca03a88d721374e"
  },
  {
   "_id": "645c005ed32327cf36620d8f"
  },
  {
   "_id": "645c005ec93ac354730a060c"
  },
  {
   "_id": "645c005ed4782cda0e22c42f"
  },
  {
   "_id": "645c005ee97060c863485773"
  },
  {
   "_id": "645c005ecca280a8fd5ba2d4"
  },
  {
   "_id": "645c005ebaeeb74543fa31bf"
  },
  {
   "_id": "645c005e4d81720561316769"
  },
  {
   "_id": "645c005e5c953bdd2ffb0f68"
  },
  {
   "_id": "645c005e3d29509af86326d0"
  },
  {
   "_id": "645c005e9b860f788facdcc9"
  },
  {
   "_id": "645c005ed7fd93669444c744"
  },
  {
   "_id": "645c005ef3280c69ce219d60"
  },
  {
   "_id": "645c005ea48a1ee8ff0ab373"
  },
  {
   "_id": "645c005eb144df6c019558f2"
  },
  {
   "_id": "645c005ef3c8f6e92e2464c7"
  },
  {
   "_id": "645c005eadab44fdbf7cdf33"
  },
  {
   "_id": "645c005ebfaacc5675150cac"
  },
  {
   "_id": "645c005e982cf9606cdfb1f6"
  },
  {
   "_id": "645c005ed151c86c0d169ce3"
  },
  {
   "_id": "645c005ee24f04d05c43009a"
  },
  {
   "_id": "645c005e6d99298fff82413f"
  },
  {
   "_id": "645c005eb6a3849d0e43c3d6"
  },
  {
   "_id": "645c005e612e088f46501960"
  },
  {
   "_id": "645c005ec4c85043073d1258"
  },
  {
   "_id": "645c005e9b318131a3ede160"
  },
  {
   "_id": "645c005e0636eaf84739b8fe"
  },
  {
   "_id": "645c005e47919e5a15d5f823"
  },
  {
   "_id": "645c005e3be9c4978fe6f423"
  },
  {
   "_id": "645c005e389881991a697739"
  },
  {
   "_id": "645c005e379ffcc47742c901"
  },
  {
   "_id": "645c005ef3ba341e8cb22887"
  },
  {
   "_id": "645c005e2cecba4eaa20579c"
  },
  {
   "_id": "645c005e54c156d582842718"
  },
  {
   "_id": "645c005e5a29d11f074ba14f"
  },
  {
   "_id": "645c005e751e3d6ca4b84d51"
  },
  {
   "_id": "645c005e285f8e6abeb4d07e"
  },
  {
   "_id": "645c005e164802faedb0d1ae"
  },
  {
   "_id": "645c005e8f711ccf9f0e0d91"
  },
  {
   "_id": "645c005e9f72c174b0edd07f"
  },
  {
   "_id": "645c005e7452a17e293f5e8b"
  },
  {
   "_id": "645c005e95d994bb22a469c3"
  },
  {
   "_id": "645c005e13f74af6cc250c0f"
  },
  {
   "_id": "645c005e678a0839005e6916"
  },
  {
   "_id": "645c005edd63f418f4aa355d"
  },
  {
   "_id": "645c005eb23f605250493b24"
  },
  {
   "_id": "645c005efa7d59c33e61d4bb"
  },
  {
   "_id": "645c005eaf02fd01f14b1bb5"
  },
  {
   "_id": "645c005e0bf27aef289221e4"
  },
  {
   "_id": "645c005e84a571582c1e96c6"
  },
  {
   "_id": "645c005ede6e538186694fc5"
  },
  {
   "_id": "645c005e99c2b95ae45e7b83"
  },
  {
   "_id": "645c005e1a19d0d28ad1e5bb"
  },
  {
   "_id": "645c005e793d79a358748351"
  },
  {
   "_id": "645c005e75f64c9daf391840"
  },
  {
   "_id": "645c005e93369db1755dd92b"
  },
  {
   "_id": "645c005eb6a2abf1b0d41087"
  },
  {
   "_id": "645c005ed25fde716959ae80"
  },
  {
   "_id": "645c005e5c2b87136042bf9f"
  },
  {
   "_id": "645c005e20227cc9a225c2f3"
  },
  {
   "_id": "645c005e723820ea4026eb61"
  },
  {
   "_id": "645c005e6c62cff5f21633ee"
  },
  {
   "_id": "645c005e971ac3dbf5c77097"
  },
  {
   "_id": "645c005ecd1810c8a76ba63e"
  },
  {
   "_id": "645c005ec32a81d4505aa834"
  },
  {
   "_id": "645c005e36983e08fba4db87"
  },
  {
   "_id": "645c005e4a2856e9a6647d65"
  },
  {
   "_id": "645c005e91f99d4a1442a052"
  },
  {
   "_id": "645c005ed188018442689742"
  },
  {
   "_id": "645c005e3a7301f8c76d4842"
  },
  {
   "_id": "645c005eb37bbc46a1aff714"
  },
  {
   "_id": "645c005e3645c4f9763167e0"
  },
  {
   "_id": "645c005e3d2a75a693c8bcc2"
  },
  {
   "_id": "645c005eb4dbe74736d42a18"
  },
  {
   "_id": "645c005e3ad025073235cb03"
  },
  {
   "_id": "645c005eccded17dbd560cab"
  },
  {
   "_id": "645c005e5a29d9354006a4dc"
  },
  {
   "_id": "645c005e45b76f7c7a9b2a40"
  },
  {
   "_id": "645c005e66e683fd715a9c63"
  },
  {
   "_id": "645c005e888473b5cd081324"
  },
  {
   "_id": "645c005e750250ff1541cb61"
  },
  {
   "_id": "645c005e971ee2002de046f9"
  },
  {
   "_id": "645c005ee4ae943c876a6c4e"
  },
  {
   "_id": "645c005eff43303dfdd55614"
  },
  {
   "_id": "645c005e200b2b15ed811923"
  },
  {
   "_id": "645c005e7acfeb30bfe3142b"
  },
  {
   "_id": "645c005e6038b352180d2dbe"
  },
  {
   "_id": "645c005e54755e5eb0bf8c20"
  },
  {
   "_id": "645c005eef0686ef87f9cbcd"
  },
  {
   "_id": "645c005ea9b31192512777be"
  },
  {
   "_id": "645c005ec50e74c20119c82a"
  },
  {
   "_id": "645c005e69be0946f0cace80"
  },
  {
   "_id": "645c005ed4cf07647ee77fe3"
  },
  {
   "_id": "645c005e8c260b5f130ce5a8"
  },
  {
   "_id": "645c005e88747649d5e91a75"
  },
  {
   "_id": "645c005e297ce4e89a1449e9"
  },
  {
   "_id": "645c005e3deaa068b86e82f3"
  },
  {
   "_id": "645c005e351edd38ab8640df"
  },
  {
   "_id": "645c005e1ef083f8503ee255"
  },
  {
   "_id": "645c005ef5f4bfedeb62441c"
  },
  {
   "_id": "645c005e2b7afe279c160907"
  },
  {
   "_id": "645c005eb806b12ada44c2e4"
  },
  {
   "_id": "645c005ea5b03fe040292efa"
  },
  {
   "_id": "645c005e86eeae7e833b8f2a"
  },
  {
   "_id": "645c005e2828e0bf2f2116f4"
  },
  {
   "_id": "645c005ef9fa72a03e6de3c5"
  },
  {
   "_id": "645c005e61d1808f166caacf"
  },
  {
   "_id": "645c005e91c07bb021ad76dd"
  },
  {
   "_id": "645c005e67308a788bf5f005"
  },
  {
   "_id": "645c005e1f53a9205694f17b"
  },
  {
   "_id": "645c005e55aa555419c5c11c"
  },
  {
   "_id": "645c005e817b35c305875c9d"
  },
  {
   "_id": "645c005e2bb84243f17c9c2e"
  },
  {
   "_id": "645c005efda4d836e5208e68"
  },
  {
   "_id": "645c005e1d4c38786c9d779c"
  },
  {
   "_id": "645c005e42af2058c05cd4f2"
  },
  {
   "_id": "645c005eb916afbf4a063ea4"
  },
  {
   "_id": "645c005e2e435b769eda7e9c"
  },
  {
   "_id": "645c005e611e29fdd03ec7c1"
  },
  {
   "_id": "645c005e9c437231071bd8fa"
  },
  {
   "_id": "645c005ec227a32a25f15133"
  },
  {
   "_id": "645c005e93fac80f793b2f4c"
  },
  {
   "_id": "645c005eddcf242995f2d1a6"
  },
  {
   "_id": "645c005eee8af931f21f845f"
  },
  {
   "_id": "645c005e1f38ee8df20ca01c"
  },
  {
   "_id": "645c005eefeac22c2bfa8011"
  },
  {
   "_id": "645c005e12301046a47b3f33"
  },
  {
   "_id": "645c005ee9cdf32217e295d8"
  },
  {
   "_id": "645c005eaa387d705d07830b"
  },
  {
   "_id": "645c005edca6cb4ce2b88593"
  },
  {
   "_id": "645c005e33a4fa3fc8554ee0"
  },
  {
   "_id": "645c005ef68613b60cde2cef"
  },
  {
   "_id": "645c005e9f9ee77808c86e58"
  },
  {
   "_id": "645c005ed3a168ca8adc13d1"
  },
  {
   "_id": "645c005e490a4ec18fc94033"
  },
  {
   "_id": "645c005ef8bce0446eafe264"
  },
  {
   "_id": "645c005e286d75d60ba89709"
  },
  {
   "_id": "645c005ee7912b992aea195a"
  },
  {
   "_id": "645c005ea0c2a0d92fa981a8"
  },
  {
   "_id": "645c005e394ed4eebe766475"
  },
  {
   "_id": "645c005ea914151b56be0cbc"
  },
  {
   "_id": "645c005ec594b82dc932aa4f"
  },
  {
   "_id": "645c005e504d30cb3aa851f7"
  },
  {
   "_id": "645c005ed8c7c46980fb6d37"
  },
  {
   "_id": "645c005e10da6a33f2ec87aa"
  },
  {
   "_id": "645c005e60389f8ad3ff33a7"
  },
  {
   "_id": "645c005ea92f27c1074f3089"
  },
  {
   "_id": "645c005eebb434ae11df5578"
  },
  {
   "_id": "645c005ee1360b3a95408ed7"
  },
  {
   "_id": "645c005ea14e0b941decbc67"
  },
  {
   "_id": "645c005e27752eca00a91e22"
  },
  {
   "_id": "645c005ed5188c8cf255ff6e"
  },
  {
   "_id": "645c005ea4716352e9897ff8"
  },
  {
   "_id": "645c005e5695abd99b9cf8ac"
  },
  {
   "_id": "645c005e8c1c0eac6ec4c2ff"
  },
  {
   "_id": "645c005ee7c0ea633abdadc8"
  },
  {
   "_id": "645c005e5b5bf17c17ef4924"
  },
  {
   "_id": "645c005eb88ffeeaa91d2caa"
  },
  {
   "_id": "645c005e7c4c8b8c0b91eefa"
  },
  {
   "_id": "645c005e30b148136f0c5fca"
  },
  {
   "_id": "645c005e91c1ee344282d59a"
  },
  {
   "_id": "645c005ec453711c0294767e"
  },
  {
   "_id": "645c005e6d992a85a5b51802"
  },
  {
   "_id": "645c005ea3704a1aa96e18cd"
  },
  {
   "_id": "645c005e4624bd731aede42d"
  },
  {
   "_id": "645c005e32afdae5d6f59254"
  },
  {
   "_id": "645c005e65f790ff0dd7dfb3"
  },
  {
   "_id": "645c005ebd3201a5028aa52d"
  },
  {
   "_id": "645c005ed59b1ae1efc2a1a3"
  },
  {
   "_id": "645c005e002a47aa3f8cfebc"
  },
  {
   "_id": "645c005e62b2508cb13a65d3"
  },
  {
   "_id": "645c005ee2afb933a5e7bde7"
  },
  {
   "_id": "645c005e7c1ab3028ea89119"
  },
  {
   "_id": "645c005eb34c873ed66948ba"
  },
  {
   "_id": "645c005ee3ff0e7a972edb64"
  },
  {
   "_id": "645c005ed97b679e8edfcaee"
  },
  {
   "_id": "645c005ef4ef3290805bff6d"
  },
  {
   "_id": "645c005ebc300d1800d309f6"
  },
  {
   "_id": "645c005ea0649e51aaf5549a"
  },
  {
   "_id": "645c005e089a5978f3625c0f"
  },
  {
   "_id": "645c005eeb7a2d1629880988"
  },
  {
   "_id": "645c005e8024fa34d50fe894"
  },
  {
   "_id": "645c005e987bcd4af0cc8e78"
  },
  {
   "_id": "645c005e925361db6ff34887"
  },
  {
   "_id": "645c005e2992a493fdc60d97"
  },
  {
   "_id": "645c005ebc521f2efd3cc25d"
  },
  {
   "_id": "645c005ee38e9e3b009dd100"
  },
  {
   "_id": "645c005e31b9d739b1a3c26d"
  },
  {
   "_id": "645c005e3ded6f5a1450e5d7"
  },
  {
   "_id": "645c005e34d7e804a169666f"
  },
  {
   "_id": "645c005e7a168adb677485ff"
  },
  {
   "_id": "645c005e8cb547f436d25940"
  },
  {
   "_id": "645c005e1fd29c8035b2daf9"
  },
  {
   "_id": "645c005e1ba57be12cef2889"
  },
  {
   "_id": "645c005e94991c55a8f77adb"
  },
  {
   "_id": "645c005ed4c988109d6d930f"
  },
  {
   "_id": "645c005eb3ccfd6b582258c0"
  },
  {
   "_id": "645c005e779808cd5229aca9"
  },
  {
   "_id": "645c005efce5c8bd52186519"
  },
  {
   "_id": "645c005e58cf5776398b3b96"
  },
  {
   "_id": "645c005e3ba018f5dba7d414"
  },
  {
   "_id": "645c005e020d07d80b0f580b"
  },
  {
   "_id": "645c005e7191853cb050367b"
  },
  {
   "_id": "645c005ede54277b763b7274"
  },
  {
   "_id": "645c005ebeb4e7d425f52cde"
  },
  {
   "_id": "645c005e97cb3722e5fb7b58"
  },
  {
   "_id": "645c005e1e2982ad0d92c280"
  },
  {
   "_id": "645c005e5ca214de9adaa182"
  },
  {
   "_id": "645c005e2eab64d8993fbf72"
  },
  {
   "_id": "645c005e5f0feb7564bd87a7"
  },
  {
   "_id": "645c005e8bb673529c399b33"
  },
  {
   "_id": "645c005eac751e1b30254053"
  },
  {
   "_id": "645c005e6ebdfda8308578ac"
  },
  {
   "_id": "645c005e5efa25ccb81c8eae"
  },
  {
   "_id": "645c005e858a42bb71c3fdf8"
  },
  {
   "_id": "645c005e8f6ae5abdbd86a5f"
  },
  {
   "_id": "645c005ebc76613d68e5b769"
  },
  {
   "_id": "645c005ec6d9a28b1ab710b2"
  },
  {
   "_id": "645c005e8e34866146cf8610"
  },
  {
   "_id": "645c005e34d3ce3138a8a4f4"
  },
  {
   "_id": "645c005e316762d46bd4719c"
  },
  {
   "_id": "645c005eeb2576a27dc9c865"
  },
  {
   "_id": "645c005e8170c2be8629fc45"
  },
  {
   "_id": "645c005eb0c27e2e126d0d36"
  },
  {
   "_id": "645c005e8e110f992aab97ea"
  },
  {
   "_id": "645c005e38638d04be67368c"
  },
  {
   "_id": "645c005e372a7575eaeffddf"
  },
  {
   "_id": "645c005e6eab1c344d8ba544"
  },
  {
   "_id": "645c005e7a49bfa01ff025a3"
  },
  {
   "_id": "645c005ecf57bae12e78a9af"
  },
  {
   "_id": "645c005ef3b6775d7a734183"
  },
  {
   "_id": "645c005e0315c2e54ca63262"
  },
  {
   "_id": "645c005ebecbfd0979f4c63e"
  },
  {
   "_id": "645c005e8f430b3d91f24822"
  },
  {
   "_id": "645c005e925184c58addbcb8"
  },
  {
   "_id": "645c005eaed7994376581d98"
  },
  {
   "_id": "645c005e9f50c842e33e31c7"
  },
  {
   "_id": "645c005eb444bf449c82bda5"
  },
  {
   "_id": "645c005ebabf065254a6e798"
  },
  {
   "_id": "645c005e745cce8d6b16605f"
  },
  {
   "_id": "645c005e3a19bf7287c7e3c4"
  },
  {
   "_id": "645c005e8d90fc241e5c3d4e"
  },
  {
   "_id": "645c005ebf98190801e47eeb"
  },
  {
   "_id": "645c005e5de131f337d6b74b"
  },
  {
   "_id": "645c005e81370ef4060d98d1"
  },
  {
   "_id": "645c005e2f3e53e0fa6d0805"
  },
  {
   "_id": "645c005edaef922758a50baa"
  },
  {
   "_id": "645c005e7391f9aa3c3765ca"
  },
  {
   "_id": "645c005e82ab528e1b6631de"
  },
  {
   "_id": "645c005e446dcb8c7b8ae749"
  },
  {
   "_id": "645c005ef4a70a433080a56b"
  },
  {
   "_id": "645c005e4f8ead32edaf2e60"
  },
  {
   "_id": "645c005eafc7681a7805cc6c"
  },
  {
   "_id": "645c005e3ea9c5a2a92bba7b"
  },
  {
   "_id": "645c005e720e6b56c26add0d"
  },
  {
   "_id": "645c005ed15c21d49ae0ff04"
  },
  {
   "_id": "645c005e6156722f35ad4be8"
  },
  {
   "_id": "645c005e0dad2296606dd3d8"
  },
  {
   "_id": "645c005e69206c100f4a7895"
  },
  {
   "_id": "645c005e929c4dda6b4793f4"
  },
  {
   "_id": "645c005e486f9797a5ca66d9"
  },
  {
   "_id": "645c005eddd895cf5beb6068"
  },
  {
   "_id": "645c005ede8992abdf280d61"
  },
  {
   "_id": "645c005e25594aaef708eb89"
  },
  {
   "_id": "645c005e781fed2743d67fe4"
  },
  {
   "_id": "645c005e78b6447a189d6f2a"
  },
  {
   "_id": "645c005ed692f3753e74c024"
  },
  {
   "_id": "645c005e78ea3d1879feb608"
  },
  {
   "_id": "645c005e9f38c595def48a8d"
  },
  {
   "_id": "645c005ef69635d56f885958"
  },
  {
   "_id": "645c005e12e6794e7b508b58"
  },
  {
   "_id": "645c005ec1ae9d9d74ea8995"
  },
  {
   "_id": "645c005e393f508201df8abc"
  },
  {
   "_id": "645c005efae71bcbff6fc86c"
  },
  {
   "_id": "645c005ec9edec98537a6361"
  },
  {
   "_id": "645c005e805583527707de7f"
  },
  {
   "_id": "645c005e24033d6754a45775"
  },
  {
   "_id": "645c005ea0df88cee2da6eac"
  },
  {
   "_id": "645c005ef09a814c34530c7a"
  },
  {
   "_id": "645c005e82d01f6f5b9a179b"
  },
  {
   "_id": "645c005e31e533e2edc920cd"
  },
  {
   "_id": "645c005ee86d61cc1e57dc0a"
  },
  {
   "_id": "645c005eb0f64937f83fd062"
  },
  {
   "_id": "645c005eca4d0a83fda6eaee"
  },
  {
   "_id": "645c005e7e46cbf8ce5bba08"
  },
  {
   "_id": "645c005e031f9ac2648d45af"
  },
  {
   "_id": "645c005ec86acc8e1077306f"
  },
  {
   "_id": "645c005e6590556b641d85fe"
  },
  {
   "_id": "645c005ed5cc7727c155a88f"
  },
  {
   "_id": "645c005e8efe15823983a1d8"
  },
  {
   "_id": "645c005e14c958af1c20b03f"
  },
  {
   "_id": "645c005e9cb2154cb719c173"
  },
  {
   "_id": "645c005e156b0724a531860e"
  },
  {
   "_id": "645c005eee967d06154805f1"
  },
  {
   "_id": "645c005ed07e42d6d5580372"
  },
  {
   "_id": "645c005ec778c93f16e16c0e"
  },
  {
   "_id": "645c005e64e447ceb643c552"
  },
  {
   "_id": "645c005e16ca59b253f604b2"
  },
  {
   "_id": "645c005e65272d01d4a41cf7"
  },
  {
   "_id": "645c005e8b02912d637a0222"
  },
  {
   "_id": "645c005ebdeee606539c7389"
  },
  {
   "_id": "645c005eca31b1386181340a"
  },
  {
   "_id": "645c005ed90f30b506426c71"
  },
  {
   "_id": "645c005e7105d215b89fc261"
  },
  {
   "_id": "645c005e06ac25db35ef6ec6"
  },
  {
   "_id": "645c005e5a33a81e250e4a89"
  },
  {
   "_id": "645c005eed86d4a9762f1ed1"
  },
  {
   "_id": "645c005ec6d9190d3385be77"
  },
  {
   "_id": "645c005e45fab7f6e08421fd"
  },
  {
   "_id": "645c005e28ee3fd69dca1858"
  },
  {
   "_id": "645c005ea32f9fbe444f2336"
  },
  {
   "_id": "645c005e551a80b49ba8b202"
  },
  {
   "_id": "645c005eb1e6b9f224742955"
  },
  {
   "_id": "645c005e1c1ab68bee3e3090"
  },
  {
   "_id": "645c005e6a2f1a9fd7b30e78"
  },
  {
   "_id": "645c005ef464a3394983e62c"
  },
  {
   "_id": "645c005e3ceb1c4833ac53ed"
  },
  {
   "_id": "645c005edc51374e0811f1dc"
  },
  {
   "_id": "645c005e1e522bbe76d296b9"
  },
  {
   "_id": "645c005e65fab25deb574ce2"
  },
  {
   "_id": "645c005ec2c9f2d3f80fc273"
  },
  {
   "_id": "645c005eb7cbe3b61a5f6552"
  },
  {
   "_id": "645c005e684daf4915bf1514"
  },
  {
   "_id": "645c005e5925abfdfb0736f0"
  },
  {
   "_id": "645c005e585e4cc17e9aee86"
  },
  {
   "_id": "645c005e2ad7babc259e9c25"
  },
  {
   "_id": "645c005e3a283ad2fd42f617"
  },
  {
   "_id": "645c005efcc1a2c43eea82ac"
  },
  {
   "_id": "645c005e0057b473c83d94c7"
  },
  {
   "_id": "645c005eaf9ebd6f5c77380c"
  },
  {
   "_id": "645c005ebaff27ca234bc5c5"
  },
  {
   "_id": "645c005e97d9676bb4707208"
  },
  {
   "_id": "645c005eea8a1714a2b0a770"
  },
  {
   "_id": "645c005e771de210d8a363ad"
  },
  {
   "_id": "645c005e6265d36d977d37ec"
  },
  {
   "_id": "645c005e60fe1c41104d8ec4"
  },
  {
   "_id": "645c005e41852a76d4a2a7d2"
  },
  {
   "_id": "645c005e9b73a0a8b7c3d9dd"
  },
  {
   "_id": "645c005e0b5bb65bf3196a67"
  },
  {
   "_id": "645c005e80f2b326c737c4c1"
  },
  {
   "_id": "645c005e7a021bfb4f8a6c95"
  },
  {
   "_id": "645c005e9599e2875504e335"
  },
  {
   "_id": "645c005e1eef501dcf752e8f"
  },
  {
   "_id": "645c005e16a57ec72bd84d0c"
  },
  {
   "_id": "645c005e07777acacb46f09b"
  },
  {
   "_id": "645c005e236c6ef4c55f2b24"
  },
  {
   "_id": "645c005ed9f78bad8e3c7b28"
  },
  {
   "_id": "645c005e7e9179d4f6aaff15"
  },
  {
   "_id": "645c005e0765667608c5e71a"
  },
  {
   "_id": "645c005e121658cca2d8d1b1"
  },
  {
   "_id": "645c005e9d416a2791633d43"
  },
  {
   "_id": "645c005ea88b32e4404842fe"
  },
  {
   "_id": "645c005e5fee4a91c1c002ef"
  },
  {
   "_id": "645c005e68bb3196cddb7ae1"
  },
  {
   "_id": "645c005e9a09cfa31dc9db68"
  },
  {
   "_id": "645c005ed5ed904df55979f3"
  },
  {
   "_id": "645c005ea822bcce0374df5a"
  },
  {
   "_id": "645c005e0cfcfd3fc123b480"
  },
  {
   "_id": "645c005e6d09ddad660df3cc"
  },
  {
   "_id": "645c005ef866a1b4fcaed248"
  },
  {
   "_id": "645c005ec969a9862e7d5534"
  },
  {
   "_id": "645c005e6dc192c9eebd9172"
  },
  {
   "_id": "645c005e4ac5ed740cba87d7"
  },
  {
   "_id": "645c005e54f5f5fd3c137ab2"
  },
  {
   "_id": "645c005ebee166d0fe9cfcc8"
  },
  {
   "_id": "645c005e6fc4455ea3662e1f"
  },
  {
   "_id": "645c005e9ccfb5c6ceef50cc"
  },
  {
   "_id": "645c005eb4b58a2e4957313e"
  },
  {
   "_id": "645c005ebc92ffdabf1aaa8a"
  },
  {
   "_id": "645c005eefe53ff1aafbe458"
  },
  {
   "_id": "645c005e4329e3d6568a918b"
  },
  {
   "_id": "645c005ed876c2ec2a177903"
  },
  {
   "_id": "645c005eedbe253a75f91bdf"
  },
  {
   "_id": "645c005e6c3702d1b135c0d4"
  },
  {
   "_id": "645c005ee8d6f3645b0e62fd"
  },
  {
   "_id": "645c005e017dca0275ac91a5"
  },
  {
   "_id": "645c005ebda4d9ddd96628d2"
  },
  {
   "_id": "645c005e8af9a1b70b3e2185"
  },
  {
   "_id": "645c005e0c5c7c6ffe006c7c"
  },
  {
   "_id": "645c005e1af6b2c73df13f8f"
  },
  {
   "_id": "645c005e19f93226cd5393ca"
  },
  {
   "_id": "645c005ebe76612495e54e47"
  },
  {
   "_id": "645c005e0795929639e3c1bd"
  },
  {
   "_id": "645c005e532c3df0fb671d16"
  },
  {
   "_id": "645c005e820d6113de1f8b7b"
  },
  {
   "_id": "645c005e7a31964663d4d982"
  },
  {
   "_id": "645c005e36e5f8c6af5f1f08"
  },
  {
   "_id": "645c005e6e7002b597f79ba0"
  },
  {
   "_id": "645c005e7d273ca347316be1"
  },
  {
   "_id": "645c005e06b6aa25bd398ed3"
  },
  {
   "_id": "645c005e9368be7ea44b306c"
  },
  {
   "_id": "645c005e0d8bc55caa59ed14"
  },
  {
   "_id": "645c005ecf6983ba7b8ecf86"
  },
  {
   "_id": "645c005e2239b364dfce3b10"
  },
  {
   "_id": "645c005e1f0396abf0fd4ce1"
  },
  {
   "_id": "645c005ea1384870b3abf486"
  },
  {
   "_id": "645c005e5f2ee2d9ab94bd17"
  },
  {
   "_id": "645c005e74828d5ed0c23335"
  },
  {
   "_id": "645c005e8ee521a4240aa36b"
  },
  {
   "_id": "645c005e38c89244111cbeff"
  },
  {
   "_id": "645c005e4f0228722c17a490"
  },
  {
   "_id": "645c005e1326388fc8772301"
  },
  {
   "_id": "645c005ebb7c9560aecad4e5"
  },
  {
   "_id": "645c005ef2baf3a96f3b607a"
  },
  {
   "_id": "645c005e1ba717ea31f88ef4"
  },
  {
   "_id": "645c005ef1078385c9add66e"
  },
  {
   "_id": "645c005e9d143a525baf276d"
  },
  {
   "_id": "645c005e5a2d4e5ec5610576"
  },
  {
   "_id": "645c005e0d8ce5fc8bf10d54"
  },
  {
   "_id": "645c005e2080f22982f9279d"
  },
  {
   "_id": "645c005e0c8244100bda7741"
  },
  {
   "_id": "645c005e62679148185a839b"
  },
  {
   "_id": "645c005e319444ab8811a910"
  },
  {
   "_id": "645c005e2b19396241141f49"
  },
  {
   "_id": "645c005ea216fae2e172a4e2"
  },
  {
   "_id": "645c005efcf4725103ac8c3f"
  },
  {
   "_id": "645c005e446316b0f5137456"
  },
  {
   "_id": "645c005e716c7ee871e3b8f8"
  },
  {
   "_id": "645c005e9c45800ab0d2b12b"
  },
  {
   "_id": "645c005e7b9fabf2cd6aa866"
  },
  {
   "_id": "645c005ef5ff0cc087c7f4fb"
  },
  {
   "_id": "645c005eac7e2da4af5ab485"
  },
  {
   "_id": "645c005e538bd9367c719437"
  },
  {
   "_id": "645c005e9ecf6d61ca7c9df9"
  },
  {
   "_id": "645c005e4c32881cac238ac7"
  },
  {
   "_id": "645c005e778e54a0b54c3e5f"
  },
  {
   "_id": "645c005ec0034baecffa1f96"
  },
  {
   "_id": "645c005ef007679f1e6c259f"
  },
  {
   "_id": "645c005e6a725a5833dee6c4"
  },
  {
   "_id": "645c005e49471c386af1c9ab"
  },
  {
   "_id": "645c005ebfc9b41661ccd556"
  },
  {
   "_id": "645c005e22f1179c0ca510b5"
  },
  {
   "_id": "645c005e68ed197c45a9c36f"
  },
  {
   "_id": "645c005e6efba41f637f2406"
  },
  {
   "_id": "645c005e6e3d93e78d0d999c"
  },
  {
   "_id": "645c005e823f8d500ca726bf"
  },
  {
   "_id": "645c005e1f19511dba59199d"
  },
  {
   "_id": "645c005ef7c70c2b25ea0ade"
  },
  {
   "_id": "645c005e543bb90dcc699a4a"
  },
  {
   "_id": "645c005e3abb8cebad1dd445"
  },
  {
   "_id": "645c005edaa36d53a5c9b007"
  },
  {
   "_id": "645c005eeaa50ac4c58073dc"
  },
  {
   "_id": "645c005e36461e0ce7ee389c"
  },
  {
   "_id": "645c005e416bd30dc917021f"
  },
  {
   "_id": "645c005e0d7524e0a81baa0c"
  },
  {
   "_id": "645c005eafedfd669f3f45db"
  },
  {
   "_id": "645c005e9e936bee74fb4114"
  },
  {
   "_id": "645c005e913231f992cf6482"
  },
  {
   "_id": "645c005e80d86ba13b5a8bf5"
  },
  {
   "_id": "645c005e31eeefb45db21903"
  },
  {
   "_id": "645c005e35f3927ae34afaf2"
  },
  {
   "_id": "645c005e8161a5f16e26c776"
  },
  {
   "_id": "645c005ea2c829e0a48dc80b"
  },
  {
   "_id": "645c005e05732915a4203310"
  },
  {
   "_id": "645c005e4ea8a21b753f9c43"
  },
  {
   "_id": "645c005ed67ab3a4bb55d407"
  }
 ]
 const parsedNames = dataList.map(item => {
  const matches = item.name.match(/(.+)\s(.+)/);

  if (matches) {
   return {
    name: matches[1],
    surname: matches[2]
   };
  }

  return null;
 });

 console.log(parsedNames?.[0].name);
//genre.json dosyasındaki her bir öğe için

 for (let i = 0; i < stars.length; i++) {
  const star = stars[i];

  // genre adlı dizideki değer ile güncelleme yap
  if (objectList[i]) {
   star._id = objectList[i]._id;
  }
  if(parsedNames[i].name){
   star.name = parsedNames[i].name;
  }
  if (parsedNames[i].surname) {
   star.surname = parsedNames[i].surname;
  }
 }

// Değişiklikleri genre.json dosyasına yazdır
 fs.writeFileSync('stars.json', JSON.stringify(stars));

};



starsedit()



const dataList = [
 {
  "name": "Catherine Missal",
  "rating": 4875,
  "image_path": "/g3fsRgEoMxaqPayIMtGDWERqJ6A.jpg",
  "alternative_name": null,
  "objectID": "551486300"
 },
 {
  "name": "Monica Bellucci",
  "rating": 3956,
  "image_path": "/z3sLuRKP7hQVrvSTsqdLjGSldwG.jpg",
  "alternative_name": "Monica Anna Maria Bellucci",
  "objectID": "551486310"
 },
 {
  "name": "Michael Doven",
  "rating": 2647,
  "image_path": "/fkHxoBAvAkqHxzoP1ukcbPnaaUi.jpg",
  "alternative_name": null,
  "objectID": "551486320"
 },
 {
  "name": "Jasmine Reate",
  "rating": 2378,
  "image_path": "/qgI4agu15xBlnWkZEVpZhGFsV4Y.jpg",
  "alternative_name": "J.L. Reate",
  "objectID": "551486330"
 },
 {
  "name": "Tom Cruise",
  "rating": 2237,
  "image_path": "/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg",
  "alternative_name": null,
  "objectID": "551486340"
 },
 {
  "name": "Scarlett Johansson",
  "rating": 2128,
  "image_path": "/f3c1rwcOoeU0v6Ak5loUvMyifR0.jpg",
  "alternative_name": "Scarlett Johanssen",
  "objectID": "551486350"
 },
 {
  "name": "Anna Raadsveld",
  "rating": 1972,
  "image_path": "/hNeOrwFVEfjUgRsjSUNU6t1gt2N.jpg",
  "alternative_name": null,
  "objectID": "551486360"
 },
 {
  "name": "Jason Statham",
  "rating": 1719,
  "image_path": "/PhWiWgasncGWD9LdbsGcmxkV4r.jpg",
  "alternative_name": null,
  "objectID": "551486370"
 },
 {
  "name": "Emilia Clarke",
  "rating": 1585,
  "image_path": "/xMIjXRUkxpQs2o5VI3Om3yn6hNV.jpg",
  "alternative_name": null,
  "objectID": "551486380"
 },
 {
  "name": "Wentworth Miller",
  "rating": 1579,
  "image_path": "/z5qjqYgWfZsBrLWWm9jMRSJOtQ2.jpg",
  "alternative_name": null,
  "objectID": "551486390"
 },
 {
  "name": "Dwayne Johnson",
  "rating": 1568,
  "image_path": "/akweMz59qsSoPUJYe7QpjAc2rQp.jpg",
  "alternative_name": "The Rock",
  "objectID": "551486400"
 },
 {
  "name": "Rose Byrne",
  "rating": 1526,
  "image_path": "/fOQLAPDvqSDq4ktR7Xk8DIpzGdY.jpg",
  "alternative_name": "Mary Rose Byrne",
  "objectID": "551486410"
 },
 {
  "name": "Rachel McAdams",
  "rating": 1519,
  "image_path": "/wqSznVIPp0YDFCuZ9jjbrzDyJhV.jpg",
  "alternative_name": "Rachel Anne McAdams",
  "objectID": "551486420"
 },
 {
  "name": "Michelle Rodriguez",
  "rating": 1439,
  "image_path": "/v37VK0MNuRuJOCKPKJcZAJXRA5r.jpg",
  "alternative_name": "Michelle Rodríguez",
  "objectID": "551486430"
 },
 {
  "name": "Tom Hanks",
  "rating": 1392,
  "image_path": "/a14CNByTYALAPSGlwlmfHILpEIW.jpg",
  "alternative_name": null,
  "objectID": "551486440"
 },
 {
  "name": "Jake Gyllenhaal",
  "rating": 1312,
  "image_path": "/wRgIPBzVzIIhWcdJAduPOKJJHsL.jpg",
  "alternative_name": null,
  "objectID": "551486450"
 },
 {
  "name": "Tom Hardy",
  "rating": 1279,
  "image_path": "/5KwHVwrr982YSsCf4HaSFMLrsYf.jpg",
  "alternative_name": null,
  "objectID": "551486460"
 },
 {
  "name": "Chloë Grace Moretz",
  "rating": 1266,
  "image_path": "/wYaBEV3SOYaJbo6FDKpQW9hlMWt.jpg",
  "alternative_name": null,
  "objectID": "551486470"
 },
 {
  "name": "Johnny Depp",
  "rating": 1250,
  "image_path": "/ctaca3ALycPP0vPhRSYK5DTBEPF.jpg",
  "alternative_name": "John Christopher Depp II",
  "objectID": "551486490"
 },
 {
  "name": "Arnold Schwarzenegger",
  "rating": 1250,
  "image_path": "/3cWGPgdJn1s4O2Rvo6zN7yHkzOe.jpg",
  "alternative_name": null,
  "objectID": "551486480"
 },
 {
  "name": "Sarah Wayne Callies",
  "rating": 1223,
  "image_path": "/1WTsRFbvxU9lOWonAigOO9UCxmY.jpg",
  "alternative_name": null,
  "objectID": "551486500"
 },
 {
  "name": "Vincent Cassel",
  "rating": 1190,
  "image_path": "/yTTyX7xziiMibm0nzcH5z6xxLLv.jpg",
  "alternative_name": null,
  "objectID": "551486510"
 },
 {
  "name": "Lisa Ulliel",
  "rating": 1187,
  "image_path": "/lRMGNruBuRpqyo3sktiMqQMWlTf.jpg",
  "alternative_name": null,
  "objectID": "551486520"
 },
 {
  "name": "Rachel Weisz",
  "rating": 1156,
  "image_path": "/4DMvR5get0liIs7Bi3uTRIIdLkw.jpg",
  "alternative_name": null,
  "objectID": "551486530"
 },
 {
  "name": "Robin Williams",
  "rating": 1139,
  "image_path": "/5KebSMXT8uj2D0gkaMFJ8VEp53.jpg",
  "alternative_name": null,
  "objectID": "551486540"
 },
 {
  "name": "Chris Hemsworth",
  "rating": 1128,
  "image_path": "/kolnZraa1UaD6NS8Ic8guFmOUPZ.jpg",
  "alternative_name": null,
  "objectID": "551486550"
 },
 {
  "name": "Edwige Fenech",
  "rating": 1106,
  "image_path": "/fz85mynMO5i2lyLhQsS2Cg9PCmS.jpg",
  "alternative_name": null,
  "objectID": "551486560"
 },
 {
  "name": "Linda Fiorentino",
  "rating": 1085,
  "image_path": "/16aVa4evfjWiAnM6srkLhWYJlpZ.jpg",
  "alternative_name": null,
  "objectID": "551486570"
 },
 {
  "name": "Robert Downey Jr.",
  "rating": 1077,
  "image_path": "/r7WLn4Kbnqb6oJ8TmSI0e4LkWTj.jpg",
  "alternative_name": "Robert John Downey, Jr.",
  "objectID": "551486580"
 },
 {
  "name": "Alexandra Daddario",
  "rating": 1056,
  "image_path": "/qWy2rdPK3axHvlLV1IUKr6gWLGy.jpg",
  "alternative_name": "Alex Daddario",
  "objectID": "551486590"
 },
 {
  "name": "Anthony Hopkins",
  "rating": 1050,
  "image_path": "/wSKCjkfZ90i9vbDwKf0mlvsgdCX.jpg",
  "alternative_name": null,
  "objectID": "551486600"
 },
 {
  "name": "Claudia Koll",
  "rating": 1047,
  "image_path": "/8kROsaY1fu44Xsgxfth8RBwVRYO.jpg",
  "alternative_name": null,
  "objectID": "551486610"
 },
 {
  "name": "Lucy Liu",
  "rating": 1046,
  "image_path": "/cOSycUPBNi49YcPHo4Rf7ROHqCC.jpg",
  "alternative_name": "Lucy Alexis Liu",
  "objectID": "551486620"
 },
 {
  "name": "Samuel L. Jackson",
  "rating": 1034,
  "image_path": "/dlW6prW9HwYDsIRXNoFYtyHpSny.jpg",
  "alternative_name": "Sam Jackson",
  "objectID": "551486630"
 },
 {
  "name": "Kate Beckinsale",
  "rating": 1030,
  "image_path": "/jQoItQzlKokuhWydbwXUGg3i6bX.jpg",
  "alternative_name": "Kathrin Beckinsale",
  "objectID": "551486650"
 },
 {
  "name": "Jordana Brewster",
  "rating": 1030,
  "image_path": "/dORwXZWWmDgG66I5i2Fnr27g3fO.jpg",
  "alternative_name": null,
  "objectID": "551486640"
 },
 {
  "name": "Ashley Benson",
  "rating": 1028,
  "image_path": "/wIRcYgnVqxZEPzxAXUWFISSoiQg.jpg",
  "alternative_name": "Ashley Victoria Benson",
  "objectID": "551486660"
 },
 {
  "name": "Charlize Theron",
  "rating": 1026,
  "image_path": "/fG0mtmBm3OsvKFucvoQyqBnVwya.jpg",
  "alternative_name": null,
  "objectID": "551486670"
 },
 {
  "name": "Rosamund Pike",
  "rating": 1013,
  "image_path": "/nOiwKKOZuoB3TC3iiG1GkRzSvay.jpg",
  "alternative_name": null,
  "objectID": "551486680"
 },
 {
  "name": "Christian Bale",
  "rating": 1006,
  "image_path": "/pPXnqoGD91znz4FwQ6aKuxi6Pcy.jpg",
  "alternative_name": "کریستین بیل",
  "objectID": "551486690"
 },
 {
  "name": "Jennifer Connelly",
  "rating": 992,
  "image_path": "/i1jsYTEUoAxLzluDKwXKqheRs0J.jpg",
  "alternative_name": "Jennifer Lynn Connelly",
  "objectID": "551486700"
 },
 {
  "name": "Adam Sandler",
  "rating": 971,
  "image_path": "/tv9V6QsuZ3bcp4ciUJjwjcc4qAg.jpg",
  "alternative_name": null,
  "objectID": "551486710"
 },
 {
  "name": "Paul Walker",
  "rating": 969,
  "image_path": "/iqvYezRoEY5k8wnlfHriHQfl5dX.jpg",
  "alternative_name": null,
  "objectID": "551486720"
 },
 {
  "name": "Brad Pitt",
  "rating": 961,
  "image_path": "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg",
  "alternative_name": null,
  "objectID": "551486730"
 },
 {
  "name": "Amy Adams",
  "rating": 960,
  "image_path": "/tk5eWJcOBr9uRefeUm9ntvehbLA.jpg",
  "alternative_name": "Amy Lou Adams",
  "objectID": "551486740"
 },
 {
  "name": "Milla Jovovich",
  "rating": 954,
  "image_path": "/mcNgLarIVho7LheWcvd1oQ2tBOg.jpg",
  "alternative_name": null,
  "objectID": "551486750"
 },
 {
  "name": "Chris Evans",
  "rating": 947,
  "image_path": "/ueIzur9vURNLoqZCdfWltnpuZTq.jpg",
  "alternative_name": null,
  "objectID": "551486770"
 },
 {
  "name": "Amber Heard",
  "rating": 947,
  "image_path": "/AeHnP2KOu3RmZDobNxLKtfuNeNi.jpg",
  "alternative_name": "Ембер Херд",
  "objectID": "551486760"
 },
 {
  "name": "Edward Norton",
  "rating": 937,
  "image_path": "/iUiePUAQKN4GY6jorH9m23cbVli.jpg",
  "alternative_name": null,
  "objectID": "551486780"
 },
 {
  "name": "Julianne Moore",
  "rating": 932,
  "image_path": "/zfHsSarMGjwuvfiWoVslIQm05Ho.jpg",
  "alternative_name": null,
  "objectID": "551486790"
 },
 {
  "name": "Carice van Houten",
  "rating": 924,
  "image_path": "/26XhQRxVaIftK1zgLkmYyzjGh4y.jpg",
  "alternative_name": null,
  "objectID": "551486800"
 },
 {
  "name": "Evangeline Lilly",
  "rating": 917,
  "image_path": "/A8yx5i4MGefvcLslGf9czHX8wXs.jpg",
  "alternative_name": null,
  "objectID": "551486820"
 },
 {
  "name": "Michelle Monaghan",
  "rating": 917,
  "image_path": "/9W7xBcdBeFjoZVCwP2iROk1jtkV.jpg",
  "alternative_name": null,
  "objectID": "551486810"
 },
 {
  "name": "Forest Whitaker",
  "rating": 913,
  "image_path": "/4pMQkelS5lK661m9Kz3oIxLYiyS.jpg",
  "alternative_name": null,
  "objectID": "551486830"
 },
 {
  "name": "Ben Stiller",
  "rating": 906,
  "image_path": "/umikKeCX3vEZoUcx2klxPG8571s.jpg",
  "alternative_name": null,
  "objectID": "551486840"
 },
 {
  "name": "Carla Gugino",
  "rating": 903,
  "image_path": "/rEnVfc4Xb0M5T1QvtN1k2xJ8RbX.jpg",
  "alternative_name": null,
  "objectID": "551486850"
 },
 {
  "name": "Liam Neeson",
  "rating": 902,
  "image_path": "/oxCCVmDSxWcqIyMknRoOAZkvb6D.jpg",
  "alternative_name": "William John Neeson",
  "objectID": "551486860"
 },
 {
  "name": "Eric Roberts",
  "rating": 901,
  "image_path": "/45i6fsxBwH1UyA74tWQ6am0DntC.jpg",
  "alternative_name": null,
  "objectID": "551486870"
 },
 {
  "name": "Sammo Hung",
  "rating": 897,
  "image_path": "/hpqwIMmLLpn0mMmpi4EhzARK24K.jpg",
  "alternative_name": "洪金寶",
  "objectID": "551486890"
 },
 {
  "name": "Sigourney Weaver",
  "rating": 897,
  "image_path": "/bcDb0vbfWZBHo1QEh9oQVRs3vx2.jpg",
  "alternative_name": null,
  "objectID": "551486880"
 },
 {
  "name": "Sylvester Stallone",
  "rating": 892,
  "image_path": "/gnmwOa46C2TP35N7ARSzboTdx2u.jpg",
  "alternative_name": null,
  "objectID": "551486900"
 },
 {
  "name": "Helen Mirren",
  "rating": 891,
  "image_path": "/4EGgBJPUBz68ZrnFuLVo01r0uND.jpg",
  "alternative_name": null,
  "objectID": "551486910"
 },
 {
  "name": "Chris Pratt",
  "rating": 882,
  "image_path": "/n4DD1AYU7WEMNPLga1TxqnHivn1.jpg",
  "alternative_name": null,
  "objectID": "551486920"
 },
 {
  "name": "Jude Law",
  "rating": 881,
  "image_path": "/4077Cyuo1mw53u1gNjLyQkqeZN0.jpg",
  "alternative_name": null,
  "objectID": "551486930"
 },
 {
  "name": "Katherine Heigl",
  "rating": 880,
  "image_path": "/dsMdrdIOD4xl1shUv1zl6RvXiUb.jpg",
  "alternative_name": "Katherine M. Heigl",
  "objectID": "551486940"
 },
 {
  "name": "Matthew McConaughey",
  "rating": 873,
  "image_path": "/uKj2m1hJSw4dlOLAvZ3g9WiZkAZ.jpg",
  "alternative_name": null,
  "objectID": "551486970"
 },
 {
  "name": "Jodi Lyn O'Keefe",
  "rating": 873,
  "image_path": "/akyVB9tFIjoj3PnrMBRcvzU86k5.jpg",
  "alternative_name": null,
  "objectID": "551486960"
 },
 {
  "name": "Richard Gere",
  "rating": 873,
  "image_path": "/wXj3kPwWFo8A9jDCtUVetXAR5Hf.jpg",
  "alternative_name": null,
  "objectID": "551486950"
 },
 {
  "name": "Jeremy Renner",
  "rating": 858,
  "image_path": "/pFOLCHkbTDzJ79dri1Iyz0cpAi4.jpg",
  "alternative_name": "Jeremy Lee Renner",
  "objectID": "551486990"
 },
 {
  "name": "Kirsten Dunst",
  "rating": 858,
  "image_path": "/3fjUI92bQaGOnbxHBbyR0z9h619.jpg",
  "alternative_name": null,
  "objectID": "551486980"
 },
 {
  "name": "Mark Hamill",
  "rating": 856,
  "image_path": "/zUXHs0t0rhRNg7rD1pQm09KXAKP.jpg",
  "alternative_name": "Mark Hamil",
  "objectID": "551487000"
 },
 {
  "name": "Rami Malek",
  "rating": 855,
  "image_path": "/3zj5BkNVAPKIJH7sHImiazU732s.jpg",
  "alternative_name": null,
  "objectID": "551487010"
 },
 {
  "name": "Donnie Yen",
  "rating": 853,
  "image_path": "/vlKBbOc0htUsDGvcxeULcFXDMRo.jpg",
  "alternative_name": "甄子丹",
  "objectID": "551487020"
 },
 {
  "name": "Shia LaBeouf",
  "rating": 852,
  "image_path": "/anP0tygzniIok6L3OxcSZ9TYCF3.jpg",
  "alternative_name": "Shia LeBouef",
  "objectID": "551487030"
 },
 {
  "name": "Megan Fox",
  "rating": 851,
  "image_path": "/7rq0erGOfRSQeBBqypUyxvMNYhT.jpg",
  "alternative_name": "Megan Denise Fox",
  "objectID": "551487040"
 },
 {
  "name": "Maria Bello",
  "rating": 847,
  "image_path": "/wU5I528qHPG9pAGNnghYVEW69gr.jpg",
  "alternative_name": "Maria Elaina Bello",
  "objectID": "551487050"
 },
 {
  "name": "Zoe Saldana",
  "rating": 846,
  "image_path": "/ofNrWiA2KDdqiNxFTLp51HcXUlp.jpg",
  "alternative_name": "Zoë Saldana",
  "objectID": "551487060"
 },
 {
  "name": "Kristen Stewart",
  "rating": 842,
  "image_path": "/eGsl40JleEbgjQkXHdB7BbRyz27.jpg",
  "alternative_name": null,
  "objectID": "551487070"
 },
 {
  "name": "Vin Diesel",
  "rating": 840,
  "image_path": "/qwyfzMKIhxJ7ols66FgEf7eGdcI.jpg",
  "alternative_name": "Mark Sinclair Vincent",
  "objectID": "551487080"
 },
 {
  "name": "Tommy Lee Jones",
  "rating": 837,
  "image_path": "/gRXugLFvr1oHZ6alLUxmYDq8cgW.jpg",
  "alternative_name": null,
  "objectID": "551487090"
 },
 {
  "name": "Justin Timberlake",
  "rating": 829,
  "image_path": "/lB3pku743f3N82AVXz10fGGBAgL.jpg",
  "alternative_name": null,
  "objectID": "551487100"
 },
 {
  "name": "Ariadne Shaffer",
  "rating": 825,
  "image_path": "/iGonVz2MjakCj3DX7alp65P96ls.jpg",
  "alternative_name": null,
  "objectID": "551487110"
 },
 {
  "name": "Keanu Reeves",
  "rating": 819,
  "image_path": "/id1qIb7cZs2eQno90KsKwG8VLGN.jpg",
  "alternative_name": null,
  "objectID": "551487120"
 },
 {
  "name": "Michael Fassbender",
  "rating": 817,
  "image_path": "/r6dxyfjbpOw4CG2feUhlUOLynUs.jpg",
  "alternative_name": null,
  "objectID": "551487130"
 },
 {
  "name": "Leonard Nimoy",
  "rating": 814,
  "image_path": "/5B5blUXy0PDvToh2nxZk4SVTdyP.jpg",
  "alternative_name": null,
  "objectID": "551487140"
 },
 {
  "name": "Carrie-Anne Moss",
  "rating": 812,
  "image_path": "/8iATAc5z5XOKFFARLsvaawa8MTY.jpg",
  "alternative_name": null,
  "objectID": "551487150"
 },
 {
  "name": "Michael Caine",
  "rating": 809,
  "image_path": "/nlIjMLp9zvvYM2eFm77UhI7s1nW.jpg",
  "alternative_name": "Michael Scott",
  "objectID": "551487160"
 },
 {
  "name": "Natalie Dormer",
  "rating": 806,
  "image_path": "/cpEwann4G1gOwwJnZzYV0tLYqIM.jpg",
  "alternative_name": null,
  "objectID": "551487190"
 },
 {
  "name": "Jack Black",
  "rating": 806,
  "image_path": "/kAyKg3rYGgIhB5KRaIWALuf78W3.jpg",
  "alternative_name": "Thomas Jacob Black",
  "objectID": "551487180"
 },
 {
  "name": "Jennifer Aniston",
  "rating": 806,
  "image_path": "/4d4wvNyDuvN86DoneawbLOpr8gH.jpg",
  "alternative_name": "Jennifer Joanna Aniston",
  "objectID": "551487170"
 },
 {
  "name": "Steven Spielberg",
  "rating": 802,
  "image_path": "/pOK15UNaw75Bzj7BQO1ulehbPPm.jpg",
  "alternative_name": null,
  "objectID": "551487200"
 },
 {
  "name": "Ashley Greene",
  "rating": 793,
  "image_path": "/afm3DTK2oclpiiiuDIrJaDU2XJj.jpg",
  "alternative_name": null,
  "objectID": "551487210"
 },
 {
  "name": "Colin Firth",
  "rating": 792,
  "image_path": "/kbs5HzE2KjzbKiGYQw2aXFpdvaX.jpg",
  "alternative_name": "Colin Andrew Firth",
  "objectID": "551487220"
 },
 {
  "name": "Selma Blair",
  "rating": 790,
  "image_path": "/xltCuuG4xjACQ6vQm55iuR5LFJC.jpg",
  "alternative_name": null,
  "objectID": "551487230"
 },
 {
  "name": "Nicolas Cage",
  "rating": 789,
  "image_path": "/fW37Gbk5PJZuXvyZwtcr0cMwPKY.jpg",
  "alternative_name": "Nicolas Coppola",
  "objectID": "551487240"
 },
 {
  "name": "Lacey Chabert",
  "rating": 776,
  "image_path": "/fCSUC713QF3nslnap2C4j6TAaTd.jpg",
  "alternative_name": "Esmeralda Belle Jané",
  "objectID": "551487250"
 },
 {
  "name": "Mark Ruffalo",
  "rating": 768,
  "image_path": "/isQ747u0MU8U9gdsNlPngjABclH.jpg",
  "alternative_name": null,
  "objectID": "551487260"
 },
 {
  "name": "Clint Eastwood",
  "rating": 765,
  "image_path": "/n8h4ZHteFFXfmzUW6OEaPWanDnm.jpg",
  "alternative_name": "Clint",
  "objectID": "551487270"
 },
 {
  "name": "Sharon Stone",
  "rating": 758,
  "image_path": "/n28skoawvqAymYr6gRSm2pfro0i.jpg",
  "alternative_name": null,
  "objectID": "551487280"
 },
 {
  "name": "Penélope Cruz",
  "rating": 757,
  "image_path": "/dcPSUfxMa791NZvrFiBc3ReDdpU.jpg",
  "alternative_name": "Penelope Cruz Sanchez",
  "objectID": "551487290"
 },
 {
  "name": "Winona Ryder",
  "rating": 755,
  "image_path": "/3Y2e5A0ic6fvHS9YNghfMbOaKaM.jpg",
  "alternative_name": null,
  "objectID": "551487300"
 },
 {
  "name": "Pierce Brosnan",
  "rating": 749,
  "image_path": "/mXGzfazBj7zqX9zjTIBTuCbiny7.jpg",
  "alternative_name": null,
  "objectID": "551487310"
 },
 {
  "name": "Morgan Freeman",
  "rating": 748,
  "image_path": "/oGJQhOpT8S1M56tvSsbEBePV5O1.jpg",
  "alternative_name": "Freeman",
  "objectID": "551487320"
 },
 {
  "name": "Bruce Willis",
  "rating": 747,
  "image_path": "/kI1OluWhLJk3pnR19VjOfABpnTY.jpg",
  "alternative_name": null,
  "objectID": "551487330"
 },
 {
  "name": "Katy Mixon",
  "rating": 746,
  "image_path": "/o6yDzpvqsq0bObKDGPQdoszRKyW.jpg",
  "alternative_name": null,
  "objectID": "551487370"
 },
 {
  "name": "Sean Connery",
  "rating": 746,
  "image_path": "/ce84udJZ9QRSR44jxwK2apM3DM8.jpg",
  "alternative_name": "Sir Sean Connery",
  "objectID": "551487360"
 },
 {
  "name": "Donald Sutherland",
  "rating": 746,
  "image_path": "/tPLVaPjxEscGPKS3ieByloa8Mqj.jpg",
  "alternative_name": null,
  "objectID": "551487350"
 },
 {
  "name": "Hugh Jackman",
  "rating": 746,
  "image_path": "/oVlS7sDpnWbNBzCxwjnWceSfwrl.jpg",
  "alternative_name": null,
  "objectID": "551487340"
 },
 {
  "name": "Daniel Radcliffe",
  "rating": 743,
  "image_path": "/iOJ5dWkADAM1W7HvGqfoOH5ZnJf.jpg",
  "alternative_name": "Daniel Ratfink",
  "objectID": "551487390"
 },
 {
  "name": "Danny Trejo",
  "rating": 743,
  "image_path": "/7b8cDfrmeheQbgryfCm7MeJOxxM.jpg",
  "alternative_name": "Denni Trekho",
  "objectID": "551487380"
 },
 {
  "name": "Marion Cotillard",
  "rating": 741,
  "image_path": "/mJl7ngstco78rgxSAwLCPhTEOh5.jpg",
  "alternative_name": null,
  "objectID": "551487400"
 },
 {
  "name": "Rebecca Ferguson",
  "rating": 737,
  "image_path": "/a8thKB6ZnHxxqiC7crwCyaPX63d.jpg",
  "alternative_name": null,
  "objectID": "551487410"
 },
 {
  "name": "Lee Majors",
  "rating": 734,
  "image_path": "/1CjhU32qX30hg8TOXju5KY2THkS.jpg",
  "alternative_name": null,
  "objectID": "551487440"
 },
 {
  "name": "Philip Seymour Hoffman",
  "rating": 734,
  "image_path": "/de37JbzZ80KP1LOhzIkVe5XfSwe.jpg",
  "alternative_name": null,
  "objectID": "551487430"
 },
 {
  "name": "Julia Stiles",
  "rating": 734,
  "image_path": "/wqFYU1IS1xhn4yBjlkXt9LwFYr0.jpg",
  "alternative_name": null,
  "objectID": "551487420"
 },
 {
  "name": "Paul Giamatti",
  "rating": 730,
  "image_path": "/rX4LRmkYshMRfQ6lVbeZVAfqVKI.jpg",
  "alternative_name": null,
  "objectID": "551487450"
 },
 {
  "name": "Salma Hayek",
  "rating": 729,
  "image_path": "/zMmEPWSqpACzsP5TnLdETV8j7eW.jpg",
  "alternative_name": null,
  "objectID": "551487460"
 },
 {
  "name": "Anna Faris",
  "rating": 727,
  "image_path": "/eHh3ZVEdBlXSBNjpHaGkGKvx1QI.jpg",
  "alternative_name": "Anna Kay Faris",
  "objectID": "551487480"
 },
 {
  "name": "Jon Hamm",
  "rating": 727,
  "image_path": "/7sjEnFaFNOzPeu5GhCeNJWhnOLt.jpg",
  "alternative_name": null,
  "objectID": "551487470"
 },
 {
  "name": "Sandra Bullock",
  "rating": 725,
  "image_path": "/pFudVrL9n8L0AHwMpbcfvsrjUQy.jpg",
  "alternative_name": "Sandra Annette Bullock",
  "objectID": "551487490"
 },
 {
  "name": "Cate Blanchett",
  "rating": 723,
  "image_path": "/X3CMrI6lkzLdS5ZQqQWeRJkAGU.jpg",
  "alternative_name": "Catherine Elise Blanchett",
  "objectID": "551487500"
 },
 {
  "name": "John Hurt",
  "rating": 721,
  "image_path": "/rpuH2YRLpxJjMxHq4T1QdOSVtlN.jpg",
  "alternative_name": "John Hurt CBE",
  "objectID": "551487510"
 },
 {
  "name": "Nick Nolte",
  "rating": 720,
  "image_path": "/mecF0UBz1RSnf1ggd0ltYoCwqd2.jpg",
  "alternative_name": null,
  "objectID": "551487520"
 },
 {
  "name": "Christopher Nolan",
  "rating": 718,
  "image_path": "/7OGmfDF4VHLLgbjxuEwTj3ga0uQ.jpg",
  "alternative_name": "Chris Nolan",
  "objectID": "551487530"
 },
 {
  "name": "Alonna Shaw",
  "rating": 717,
  "image_path": "/m5EBy8XIN7LT9hEdMY2ydWyoRMX.jpg",
  "alternative_name": null,
  "objectID": "551487540"
 },
 {
  "name": "Dabney Coleman",
  "rating": 715,
  "image_path": "/95I1LdB2PS2RcAL4mqUzAmJWI5x.jpg",
  "alternative_name": null,
  "objectID": "551487550"
 },
 {
  "name": "Dominic Cooper",
  "rating": 712,
  "image_path": "/z4eKEtwZXVespbZCS2qjYZaztyv.jpg",
  "alternative_name": null,
  "objectID": "551487560"
 },
 {
  "name": "Anne Hathaway",
  "rating": 709,
  "image_path": "/tCLYPoQPMSqqxp3rZDjZePJjqnF.jpg",
  "alternative_name": null,
  "objectID": "551487570"
 },
 {
  "name": "Sienna Guillory",
  "rating": 708,
  "image_path": "/pWyLeJCldGteBbSu9FhC0ef5LZx.jpg",
  "alternative_name": null,
  "objectID": "551487580"
 },
 {
  "name": "Denise Richards",
  "rating": 707,
  "image_path": "/r273Tmck64anm3uuccE8zfJD8da.jpg",
  "alternative_name": null,
  "objectID": "551487590"
 },
 {
  "name": "George Clooney",
  "rating": 706,
  "image_path": "/zOwzwGOZIqL3W80VrwosH4BkoZ6.jpg",
  "alternative_name": null,
  "objectID": "551487600"
 },
 {
  "name": "Elizabeth Banks",
  "rating": 700,
  "image_path": "/w2RrVNLQa4ApXhpIgWTkpNVS2kd.jpg",
  "alternative_name": "Elizabeth Maresal Mitchell",
  "objectID": "551487650"
 },
 {
  "name": "John Malkovich",
  "rating": 700,
  "image_path": "/nqiVrEVW3DAHS9K5L3JWO4sYngC.jpg",
  "alternative_name": null,
  "objectID": "551487640"
 },
 {
  "name": "Diane Lane",
  "rating": 700,
  "image_path": "/dMjEMuNXIT3g66qv92DOUVGBFC8.jpg",
  "alternative_name": null,
  "objectID": "551487630"
 },
 {
  "name": "Renee Rea",
  "rating": 700,
  "image_path": "/3NQM9oOLwlwutbtMWeLSIDusJsX.jpg",
  "alternative_name": "Samantha McConnell",
  "objectID": "551487620"
 },
 {
  "name": "Angelina Jolie",
  "rating": 700,
  "image_path": "/69LcCbHUpeh6WsESY8wcEiiZFjk.jpg",
  "alternative_name": null,
  "objectID": "551487610"
 },
 {
  "name": "Rachelle Lefevre",
  "rating": 699,
  "image_path": "/g6enujzJqgF3prYKp2vfvbrqhZ7.jpg",
  "alternative_name": "Rachelle Lefèvre",
  "objectID": "551487660"
 },
 {
  "name": "Hayden Christensen",
  "rating": 698,
  "image_path": "/lz6mI2hhVrGu640fxm9GQkv4V7l.jpg",
  "alternative_name": "Hayden Christiansen",
  "objectID": "551487670"
 },
 {
  "name": "Nicole Kidman",
  "rating": 697,
  "image_path": "/hnX12EBKXIK7XwBhLCGGcEnFdpf.jpg",
  "alternative_name": null,
  "objectID": "551487680"
 },
 {
  "name": "Colin Farrell",
  "rating": 696,
  "image_path": "/9FDzNq8cixv5PzJwjNXx1mJKAhU.jpg",
  "alternative_name": "Колін Фаррелл",
  "objectID": "551487690"
 },
 {
  "name": "Kate Winslet",
  "rating": 695,
  "image_path": "/2kh86i0q6y8SeBsMGz0UJ3iHMYD.jpg",
  "alternative_name": null,
  "objectID": "551487700"
 },
 {
  "name": "Carmen Electra",
  "rating": 692,
  "image_path": "/oFjqvsVleDaMtuJaLnSJdx7LUOg.jpg",
  "alternative_name": null,
  "objectID": "551487720"
 },
 {
  "name": "Olga Kurylenko",
  "rating": 692,
  "image_path": "/8jqQXZ90lxE842F0slFRzNlCdsW.jpg",
  "alternative_name": "Ольга Куриленко",
  "objectID": "551487710"
 },
 {
  "name": "Natalie Portman",
  "rating": 686,
  "image_path": "/a5I22pEXe7Ysn2BDod0C1PobPA8.jpg",
  "alternative_name": null,
  "objectID": "551487740"
 },
 {
  "name": "Emma Stone",
  "rating": 686,
  "image_path": "/psZLjAknmHVdSSNZqA6wBJ5tGxw.jpg",
  "alternative_name": null,
  "objectID": "551487730"
 },
 {
  "name": "Natalie Martinez",
  "rating": 685,
  "image_path": "/9F8hCTTuDfPn5DPjsSuwxaJVwT4.jpg",
  "alternative_name": null,
  "objectID": "551487750"
 },
 {
  "name": "Sean Bean",
  "rating": 684,
  "image_path": "/iIxP2IzvcLgr5WaTBD4UfSqaV3q.jpg",
  "alternative_name": null,
  "objectID": "551487760"
 },
 {
  "name": "Ryan Reynolds",
  "rating": 682,
  "image_path": "/3J19JiWqs4M75FFVqOdwn0DBU5q.jpg",
  "alternative_name": null,
  "objectID": "551487770"
 },
 {
  "name": "Ryan Gosling",
  "rating": 680,
  "image_path": "/5rOcicCrTCWye0O2S3dnbnWaCr1.jpg",
  "alternative_name": null,
  "objectID": "551487780"
 },
 {
  "name": "Fajah Lourens",
  "rating": 677,
  "image_path": "/zjQ6L7Roe8CJz5HLlDBUQi70iLw.jpg",
  "alternative_name": null,
  "objectID": "551487790"
 },
 {
  "name": "Orla Brady",
  "rating": 676,
  "image_path": "/3vZtTc5wlM23ClWKuPvaYS3DVj7.jpg",
  "alternative_name": null,
  "objectID": "551487820"
 },
 {
  "name": "Nina Dobrev",
  "rating": 676,
  "image_path": "/7Oc4jOZHWNYozxBxKdQr0NxoGjS.jpg",
  "alternative_name": "Nina Constantinova Dobreva",
  "objectID": "551487810"
 },
 {
  "name": "Harrison Ford",
  "rating": 676,
  "image_path": "/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg",
  "alternative_name": "Harrison J. Ford",
  "objectID": "551487800"
 },
 {
  "name": "Olivia Wilde",
  "rating": 675,
  "image_path": "/3d69fgT1QOTDJxqy7FpBBAQxoM0.jpg",
  "alternative_name": null,
  "objectID": "551487830"
 },
 {
  "name": "Ben Affleck",
  "rating": 674,
  "image_path": "/yXtyygmSGtrwTfEmr6g2WgHFJIZ.jpg",
  "alternative_name": "Affleck",
  "objectID": "551487840"
 },
 {
  "name": "Noomi Rapace",
  "rating": 672,
  "image_path": "/nFD1t8MSFpgNcFgOLwEj9es9u2H.jpg",
  "alternative_name": null,
  "objectID": "551487850"
 },
 {
  "name": "Fan Bingbing",
  "rating": 671,
  "image_path": "/8DyH7uapvuJaTjrXv9ryhRARUC2.jpg",
  "alternative_name": "Fan Bing Bing",
  "objectID": "551487860"
 },
 {
  "name": "Jamie Lee Curtis",
  "rating": 669,
  "image_path": "/c4poMDwQ0nUj81m4WPriiv96ExZ.jpg",
  "alternative_name": null,
  "objectID": "551487880"
 },
 {
  "name": "Tara Elders",
  "rating": 669,
  "image_path": "/sHinWyEDznd4XZHFf9sGnw8dM1X.jpg",
  "alternative_name": null,
  "objectID": "551487870"
 },
 {
  "name": "Al Pacino",
  "rating": 666,
  "image_path": "/ks7Ba8x9fJUlP9decBr6Dh5mThX.jpg",
  "alternative_name": null,
  "objectID": "551487890"
 },
 {
  "name": "Mila Kunis",
  "rating": 665,
  "image_path": "/fFrrlndob3xAzH7yhIcpAmWwqnD.jpg",
  "alternative_name": "Мила Кунис",
  "objectID": "551487920"
 },
 {
  "name": "Eddie Redmayne",
  "rating": 665,
  "image_path": "/grB1xp10baoSVZnb4CC854ys94O.jpg",
  "alternative_name": null,
  "objectID": "551487910"
 },
 {
  "name": "Gerard Butler",
  "rating": 665,
  "image_path": "/wRKkVe5uugkx4KnmphBSjJUWPTo.jpg",
  "alternative_name": null,
  "objectID": "551487900"
 },
 {
  "name": "Henry Winkler",
  "rating": 664,
  "image_path": "/o3QkTZkDYMkKYJphYJkvMSx8eB3.jpg",
  "alternative_name": "Henry Franklin Winkler",
  "objectID": "551487930"
 },
 {
  "name": "Amanda Seyfried",
  "rating": 663,
  "image_path": "/rkMBMJyRekUnZf59ipVRrtw74xk.jpg",
  "alternative_name": null,
  "objectID": "551487940"
 },
 {
  "name": "Lena Headey",
  "rating": 659,
  "image_path": "/h9eTactBDOMB3FGU4WodKBT2rLM.jpg",
  "alternative_name": null,
  "objectID": "551487960"
 },
 {
  "name": "Kristen Wiig",
  "rating": 659,
  "image_path": "/x5avlvpHlBGGLhzbzuSfmOsMGlw.jpg",
  "alternative_name": null,
  "objectID": "551487950"
 },
 {
  "name": "Léa Seydoux",
  "rating": 658,
  "image_path": "/19gU2MSmsauB9TIh8gcd8JzvD2g.jpg",
  "alternative_name": null,
  "objectID": "551487980"
 },
 {
  "name": "Louise Fletcher",
  "rating": 658,
  "image_path": "/A4Cn7LsuLlOXvOMKv5ez4ThyeZL.jpg",
  "alternative_name": "Estelle Louise Fletcher",
  "objectID": "551487970"
 },
 {
  "name": "Channing Tatum",
  "rating": 656,
  "image_path": "/pykInmL4Y8HXNX63kkI4RsJhalF.jpg",
  "alternative_name": "Channing Matthew Tatum",
  "objectID": "551488010"
 },
 {
  "name": "Anton Yelchin",
  "rating": 656,
  "image_path": "/cUlF4fJMOYclUHA3bTFwlgFKNaH.jpg",
  "alternative_name": "Anton Viktorovich Yelchin",
  "objectID": "551488000"
 },
 {
  "name": "Alec Baldwin",
  "rating": 656,
  "image_path": "/i34dh4LKYlNOF67qSPJgzhddzyw.jpg",
  "alternative_name": null,
  "objectID": "551487990"
 },
 {
  "name": "Tyler Perry",
  "rating": 655,
  "image_path": "/fdBvkrv4lSKZ97eDLpmjlK1Tnbx.jpg",
  "alternative_name": null,
  "objectID": "551488020"
 },
 {
  "name": "Peter Dinklage",
  "rating": 652,
  "image_path": "/xuB7b4GbARu4HN6gq5zMqjGbkwF.jpg",
  "alternative_name": null,
  "objectID": "551488030"
 },
 {
  "name": "Sam Neill",
  "rating": 649,
  "image_path": "/bmTxJ3szZaQNCgYOaVRRQxBDQlF.jpg",
  "alternative_name": null,
  "objectID": "551488050"
 },
 {
  "name": "Orlando Bloom",
  "rating": 649,
  "image_path": "/vq90ECKinICxJYYZpbga4pMwch.jpg",
  "alternative_name": "奥兰多·布鲁姆",
  "objectID": "551488040"
 },
 {
  "name": "Linda Hamilton",
  "rating": 648,
  "image_path": "/fcRpgjonpH3WmPs0V63g7iP7Dbm.jpg",
  "alternative_name": "Linda Carroll Hamilton",
  "objectID": "551488090"
 },
 {
  "name": "Dennis Hopper",
  "rating": 648,
  "image_path": "/56nj2DfMVU3F9qUagZWMePLbrKF.jpg",
  "alternative_name": null,
  "objectID": "551488080"
 },
 {
  "name": "Danny Glover",
  "rating": 648,
  "image_path": "/jSNTEnm0Sxm8FRtoBfJmhmQyozH.jpg",
  "alternative_name": null,
  "objectID": "551488070"
 },
 {
  "name": "María Valverde",
  "rating": 648,
  "image_path": "/aine30cqU9ucNcdUKCC5rc5iu19.jpg",
  "alternative_name": null,
  "objectID": "551488060"
 },
 {
  "name": "Alexa PenaVega",
  "rating": 646,
  "image_path": "/vPJOYBx5FRsA4YfUjUKNeF7KCNm.jpg",
  "alternative_name": "Alexa Vega",
  "objectID": "551488100"
 },
 {
  "name": "Daniel Craig",
  "rating": 643,
  "image_path": "/cO5OUQAMM6a4Rndw5Hc81KgpF5p.jpg",
  "alternative_name": null,
  "objectID": "551488130"
 },
 {
  "name": "Jean-Claude Van Damme",
  "rating": 643,
  "image_path": "/aqZ9RjL5j44HMlBMvTaawhHiGOH.jpg",
  "alternative_name": null,
  "objectID": "551488120"
 },
 {
  "name": "Mark Boone Junior",
  "rating": 643,
  "image_path": "/nNVvaTLa8A5uwLXQvCsKoX4npwo.jpg",
  "alternative_name": null,
  "objectID": "551488110"
 },
 {
  "name": "Bill Murray",
  "rating": 640,
  "image_path": "/eb58HuFIrxS0zUmbmW4d8YXTbje.jpg",
  "alternative_name": null,
  "objectID": "551488140"
 },
 {
  "name": "Mark Strong",
  "rating": 637,
  "image_path": "/vC1a35KBxx8f2rkMKyaik7bTOud.jpg",
  "alternative_name": null,
  "objectID": "551488150"
 },
 {
  "name": "Kelly Hu",
  "rating": 636,
  "image_path": "/ldIqkVNQoig6tFdF6b1ql1iylAD.jpg",
  "alternative_name": null,
  "objectID": "551488160"
 },
 {
  "name": "Natalya Vdovina",
  "rating": 626,
  "image_path": "/6UOsRZDVqLSrH0f9xpGhLkeq3zr.jpg",
  "alternative_name": null,
  "objectID": "551488170"
 },
 {
  "name": "Julia Roberts",
  "rating": 625,
  "image_path": "/yzaIyUEKHSnEYDwltXs8gpF4SVC.jpg",
  "alternative_name": null,
  "objectID": "551488190"
 },
 {
  "name": "Karl Urban",
  "rating": 625,
  "image_path": "/tHYOUO33K7iaDw8nXyqRvDIkVuM.jpg",
  "alternative_name": null,
  "objectID": "551488180"
 },
 {
  "name": "Edward Furlong",
  "rating": 624,
  "image_path": "/o7x6XcLSZSJygjYKLMcElEehmkr.jpg",
  "alternative_name": null,
  "objectID": "551488210"
 },
 {
  "name": "Leonardo DiCaprio",
  "rating": 624,
  "image_path": "/jToSMocaCaS5YnuOJVqQ7S7pr4Q.jpg",
  "alternative_name": "Leonardo Di Caprio",
  "objectID": "551488200"
 },
 {
  "name": "Kate Hudson",
  "rating": 623,
  "image_path": "/tdytZnsqNwPxROx4vFrzsytqF4a.jpg",
  "alternative_name": null,
  "objectID": "551488230"
 },
 {
  "name": "Mickey Rourke",
  "rating": 623,
  "image_path": "/AvGzQ8fvjurGmZW3W1wlQ5WfSeT.jpg",
  "alternative_name": null,
  "objectID": "551488220"
 },
 {
  "name": "Jessica Alba",
  "rating": 621,
  "image_path": "/pkwAeOcW3ZBhN48SC4fnQt2josF.jpg",
  "alternative_name": "Jessica Marie Alba",
  "objectID": "551488260"
 },
 {
  "name": "Gina Gershon",
  "rating": 621,
  "image_path": "/11msvQiJrO3Kiv1WixhCn0QQbKv.jpg",
  "alternative_name": null,
  "objectID": "551488250"
 },
 {
  "name": "Chris Pine",
  "rating": 621,
  "image_path": "/nAYcoQqMEuZzBZzaYCQlabqKhx0.jpg",
  "alternative_name": null,
  "objectID": "551488240"
 },
 {
  "name": "Emma Watson",
  "rating": 619,
  "image_path": "/q1U3QmdWEBhW80swZxy3zSYdjjA.jpg",
  "alternative_name": null,
  "objectID": "551488270"
 },
 {
  "name": "Lucy Hale",
  "rating": 617,
  "image_path": "/r3hs2FTSp0RvR7lB2jeqF6tNg9z.jpg",
  "alternative_name": null,
  "objectID": "551488280"
 },
 {
  "name": "Claire Danes",
  "rating": 616,
  "image_path": "/bWkEsNznAXV6YciG9DVNayAOkwM.jpg",
  "alternative_name": null,
  "objectID": "551488290"
 },
 {
  "name": "Gaspard Ulliel",
  "rating": 615,
  "image_path": "/urvCqSEN0UQAxLXeGQJP9ayydmr.jpg",
  "alternative_name": null,
  "objectID": "551488330"
 },
 {
  "name": "Rosanna Arquette",
  "rating": 615,
  "image_path": "/rQMQYQUF9QzD6oDfkP6tsjmyZhS.jpg",
  "alternative_name": null,
  "objectID": "551488320"
 },
 {
  "name": "Amanda Page",
  "rating": 615,
  "image_path": "/vrGuJZpKJL3Dlt4o6DLCQC8SZWf.jpg",
  "alternative_name": null,
  "objectID": "551488310"
 },
 {
  "name": "John Goodman",
  "rating": 615,
  "image_path": "/mLJC7sRO3JnGkySJlwCJblvhBHm.jpg",
  "alternative_name": null,
  "objectID": "551488300"
 },
 {
  "name": "Jon Voight",
  "rating": 614,
  "image_path": "/c7BvyqlvqDkfkFqSBUCiR21fvTh.jpg",
  "alternative_name": null,
  "objectID": "551488340"
 },
 {
  "name": "Cary Guffey",
  "rating": 613,
  "image_path": "/fESPDQKYppdhyCLkc6YA1MxYGZF.jpg",
  "alternative_name": null,
  "objectID": "551488370"
 },
 {
  "name": "Shane West",
  "rating": 613,
  "image_path": "/1TiKpPiFwdUbs24yrNZLSzAjsnk.jpg",
  "alternative_name": null,
  "objectID": "551488360"
 },
 {
  "name": "Ron Perlman",
  "rating": 613,
  "image_path": "/xZyrXT2iEmSOokQRc1hedmxrbTi.jpg",
  "alternative_name": "Ronald Perlman",
  "objectID": "551488350"
 },
 {
  "name": "Cameron Diaz",
  "rating": 612,
  "image_path": "/ahFkUN9Sm8oF1txUHE5JcJ95Ere.jpg",
  "alternative_name": "Cameron Michelle Diaz",
  "objectID": "551488380"
 },
 {
  "name": "Brigitte Nielsen",
  "rating": 610,
  "image_path": "/sCygCFKnKR3G3yROyfwOIxJf9eM.jpg",
  "alternative_name": null,
  "objectID": "551488400"
 },
 {
  "name": "Kim Basinger",
  "rating": 610,
  "image_path": "/xpv6NgpY0mDr5QSWjZLXy5KlFn9.jpg",
  "alternative_name": null,
  "objectID": "551488390"
 },
 {
  "name": "Eva Mendes",
  "rating": 609,
  "image_path": "/6JoVMpn0CcZwb6JK7XW2E6ntU52.jpg",
  "alternative_name": null,
  "objectID": "551488410"
 },
 {
  "name": "Demi Moore",
  "rating": 608,
  "image_path": "/eLNoOYnxvhpV0BMSkNNnyyo5In7.jpg",
  "alternative_name": null,
  "objectID": "551488420"
 },
 {
  "name": "Kaley Cuoco",
  "rating": 603,
  "image_path": "/vEk1rLGhZWx5H3c7BPENIZf6xaM.jpg",
  "alternative_name": "Kaley Cuoco-Sweeting",
  "objectID": "551488440"
 },
 {
  "name": "Emily Blunt",
  "rating": 603,
  "image_path": "/A3fiIXjP1xvDn4fESU2Hl7pfmuL.jpg",
  "alternative_name": "Emily Olivia Leah Blunt",
  "objectID": "551488430"
 },
 {
  "name": "Tuba Büyüküstün",
  "rating": 601,
  "image_path": "/qVQKLx2qcKWO1RsrPeZKtBPapel.jpg",
  "alternative_name": null,
  "objectID": "551488460"
 },
 {
  "name": "Ralph Fiennes",
  "rating": 601,
  "image_path": "/llD2XyqOhxAENnJiQlvGAFcj733.jpg",
  "alternative_name": null,
  "objectID": "551488450"
 },
 {
  "name": "Kevin Spacey",
  "rating": 598,
  "image_path": "/cdowETe1PgXLjo72hDb7R7tyavf.jpg",
  "alternative_name": null,
  "objectID": "551488480"
 },
 {
  "name": "Joaquin Phoenix",
  "rating": 598,
  "image_path": "/3IhxPwyUovZGbsdwhcaU0Kvm37J.jpg",
  "alternative_name": "Leaf Phoenix",
  "objectID": "551488470"
 },
 {
  "name": "Liana Liberato",
  "rating": 596,
  "image_path": "/qNfYhqaudHwclYkiVwryMRGJX8e.jpg",
  "alternative_name": null,
  "objectID": "551488500"
 },
 {
  "name": "Harvey Keitel",
  "rating": 596,
  "image_path": "/oP3A0NaJShM1BbI7WwMFui72b7O.jpg",
  "alternative_name": null,
  "objectID": "551488490"
 },
 {
  "name": "Kristanna Loken",
  "rating": 592,
  "image_path": "/rxeYONGXlnNYOn50KjjiwgLxiGX.jpg",
  "alternative_name": null,
  "objectID": "551488520"
 },
 {
  "name": "Eddie Murphy",
  "rating": 592,
  "image_path": "/WlmlpM6YeQwgEmOX0n4bVZ08dc.jpg",
  "alternative_name": null,
  "objectID": "551488510"
 },
 {
  "name": "Shin Eun-Kyung",
  "rating": 589,
  "image_path": "/7OKUhhIfMfKGivWppXnRQi1bfQS.jpg",
  "alternative_name": "Sin Eun-kyeong",
  "objectID": "551488530"
 },
 {
  "name": "Robin Tunney",
  "rating": 587,
  "image_path": "/oQGr5vfYbkarmJQmhGmSpIhSapL.jpg",
  "alternative_name": null,
  "objectID": "551488540"
 },
 {
  "name": "Jennifer Lawrence",
  "rating": 586,
  "image_path": "/xFEz5rzkiTFV2Gx3aLaAoXGhWdp.jpg",
  "alternative_name": null,
  "objectID": "551488560"
 },
 {
  "name": "Oliver Platt",
  "rating": 586,
  "image_path": "/an9n3aUKFAN50GDsbqwIkvWlcus.jpg",
  "alternative_name": null,
  "objectID": "551488550"
 },
 {
  "name": "Kate Mara",
  "rating": 585,
  "image_path": "/h8Jkofzrxy3vMpnH1iiCZ6eZwxb.jpg",
  "alternative_name": null,
  "objectID": "551488580"
 },
 {
  "name": "50 Cent",
  "rating": 585,
  "image_path": "/gsEwsWWtC5xwFCzL2CnPmc24uIO.jpg",
  "alternative_name": "Curtis James Jackson III",
  "objectID": "551488570"
 },
 {
  "name": "Richard Madden",
  "rating": 582,
  "image_path": "/fBEQiAvjmP6nYv1MyoVtQAf2OPX.jpg",
  "alternative_name": null,
  "objectID": "551488600"
 },
 {
  "name": "Norman Reedus",
  "rating": 582,
  "image_path": "/wJBL3VdMdMD5OarXEVHmSoupiLT.jpg",
  "alternative_name": null,
  "objectID": "551488590"
 },
 {
  "name": "Nicholas Hoult",
  "rating": 580,
  "image_path": "/rKLlBCBJb3GjOMeKdGtpWIsCRJc.jpg",
  "alternative_name": null,
  "objectID": "551488620"
 },
 {
  "name": "Christopher Lee",
  "rating": 580,
  "image_path": "/3Pj0Zt1x9fwBrGGLe6DRGj8Ymmx.jpg",
  "alternative_name": "Sir Christopher Lee",
  "objectID": "551488610"
 },
 {
  "name": "Nathan Fillion",
  "rating": 578,
  "image_path": "/B7VTVtnKyFk0AtYjEbqzBQlPec.jpg",
  "alternative_name": "Nathan Christopher Fillion",
  "objectID": "551488630"
 },
 {
  "name": "Jackie Chan",
  "rating": 577,
  "image_path": "/pmKJ4sGvPQ3imzXaFnjW4Vk5Gyc.jpg",
  "alternative_name": "成龙",
  "objectID": "551488640"
 },
 {
  "name": "Jessica Chastain",
  "rating": 575,
  "image_path": "/1kS81Pio4ga1FoeYTVWGkGcmEDS.jpg",
  "alternative_name": null,
  "objectID": "551488670"
 },
 {
  "name": "Brendan Gleeson",
  "rating": 575,
  "image_path": "/pUTBk2sqFgg4aFBXHckD0qKLUYP.jpg",
  "alternative_name": null,
  "objectID": "551488660"
 },
 {
  "name": "Ethan Hawke",
  "rating": 575,
  "image_path": "/kcby6VYk6Gb0036nUyh8chY5ZAJ.jpg",
  "alternative_name": "Ethan Green Hawke",
  "objectID": "551488650"
 },
 {
  "name": "Clive Owen",
  "rating": 572,
  "image_path": "/jm2as6tLcvHCYQvmMYM4VK6JEnr.jpg",
  "alternative_name": null,
  "objectID": "551488680"
 },
 {
  "name": "Laurence Fishburne",
  "rating": 571,
  "image_path": "/mh0lZ1XsT84FayMNiT6Erh91mVu.jpg",
  "alternative_name": "Larry Fishburne",
  "objectID": "551488690"
 },
 {
  "name": "Shailene Woodley",
  "rating": 570,
  "image_path": "/xPqcqbmrcit2tFjMTLEB8bbWPhd.jpg",
  "alternative_name": null,
  "objectID": "551488710"
 },
 {
  "name": "Shu Qi",
  "rating": 570,
  "image_path": "/kmTErFq6lKQww2Yk9AfpR2Q5YWx.jpg",
  "alternative_name": "Li-Hui Lin",
  "objectID": "551488700"
 },
 {
  "name": "Elisha Cuthbert",
  "rating": 569,
  "image_path": "/3CTK6oW2LfGVE7ICsKzeSxngp3H.jpg",
  "alternative_name": null,
  "objectID": "551488740"
 },
 {
  "name": "Vincent D'Onofrio",
  "rating": 569,
  "image_path": "/4pgzL6eP5Qdf2PhagqTNVEshv5e.jpg",
  "alternative_name": null,
  "objectID": "551488730"
 },
 {
  "name": "Dominic Purcell",
  "rating": 569,
  "image_path": "/eoWSvIMZ82IW15eUYubw39VKHSd.jpg",
  "alternative_name": null,
  "objectID": "551488720"
 },
 {
  "name": "Bryan Cranston",
  "rating": 568,
  "image_path": "/fnglrIFnI5cK4OAh66AZN86mkFq.jpg",
  "alternative_name": null,
  "objectID": "551488750"
 },
 {
  "name": "Peyton List",
  "rating": 567,
  "image_path": "/yAMajtPm0H5JBKJxaug1vM8ELQM.jpg",
  "alternative_name": null,
  "objectID": "551488770"
 },
 {
  "name": "Robert Swenson",
  "rating": 567,
  "image_path": "/cNuq7a8nCxRw9pNvQVVQoONkNsw.jpg",
  "alternative_name": null,
  "objectID": "551488760"
 },
 {
  "name": "George Miller",
  "rating": 566,
  "image_path": "/odbXhZmCBxjVCzRTxvZhrchBnN0.jpg",
  "alternative_name": null,
  "objectID": "551488780"
 },
 {
  "name": "Ernest Borgnine",
  "rating": 564,
  "image_path": "/jncvBRxHzlmfilXBDYJw1udTSB0.jpg",
  "alternative_name": "Ermes Effron Borgnino",
  "objectID": "551488790"
 },
 {
  "name": "Owen Wilson",
  "rating": 563,
  "image_path": "/j7oYgvfDiO34VcFdSB7GhM2CSle.jpg",
  "alternative_name": null,
  "objectID": "551488820"
 },
 {
  "name": "Woody Harrelson",
  "rating": 563,
  "image_path": "/ivfalpnvELPaSILqP6K6rabXfsU.jpg",
  "alternative_name": "Вуді Гаррельсон",
  "objectID": "551488810"
 },
 {
  "name": "Jeremy Irons",
  "rating": 563,
  "image_path": "/9AWphjIgGX7JjTrwrx3tsTZlUgv.jpg",
  "alternative_name": null,
  "objectID": "551488800"
 },
 {
  "name": "Kristen Bell",
  "rating": 562,
  "image_path": "/9DoDVUkoXhT3O2R1RymPlOfUryl.jpg",
  "alternative_name": "Kristen Anne Bell",
  "objectID": "551488840"
 },
 {
  "name": "Claudia Cardinale",
  "rating": 562,
  "image_path": "/tV3oboOm0Iix0AEtQKGPnPE2hbF.jpg",
  "alternative_name": "Claude Joséphine Rose Cardinale",
  "objectID": "551488830"
 },
 {
  "name": "Quentin Tarantino",
  "rating": 561,
  "image_path": "/6grjDWpEIPL5QdRbUZFxVEp5TCd.jpg",
  "alternative_name": "Quentin Jerome Tarantino",
  "objectID": "551488860"
 },
 {
  "name": "Mia Kirshner",
  "rating": 561,
  "image_path": "/pgQw5mlHRwWKBwLMdMj2jqiwK5D.jpg",
  "alternative_name": null,
  "objectID": "551488850"
 },
 {
  "name": "Alice Eve",
  "rating": 560,
  "image_path": "/G3YOQbFMnPGBO5LrN3WJTs2kJf.jpg",
  "alternative_name": null,
  "objectID": "551488890"
 },
 {
  "name": "Dougray Scott",
  "rating": 560,
  "image_path": "/jzHFzUH097772iacix0F4XSIZz4.jpg",
  "alternative_name": null,
  "objectID": "551488880"
 },
 {
  "name": "Taron Egerton",
  "rating": 560,
  "image_path": "/bVsLVoO3BGoHRLjWoM4Gjav2hNb.jpg",
  "alternative_name": null,
  "objectID": "551488870"
 },
 {
  "name": "Tyrese Gibson",
  "rating": 559,
  "image_path": "/2eQsxfTHsARKXOtPu3W4c2n5RzQ.jpg",
  "alternative_name": null,
  "objectID": "551488900"
 },
 {
  "name": "Solène Rigot",
  "rating": 556,
  "image_path": "/axjHYWo91vYoGE39YqPVfRhSbr5.jpg",
  "alternative_name": null,
  "objectID": "551488920"
 },
 {
  "name": "Luke Evans",
  "rating": 556,
  "image_path": "/1d31uDYub8TaLOPWfgX78OotduD.jpg",
  "alternative_name": null,
  "objectID": "551488910"
 },
 {
  "name": "Rebecca Hall",
  "rating": 555,
  "image_path": "/pDY00JdSgDxXxMsBOJcShJjDVxl.jpg",
  "alternative_name": null,
  "objectID": "551488940"
 },
 {
  "name": "Viggo Mortensen",
  "rating": 555,
  "image_path": "/bsW2qXbMCc6mo8eGj5Lpi7GrC7N.jpg",
  "alternative_name": null,
  "objectID": "551488930"
 },
 {
  "name": "Izabella Miko",
  "rating": 554,
  "image_path": "/y17WPWE0tOFroVttwayzU3Q2Mxb.jpg",
  "alternative_name": null,
  "objectID": "551488960"
 },
 {
  "name": "J. Pat O'Malley",
  "rating": 554,
  "image_path": "/if8jAnsuARxFUy3k7PhaFqzHd9N.jpg",
  "alternative_name": null,
  "objectID": "551488950"
 },
 {
  "name": "Emily Watson",
  "rating": 553,
  "image_path": "/jyIC8axLoCrbQoKGGjGFRU7hfNI.jpg",
  "alternative_name": null,
  "objectID": "551489000"
 },
 {
  "name": "Sam Worthington",
  "rating": 553,
  "image_path": "/9XzAE3ZnCnazub4xrSY8YBN7sNq.jpg",
  "alternative_name": null,
  "objectID": "551488990"
 },
 {
  "name": "Naomi Watts",
  "rating": 553,
  "image_path": "/8W02WOJI1pEGh2iqQsgITR5tV0P.jpg",
  "alternative_name": null,
  "objectID": "551488980"
 },
 {
  "name": "Rene Russo",
  "rating": 553,
  "image_path": "/aaPzuXRHdyxamPMXqu70okPaqvB.jpg",
  "alternative_name": null,
  "objectID": "551488970"
 },
 {
  "name": "Ice Cube",
  "rating": 551,
  "image_path": "/dzdn1tyWkC4EjlBVKvpAhg5osYA.jpg",
  "alternative_name": "Ice Cube Nwa",
  "objectID": "551489010"
 },
 {
  "name": "Uma Thurman",
  "rating": 550,
  "image_path": "/1syarPILK8IIFvBHhlK8pdBZ2bz.jpg",
  "alternative_name": null,
  "objectID": "551489020"
 },
 {
  "name": "Kaya Scodelario",
  "rating": 549,
  "image_path": "/s3ujVl6I2jyr5tZjvNxvpKm3o7S.jpg",
  "alternative_name": null,
  "objectID": "551489030"
 },
 {
  "name": "David O'Hara",
  "rating": 548,
  "image_path": "/sJ35AHaSTzSrvd80xrlC1CD30iF.jpg",
  "alternative_name": null,
  "objectID": "551489040"
 },
 {
  "name": "Jan Sterling",
  "rating": 547,
  "image_path": "/kbDFYUzTVZddegCczn0BljjpWb7.jpg",
  "alternative_name": null,
  "objectID": "551489070"
 },
 {
  "name": "Glenn Thomas Jacobs",
  "rating": 547,
  "image_path": "/jMUbn5h9ET6E8QqJI63NDlqM650.jpg",
  "alternative_name": "Kane",
  "objectID": "551489060"
 },
 {
  "name": "Dakota Blue Richards",
  "rating": 547,
  "image_path": "/23pGkpzWHG07ExWDHKMGs6Es5Fv.jpg",
  "alternative_name": null,
  "objectID": "551489050"
 },
 {
  "name": "William Shatner",
  "rating": 546,
  "image_path": "/5hWNPFmnzlFAkGMleBKkeFFcxhY.jpg",
  "alternative_name": null,
  "objectID": "551489090"
 },
 {
  "name": "Will Ferrell",
  "rating": 546,
  "image_path": "/dGxt3uGPlUJKIfHYiLasnEgR90e.jpg",
  "alternative_name": null,
  "objectID": "551489080"
 },
 {
  "name": "Nora Miao",
  "rating": 545,
  "image_path": "/AsLdf8DkE7T5DlPNHk5LyzUrIsz.jpg",
  "alternative_name": "Miao Ko-Sou",
  "objectID": "551489100"
 },
 {
  "name": "Emmanuelle Chriqui",
  "rating": 544,
  "image_path": "/d2PyTKZyt5Ndk9am6PJ8u6jRdjH.jpg",
  "alternative_name": null,
  "objectID": "551489110"
 },
 {
  "name": "Seth Rogen",
  "rating": 543,
  "image_path": "/3U9s4dvXQuk1l3ZT3MqwqpmeRqI.jpg",
  "alternative_name": null,
  "objectID": "551489150"
 },
 {
  "name": "John Leguizamo",
  "rating": 543,
  "image_path": "/wlcCiSjmcXHJCG7WATmbwYIRnmX.jpg",
  "alternative_name": null,
  "objectID": "551489140"
 },
 {
  "name": "Ioan Gruffudd",
  "rating": 543,
  "image_path": "/iGJI8szrwaRBd484sGO8OOm1HOH.jpg",
  "alternative_name": null,
  "objectID": "551489130"
 },
 {
  "name": "Jeremy Sumpter",
  "rating": 543,
  "image_path": "/erNaw0imhMzn3OqGcOQPQeQ4RtI.jpg",
  "alternative_name": null,
  "objectID": "551489120"
 },
 {
  "name": "Charlotte Gainsbourg",
  "rating": 542,
  "image_path": "/4TKuzaPGVH1BRMp6v22hAPkclkK.jpg",
  "alternative_name": "Charlotte Lucy Gainsbourg",
  "objectID": "551489180"
 },
 {
  "name": "Viola Davis",
  "rating": 542,
  "image_path": "/bqdE1CNQ7LokkzMZgKJlgDE5n6U.jpg",
  "alternative_name": null,
  "objectID": "551489170"
 },
 {
  "name": "Dan Duryea",
  "rating": 542,
  "image_path": "/577hAUPy04u98IwsHKO2rQriJ2e.jpg",
  "alternative_name": null,
  "objectID": "551489160"
 },
 {
  "name": "Jamie Foxx",
  "rating": 537,
  "image_path": "/1yr8Pv1tSWnQkCwDLrzUIzZVurM.jpg",
  "alternative_name": null,
  "objectID": "551489210"
 },
 {
  "name": "Cliff Curtis",
  "rating": 537,
  "image_path": "/dkSlTaKKe0uaKKAscVaSHlGq4g3.jpg",
  "alternative_name": null,
  "objectID": "551489200"
 },
 {
  "name": "Cara Delevingne",
  "rating": 537,
  "image_path": "/zYDFAIgSihaLiYoFzQU9Wl5VkvO.jpg",
  "alternative_name": null,
  "objectID": "551489190"
 },
 {
  "name": "James Gandolfini",
  "rating": 536,
  "image_path": "/19r3knxqTAPUgfItOPXg3ouOcpI.jpg",
  "alternative_name": null,
  "objectID": "551489250"
 },
 {
  "name": "Ida Lupino",
  "rating": 536,
  "image_path": "/fjIFL366O3LDr9mPnZd1P8nuB7A.jpg",
  "alternative_name": null,
  "objectID": "551489240"
 },
 {
  "name": "Patrick Wilson",
  "rating": 536,
  "image_path": "/djhTpbOvrfdDsWZFFintj2Uv47a.jpg",
  "alternative_name": null,
  "objectID": "551489230"
 },
 {
  "name": "Mel Gibson",
  "rating": 536,
  "image_path": "/6VGgL0bBvPIJ9vDOyyGf5nK2zL4.jpg",
  "alternative_name": "Mel Columcille Gerard Gibson",
  "objectID": "551489220"
 },
 {
  "name": "James Purefoy",
  "rating": 535,
  "image_path": "/5HJn5a5xHsQYVvbVSDyytZB5Tci.jpg",
  "alternative_name": null,
  "objectID": "551489270"
 },
 {
  "name": "Rachael Leigh Cook",
  "rating": 535,
  "image_path": "/xPcfVq2UMihLNmPvYhFXV0IXiwF.jpg",
  "alternative_name": "Rachael Gillies",
  "objectID": "551489260"
 },
 {
  "name": "James Cameron",
  "rating": 534,
  "image_path": "/6Zk8h1XsPGKUM8M8cKUHAnmnc8O.jpg",
  "alternative_name": null,
  "objectID": "551489290"
 },
 {
  "name": "Jonah Hill",
  "rating": 534,
  "image_path": "/paKfXGK2gnYHWkqe1NiQR1pGac7.jpg",
  "alternative_name": null,
  "objectID": "551489280"
 },
 {
  "name": "Kellan Lutz",
  "rating": 533,
  "image_path": "/sNgRpXCVyDesWJReOX2cNa7oijS.jpg",
  "alternative_name": null,
  "objectID": "551489310"
 },
 {
  "name": "Joseph Gordon-Levitt",
  "rating": 533,
  "image_path": "/zSuXCR6xCKIgo0gWLdp8moMlH3I.jpg",
  "alternative_name": null,
  "objectID": "551489300"
 },
 {
  "name": "Ian McKellen",
  "rating": 532,
  "image_path": "/c51mP46oPgAgFf7bFWVHlScZynM.jpg",
  "alternative_name": "Sir Ian McKellen",
  "objectID": "551489320"
 },
 {
  "name": "Garrett Hedlund",
  "rating": 531,
  "image_path": "/2UXqL30fM8ygySH0I5iy5RFx9Tp.jpg",
  "alternative_name": null,
  "objectID": "551489330"
 },
 {
  "name": "Amy Poehler",
  "rating": 530,
  "image_path": "/qvVYBwZncnWoiu48GklLXQKMngm.jpg",
  "alternative_name": null,
  "objectID": "551489350"
 },
 {
  "name": "Elijah Wood",
  "rating": 530,
  "image_path": "/r3XfDLyaaMb3RKWcsmGggRTMEhe.jpg",
  "alternative_name": null,
  "objectID": "551489340"
 },
 {
  "name": "Adam Baldwin",
  "rating": 529,
  "image_path": "/vhZ8AD36h09mBLuyIXboglRLgIu.jpg",
  "alternative_name": null,
  "objectID": "551489370"
 },
 {
  "name": "Eva Green",
  "rating": 529,
  "image_path": "/qXlDuXpDlx7JTxtB78qG9DgKIzz.jpg",
  "alternative_name": null,
  "objectID": "551489360"
 },
 {
  "name": "Michelle Williams",
  "rating": 528,
  "image_path": "/zUvxAK66dVIOMH7M0yZWGkkwZGL.jpg",
  "alternative_name": null,
  "objectID": "551489390"
 },
 {
  "name": "Lea Thompson",
  "rating": 528,
  "image_path": "/dA1BESp4Now9aULstKMReI8hzui.jpg",
  "alternative_name": "Lea Katherine Thompson",
  "objectID": "551489380"
 },
 {
  "name": "Ivy Chen",
  "rating": 527,
  "image_path": "/ukRPIkzQx9JB8G4snx3rK9tCegf.jpg",
  "alternative_name": "Chen Yi-han",
  "objectID": "551489410"
 },
 {
  "name": "Kris Kristofferson",
  "rating": 527,
  "image_path": "/hiGkNoiAwnUgY9XZ3YhiWMvKngi.jpg",
  "alternative_name": null,
  "objectID": "551489400"
 },
 {
  "name": "ناهد جبر",
  "rating": 526,
  "image_path": "/1CbTJkFTxcTGzd8g6yRH9kXit6Y.jpg",
  "alternative_name": null,
  "objectID": "551489450"
 },
 {
  "name": "Shannon Tweed",
  "rating": 526,
  "image_path": "/cfHhjZIPqXXOZ9rsQguofYrTQL9.jpg",
  "alternative_name": null,
  "objectID": "551489440"
 },
 {
  "name": "Hayley Atwell",
  "rating": 526,
  "image_path": "/w6xp5nvj8boZTJ24ZH4bhh4Lx7B.jpg",
  "alternative_name": "Hayley Elizabeth Atwell",
  "objectID": "551489430"
 },
 {
  "name": "Kelly Overton",
  "rating": 526,
  "image_path": "/z4ConG73glBC7RJPOUvClLlb0k5.jpg",
  "alternative_name": null,
  "objectID": "551489420"
 },
 {
  "name": "Emma Roberts",
  "rating": 525,
  "image_path": "/yzf0nMrsxf1LjeFtoIw6Qwh7GpG.jpg",
  "alternative_name": null,
  "objectID": "551489500"
 },
 {
  "name": "Ken Duken",
  "rating": 525,
  "image_path": "/tuyAiTfdMeUwR4qLUJButZmRZDd.jpg",
  "alternative_name": "Ken Albert Duken",
  "objectID": "551489490"
 },
 {
  "name": "Ray Stevenson",
  "rating": 525,
  "image_path": "/bcd9uqwfCVYsu7rduZnPVYUkyfU.jpg",
  "alternative_name": null,
  "objectID": "551489480"
 },
 {
  "name": "Tony Leung Ka-Fai",
  "rating": 525,
  "image_path": "/vxrUpkWMqWYMjx5bg8Q0fioBrQg.jpg",
  "alternative_name": "Tony Leung Kar-Fai",
  "objectID": "551489470"
 },
 {
  "name": "Gwyneth Paltrow",
  "rating": 525,
  "image_path": "/66uyrmrE4igiAd2H4tMol5nGopx.jpg",
  "alternative_name": null,
  "objectID": "551489460"
 },
 {
  "name": "Ray Liotta",
  "rating": 524,
  "image_path": "/o4jJSH3sri9dSIJwsCgT4de1535.jpg",
  "alternative_name": null,
  "objectID": "551489510"
 },
 {
  "name": "Christopher Lloyd",
  "rating": 523,
  "image_path": "/iQzG9apaIsHnn7iGrer3YEDp8Zo.jpg",
  "alternative_name": "Chris Lloyd",
  "objectID": "551489550"
 },
 {
  "name": "Raquel Welch",
  "rating": 523,
  "image_path": "/dEr7QkkgOqCwH1uc5VXzTxDveAv.jpg",
  "alternative_name": null,
  "objectID": "551489540"
 },
 {
  "name": "Rebecca Harrell Tickell",
  "rating": 523,
  "image_path": "/mGAUC2E40RndJukuHNahGbA0xsM.jpg",
  "alternative_name": null,
  "objectID": "551489530"
 },
 {
  "name": "Jodie Foster",
  "rating": 523,
  "image_path": "/9M6PpoJGwjhTantETojfFDc3VhW.jpg",
  "alternative_name": "Jody Foster",
  "objectID": "551489520"
 },
 {
  "name": "Stellan Skarsgård",
  "rating": 522,
  "image_path": "/hjWdhX7zEI0DkF7gA4hcEVcYCZl.jpg",
  "alternative_name": null,
  "objectID": "551489570"
 },
 {
  "name": "Pam Grier",
  "rating": 522,
  "image_path": "/8NaNIFhKySQ2fkwSlhoOGFgqtHO.jpg",
  "alternative_name": null,
  "objectID": "551489560"
 },
 {
  "name": "Kim Cattrall",
  "rating": 521,
  "image_path": "/A6jOlVc2aMgVSLZSGJHppYdzafq.jpg",
  "alternative_name": null,
  "objectID": "551489590"
 },
 {
  "name": "Victor Mature",
  "rating": 521,
  "image_path": "/pH8HaqCRhhWcP2VkaHli6eZllxy.jpg",
  "alternative_name": null,
  "objectID": "551489580"
 },
 {
  "name": "Alona Tal",
  "rating": 520,
  "image_path": "/k32JlDCKKItwaxqJn6qA6bbZE7H.jpg",
  "alternative_name": null,
  "objectID": "551489610"
 },
 {
  "name": "Matt Damon",
  "rating": 520,
  "image_path": "/eLAWpp5BLbTwjj35MbGzpL0QkWv.jpg",
  "alternative_name": null,
  "objectID": "551489600"
 },
 {
  "name": "Aaron Paul",
  "rating": 519,
  "image_path": "/pAa8H7DjgXENBhyvJy0hVLKvVT6.jpg",
  "alternative_name": null,
  "objectID": "551489630"
 },
 {
  "name": "Stella Stevens",
  "rating": 519,
  "image_path": "/hsNwoHrAe6ZWaBl4f62YiP2iJqo.jpg",
  "alternative_name": null,
  "objectID": "551489620"
 },
 {
  "name": "Charlton Heston",
  "rating": 518,
  "image_path": "/6EssaZBaM5bFkJ21OQ2KGcGqAVU.jpg",
  "alternative_name": null,
  "objectID": "551489650"
 },
 {
  "name": "Tommy Flanagan",
  "rating": 518,
  "image_path": "/eVHvVN05wJSINFlkjxjwOwe6C3L.jpg",
  "alternative_name": null,
  "objectID": "551489640"
 },
 {
  "name": "Jack Nicholson",
  "rating": 517,
  "image_path": "/z5kVLyn3sxj0wNRlFgVgT6deeRO.jpg",
  "alternative_name": null,
  "objectID": "551489710"
 },
 {
  "name": "Nicola Peltz",
  "rating": 517,
  "image_path": "/3NLYsEVZON71ceR01bb6gf13iRJ.jpg",
  "alternative_name": null,
  "objectID": "551489700"
 },
 {
  "name": "Katey Sagal",
  "rating": 517,
  "image_path": "/gPoOCjmrdTus013M3obYVZIj0Jx.jpg",
  "alternative_name": "Catherine Louise Sagal",
  "objectID": "551489690"
 },
 {
  "name": "Julie Andrews",
  "rating": 517,
  "image_path": "/aSJYNCyNmM1v6NPBfLcJ3noxkCE.jpg",
  "alternative_name": null,
  "objectID": "551489680"
 },
 {
  "name": "Luis Guzmán",
  "rating": 517,
  "image_path": "/9rj7Qka1tT85J3JoXBexJtLx6vn.jpg",
  "alternative_name": "Luiz Gusman",
  "objectID": "551489670"
 },
 {
  "name": "Laura Harring",
  "rating": 517,
  "image_path": "/ng0u5d41FhJDS9mJ74nYnd7XNZP.jpg",
  "alternative_name": null,
  "objectID": "551489660"
 },
 {
  "name": "Miles Teller",
  "rating": 516,
  "image_path": "/BP15HuH50mYKjrj62rKKvTtclz.jpg",
  "alternative_name": null,
  "objectID": "551489760"
 },
 {
  "name": "Beau Bridges",
  "rating": 516,
  "image_path": "/xv6sDCHxHvBgCK4y96H32kxgcdr.jpg",
  "alternative_name": null,
  "objectID": "551489750"
 },
 {
  "name": "Ali Larter",
  "rating": 516,
  "image_path": "/4MVvnnOcZYb7rxfZQnK2EPDhokW.jpg",
  "alternative_name": null,
  "objectID": "551489740"
 },
 {
  "name": "James Spader",
  "rating": 516,
  "image_path": "/gFDjZje8P0S3MzHuw1cxiYuHBX5.jpg",
  "alternative_name": null,
  "objectID": "551489730"
 },
 {
  "name": "Jon Bernthal",
  "rating": 516,
  "image_path": "/hFpuhH1RGX9g1c2ZkUsog6yyYwa.jpg",
  "alternative_name": null,
  "objectID": "551489720"
 },
 {
  "name": "Logan Lerman",
  "rating": 515,
  "image_path": "/gXIjdNob4AOZlv3BjboAei5lhHi.jpg",
  "alternative_name": null,
  "objectID": "551489800"
 },
 {
  "name": "Sacha Baron Cohen",
  "rating": 515,
  "image_path": "/9UWxlTsGAfRAcxG2LcUMbfR3FiF.jpg",
  "alternative_name": null,
  "objectID": "551489790"
 },
 {
  "name": "Jason Clarke",
  "rating": 515,
  "image_path": "/k0wyfdMPh6TSaDKkrreuQIfg1sr.jpg",
  "alternative_name": "Jason Clark",
  "objectID": "551489780"
 },
 {
  "name": "Tom Wilkinson",
  "rating": 515,
  "image_path": "/4mxZKgdem0sQ8hJd0Y7TREwq7TJ.jpg",
  "alternative_name": null,
  "objectID": "551489770"
 },
 {
  "name": "Robert De Niro",
  "rating": 514,
  "image_path": "/8Bgdfv1oN9Mw0YuMHP6fw8KzDkc.jpg",
  "alternative_name": "Robert DeNiro",
  "objectID": "551489810"
 },
 {
  "name": "Lee Pace",
  "rating": 513,
  "image_path": "/93N1awB9SAUgXTejEFCXUDfi6hP.jpg",
  "alternative_name": null,
  "objectID": "551489830"
 },
 {
  "name": "Laura Antonelli",
  "rating": 513,
  "image_path": "/uZHtqZeCHqQFv25bCNGGdFY1Sol.jpg",
  "alternative_name": null,
  "objectID": "551489820"
 },
 {
  "name": "Geoffrey Rush",
  "rating": 511,
  "image_path": "/c0jbNjWb9DHm5xfBIeEtHZdZJmI.jpg",
  "alternative_name": null,
  "objectID": "551489840"
 },
 {
  "name": "Aishwarya Rai Bachchan",
  "rating": 510,
  "image_path": "/3iSTsyBx5FwfbIrMJXMKFJ0eWlL.jpg",
  "alternative_name": null,
  "objectID": "551489860"
 },
 {
  "name": "Connie Nielsen",
  "rating": 510,
  "image_path": "/zBW19um2qW6uGIrl9LvUTZoD4MM.jpg",
  "alternative_name": null,
  "objectID": "551489850"
 },
 {
  "name": "Jim Broadbent",
  "rating": 509,
  "image_path": "/atBa5ONgpQtbiXCIZrlNOKEFgA5.jpg",
  "alternative_name": "James Broadbent",
  "objectID": "551489870"
 },
 {
  "name": "Catherine Zeta-Jones",
  "rating": 508,
  "image_path": "/3qDN8It9ulUqpOqkxJgW0WnWFho.jpg",
  "alternative_name": "Catherine Jones",
  "objectID": "551489890"
 },
 {
  "name": "Paul McGann",
  "rating": 508,
  "image_path": "/vtp1wTbuxO9JfKP52xo0pjCOkh9.jpg",
  "alternative_name": null,
  "objectID": "551489880"
 },
 {
  "name": "Louis C.K.",
  "rating": 507,
  "image_path": "/6x5c5IaJOo1nHZh0AykVEw1od7h.jpg",
  "alternative_name": "Louis Székely, Jr.",
  "objectID": "551489900"
 },
 {
  "name": "James McAvoy",
  "rating": 506,
  "image_path": "/26UEbgEJ8sH3JUgQd6qDaNnJEbS.jpg",
  "alternative_name": null,
  "objectID": "551489930"
 },
 {
  "name": "Christina Hendricks",
  "rating": 506,
  "image_path": "/d9KRMyCHigiHoDgmi1GX8EbhkOz.jpg",
  "alternative_name": null,
  "objectID": "551489920"
 },
 {
  "name": "John C. Reilly",
  "rating": 506,
  "image_path": "/kUo2TPQp4kOWWvijvkjLl0v9PQB.jpg",
  "alternative_name": null,
  "objectID": "551489910"
 },
 {
  "name": "Seth MacFarlane",
  "rating": 504,
  "image_path": "/v4c6JhGYpjMRBwf95gtPxBnElNu.jpg",
  "alternative_name": null,
  "objectID": "551489960"
 },
 {
  "name": "Dennis Chan",
  "rating": 504,
  "image_path": "/qZiaEH1JJt8c0WUPJl9gqArGT2P.jpg",
  "alternative_name": null,
  "objectID": "551489950"
 },
 {
  "name": "Ted de Corsia",
  "rating": 503,
  "image_path": "/63mhu9Qa62Viwy9tAdOFL9Spsf.jpg",
  "alternative_name": null,
  "objectID": "551490020"
 },
 {
  "name": "Robin Wright",
  "rating": 503,
  "image_path": "/cke0NNZP4lHRtOethRy2XGSOp3E.jpg",
  "alternative_name": "Robin Wright-Penn",
  "objectID": "551490010"
 },
 {
  "name": "Kim Dickens",
  "rating": 503,
  "image_path": "/yIXBljS46WXvRk2gma3ravVBBgU.jpg",
  "alternative_name": "Kimberly Jan Dickens",
  "objectID": "551490000"
 },
 {
  "name": "Yuen Biao",
  "rating": 503,
  "image_path": "/hdBQMhtzpamgodIURGPQAcKdbWC.jpg",
  "alternative_name": "Biao Yuen",
  "objectID": "551489990"
 },
 {
  "name": "Anne Bancroft",
  "rating": 503,
  "image_path": "/4VMhut6tvXqXBmMGFRjXbbImAZW.jpg",
  "alternative_name": null,
  "objectID": "551489980"
 },
 {
  "name": "Peter Stormare",
  "rating": 503,
  "image_path": "/dDR0brp5L7fXDyEywrhjQv01LSg.jpg",
  "alternative_name": null,
  "objectID": "551489970"
 },
 {
  "name": "Hugh Keays-Byrne",
  "rating": 502,
  "image_path": "/lhYUcPimMMy7Ltp58NkB3RuJzSv.jpg",
  "alternative_name": null,
  "objectID": "551490040"
 },
 {
  "name": "Drew Barrymore",
  "rating": 502,
  "image_path": "/y8GKPHsBXVGIGBdDzdNxjm0IbKF.jpg",
  "alternative_name": null,
  "objectID": "551490030"
 },
 {
  "name": "Sophie Marceau",
  "rating": 501,
  "image_path": "/5pJ16f9QxzZMzcr9CpSnr6dTwGG.jpg",
  "alternative_name": null,
  "objectID": "551490060"
 },
 {
  "name": "Alain Delon",
  "rating": 501,
  "image_path": "/jNXHnLspNoh1ZOH7gwCkMrjLA7R.jpg",
  "alternative_name": "Ален Делон",
  "objectID": "551490050"
 },
 {
  "name": "Susan Sarandon",
  "rating": 500,
  "image_path": "/rjK7SERcPfwnRtPtOwH6EcvdWX4.jpg",
  "alternative_name": null,
  "objectID": "551490070"
 },
 {
  "name": "Danielle Panabaker",
  "rating": 499,
  "image_path": "/mZJBKATPpwnzmqODJKj61YfnVF6.jpg",
  "alternative_name": null,
  "objectID": "551490080"
 },
 {
  "name": "Ellen Page",
  "rating": 498,
  "image_path": "/vDunkYxyQPkzx9EwkfSZVCSzBlO.jpg",
  "alternative_name": null,
  "objectID": "551490110"
 },
 {
  "name": "Dolph Lundgren",
  "rating": 498,
  "image_path": "/hjR1tpZV5XKX8daIKmU80ZuOfMO.jpg",
  "alternative_name": null,
  "objectID": "551490100"
 },
 {
  "name": "Hugh Grant",
  "rating": 498,
  "image_path": "/eN2hNsDFygyQ4zNB6Jg0UmTAfLh.jpg",
  "alternative_name": null,
  "objectID": "551490090"
 },
 {
  "name": "Meg Ryan",
  "rating": 496,
  "image_path": "/iv33eEcSakPCkO2MiR4bIZpjgyg.jpg",
  "alternative_name": null,
  "objectID": "551490190"
 },
 {
  "name": "Thomas Kretschmann",
  "rating": 496,
  "image_path": "/allahLWNWLQpeY46nUg1d6zSO7T.jpg",
  "alternative_name": null,
  "objectID": "551490180"
 },
 {
  "name": "Terrence Howard",
  "rating": 496,
  "image_path": "/MZeLxOH0PgL7xcvt865WVBvQDw.jpg",
  "alternative_name": null,
  "objectID": "551490170"
 },
 {
  "name": "David Hemmings",
  "rating": 496,
  "image_path": "/uzJRMPZq9Hv8APMqYsOTSZqcBg6.jpg",
  "alternative_name": null,
  "objectID": "551490160"
 },
 {
  "name": "Angie Harmon",
  "rating": 496,
  "image_path": "/oFsZQuVxgMm9yUl0dZe4ROznIex.jpg",
  "alternative_name": null,
  "objectID": "551490150"
 },
 {
  "name": "Eric Bana",
  "rating": 496,
  "image_path": "/36As49OkTNvT96CzzjXNuKMeuyx.jpg",
  "alternative_name": "Eric Banadinovich",
  "objectID": "551490140"
 },
 {
  "name": "Saori Hara",
  "rating": 496,
  "image_path": "/cLm0XcEAxTKcEVX3k9gmDLflf7y.jpg",
  "alternative_name": null,
  "objectID": "551490130"
 },
 {
  "name": "Christopher Walken",
  "rating": 496,
  "image_path": "/ysO1GwRzLT9OVAB9Y2SKHxomqDr.jpg",
  "alternative_name": null,
  "objectID": "551490120"
 },
 {
  "name": "Selma Ergeç",
  "rating": 495,
  "image_path": "/wiXLPJI1kIKsrkVaSfr7uVhhF3Z.jpg",
  "alternative_name": null,
  "objectID": "551490200"
 },
 {
  "name": "Malcolm McDowell",
  "rating": 494,
  "image_path": "/AalAO1Do9egUr07klE78PWw6Hyq.jpg",
  "alternative_name": null,
  "objectID": "551490260"
 },
 {
  "name": "Keira Knightley",
  "rating": 494,
  "image_path": "/yPuSzncAAPgPI8ut6MqGGXTBGpH.jpg",
  "alternative_name": "Kiera Knightley",
  "objectID": "551490250"
 },
 {
  "name": "Jaime Pressly",
  "rating": 494,
  "image_path": "/poWVzEIu6gO9wkQ0h5GuSGfY4S3.jpg",
  "alternative_name": null,
  "objectID": "551490240"
 },
 {
  "name": "Bradley Cooper",
  "rating": 494,
  "image_path": "/ifjdzZtkR5S5ifSSNQZsVarqFxD.jpg",
  "alternative_name": null,
  "objectID": "551490230"
 },
 {
  "name": "Alexander Ludwig",
  "rating": 494,
  "image_path": "/sKBzp9sgDYXquPnsGvJJveTOAT6.jpg",
  "alternative_name": null,
  "objectID": "551490220"
 },
 {
  "name": "Mads Mikkelsen",
  "rating": 494,
  "image_path": "/hJTB5odoUVrVmLJdkuAMNBRvyvw.jpg",
  "alternative_name": "Mads Dittmann Mikkelsen",
  "objectID": "551490210"
 },
 {
  "name": "Lisa Kudrow",
  "rating": 493,
  "image_path": "/cw9RwrNXn61JPu2Xa53lHfPdjd1.jpg",
  "alternative_name": null,
  "objectID": "551490280"
 },
 {
  "name": "Dana Ashbrook",
  "rating": 493,
  "image_path": "/qk2BsFN6ITljgG7wtGAcitbkFQC.jpg",
  "alternative_name": "Dana V. Ashbrook",
  "objectID": "551490270"
 },
 {
  "name": "Maureen O'Hara",
  "rating": 492,
  "image_path": "/quQgrArKxPxol1dYTxeu71Qk1ng.jpg",
  "alternative_name": null,
  "objectID": "551490320"
 },
 {
  "name": "John Russell",
  "rating": 492,
  "image_path": "/td1PYzG0wBy36tJx7HsnMcabwzp.jpg",
  "alternative_name": null,
  "objectID": "551490310"
 },
 {
  "name": "Will Smith",
  "rating": 492,
  "image_path": "/2iYXDlCvLyVO49louRyDDXagZ0G.jpg",
  "alternative_name": null,
  "objectID": "551490300"
 },
 {
  "name": "Sebastian Stan",
  "rating": 492,
  "image_path": "/yDSXsxlp5MPEtOCz56YzNKakj6m.jpg",
  "alternative_name": null,
  "objectID": "551490290"
 },
 {
  "name": "Kat Dennings",
  "rating": 491,
  "image_path": "/wWT5XV1fQGYl5YvM5ZOZp6cKDGN.jpg",
  "alternative_name": "Katherine V. Litwack",
  "objectID": "551490350"
 },
 {
  "name": "Jake Johnson",
  "rating": 491,
  "image_path": "/7X6pb4SDs9RoXi5gI4Nl8ZiPO4l.jpg",
  "alternative_name": null,
  "objectID": "551490340"
 },
 {
  "name": "Kevin Hart",
  "rating": 491,
  "image_path": "/nTYKqSQzJ9VlYKgqoES7WIDHywi.jpg",
  "alternative_name": null,
  "objectID": "551490330"
 },
 {
  "name": "Kabby Hui",
  "rating": 490,
  "image_path": "/vU1NQ64MQ9cpkCRWd940T2UQoVN.jpg",
  "alternative_name": null,
  "objectID": "551490380"
 },
 {
  "name": "Bill Paxton",
  "rating": 490,
  "image_path": "/53Ln1wTC0OCLzBF4HNlwhMXYgOU.jpg",
  "alternative_name": "William Paxton",
  "objectID": "551490370"
 },
 {
  "name": "Robert Duvall",
  "rating": 490,
  "image_path": "/1aBC7NxPy10ofng6HsJBecJ1vMZ.jpg",
  "alternative_name": null,
  "objectID": "551490360"
 },
 {
  "name": "Tim Robbins",
  "rating": 489,
  "image_path": "/tuZCyZVVbHcpvtCgriSp5RRPwMX.jpg",
  "alternative_name": null,
  "objectID": "551490400"
 },
 {
  "name": "James Marsden",
  "rating": 489,
  "image_path": "/htBil0Vayd09haeUVoKEPxuantT.jpg",
  "alternative_name": null,
  "objectID": "551490390"
 },
 {
  "name": "Ornella Muti",
  "rating": 488,
  "image_path": "/5bwQ4mTsGROX3KHtlvEXkFObpRD.jpg",
  "alternative_name": null,
  "objectID": "551490430"
 },
 {
  "name": "Felicity Jones",
  "rating": 488,
  "image_path": "/b8GTaZlfRCXURMh66G9veKo0hb2.jpg",
  "alternative_name": null,
  "objectID": "551490420"
 },
 {
  "name": "Ron Howard",
  "rating": 488,
  "image_path": "/67WIgpOGIeb4NSN9yIxsOITbnns.jpg",
  "alternative_name": "Ronny Howard",
  "objectID": "551490410"
 },
 {
  "name": "Zooey Deschanel",
  "rating": 486,
  "image_path": "/suOjtxoG1qhAgzzWmRwuFltAVvq.jpg",
  "alternative_name": null,
  "objectID": "551490480"
 },
 {
  "name": "Bridget Fonda",
  "rating": 486,
  "image_path": "/vQc0Y0QBhtXOXBBMMBHy3HfHIsU.jpg",
  "alternative_name": null,
  "objectID": "551490470"
 },
 {
  "name": "George Takei",
  "rating": 486,
  "image_path": "/yXQsJ0ahBXsbxzJUYjwyCxpJHgp.jpg",
  "alternative_name": null,
  "objectID": "551490460"
 },
 {
  "name": "Erin Cummings",
  "rating": 486,
  "image_path": "/76bNbceGypp8j8OEtVFOFraPtnm.jpg",
  "alternative_name": null,
  "objectID": "551490450"
 },
 {
  "name": "Katie Holmes",
  "rating": 486,
  "image_path": "/eYeE0Z1sOvqxt7LsQHK30vUfWaM.jpg",
  "alternative_name": null,
  "objectID": "551490440"
 },
 {
  "name": "Nikolaj Lie Kaas",
  "rating": 485,
  "image_path": "/xO4yWra3xoK0rdzDN4OC8Jwh0FH.jpg",
  "alternative_name": null,
  "objectID": "551490520"
 },
 {
  "name": "Emmy Rossum",
  "rating": 485,
  "image_path": "/lolKZGyxsNcS51I2zPMBkg3OEH2.jpg",
  "alternative_name": null,
  "objectID": "551490510"
 },
 {
  "name": "Amy Smart",
  "rating": 485,
  "image_path": "/gDIto4RCKHOSKfC0rSn8nxmThpN.jpg",
  "alternative_name": null,
  "objectID": "551490500"
 },
 {
  "name": "Helen Hunt",
  "rating": 485,
  "image_path": "/ws1ClG9BBUIVLZRYTNKconJn9Sy.jpg",
  "alternative_name": null,
  "objectID": "551490490"
 },
 {
  "name": "Simon Pegg",
  "rating": 484,
  "image_path": "/onE8N8YciZtSO8hv8TBA6fRpB5b.jpg",
  "alternative_name": null,
  "objectID": "551490550"
 },
 {
  "name": "Ed Harris",
  "rating": 484,
  "image_path": "/a9ITc3shCAWjV4qKf3rgR0Opu3y.jpg",
  "alternative_name": null,
  "objectID": "551490540"
 },
 {
  "name": "Valeria Golino",
  "rating": 484,
  "image_path": "/dv2Uw2jKm4sgxnm6Ft0xDyI76Ps.jpg",
  "alternative_name": null,
  "objectID": "551490530"
 },
 {
  "name": "Richard Widmark",
  "rating": 483,
  "image_path": "/whrZ2aEg3FghVaDJf0JRrEhFLWl.jpg",
  "alternative_name": null,
  "objectID": "551490590"
 },
 {
  "name": "Mandy Moore",
  "rating": 483,
  "image_path": "/15sDtRpe301tZWrRYV31wjMuFpx.jpg",
  "alternative_name": null,
  "objectID": "551490580"
 },
 {
  "name": "Tom Hiddleston",
  "rating": 483,
  "image_path": "/rA0aS2GACY2fwrc7mEJR3f5k5FD.jpg",
  "alternative_name": null,
  "objectID": "551490570"
 },
 {
  "name": "Dakota Fanning",
  "rating": 483,
  "image_path": "/7mabFx7Z4Ol54Rhhy2ITZNaUBa9.jpg",
  "alternative_name": "Hannah Dakota Fanning",
  "objectID": "551490560"
 },
 {
  "name": "Josh Duhamel",
  "rating": 482,
  "image_path": "/hi5OzlZAwf22xRRPLFbKnXNoZ9L.jpg",
  "alternative_name": null,
  "objectID": "551490600"
 },
 {
  "name": "Leslie Bibb",
  "rating": 481,
  "image_path": "/oBoQFa4vvwXsW8PhaAsOmm75gkW.jpg",
  "alternative_name": "Leslie Louise Bibb",
  "objectID": "551490620"
 },
 {
  "name": "Natalie Mendoza",
  "rating": 481,
  "image_path": "/4yeZSEKGvUiCcljsFub2SxFGGuz.jpg",
  "alternative_name": null,
  "objectID": "551490610"
 },
 {
  "name": "Shelley Winters",
  "rating": 479,
  "image_path": "/zVg966M0RVK5kycHZUEDc51QULV.jpg",
  "alternative_name": "Miss Shelley Winters",
  "objectID": "551490640"
 },
 {
  "name": "Armand Assante",
  "rating": 479,
  "image_path": "/m9DCpe9HkIXEAp3aq1wKpmN8mih.jpg",
  "alternative_name": null,
  "objectID": "551490630"
 },
 {
  "name": "Vanessa Hudgens",
  "rating": 478,
  "image_path": "/4TSmDk5NpIi2pIG6J1gJaxvmx5I.jpg",
  "alternative_name": null,
  "objectID": "551490650"
 },
 {
  "name": "Mädchen Amick",
  "rating": 477,
  "image_path": "/y9qpjIzfm78aPHR8wxeTo20bDyV.jpg",
  "alternative_name": "Madchen Amick",
  "objectID": "551490670"
 },
 {
  "name": "Roselyn Sánchez",
  "rating": 477,
  "image_path": "/ctkNxIjd0lQY8tV14n8J6YoFJuA.jpg",
  "alternative_name": "Roselyn Sanchez",
  "objectID": "551490660"
 },
 {
  "name": "Jessica Lange",
  "rating": 475,
  "image_path": "/hC862LK6M6mMcCnhOzIyfvTmQk4.jpg",
  "alternative_name": null,
  "objectID": "551490700"
 },
 {
  "name": "Lana Parrilla",
  "rating": 475,
  "image_path": "/etErVhObfwIfbVhFosBMFlCR0Kq.jpg",
  "alternative_name": null,
  "objectID": "551490690"
 },
 {
  "name": "Margot Robbie",
  "rating": 475,
  "image_path": "/iykyn6Ap1PmHJFp3UP10Mhw2pqE.jpg",
  "alternative_name": null,
  "objectID": "551490680"
 },
 {
  "name": "Anjelica Huston",
  "rating": 474,
  "image_path": "/aWoffHO62SV8KeqKzct8LeXTW72.jpg",
  "alternative_name": null,
  "objectID": "551490730"
 },
 {
  "name": "Hikari Mitsushima",
  "rating": 474,
  "image_path": "/ev3nEn8Vg2BYMZbN34D3xZsEnwz.jpg",
  "alternative_name": null,
  "objectID": "551490720"
 },
 {
  "name": "Leng Hussein",
  "rating": 474,
  "image_path": "/qeDKllvkPDMx1zYHxiqJfPjVCA.jpg",
  "alternative_name": null,
  "objectID": "551490710"
 },
 {
  "name": "Ninet Tayeb",
  "rating": 473,
  "image_path": "/1xxdkREWPNOPGQhFrUWvbLjiNTm.jpg",
  "alternative_name": null,
  "objectID": "551490760"
 },
 {
  "name": "Ann-Margret",
  "rating": 473,
  "image_path": "/jx5lTaJ5VXZHYB52gaOTAZ9STZk.jpg",
  "alternative_name": null,
  "objectID": "551490750"
 },
 {
  "name": "Dave Bautista",
  "rating": 473,
  "image_path": "/oZDL1VprkUEFhOtG5WcVjudj5ks.jpg",
  "alternative_name": "David Michael Bautista Jr.",
  "objectID": "551490740"
 },
 {
  "name": "Rutger Hauer",
  "rating": 472,
  "image_path": "/96XEG75LYFFPb9R03EaN8zipWP4.jpg",
  "alternative_name": null,
  "objectID": "551490790"
 },
 {
  "name": "Jason Segel",
  "rating": 472,
  "image_path": "/49zyYG6HSQm76mN1SLmCCzgIN0Y.jpg",
  "alternative_name": null,
  "objectID": "551490780"
 },
 {
  "name": "Max Riemelt",
  "rating": 472,
  "image_path": "/xEcdqLYpebm2Bv9zEUG0f8oIi6N.jpg",
  "alternative_name": null,
  "objectID": "551490770"
 },
 {
  "name": "Elaine Collins",
  "rating": 471,
  "image_path": "/9fdPgOXeltrBNqPvgZYoSwdQhsn.jpg",
  "alternative_name": null,
  "objectID": "551490810"
 },
 {
  "name": "Melissa McCarthy",
  "rating": 471,
  "image_path": "/jSLdOktZHZOPEE4DzSShxuEeXPy.jpg",
  "alternative_name": null,
  "objectID": "551490800"
 },
 {
  "name": "Ruzaidi Abdul Rahman",
  "rating": 470,
  "image_path": "/2Xbq7Wb2JLRXtrVwcGXvYqWTEeJ.jpg",
  "alternative_name": "MASTER RUZAIDI",
  "objectID": "551490830"
 },
 {
  "name": "Rowan Atkinson",
  "rating": 470,
  "image_path": "/4VrM98lBBZ4JHYDmelv5qA1Stuj.jpg",
  "alternative_name": "Rowan Sebastian Atkinson",
  "objectID": "551490820"
 },
 {
  "name": "Heather Graham",
  "rating": 469,
  "image_path": "/xqKEAblSGSj41hjaiydLiM9BT8h.jpg",
  "alternative_name": "Heather Joan Graham",
  "objectID": "551490870"
 },
 {
  "name": "Lauren Cohan",
  "rating": 469,
  "image_path": "/5W4AV3ZXn38NlEMqPy9QPjwRRz8.jpg",
  "alternative_name": null,
  "objectID": "551490860"
 },
 {
  "name": "Ewan McGregor",
  "rating": 469,
  "image_path": "/lVjs6E3vriUXhHrAx0mSzyOVts2.jpg",
  "alternative_name": null,
  "objectID": "551490850"
 },
 {
  "name": "Bianca Haase",
  "rating": 469,
  "image_path": "/7kL5SWyf9HHBmHk47lCR5S7sddn.jpg",
  "alternative_name": null,
  "objectID": "551490840"
 },
 {
  "name": "Denzel Washington",
  "rating": 468,
  "image_path": "/t9arcZbg1nLt8GZt2SkWm227YoK.jpg",
  "alternative_name": null,
  "objectID": "551490890"
 },
 {
  "name": "Karoline Herfurth",
  "rating": 468,
  "image_path": "/8HVqhIaLQA3MOTO88Ncn6VOCzdp.jpg",
  "alternative_name": null,
  "objectID": "551490880"
 },
 {
  "name": "Christopher Lambert",
  "rating": 466,
  "image_path": "/sIl2F9LDTjfnAVBxEG5CTtZGuJU.jpg",
  "alternative_name": null,
  "objectID": "551490940"
 },
 {
  "name": "Alycia Debnam-Carey",
  "rating": 466,
  "image_path": "/fnWgmKnvy3ROPPD8x6OwuAZ3uuu.jpg",
  "alternative_name": "Alycia Debnam Carey",
  "objectID": "551490930"
 },
 {
  "name": "Liu Shishi",
  "rating": 466,
  "image_path": "/9D9kJrgMoOjzGZEiZwMmJs0eG9X.jpg",
  "alternative_name": "刘诗诗",
  "objectID": "551490920"
 },
 {
  "name": "Paul Bettany",
  "rating": 466,
  "image_path": "/xN2pJ3DIPacYviSSwDovxizPS2w.jpg",
  "alternative_name": null,
  "objectID": "551490910"
 },
 {
  "name": "Famke Janssen",
  "rating": 466,
  "image_path": "/jA9v8JQxseOqbdN1yiEpHEBYyJv.jpg",
  "alternative_name": null,
  "objectID": "551490900"
 },
 {
  "name": "Adam G. Sevani",
  "rating": 465,
  "image_path": "/xrDL7kg9CDBGsfczWX4HZ8s1xcN.jpg",
  "alternative_name": "Adam Sevani",
  "objectID": "551490950"
 },
 {
  "name": "Mae Whitman",
  "rating": 464,
  "image_path": "/dRBcb2fMKPg2aeqIwVVkIuGugCV.jpg",
  "alternative_name": null,
  "objectID": "551490990"
 },
 {
  "name": "Ed Asner",
  "rating": 464,
  "image_path": "/1EysZS86vozSb9pwD7HVGqInfDQ.jpg",
  "alternative_name": "Edward Asher",
  "objectID": "551490980"
 },
 {
  "name": "Chris Rock",
  "rating": 464,
  "image_path": "/5JCYKerIL0SdiqygtLUpG9Sw37P.jpg",
  "alternative_name": null,
  "objectID": "551490970"
 },
 {
  "name": "Jet Li",
  "rating": 464,
  "image_path": "/5himGJzSuLoHwqacTz7sXWqgeMt.jpg",
  "alternative_name": "Jet Lee Lin-Kit",
  "objectID": "551490960"
 },
 {
  "name": "Emile Hirsch",
  "rating": 463,
  "image_path": "/A2ISM7KgjdC4zSwCHBbc9nzqCPA.jpg",
  "alternative_name": null,
  "objectID": "551491000"
 },
 {
  "name": "Ashton Kutcher",
  "rating": 462,
  "image_path": "/g9FF8F6zoYlRJGU0KQGSklqsbOd.jpg",
  "alternative_name": null,
  "objectID": "551491020"
 },
 {
  "name": "Jake McDorman",
  "rating": 462,
  "image_path": "/bgNT9JqepDtxP6ryfGVBAECvUgX.jpg",
  "alternative_name": null,
  "objectID": "551491010"
 },
 {
  "name": "Julie Dreyfus",
  "rating": 461,
  "image_path": "/vkUvcV6oFkZXcIv4SGeW66LUoqC.jpg",
  "alternative_name": null,
  "objectID": "551491060"
 },
 {
  "name": "Ian Somerhalder",
  "rating": 461,
  "image_path": "/5LwxVwxf5pLVycUeYE3uMmk5oS7.jpg",
  "alternative_name": null,
  "objectID": "551491050"
 },
 {
  "name": "Matthew Lillard",
  "rating": 461,
  "image_path": "/gJsQkX20g0ABquHqVpBJzMXR2JF.jpg",
  "alternative_name": null,
  "objectID": "551491040"
 },
 {
  "name": "Steve Martin",
  "rating": 461,
  "image_path": "/8Weyf4wJdKqmWLVN7L3jLw4qf5.jpg",
  "alternative_name": null,
  "objectID": "551491030"
 },
 {
  "name": "Renée Zellweger",
  "rating": 460,
  "image_path": "/rAfHyC0IxqwRTKuwosU85ZwQicL.jpg",
  "alternative_name": null,
  "objectID": "551491080"
 },
 {
  "name": "Selma Stern",
  "rating": 460,
  "image_path": null,
  "alternative_name": null,
  "objectID": "551491070"
 },
 {
  "name": "Greg Kinnear",
  "rating": 459,
  "image_path": "/agOTbOC76I6rC7TPuCTquvngXRu.jpg",
  "alternative_name": null,
  "objectID": "551491130"
 },
 {
  "name": "James Coburn",
  "rating": 459,
  "image_path": "/4VkbAYRB5FRt3ZpEsOQ5TbuvRz9.jpg",
  "alternative_name": null,
  "objectID": "551491120"
 },
 {
  "name": "Colm Meaney",
  "rating": 459,
  "image_path": "/irPAowqDk7llCvm8uyCJuBClzJw.jpg",
  "alternative_name": null,
  "objectID": "551491110"
 },
 {
  "name": "Elisha Cook Jr.",
  "rating": 459,
  "image_path": "/gUkN2IZ49VrHsnahLMu4STIYvyJ.jpg",
  "alternative_name": null,
  "objectID": "551491100"
 },
 {
  "name": "Richard Harris",
  "rating": 459,
  "image_path": "/64jkJJtL5sins6nwGKOERduLSEA.jpg",
  "alternative_name": null,
  "objectID": "551491090"
 },
 {
  "name": "Elisabeth Shue",
  "rating": 458,
  "image_path": "/44AaIXkbZFkdhSW1kRdzCbfYk6c.jpg",
  "alternative_name": null,
  "objectID": "551491160"
 },
 {
  "name": "Ti Lung",
  "rating": 458,
  "image_path": "/9QWOifnem9XKwmWx2tFvqZFwP72.jpg",
  "alternative_name": "Lung Ti",
  "objectID": "551491150"
 },
 {
  "name": "Naomie Harris",
  "rating": 458,
  "image_path": "/yNaberqwRKkz4ry8ggQQGSaSBo2.jpg",
  "alternative_name": null,
  "objectID": "551491140"
 },
 {
  "name": "Whoopi Goldberg",
  "rating": 457,
  "image_path": "/n3lF8w4X4rDa4J2LMDIxMEcuUeH.jpg",
  "alternative_name": "Caryn Elaine Johnson",
  "objectID": "551491190"
 },
 {
  "name": "Tobey Maguire",
  "rating": 457,
  "image_path": "/15mDmFEHoVGpfvEGjhFDgJPqoJ9.jpg",
  "alternative_name": null,
  "objectID": "551491180"
 },
 {
  "name": "Carly Chaikin",
  "rating": 457,
  "image_path": "/mWZ9NrxifTjVzADdI8iK9qu5yDK.jpg",
  "alternative_name": "Carly Hannah Chaikin",
  "objectID": "551491170"
 },
 {
  "name": "Tim Roth",
  "rating": 456,
  "image_path": "/r4jtlboNqWPz2dOHafrPJE4Yd94.jpg",
  "alternative_name": null,
  "objectID": "551491220"
 },
 {
  "name": "Charlotte Rampling",
  "rating": 456,
  "image_path": "/iuggCphmBfNoUFaUWfpJCTxX4e6.jpg",
  "alternative_name": null,
  "objectID": "551491210"
 },
 {
  "name": "Pamela Anderson",
  "rating": 456,
  "image_path": "/21rgWZOkgiPSbEx2QXN22tZilc6.jpg",
  "alternative_name": null,
  "objectID": "551491200"
 },
 {
  "name": "Toni Collette",
  "rating": 455,
  "image_path": "/oMps1ZPH3dHmqZmrpZcRiyUBgA.jpg",
  "alternative_name": "Antonia Collette",
  "objectID": "551491250"
 },
 {
  "name": "Noah Taylor",
  "rating": 455,
  "image_path": "/dSlH0WA09dVqQhgB7LB5xn8WzD.jpg",
  "alternative_name": null,
  "objectID": "551491240"
 },
 {
  "name": "Tony Curtis",
  "rating": 455,
  "image_path": "/pgI8yJsEjEE4YU1PEGhsa3pdQXp.jpg",
  "alternative_name": "Bernard Herschel Schwartz",
  "objectID": "551491230"
 },
 {
  "name": "Ben Chaplin",
  "rating": 365,
  "image_path": "/6isUJ1s5U1QfPgNDkK8nTEjlb5X.jpg",
  "alternative_name": "Benedict John Greenwood",
  "objectID": "551489940"
 },
 {
  "name": "Ray Winstone",
  "rating": 332,
  "image_path": "/PortzKA9M8dCOvr44dGdczxMoz4.jpg",
  "alternative_name": "Raymond Andrew Winstone",
  "objectID": "551486290"
 },
 {
  "name": "C. Thomas Howell",
  "rating": 332,
  "image_path": "/POrtkxOnn1JEKwd0nlbBuZfS7Sf.jpg",
  "alternative_name": null,
  "objectID": "551486280"
 },
 {
  "name": "John Cho",
  "rating": 332,
  "image_path": "/poRTpkKGun8BS7GjCqXrzthTOk4.jpg",
  "alternative_name": "John Yohan Cho",
  "objectID": "551486270"
 },
 {
  "name": "Arielle Kebbel",
  "rating": 299,
  "image_path": "/f5mvkSgmvEHNfe25XLxN2sb923I.jpg",
  "alternative_name": null,
  "objectID": "551491260"
 }
]

const actors = () => {
 for (let i = 0; i < dataList.length; i++) {
  const names = dataList[i].split(' ')
  console.log('names',names)
  console.log(dataList[i].name);
 }
}

// actors()





