const characters = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Luna Lovegood",
  "Draco Malfoy",
];

const characterBtn = document.querySelector("#character-btn");
const characterCard = document.querySelector("#character-card");

const characters = [
  {
    character: "Harry Potter",
    house: "Gryffindor",
    wand: "11 inches, holly, phoenix feather core",
    father: "James Potter",
    mother: "Lily Potter",
    pet: " Hedwig",
  },
  {
    character: "Hermione Granger",
    house: "Gryffindor",
    wand: "10¾ inches, vine wood, dragon heartstring core",
    father: "Daniel Granger",
    mother: "Emma Granger",
    pet: "Crookshanks",
  },
];

function showRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);

  characterCard.textContent = characters[randomIndex];
}

characterBtn.addEventListener("click", showRandomCharacter);
