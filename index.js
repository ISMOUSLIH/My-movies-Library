const films = [
  {
    id: "film1",
    title: "Top Gun: Maverick",
    year: 2022,
    duration: "2h 10m",
    category: "Action , western , ACHRAF",
    description:
      "After more than thirty years of service, Maverick pushes the limits as a top Navy aviator training a new generation.",
    image: "images/topgun.jpg",
    fav: true,
  },
  {
    id: "film2",
    title: "Inception",
    year: 2010,
    duration: "2h 28m",
    category: "Science Fiction",
    description:
      "A skilled thief enters people’s dreams to steal secrets, but a final job may cost him everything.",
    image: "images/inception.jpg",
    fav: false,
  },
  {
    id: "film3",
    title: "Avengers: Endgame",
    year: 2019,
    duration: "3h 1m",
    category: "Action, Adventure",
    description:
      "The Avengers reunite to reverse Thanos’ snap and save the universe in an epic showdown.",
    image: "images/avengers_endgame.jpg",
    fav: false,
  },
  {
    id: "film4",
    title: "La La Land",
    year: 2016,
    duration: "2h 8m",
    category: "Musical, Romance",
    description:
      "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    image: "images/lalaland.jpg",
    fav: false,
  },
  {
    id: "film5",
    title: "Parasite",
    year: 2019,
    duration: "2h 12m",
    category: "Drama, Thriller",
    description:
      "A poor family schemes to infiltrate a wealthy household, leading to unexpected consequences.",
    image: "images/parasite.jpg",
    fav: false,
  },
  {
    id: "film6",
    title: "The Batman",
    year: 2022,
    duration: "2h 56m",
    category: "Crime, Thriller",
    description:
      "Batman investigates a series of murders linked to corruption in Gotham City.",
    image: "images/the_batman.jpg",
    fav: false,
  },
  {
    id: "film7",
    title: "Spider-Man: No Way Home",
    year: 2021,
    duration: "2h 28m",
    category: "Action, Fantasy",
    description:
      "Peter Parker seeks help to restore his secret identity, but multiverse chaos follows.",
    image: "images/spider_man_no_way_home.jpg",
    fav: false,
  },
  {
    id: "film8",
    title: "Dune",
    year: 2021,
    duration: "2h 35m",
    category: "Science Fiction, Adventure",
    description:
      "A noble family becomes entangled in a war for control over a desert planet’s valuable spice.",
    image: "images/dune.jpg",
    fav: false,
  },
  {
    id: "film9",
    title: "Barbie",
    year: 2023,
    duration: "1h 54m",
    category: "Comedy, Fantasy",
    description:
      "Barbie journeys from her perfect world into reality to discover what it means to be human.",
    image: "images/barbie.jpg",
    fav: false,
  },
  {
    id: "film10",
    title: "Oppenheimer",
    year: 2023,
    duration: "3h 0m",
    category: "Biography, Drama",
    description:
      "The story of J. Robert Oppenheimer and his role in developing the atomic bomb during WWII.",
    image: "images/oppenheimer.jpg",
    fav: false,
  },
  {
    id: "film11",
    title: "Dune: Part Two",
    year: 2024,
    duration: "2h 46m",
    category: "Action, Adventure, Drama",
    description:
      "Paul Atreides unites with Chani and the Fremen as he seeks revenge against those who destroyed his family.",
    image: "images/dune2.jpg",
    fav: false,
  },

  {
    id: "film13",
    title: "Killers of the Flower Moon",
    year: 2023,
    duration: "3h 26m",
    category: "Crime, Drama, History",
    description:
      "Members of the Osage tribe are murdered under mysterious circumstances in 1920s Oklahoma, sparking a major FBI investigation.",
    image: "images/killers-flower-moon.jpg",
    fav: false,
  },
  {
    id: "film14",
    title: "The Creator",
    year: 2023,
    duration: "2h 13m",
    category: "Action, Adventure, Sci-Fi",
    description:
      "In a future war between the human race and AI, a former soldier is recruited to hunt down the architect of a powerful weapon.",
    image: "images/the-creator.jpg",
    fav: false,
  },

  {
    id: "film15",
    title: "Everything Everywhere All at Once",
    year: 2022,
    duration: "2h 19m",
    category: "Action, Adventure, Comedy",
    description:
      "An unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse.",
    image: "images/everything-everywhere.jpg",
    fav: false,
  },
  {
    id: "film16",
    title: "Mission: Impossible – Dead Reckoning Part One",
    year: 2023,
    duration: "2h 43m",
    category: "Action, Adventure, Thriller",
    description:
      "Ethan Hunt and his IMF team face a deadly new enemy with control over a powerful AI weapon.",
    image: "images/mission-impossible7.jpg",
    fav: false,
  },
  {
    id: "film17",
    title: "The Whale",
    year: 2022,
    duration: "1h 57m",
    category: "Drama",
    description:
      "A reclusive English teacher living with severe obesity attempts to reconnect with his estranged teenage daughter.",
    image: "images/the-whale.jpg",
    fav: false,
  },
  {
    id: "film18",
    title: "John Wick: Chapter 4",
    year: 2023,
    duration: "2h 49m",
    category: "Action, Crime, Thriller",
    description:
      "John Wick uncovers a path to defeating the High Table, but must face powerful new enemies across the globe.",
    image: "images/john-wick4.jpg",
    fav: false,
  },
  {
    id: "film19",
    title: "The Marvels",
    year: 2023,
    duration: "1h 45m",
    category: "Action, Adventure, Sci-Fi",
    description:
      "Carol Danvers teams up with Kamala Khan and Monica Rambeau when their powers become mysteriously entangled.",
    image: "images/the-marvels.jpg",
    fav: false,
  },
  {
    id: "film20",
    title: "Wonka",
    year: 2023,
    duration: "1h 52m",
    category: "Adventure, Comedy, Family",
    description:
      "A young Willy Wonka embarks on a magical adventure to open the world’s most famous chocolate factory.",
    image: "images/wonka.jpg",
    fav: false,
  },
  {
    id: "film21",
    title: "Napoleon",
    year: 2023,
    duration: "2h 38m",
    category: "Biography, Drama, History",
    description:
      "An epic that details Napoleon Bonaparte’s rise to power and his volatile relationship with Empress Joséphine.",
    image: "images/napoleon.jpg",
    fav: false,
  },
  {
    id: "film22",
    title: "Poor Things",
    year: 2023,
    duration: "2h 21m",
    category: "Comedy, Drama, Romance",
    description:
      "A young woman, brought back to life by an unorthodox scientist, explores the world with curiosity and defiance.",
    image: "images/poor-things.jpg",
    fav: false,
  },
  {
    id: "film23",
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    duration: "2h 20m",
    category: "Animation, Action, Adventure",
    description:
      "Miles Morales journeys through the multiverse and teams up with other Spider-People to face a new threat.",
    image: "images/spider-verse2.jpg",
    fav: false,
  },
  {
    id: "film24",
    title: "Air",
    year: 2023,
    duration: "1h 52m",
    category: "Biography, Drama, Sport",
    description:
      "A sports marketing executive pursues a rookie named Michael Jordan for a revolutionary sneaker deal with Nike.",
    image: "images/air.jpg",
    fav: false,
  },
  {
    id: "film25",
    title: "Asteroid City",
    year: 2023,
    duration: "1h 45m",
    category: "Comedy, Drama, Romance",
    description:
      "In a fictional American desert town, a group gathers for a Junior Stargazer convention and encounters the unexpected.",
    image: "images/asteroid-city.jpg",
    fav: false,
  },
];

