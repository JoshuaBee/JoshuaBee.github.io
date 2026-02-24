import { preload } from "react-dom";

import { Deck } from "./components/Deck/Deck";
import type { CardData } from "./types";

import joshuaBeeElectric from "./assets/images/cards/home/joshua-bee-electric.webp";

import universityOfHull from "./assets/images/cards/education/university-of-hull.webp";
import universityOfNottingham from "./assets/images/cards/education/university-of-nottingham.webp";

import herd from "./assets/images/cards/experience/herd.webp";
import shopify from "./assets/images/cards/experience/shopify.webp";
import strawberry from "./assets/images/cards/experience/strawberry.webp";
import symphonyAI from "./assets/images/cards/experience/symphonyai.webp";

import blackjack from "./assets/images/cards/projects/blackjack.webp";
import breakout from "./assets/images/cards/projects/breakout.webp";
import colourEncoder from "./assets/images/cards/projects/colour-encoder.webp";
import colourPalette from "./assets/images/cards/projects/colour-palette.webp";
import fakeNameGenerator from "./assets/images/cards/projects/fake-name-generator.webp";
import pixelizer from "./assets/images/cards/projects/pixelizer.webp";
import pokemonTypeELO from "./assets/images/cards/projects/pokemon-type-elo.webp";
import translate from "./assets/images/cards/projects/translate.webp";

import music from "./assets/images/cards/hobbies/music.webp";
import reading from "./assets/images/cards/hobbies/reading.webp";
import sports from "./assets/images/cards/hobbies/sports.webp";

const headerCards: CardData[] = [
  {
    id: "joshua-bee-electric",
    name: "Joshua Bee",
    image: joshuaBeeElectric,
    preload: true,
  },
];

const educationCards: CardData[] = [
  {
    id: "university-of-hull",
    name: "University of Hull",
    image: universityOfHull,
  },
  {
    id: "university-of-nottingham",
    name: "University of Nottingham",
    image: universityOfNottingham,
  },
];

const experienceCards: CardData[] = [
  {
    id: "symphonyai",
    name: "SymphonyAI",
    image: symphonyAI,
    url: "https://www.symphonyai.com/",
  },
  {
    id: "herd",
    name: "Herd",
    image: herd,
    url: "https://herd.io/",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    image: strawberry,
    url: "https://strawberry.co.uk/",
  },
  {
    id: "shopify",
    name: "Shopify",
    image: shopify,
    url: "https://shopify.com/",
  },
];

const projectCards: CardData[] = [
  {
    id: "blackjack",
    name: "Blackjack",
    image: blackjack,
    url: "https://blackjack.joshuabee.dev/",
  },
  {
    id: "breakout",
    name: "Breakout",
    image: breakout,
    url: "https://breakout.joshuabee.dev/",
  },
  {
    id: "colour-encoder",
    name: "Colour Encoder",
    image: colourEncoder,
    url: "https://encoder.joshuabee.dev/",
  },
  {
    id: "colour-palette",
    name: "Colour Palette",
    image: colourPalette,
    url: "https://palette.joshuabee.dev/",
  },
  {
    id: "fake-name-generator",
    name: "Fake Name Generator",
    image: fakeNameGenerator,
    url: "https://fake.joshuabee.dev/",
  },
  {
    id: "translate",
    name: "Translate",
    image: translate,
    url: "https://translate.joshuabee.dev/",
  },
  {
    id: "pokemon-type-elo",
    name: "Pokémon Type ELO",
    image: pokemonTypeELO,
    url: "https://pokemon.joshuabee.dev/",
  },
  {
    id: "pixelizer",
    name: "Pixelizer",
    image: pixelizer,
    url: "https://pixelizer.joshuabee.dev/",
  },
];

const hobbyCards: CardData[] = [
  {
    id: "music",
    name: "Music",
    image: music,
  },
  {
    id: "reading",
    name: "Reading",
    image: reading,
  },
  {
    id: "sports",
    name: "Sports",
    image: sports,
  },
];

export function App() {
  preload(joshuaBeeElectric, {
    as: "image",
  });

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
