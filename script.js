const films = [
  {
    id: "toggle1",
    title: "Top Gun: Maverick",
    year: 2022,
    duration: "2h 10m",
    category: ["Action"],
    description: "After more than thirty years of service, Maverick pushes the limits as a top Navy aviator training a new generation.",
    image: "images/topgun.jpg"
  },
  {
    id: "toggle2",
    title: "Inception",
    year: 2010,
    duration: "2h 28m",
    category: ["Science Fiction"] ,
    description: "A skilled thief enters people’s dreams to steal secrets, but a final job may cost him everything.",
    image: "images/inception.jpg"
  },
  {
    id: "toggle3",
    title: "Avengers: Endgame",
    year: 2019,
    duration: "3h 1m",
    category: "Action, Adventure",
    description: "The Avengers reunite to reverse Thanos’ snap and save the universe in an epic showdown.",
    image: "images/endgame.jpg" // ✅ Added missing image
  },
  {
    id: "toggle4",
    title: "La La Land",
    year: 2016,
    duration: "2h 8m",
    category: "Musical, Romance",
    description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    image: "images/lalaland.jpg"
  },
  {
    id: "toggle5",
    title: "Parasite",
    year: 2019,
    duration: "2h 12m",
    category: "Drama, Thriller",
    description: "A poor family schemes to infiltrate a wealthy household, leading to unexpected consequences.",
    image: "images/parasite.jpg"
  },
  {
    id: "toggle6",
    title: "The Batman",
    year: 2022,
    duration: "2h 56m",
    category: "Crime, Thriller",
    description: "Batman investigates a series of murders linked to corruption in Gotham City.",
    image: "images/batman.jpg"
  },
  {
    id: "toggle7",
    title: "Spider-Man: No Way Home",
    year: 2021,
    duration: "2h 28m",
    category: "Action, Fantasy",
    description: "Peter Parker seeks help to restore his secret identity, but multiverse chaos follows.",
    image: "images/spiderman.jpg"
  },
  {
    id: "toggle8",
    title: "Dune",
    year: 2021,
    duration: "2h 35m",
    category: "Science Fiction, Adventure",
    description: "A noble family becomes entangled in a war for control over a desert planet’s valuable spice.",
    image: "images/dune.jpg"
  },
  {
    id: "toggle9",
    title: "Barbie",
    year: 2023,
    duration: "1h 54m",
    category: "Comedy, Fantasy",
    description: "Barbie journeys from her perfect world into reality to discover what it means to be human.",
    image: "images/barbie.jpg"
  },
  {
    id: "toggle10",
    title: "Oppenheimer",
    year: 2023,
    duration: "3h 0m",
    category: "Biography, Drama",
    description: "The story of J. Robert Oppenheimer and his role in developing the atomic bomb during WWII.",
    image: "images/oppenheimer.jpg"
  }
];
// Get all filter buttons and film cards
const filterButtons = document.querySelectorAll(".filter");
const filmCards = document.querySelectorAll(".film-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedGenre = button.textContent.trim().toLowerCase();

    filmCards.forEach(card => {
      const categoryText = card.querySelector(".category").textContent.toLowerCase();
      const matches = categoryText.includes(selectedGenre);
      card.style.display = matches ? "block" : "none";
    });
  });
});