loadFavoritesFromStorage();
const nav = document.getElementById("categories");

const distinctCategories = [
  ...new Set(
    films.flatMap((film) => film.category.split(", ").map((cat) => cat.trim()))
  ),
];
function showCat() {
  const allBtn = document.createElement("div");
  allBtn.className = "filter";
  allBtn.innerText = "Tous";
  allBtn.addEventListener("click", () => {
    filmsection.innerHTML = "";
    showFilms();
  });
  nav.appendChild(allBtn);
  distinctCategories.forEach((cat) => {
    const catg = document.createElement("div");
    catg.className = "filter";
    catg.innerText = cat;

    catg.addEventListener("click", () => {
      filterByCategory(cat);
      // catg.style.backgroundColor = "red";
    });
    nav.appendChild(catg);
    // console.log(cat);
  });
  // nav.append(catg);
}
const filmsection = document.getElementById("filmsGrid");
function showFilms() {
  films.forEach((film) => {
    const card = document.createElement("div"); //
    card.className = "film-card"; //
    card.innerHTML = cardLayout(film); //
    card.addEventListener("click", () => {
      toggleDescription(card);
    });
    filmsection.appendChild(card);

    console.log(film);
  });
}

function filterByCategory(cat) {
  filmsection.innerHTML = "";
  const filtered = films.filter((film) =>
    film.category
      .split(",")
      .map((c) => c.trim())
      .includes(cat)
  );

  filtered.forEach((film) => {
    const card = document.createElement("div");
    card.className = "film-card";
    card.innerHTML = cardLayout(film);
    card.addEventListener("click", () => {
      toggleDescription(card);
    });
    filmsection.appendChild(card);
  });
}

