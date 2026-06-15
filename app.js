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
    father: "James Potter",
    mother: "Lily Potter",
    pet: " Hedwig",
  },
  {
    character: "Hermione Granger",
    house: "Gryffindor",
    father: "Daniel Granger",
    mother: "Emma Granger",
    pet: "Crookshanks",
  },
  {
    character: "Ron Weasley",
    house: "Gryffindor",
    father: "Arthur Weasley",
    mother: "Molly Weasley",
    pet: "Scabbers",
  },
];

function showRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);

  characterCard.textContent = characters[randomIndex];
}

characterBtn.addEventListener("click", showRandomCharacter);
