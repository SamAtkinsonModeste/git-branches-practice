const characterBtn = document.querySelector("#character-btn");
const characterCard = document.querySelector("#character-card");

const characterDetails = [
  {
    character: "Harry Potter",
    house: "Gryffindor",
    wand: "11 inches, holly, phoenix feather core",
    patronus: "Stag",
    father: "James Potter",
    mother: "Lily Potter",
    pet: " Hedwig",
  },
  {
    character: "Ron Weasley",
    house: "Gryffindor",
    wand: "12 inches, ash wood, unicorn hair core (hand-me-down from Charlie Weasley)",
    patronus: "Jack Russell Terrier",
    father: "Arthur Weasley",
    mother: "Molly Weasley",
    pet: "Scabbers",
  },
  {
    character: "Hermione Granger",
    house: "Gryffindor",
    wand: "10¾ inches, vine wood, dragon heartstring core",
    patronus: "Otter",
    father: "Daniel Granger",
    mother: "Emma Granger",
    pet: "Crookshanks",
  },
  {
    character: "Luna Lovegood",
    house: "Ravenclaw",
    wand: "Unknown (possibly made from a light-colored wood)",
    patronus: "Hare",
    father: "Xenophilius Lovegood",
    mother: "Pandora Lovegood",
    pet: "No known pet",
  },
  {
    character: "Draco Malfoy",
    house: "Slytherin",
    wand: "10 inches, hawthorn, unicorn hair core",
    patronus: "Unknown",
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
    patronus: "Unknown",
    father: "Frank Longbottom",
    mother: "Alice Longbottom",
    pet: "Trevor",
  },
  {
    character: "Ginny Weasley",
    house: "Gryffindor",
    wand: "Yew wood, unknown length and core",
    patronus: "Horse",
    father: "Arthur Weasley",
    mother: "Molly Weasley",
    pet: "Arnold",
  },
];

function showRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characterDetails.length);
  const chosenCharacter = characterDetails[randomIndex];
  characterCard.innerHTML = `Name: ${chosenCharacter.character}<br>
  House: ${chosenCharacter.house}<br> Wand: ${chosenCharacter.wand}<br>
  Patronus: ${chosenCharacter.patronus}<br>  Mother: ${chosenCharacter.mother}<br>
  Pet: ${chosenCharacter.pet}<br>`;
}

characterBtn.addEventListener("click", showRandomCharacter);