function Search() {
  var search = document.getElementById("search");
  search.value = "";
  search.addEventListener("input", (e) => {
    e.preventDefault();
    console.log("search", search.value);
    filmsection.innerHTML = "";

    const filtered = films.filter((film) =>
      film.title.toLowerCase().startsWith(search.value.toLowerCase())
    );
    filtered.forEach((film) => {
      const card = document.createElement("div");
      card.className = "film-card";
      card.innerHTML = cardLayout(film);
      card.addEventListener("click", () => {
        toggleDescription(card);
      });
      filmsection.appendChild(card);
    });
  });
}

function cardLayout(film) {
  return `
    <div class="col-6 col-md-3 col-lg-2">
      <div class="film-card">
        <img src="${film.image}" alt="${film.title}">
        <div class="film-content">
          <h3>${film.title}</h3>
          <i class="${film.fav ? "fa-solid" : "fa-regular"} fa-heart fav-icon"
            style="color: ${film.fav ? "#ff0000" : "#000"}"
            onclick="favoriteCheck('${film.id}')"></i> 
          <h4>${film.year}</h4>
          <h4>${film.duration}</h4>
          <p class="category">${film.category}</p>
          <p class="description">${film.description}</p>
        </div>
      </div>
    </div>
  `;
}
function toggleDescription(card) {
  const desc = card.querySelector(".description");
  if (desc) {
    desc.style.display = desc.style.display === "none" ? "block" : "none";
  }
}
function favoriteCheck(id) {
  const film = films.find((f) => f.id === id);

  if (film) {
    console.log("before", film.fav);

    film.fav = !film.fav;
    console.log("afetr", film.fav);
    saveFavoritesToStorage();

    const heartIcon = document.querySelector(
      `i[onclick="favoriteCheck('${id}')"]`
    );

    if (heartIcon) {
      heartIcon.className = film.fav
        ? "fa-solid fa-heart fav-icon"
        : "fa-regular fa-heart fav-icon";

      heartIcon.style.color = film.fav ? "#ff0000" : "#000";
    }
  }
}

function favoriteList() {
  var fav = document.getElementById("fav");
  fav.addEventListener("click", () => {
    filmsection.innerHTML = "";

    const filtered = films.filter((film) => film.fav == true);

    filtered.forEach((film) => {
      const card = document.createElement("div");
      card.className = "film-card";
      card.innerHTML = cardLayout(film);
      card.addEventListener("click", () => {
        toggleDescription(card);
      });
      filmsection.appendChild(card);
    });
  });
}

function saveFavoritesToStorage() {
  const favoriteIds = films.filter((film) => film.fav).map((film) => film.id);
  localStorage.setItem("favoriteFilms", JSON.stringify(favoriteIds));
}
function loadFavoritesFromStorage() {
  const savedFavorites = localStorage.getItem("favoriteFilms");
  if (savedFavorites) {
    const favoriteIds = JSON.parse(savedFavorites);
    films.forEach((film) => {
      film.fav = favoriteIds.includes(film.id);
    });
  }
}
showFilms();
favoriteList();
showCat();
Search();
