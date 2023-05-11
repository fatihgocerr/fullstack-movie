const fs = require('fs');


const addIdWriters =async () => {
 const writersData = fs.readFileSync('scriptwriters.json');
 const swriters = await JSON.parse(writersData);
 const objectList = [
  {
   "_id": "645c03d3db772bfe99e3fc1f"
  },
  {
   "_id": "645c03d3b6dcb6af3ce08390"
  },
  {
   "_id": "645c03d32db1fcf5362062e2"
  },
  {
   "_id": "645c03d3d048cae443c1532c"
  },
  {
   "_id": "645c03d3b7c9a00715dbe6b4"
  },
  {
   "_id": "645c03d3cc337d9297b28ea3"
  },
  {
   "_id": "645c03d334f300a919fa81e9"
  },
  {
   "_id": "645c03d34f06e2bf5f48c829"
  },
  {
   "_id": "645c03d3316c797b38457dbc"
  },
  {
   "_id": "645c03d3cdf4c5e1623fc70e"
  },
  {
   "_id": "645c03d332784590fa449f26"
  },
  {
   "_id": "645c03d3bda6e95be57481cd"
  },
  {
   "_id": "645c03d3389ec2f15450c2ee"
  },
  {
   "_id": "645c03d3c50668a9969e8b3d"
  },
  {
   "_id": "645c03d3e8431efe8729d296"
  },
  {
   "_id": "645c03d300263085955e94e4"
  },
  {
   "_id": "645c03d38ea3de8334e209f0"
  },
  {
   "_id": "645c03d3968f1568214e176e"
  },
  {
   "_id": "645c03d36563bb5487e72b50"
  },
  {
   "_id": "645c03d300af652a1edfa5d3"
  },
  {
   "_id": "645c03d31bb5c5b06112aaf2"
  },
  {
   "_id": "645c03d331bb05c2c20e7e0d"
  },
  {
   "_id": "645c03d3670fb4afe1b8b56a"
  },
  {
   "_id": "645c03d331098868470c1813"
  },
  {
   "_id": "645c03d371a706f6123754e7"
  },
  {
   "_id": "645c03d350f5721bb10e2a3f"
  },
  {
   "_id": "645c03d309a71b9c7ac20bff"
  },
  {
   "_id": "645c03d3e50ebb03a19ec672"
  },
  {
   "_id": "645c03d3b3889c40a146adbf"
  },
  {
   "_id": "645c03d363d388c43356d8db"
  },
  {
   "_id": "645c03d37b1df5506af7286d"
  },
  {
   "_id": "645c03d300d6f719b39cfcd1"
  },
  {
   "_id": "645c03d3cb2c7a18b5773a3d"
  },
  {
   "_id": "645c03d3f63a84993ab84016"
  },
  {
   "_id": "645c03d31fb32e39cbee7427"
  },
  {
   "_id": "645c03d31bf1deee718a435b"
  },
  {
   "_id": "645c03d3e6ba4f67d9a4db39"
  },
  {
   "_id": "645c03d3078a4ce3da693706"
  },
  {
   "_id": "645c03d3aa735e971ca008b4"
  },
  {
   "_id": "645c03d351ce5d7e9f8e71c2"
  },
  {
   "_id": "645c03d377364d71f3d31f03"
  },
  {
   "_id": "645c03d3200e4136e0ee4dba"
  },
  {
   "_id": "645c03d394b4c0482e3a62a7"
  },
  {
   "_id": "645c03d3a24937ea30035cda"
  },
  {
   "_id": "645c03d30be734722e0e2896"
  },
  {
   "_id": "645c03d35f539d4a16834d24"
  },
  {
   "_id": "645c03d3f216b04875a4fe49"
  },
  {
   "_id": "645c03d3be75bbc0901450d9"
  },
  {
   "_id": "645c03d37417b5db43c3e953"
  },
  {
   "_id": "645c03d3982ae04c93ceb8b2"
  },
  {
   "_id": "645c03d3c77cd0f7333eb7fe"
  },
  {
   "_id": "645c03d344e671b2cb8c3e18"
  },
  {
   "_id": "645c03d318978fc98b391367"
  },
  {
   "_id": "645c03d3923c7754b735afa7"
  },
  {
   "_id": "645c03d3f42228bab8407f17"
  },
  {
   "_id": "645c03d3582176b3ecfdf74d"
  },
  {
   "_id": "645c03d39cd07a39e9e20c65"
  },
  {
   "_id": "645c03d33e7304a9680b756d"
  },
  {
   "_id": "645c03d3900a8d088bbb1e4d"
  },
  {
   "_id": "645c03d3a41ec225ef6234a4"
  },
  {
   "_id": "645c03d3ca8782484cebe9d3"
  },
  {
   "_id": "645c03d31276b97bcafa2667"
  },
  {
   "_id": "645c03d3a113b5555b6aceb0"
  },
  {
   "_id": "645c03d3a26bf63fb20cf916"
  },
  {
   "_id": "645c03d3896c0918f0dfd41d"
  },
  {
   "_id": "645c03d3f949ad2c8af175f0"
  },
  {
   "_id": "645c03d359eb838cc3efafae"
  },
  {
   "_id": "645c03d3724acc82889233d4"
  },
  {
   "_id": "645c03d397374c423ee92867"
  },
  {
   "_id": "645c03d394c29ba3305cc6f7"
  },
  {
   "_id": "645c03d36e415f6d83f7ee60"
  },
  {
   "_id": "645c03d381e5634a9456aa76"
  },
  {
   "_id": "645c03d34ca2199cbaeb1b29"
  },
  {
   "_id": "645c03d3779a9ec61208e4c1"
  },
  {
   "_id": "645c03d3299ac6b5af98fb69"
  },
  {
   "_id": "645c03d3d6a88a4d1a8e2b50"
  },
  {
   "_id": "645c03d306259cb96fa1eebf"
  },
  {
   "_id": "645c03d33f2ac94a399e99f4"
  },
  {
   "_id": "645c03d3670bcce783f66264"
  },
  {
   "_id": "645c03d37c046a277d6d2937"
  },
  {
   "_id": "645c03d3f2f0cd72bcb870aa"
  },
  {
   "_id": "645c03d3c7b6eeb6dfba1e59"
  },
  {
   "_id": "645c03d3c1e1b018836f4efe"
  },
  {
   "_id": "645c03d3ea398cb8ebac3a42"
  },
  {
   "_id": "645c03d331ccfed00b21b193"
  },
  {
   "_id": "645c03d3e3f758d730ef63dc"
  },
  {
   "_id": "645c03d33b6fc8d8f3835d07"
  },
  {
   "_id": "645c03d332e6a9ec31d1e94f"
  },
  {
   "_id": "645c03d31f3673caed110393"
  },
  {
   "_id": "645c03d32e738765fcb49354"
  },
  {
   "_id": "645c03d3fb8f821de9bf2e82"
  },
  {
   "_id": "645c03d35133b3e7559fdeb6"
  },
  {
   "_id": "645c03d3d64a9bc77ee35896"
  },
  {
   "_id": "645c03d39569fe924972e064"
  },
  {
   "_id": "645c03d329c8a7d8e748d72a"
  },
  {
   "_id": "645c03d36c6e3ca46be662db"
  },
  {
   "_id": "645c03d349c88d23f0b4e353"
  },
  {
   "_id": "645c03d3a4517ba6d76feb07"
  },
  {
   "_id": "645c03d3ae496b507e530249"
  },
  {
   "_id": "645c03d31b2cbcb641d41b15"
  },
  {
   "_id": "645c03d3c18e2961e4a8067f"
  },
  {
   "_id": "645c03d3aa286bb304ab1f7b"
  },
  {
   "_id": "645c03d33b5c06898897fcdb"
  },
  {
   "_id": "645c03d30638661c06678b9a"
  },
  {
   "_id": "645c03d300ec5f71f9ec3f26"
  },
  {
   "_id": "645c03d34aae2c742fd67c9a"
  },
  {
   "_id": "645c03d32d9661c0766834fd"
  },
  {
   "_id": "645c03d30a5bf58ad0460b0c"
  },
  {
   "_id": "645c03d3dc9a7e2b1faea986"
  },
  {
   "_id": "645c03d38402ae3bd212dec8"
  },
  {
   "_id": "645c03d34a3a492ae0e7ce44"
  },
  {
   "_id": "645c03d38904206a95ed4cd5"
  },
  {
   "_id": "645c03d300a4c9f6835aa84e"
  },
  {
   "_id": "645c03d337fd2bdaab96ecf6"
  },
  {
   "_id": "645c03d368686b781eb56ca0"
  },
  {
   "_id": "645c03d315724dc7030d1441"
  },
  {
   "_id": "645c03d3f6c48264e396c7d9"
  },
  {
   "_id": "645c03d3fb7c50dbe909dc12"
  },
  {
   "_id": "645c03d34cc0c2a5a759c575"
  },
  {
   "_id": "645c03d3852d892f6b4df821"
  },
  {
   "_id": "645c03d337d039c57d182e2a"
  },
  {
   "_id": "645c03d3f83a3b06c67ad479"
  },
  {
   "_id": "645c03d3266377b04afd306f"
  },
  {
   "_id": "645c03d3ec2a7ab265923b28"
  },
  {
   "_id": "645c03d3266c0ed99fca0d2a"
  },
  {
   "_id": "645c03d3c33e66f1606aae8f"
  },
  {
   "_id": "645c03d318ac05e5390cbe7c"
  },
  {
   "_id": "645c03d3df148d67ddbd460f"
  },
  {
   "_id": "645c03d3f67e267ab2b586db"
  },
  {
   "_id": "645c03d3f666567228950596"
  },
  {
   "_id": "645c03d39cbe30ccddbc6d42"
  },
  {
   "_id": "645c03d3bbb882ef7ade755d"
  },
  {
   "_id": "645c03d3194d982dde5f181a"
  },
  {
   "_id": "645c03d387c559ad0c2f50a4"
  },
  {
   "_id": "645c03d33822d8bc73b6e227"
  },
  {
   "_id": "645c03d3d1a261b76b974121"
  },
  {
   "_id": "645c03d3074451e8a9a0e21c"
  },
  {
   "_id": "645c03d306c4a2bb1863a7bf"
  },
  {
   "_id": "645c03d3912a22c05728075f"
  },
  {
   "_id": "645c03d3c7c5f776b8b7185c"
  },
  {
   "_id": "645c03d3688fc1268f389c6c"
  },
  {
   "_id": "645c03d390af8d419b5602c2"
  },
  {
   "_id": "645c03d38d80468e971c7d21"
  },
  {
   "_id": "645c03d3e5cb6a5f8eb05ae8"
  },
  {
   "_id": "645c03d377cdcef96d99da28"
  },
  {
   "_id": "645c03d369499efbae46e74a"
  },
  {
   "_id": "645c03d3b4eb419a4e2b7e04"
  },
  {
   "_id": "645c03d3b37063508c28f9db"
  },
  {
   "_id": "645c03d3c45ed6776e5a2c89"
  },
  {
   "_id": "645c03d382caa0d82ecfe29c"
  },
  {
   "_id": "645c03d3318f38cb415acde5"
  },
  {
   "_id": "645c03d36052a1a75ba78a9c"
  },
  {
   "_id": "645c03d336f76dfcabf0a104"
  },
  {
   "_id": "645c03d32eb641b32a572429"
  },
  {
   "_id": "645c03d3b93d38373908755d"
  },
  {
   "_id": "645c03d3fe1541f5d9383e59"
  },
  {
   "_id": "645c03d33a7ba73be60c0a8c"
  },
  {
   "_id": "645c03d3dba2c6f138f85107"
  },
  {
   "_id": "645c03d3d54c298f4ec286c3"
  },
  {
   "_id": "645c03d38f88e7d6bc94e172"
  },
  {
   "_id": "645c03d3e6bb9b210b24d713"
  },
  {
   "_id": "645c03d3997c1f96d747e94e"
  },
  {
   "_id": "645c03d304d65b1f80bda0e3"
  },
  {
   "_id": "645c03d3bd1aba033b02ea7e"
  },
  {
   "_id": "645c03d3652ed19dc968fed2"
  },
  {
   "_id": "645c03d337b3fb43f6699b2a"
  },
  {
   "_id": "645c03d369793678860f020f"
  },
  {
   "_id": "645c03d3944f2460788ec937"
  },
  {
   "_id": "645c03d34b7d2ebc215edb7d"
  },
  {
   "_id": "645c03d3888f3623bb04712f"
  },
  {
   "_id": "645c03d3d8145eb8fe036d29"
  },
  {
   "_id": "645c03d3c5e8f7475973d85f"
  },
  {
   "_id": "645c03d3fa945419d3b1dd3c"
  },
  {
   "_id": "645c03d36baf2cb2b64a6e51"
  },
  {
   "_id": "645c03d31e1b6205d54710aa"
  },
  {
   "_id": "645c03d3739a2e49bda722bc"
  },
  {
   "_id": "645c03d3a6b5428cb4a93453"
  },
  {
   "_id": "645c03d3bffa5822b1efe17e"
  },
  {
   "_id": "645c03d35d8f57b2fe328982"
  },
  {
   "_id": "645c03d317d8c8eb104a7915"
  },
  {
   "_id": "645c03d349964575f3c5e8ca"
  },
  {
   "_id": "645c03d3c9760c3d42d26f64"
  },
  {
   "_id": "645c03d30dd4e320afa1823a"
  },
  {
   "_id": "645c03d3237b9140e1ed68a6"
  },
  {
   "_id": "645c03d3909ce13b25a50402"
  },
  {
   "_id": "645c03d3a2fd06cea0930493"
  },
  {
   "_id": "645c03d36d713c4d0c9d0a83"
  },
  {
   "_id": "645c03d3cee80ce4875f915e"
  },
  {
   "_id": "645c03d3bd9fc1fcbcd8577d"
  },
  {
   "_id": "645c03d3071727b013587589"
  },
  {
   "_id": "645c03d3c7f9f30b6b2e48bd"
  },
  {
   "_id": "645c03d3eca2b16c51a4dd8d"
  },
  {
   "_id": "645c03d361643c366ee1de38"
  },
  {
   "_id": "645c03d3c2b30e0fc727f798"
  },
  {
   "_id": "645c03d37b238685756530bd"
  },
  {
   "_id": "645c03d35de877d77dc52908"
  },
  {
   "_id": "645c03d3e228ea50c7e2ee72"
  },
  {
   "_id": "645c03d3bc8d4784f7cbfaa2"
  },
  {
   "_id": "645c03d3754cd2db5ff137d1"
  },
  {
   "_id": "645c03d374f517f3c7290dc8"
  },
  {
   "_id": "645c03d33f87f708cad453dd"
  },
  {
   "_id": "645c03d371f395ac1076f1cf"
  },
  {
   "_id": "645c03d340a88bbc0555015e"
  },
  {
   "_id": "645c03d3f6ed70c217414abf"
  },
  {
   "_id": "645c03d352b619d3f11d359b"
  },
  {
   "_id": "645c03d31eca52719b93849c"
  },
  {
   "_id": "645c03d33d29b771c08d0c6a"
  },
  {
   "_id": "645c03d36a254a7e568337ad"
  },
  {
   "_id": "645c03d37df8e736336bd826"
  },
  {
   "_id": "645c03d3a447a66d7de73717"
  },
  {
   "_id": "645c03d37634ed870842cd92"
  },
  {
   "_id": "645c03d3a673b813bbf14e5e"
  },
  {
   "_id": "645c03d3dda56ead8eb6cf00"
  },
  {
   "_id": "645c03d3eaa20e3d8cbd0b23"
  },
  {
   "_id": "645c03d3f245a400c5782b88"
  },
  {
   "_id": "645c03d3392631297e483002"
  },
  {
   "_id": "645c03d378962f1141b26aa5"
  },
  {
   "_id": "645c03d34bd2e3f45bf24190"
  },
  {
   "_id": "645c03d30c269aec76bad2c4"
  }
 ]


//genre.json dosyasındaki her bir öğe için
 for (let i = 0; i < swriters.length; i++) {
  const director = swriters[i];

  // genre adlı dizideki değer ile güncelleme yap
  if (objectList[i]) {
   director._id = objectList[i]._id;
  }
 }

// Değişiklikleri genre.json dosyasına yazdır
 fs.writeFileSync('scriptwriters.json', JSON.stringify(swriters));

};

