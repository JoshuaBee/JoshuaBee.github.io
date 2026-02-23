import { useCallback, useState } from "react";

import type { CardData } from "../../types";

import { Card } from "./components/Card/Card";

import "./Deck.css";

interface DeckProps {
  id: string;
  name?: string;
  nameHidden?: boolean;
  cards: CardData[];
}

export function Deck({ id, name, nameHidden = false, cards }: DeckProps) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleActivate = useCallback((id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  }, []);

  const handleDeactivate = useCallback(() => {
    setActiveCardId(null);
  }, []);

  return (
    <section id={id} className="deck" data-card-count={cards.length}>
      {name ? (
        <h1 className="deck__name" data-hidden={nameHidden}>
          {name}
        </h1>
      ) : null}

      {cards.length > 0 ? (
        <div className="deck__cards">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              active={activeCardId === card.id}
              onActivate={handleActivate}
              onDeactivate={handleDeactivate}
              index={index}
              count={cards.length}
            />
          ))}
        </div>
      ) : null}

      <div className="deck__backdrop" onClick={handleDeactivate} />
    </section>
  );
}
