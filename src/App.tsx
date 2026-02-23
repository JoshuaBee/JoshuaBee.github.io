import { Deck } from "./components/Deck/Deck";
import type { CardData } from "./types";

const headerCards: CardData[] = [
  {
    id: "joshua-bee-electric",
    name: "Joshua Bee",
    image: "/images/cards/home/joshua-bee-electric.webp",
    preload: true,
  },
];

const educationCards: CardData[] = [
  {
    id: "university-of-hull",
    name: "University of Hull",
    image: "/images/cards/education/university-of-hull.webp",
  },
  {
    id: "university-of-nottingham",
    name: "University of Nottingham",
    image: "/images/cards/education/university-of-nottingham.webp",
  },
];

const experienceCards: CardData[] = [
  {
    id: "symphonyai",
    name: "SymphonyAI",
    image: "/images/cards/experience/symphonyai.webp",
    url: "https://www.symphonyai.com/",
  },
  {
    id: "herd",
    name: "Herd",
    image: "/images/cards/experience/herd.webp",
    url: "https://herd.io/",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    image: "/images/cards/experience/strawberry.webp",
    url: "https://strawberry.co.uk/",
  },
  {
    id: "shopify",
    name: "Shopify",
    image: "/images/cards/experience/shopify.webp",
    url: "https://shopify.com/",
  },
];

const projectCards: CardData[] = [
  {
    id: "blackjack",
    name: "Blackjack",
    image: "/images/cards/projects/blackjack.webp",
    url: "https://blackjack.joshuabee.dev/",
  },
  {
    id: "breakout",
    name: "Breakout",
    image: "/images/cards/projects/breakout.webp",
    url: "https://breakout.joshuabee.dev/",
  },
  {
    id: "colour-encoder",
    name: "Colour Encoder",
    image: "/images/cards/projects/colour-encoder.webp",
    url: "https://encoder.joshuabee.dev/",
  },
  {
    id: "colour-palette",
    name: "Colour Palette",
    image: "/images/cards/projects/colour-palette.webp",
    url: "https://palette.joshuabee.dev/",
  },
  {
    id: "fake-name-generator",
    name: "Fake Name Generator",
    image: "/images/cards/projects/fake-name-generator.webp",
    url: "https://fake.joshuabee.dev/",
  },
  {
    id: "translate",
    name: "Translate",
    image: "/images/cards/projects/translate.webp",
    url: "https://translate.joshuabee.dev/",
  },
  {
    id: "pokemon-type-elo",
    name: "Pokémon Type ELO",
    image: "/images/cards/projects/pokemon-type-elo.webp",
    url: "https://pokemon.joshuabee.dev/",
  },
  {
    id: "pixelizer",
    name: "Pixelizer",
    image: "/images/cards/projects/pixelizer.webp",
    url: "https://pixelizer.joshuabee.dev/",
  },
];

const hobbyCards: CardData[] = [
  {
    id: "music",
    name: "Music",
    image: "/images/cards/hobbies/music.webp",
  },
  {
    id: "reading",
    name: "Reading",
    image: "/images/cards/hobbies/reading.webp",
  },
  {
    id: "sports",
    name: "Sports",
    image: "/images/cards/hobbies/sports.webp",
  },
];

export function App() {
  return (
    <main dir="ltr">
      <Deck id="home" name="Joshua Bee" nameHidden cards={headerCards} />
      <Deck id="education" name="Education" cards={educationCards} />
      <Deck id="experience" name="Experience" cards={experienceCards} />
      <Deck id="projects" name="Projects" cards={projectCards} />
      <Deck id="hobbies" name="Hobbies" cards={hobbyCards} />
    </main>
  );
}