const deleteItemsParent = () => {
 const moviesData = fs.readFileSync('movies.json');
 const movies = JSON.parse(moviesData);
 for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].directorId)
  movies[i].directorId = [];
  movies[i].scriptwriter = [];
  movies[i].stars = [];
  movies[i].genre = [];
 }
 fs.writeFileSync('movies.json', JSON.stringify(movies));

 const seriesData = fs.readFileSync('series.json');
 const series = JSON.parse(seriesData);
 for (let i = 0; i < series.length; i++) {
  series[i].directorId = [];
  series[i].scriptwriter = [];
  series[i].stars = [];
  series[i].genre = [];
 }
 fs.writeFileSync('series.json', JSON.stringify(series));

 const animeData = fs.readFileSync('anime.json');
 const anime = JSON.parse(animeData);
 for (let i = 0; i < anime.length; i++) {
  anime[i].directorId = [];
  anime[i].scriptwriter = [];
  anime[i].stars = [];
  anime[i].genre = [];
 }

fs.writeFileSync('anime.json', JSON.stringify(anime));

}

// addIdWriters()
deleteItemsParent()

const deleteParentsItems = () => {
 const genresData = fs.readFileSync('genres.json');
 const genres = JSON.parse(genresData);
 for (let i = 0; i < genres.length; i++) {
  genres[i].movies = [];
  genres[i].series = [];
  genres[i].anime = [];
 }
 fs.writeFileSync('genres.json', JSON.stringify(genres));

 const starsData = fs.readFileSync('stars.json');
 const stars = JSON.parse(starsData);
 for (let i = 0; i < stars.length; i++) {
  stars[i].movies = [];
  stars[i].series = [];
  stars[i].anime = [];
 }
 fs.writeFileSync('stars.json', JSON.stringify(stars));

 const sWriterData = fs.readFileSync('scriptwriters.json');
 const sWriters = JSON.parse(sWriterData);
 for (let i = 0; i < sWriters.length; i++) {
  sWriters[i].movies = [];
  sWriters[i].series = [];
  sWriters[i].anime = [];
 }
 fs.writeFileSync('scriptwriters.json', JSON.stringify(sWriters));

 const directorsData = fs.readFileSync('directors.json');
 const directors = JSON.parse(directorsData);
 for (let i = 0; i < directors.length; i++) {
  directors[i].movies = [];
  directors[i].movies = [];
  directors[i].series = [];
 }
 fs.writeFileSync('directors.json', JSON.stringify(directors));
}

deleteParentsItems()
