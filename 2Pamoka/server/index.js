const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 3000;

const data = [
  {
    id: 1,
    name: "Kelwin",
    surname: "Pirouet",
    email: "kpirouet0@mac.com",
    gender: "Non-binary",
    car: "Dodge",
  },
  {
    id: 2,
    name: "Giffy",
    surname: "Bastin",
    email: "gbastin1@squidoo.com",
    gender: "Genderfluid",
    car: "GMC",
  },
  {
    id: 3,
    name: "Lisa",
    surname: "Corker",
    email: "lcorker2@nbcnews.com",
    gender: "Agender",
    car: "Volkswagen",
  },
  {
    id: 4,
    name: "Cornelius",
    surname: "Mourant",
    email: "cmourant3@quantcast.com",
    gender: "Male",
    car: "Saturn",
  },
  {
    id: 5,
    name: "Nicolais",
    surname: "Nancekivell",
    email: "nnancekivell4@chronoengine.com",
    gender: "Male",
    car: "Pontiac",
  },
  {
    id: 6,
    name: "Lloyd",
    surname: "De La Salle",
    email: "ldelasalle5@reddit.com",
    gender: "Genderfluid",
    car: "Ford",
  },
  {
    id: 7,
    name: "Kacie",
    surname: "Trime",
    email: "ktrime6@omniture.com",
    gender: "Agender",
    car: "Volkswagen",
  },
  {
    id: 8,
    name: "Lucine",
    surname: "Salamon",
    email: "lsalamon7@desdev.cn",
    gender: "Genderfluid",
    car: "Ford",
  },
  {
    id: 9,
    name: "Cleo",
    surname: "Glenister",
    email: "cglenister8@histats.com",
    gender: "Polygender",
    car: "Isuzu",
  },
  {
    id: 10,
    name: "Juditha",
    surname: "Whittington",
    email: "jwhittington9@ning.com",
    gender: "Polygender",
    car: "Chrysler",
  },
  {
    id: 11,
    name: "Valerye",
    surname: "Alastair",
    email: "valastaira@livejournal.com",
    gender: "Agender",
    car: "Hyundai",
  },
  {
    id: 12,
    name: "Calypso",
    surname: "Trebble",
    email: "ctrebbleb@unesco.org",
    gender: "Non-binary",
    car: "Jeep",
  },
  {
    id: 13,
    name: "Alix",
    surname: "Fursland",
    email: "afurslandc@ox.ac.uk",
    gender: "Female",
    car: "Toyota",
  },
  {
    id: 14,
    name: "Walsh",
    surname: "Geoghegan",
    email: "wgeoghegand@wunderground.com",
    gender: "Female",
    car: "Porsche",
  },
  {
    id: 15,
    name: "Finlay",
    surname: "Rawcliffe",
    email: "frawcliffee@de.vu",
    gender: "Genderqueer",
    car: "Toyota",
  },
  {
    id: 16,
    name: "Karola",
    surname: "Robardley",
    email: "krobardleyf@ucoz.com",
    gender: "Polygender",
    car: "Mitsubishi",
  },
  {
    id: 17,
    name: "Aggy",
    surname: "Cowley",
    email: "acowleyg@japanpost.jp",
    gender: "Genderqueer",
    car: "Pontiac",
  },
  {
    id: 18,
    name: "Stanford",
    surname: "Batting",
    email: "sbattingh@microsoft.com",
    gender: "Genderfluid",
    car: "Toyota",
  },
  {
    id: 19,
    name: "Marsiella",
    surname: "Simester",
    email: "msimesteri@github.io",
    gender: "Agender",
    car: "Lexus",
  },
  {
    id: 20,
    name: "Kat",
    surname: "Wykes",
    email: "kwykesj@rambler.ru",
    gender: "Agender",
    car: "Volkswagen",
  },
  {
    id: 21,
    name: "Jay",
    surname: "Goodinson",
    email: "jgoodinsonk@fastcompany.com",
    gender: "Non-binary",
    car: "Chevrolet",
  },
  {
    id: 22,
    name: "Bendicty",
    surname: "Ovington",
    email: "bovingtonl@aol.com",
    gender: "Bigender",
    car: "BMW",
  },
  {
    id: 23,
    name: "Drew",
    surname: "Crawforth",
    email: "dcrawforthm@wsj.com",
    gender: "Female",
    car: "BMW",
  },
  {
    id: 24,
    name: "Ami",
    surname: "Blaisdell",
    email: "ablaisdelln@cyberchimps.com",
    gender: "Bigender",
    car: "Toyota",
  },
  {
    id: 25,
    name: "Shannen",
    surname: "Chupin",
    email: "schupino@moonfruit.com",
    gender: "Male",
    car: "Dodge",
  },
  {
    id: 26,
    name: "Audry",
    surname: "Sheering",
    email: "asheeringp@wiley.com",
    gender: "Genderqueer",
    car: "Mercedes-Benz",
  },
  {
    id: 27,
    name: "Decca",
    surname: "Bax",
    email: "dbaxq@un.org",
    gender: "Genderqueer",
    car: "Chevrolet",
  },
  {
    id: 28,
    name: "Fran",
    surname: "McBratney",
    email: "fmcbratneyr@cmu.edu",
    gender: "Male",
    car: "Lotus",
  },
  {
    id: 29,
    name: "Patience",
    surname: "Kersley",
    email: "pkersleys@indiatimes.com",
    gender: "Genderfluid",
    car: "Volkswagen",
  },
  {
    id: 30,
    name: "Zeb",
    surname: "Parminter",
    email: "zparmintert@mozilla.org",
    gender: "Polygender",
    car: "Dodge",
  },
  {
    id: 31,
    name: "Christy",
    surname: "Carlill",
    email: "ccarlillu@qq.com",
    gender: "Bigender",
    car: "Lotus",
  },
  {
    id: 32,
    name: "Gael",
    surname: "Sieve",
    email: "gsievev@jiathis.com",
    gender: "Genderfluid",
    car: "Porsche",
  },
  {
    id: 33,
    name: "Dredi",
    surname: "Crofts",
    email: "dcroftsw@freewebs.com",
    gender: "Polygender",
    car: "BMW",
  },
  {
    id: 34,
    name: "Isidor",
    surname: "Lancetter",
    email: "ilancetterx@discovery.com",
    gender: "Genderqueer",
    car: "Mitsubishi",
  },
  {
    id: 35,
    name: "Cyril",
    surname: "Diack",
    email: "cdiacky@reuters.com",
    gender: "Non-binary",
    car: "Mazda",
  },
  {
    id: 36,
    name: "Zacharias",
    surname: "Ginner",
    email: "zginnerz@alibaba.com",
    gender: "Genderfluid",
    car: "Mercedes-Benz",
  },
  {
    id: 37,
    name: "Shirlee",
    surname: "Duffield",
    email: "sduffield10@jalbum.net",
    gender: "Polygender",
    car: "Toyota",
  },
  {
    id: 38,
    name: "Izzy",
    surname: "Thonason",
    email: "ithonason11@4shared.com",
    gender: "Male",
    car: "Chevrolet",
  },
  {
    id: 39,
    name: "Karel",
    surname: "Crocken",
    email: "kcrocken12@rakuten.co.jp",
    gender: "Genderqueer",
    car: "Dodge",
  },
  {
    id: 40,
    name: "Kellie",
    surname: "Ludy",
    email: "kludy13@webs.com",
    gender: "Genderqueer",
    car: "Suzuki",
  },
  {
    id: 41,
    name: "Edgard",
    surname: "Tayt",
    email: "etayt14@ycombinator.com",
    gender: "Non-binary",
    car: "Honda",
  },
  {
    id: 42,
    name: "Fionna",
    surname: "Toor",
    email: "ftoor15@apache.org",
    gender: "Bigender",
    car: "Shelby",
  },
  {
    id: 43,
    name: "Renelle",
    surname: "Bernollet",
    email: "rbernollet16@opera.com",
    gender: "Genderfluid",
    car: "Volvo",
  },
  {
    id: 44,
    name: "Caro",
    surname: "Cordelet",
    email: "ccordelet17@cnbc.com",
    gender: "Male",
    car: "BMW",
  },
  {
    id: 45,
    name: "Stirling",
    surname: "Anthonsen",
    email: "santhonsen18@hubpages.com",
    gender: "Genderfluid",
    car: "Subaru",
  },
  {
    id: 46,
    name: "Zachery",
    surname: "Aldgate",
    email: "zaldgate19@sakura.ne.jp",
    gender: "Female",
    car: "Audi",
  },
  {
    id: 47,
    name: "Gibbie",
    surname: "Nason",
    email: "gnason1a@constantcontact.com",
    gender: "Polygender",
    car: "Chevrolet",
  },
  {
    id: 48,
    name: "Wyndham",
    surname: "Jurasek",
    email: "wjurasek1b@yolasite.com",
    gender: "Female",
    car: "Buick",
  },
  {
    id: 49,
    name: "Chantalle",
    surname: "Grayson",
    email: "cgrayson1c@dagondesign.com",
    gender: "Female",
    car: "Toyota",
  },
  {
    id: 50,
    name: "Rori",
    surname: "Pomphrey",
    email: "rpomphrey1d@howstuffworks.com",
    gender: "Genderqueer",
    car: "Porsche",
  },
];

// find all users
app.get("/users", (req, res) => {
  res.send(data);
});

app.get("/users/:car", (req, res) => {
  const { car } = req.params;

  const foundCars = data.filter((user) => user.car === car);
  if (foundCars.length !== 0) {
    res.send(foundCars);
  } else {
    res.status(404).send(`Failed to find usere who drives ${car} `);
  }
});

//add new user
app.post("/users", (req, res) => {
  const { name, surname } = req.body;
  const newUser = { id: Date.now(), name, surname };
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`app listening to port: ${port}`);
});
