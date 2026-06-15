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
    character: "Luna Lovegood",
    house: "Ravenclaw",
    father: "Xenophilius Lovegood",
    mother: "Pandora Lovegood",
    pet: "No known pet",
  },
  {
    character: "Draco Malfoy",
    house: "Slytherin",
    father: "Lucius Malfoy",
    mother: "Narcissa Malfoy",
    pet: "Eagle Owl",
  },
  {
    character: "Neville Longbottom",
    house: "Gryffindor",
    father: "Frank Longbottom",
    mother: "Alice Longbottom",
    pet: "Trevor",
  },
];

function showRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);

  characterCard.textContent = characters[randomIndex];
}

characterBtn.addEventListener("click", showRandomCharacter);
