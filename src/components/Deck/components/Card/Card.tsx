import { useCallback, useRef } from "react";

import { clamp, round } from "../../../../utils/math";
import type { CardData } from "../../../../types";

import "./Card.css";
import cardBack from "../../../../assets/images/cards/card-back.webp";

const MAX_TOTAL_ANGLE = 60;

interface CardProps {
  card: CardData;
  active: boolean;
  onActivate: (id: string) => void;
  onDeactivate: () => void;
  index: number;
  count: number;
}

export function Card({
  card,
  active,
  onActivate,
  onDeactivate,
  index,
  count,
}: CardProps) {
  const { id, name, image, url } = card;
  const cardRef = useRef<HTMLDivElement>(null);
  const cardButtonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const maxAngle = Math.min(MAX_TOTAL_ANGLE, 15 * count);
  const angleStep = count > 1 ? maxAngle / (count - 1) : 0;
  const t = index - (count - 1) / 2;
  const fanRotation = t * angleStep;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const resetCard = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;

    setTimeout(
      () => {
        el.style.setProperty("--rotate-x", "0deg");
        el.style.setProperty("--rotate-y", "0deg");

        el.style.setProperty("--pointer-x", "0%");
        el.style.setProperty("--pointer-y", "1%");
      },
      prefersReducedMotion ? 0 : 300,
    );
  }, [prefersReducedMotion]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!active) return;

      const el = cardRef.current;
      if (!el) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const absolute = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      const percent = {
        x: clamp(round(100 / rect.width) * absolute.x),
        y: clamp(round(100 / rect.height) * absolute.y),
      };
      const center = {
        x: percent.x - 50,
        y: percent.y - 50,
      };

      requestAnimationFrame(() => {
        el.style.setProperty("--rotate-x", `${round(-(center.x / 3.5))}deg`);
        el.style.setProperty("--rotate-y", `${round(center.y / 3.5)}deg`);

        el.style.setProperty("--pointer-x", `${round(percent.x)}%`);
        el.style.setProperty("--pointer-y", `${round(percent.y)}%`);
      });
    },
    [active, cardRef],
  );

  const onPointerLeave = useCallback(() => {
    if (!active) return;

    resetCard();
  }, [active, resetCard]);

  const handleClick = useCallback(() => {
    if (!active) {
      onActivate(id);
    } else {
      resetCard();
      onDeactivate();
    }
  }, [active, id, onActivate, onDeactivate, resetCard]);

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (active && e.key === "Tab") {
        if (e.shiftKey) {
          resetCard();
          onDeactivate();
          return;
        }

        if (!linkRef.current) {
          resetCard();
          onDeactivate();
          return;
        }
      }

      if (e.key === "Escape") {
        resetCard();
        onDeactivate();
      }
    },
    [active, onDeactivate, resetCard],
  );

  const handleLinkKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (active && e.key === "Tab") {
        if (!e.shiftKey) {
          resetCard();
          onDeactivate();
          return;
        }
      }

      if (e.key === "Escape") {
        cardButtonRef.current?.focus();

        resetCard();
        onDeactivate();
      }
    },
    [active, onDeactivate, resetCard],
  );

  return (
    <>
      <div
        ref={cardRef}
        className="card"
        data-active={active}
        style={
          {
            "--fan-rotation": `${fanRotation}deg`,
          } as React.CSSProperties
        }
      >
        <div className="card__translator">
          <button
            ref={cardButtonRef}
            className="card__rotator"
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            onClick={handleClick}
            onKeyDown={handleCardKeyDown}
          >
            <img
              className="card__back"
              src={cardBack}
              alt=""
              loading="lazy"
              fetchPriority="low"
              width="660"
              height="921"
            />
            <img
              className="card__front"
              src={image}
              alt={`${name} Pokémon Card`}
              fetchPriority={card.preload ? "high" : "low"}
              loading={card.preload ? "eager" : "lazy"}
              width="660"
              height="921"
            />
            <div className="card__glare" />
          </button>

          {url ? (
            <a
              ref={linkRef}
              className="card__link"
              href={url}
              tabIndex={active ? 0 : -1}
              target="_blank"
              onKeyDown={handleLinkKeyDown}
            >
              {`Visit the ${name} website`}
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
