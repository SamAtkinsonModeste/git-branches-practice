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
  {
    character: "Luna Lovegood",
    house: "Ravenclaw",
    wand: "Unknown (possibly made from a light-colored wood)",
    father: "Xenophilius Lovegood",
    mother: "Pandora Lovegood",
    pet: "No known pet",
  },
  {
    character: "Draco Malfoy",
    house: "Slytherin",
    wand: "10 inches, hawthorn, unicorn hair core",
    father: "Lucius Malfoy",
    mother: "Narcissa Malfoy",
    pet: "Eagle Owl",
  },
  {
    character: "Cho Chang",
    house: "Ravenclaw",
    wand: "Unknown",
    father: "Unknown",
    mother: "Unknown",
    pet: "Owl",
  },
  {
    character: "Neville Longbottom",
    house: "Gryffindor",
    wand: "13 inches, cherry, unicorn hair core",
    father: "Frank Longbottom",
    mother: "Alice Longbottom",
    pet: "Trevor",
  },
  {
    character: "Ginny Weasley",
    house: "Gryffindor",
    wand: "Yew wood, unknown length and core",
    father: "Arthur Weasley",
    mother: "Molly Weasley",
    pet: "Arnold",
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
