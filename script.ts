// Diccionarios de palabras por categorías
const words = {
  nouns: ["dragón", "pirata", "princesa", "robot", "caballero", "alienígena"],
  adjectives: ["valiente", "enorme", "misterioso", "divertido", "extraño", "brillante"],
  verbs: ["voló", "corrió", "bailó", "exploró", "saltó", "navegó"],
  places: ["castillo", "bosque", "planeta lejano", "ciudad perdida", "isla secreta", "laboratorio"]
};

// Plantilla de historias
const storyTemplates = [
  "Había una vez un/a {adjective} {noun} que {verb} hacia un/a {place}.",
  "En un/a {place} muy lejano, un/a {adjective} {noun} decidió que era hora de {verb}.",
  "Un/a {adjective} {noun} encontró un {place} y decidió {verb}."
];

// Elementos del DOM
const generateButton = document.getElementById("generate-story") as HTMLButtonElement;
const copyButton = document.getElementById("copy-story") as HTMLButtonElement;
const storyContainer = document.getElementById("story") as HTMLElement;

// Función para generar palabras aleatorias
function getRandomWord(category: keyof typeof words): string {
  const options = words[category];
  return options[Math.floor(Math.random() * options.length)];
}

// Función para generar una historia
function generateStory(): string {
  const template = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
  return template
    .replace("{noun}", getRandomWord("nouns"))
    .replace("{adjective}", getRandomWord("adjectives"))
    .replace("{verb}", getRandomWord("verbs"))
    .replace("{place}", getRandomWord("places"));
}

// Función para copiar la historia al portapapeles
function copyStoryToClipboard(): void {
  const storyText = storyContainer.innerText;
  navigator.clipboard.writeText(storyText).then(() => {
    alert("¡Historia copiada al portapapeles!");
  });
}

// Eventos
generateButton.addEventListener("click", () => {
  const story = generateStory();
  storyContainer.innerText = story;
  copyButton.classList.remove("hidden");
});

copyButton.addEventListener("click", copyStoryToClipboard);
