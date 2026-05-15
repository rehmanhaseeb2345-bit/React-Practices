import React, { useEffect, useState } from "react";
import { GameHeader } from "./components/Header";
import { Card } from "./components/Card";

const EMOJIS = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍍", "🍉", "🍒"];

// Duplicate and shuffle the cards
const createShuffledCards = () => {
  const doubled = [...EMOJIS, ...EMOJIS];
  const shuffled = doubled.sort(() => Math.random() - 0.5);
  return shuffled.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
};

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // tracks the 1-2 currently flipped cards
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false); // lock during mismatch delay
  const [hasWon, setHasWon] = useState(false);

  const initialiseGame = () => {
    setCards(createShuffledCards());
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setIsChecking(false);
    setHasWon(false);
  };

  useEffect(() => {
    initialiseGame();
  }, []);

  // Check for win whenever cards change
  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.isMatched)) {
      setHasWon(true);
    }
  }, [cards]);

  const handleClick = (card) => {
    // Ignore if: already flipped, already matched, or mid-check animation
    if (card.isFlipped || card.isMatched || isChecking) return;
    // Ignore if we already have 2 cards waiting
    if (flippedCards.length === 2) return;

    // Flip this card
    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      setIsChecking(true);

      const [first, second] = newFlipped;

      if (first.value === second.value) {
        // ✅ Match!
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isMatched: true }
                : c
            )
          );
          setScore((prev) => prev + 1);
          setFlippedCards([]);
          setIsChecking(false);
        }, 600);
      } else {
        // ❌ No match — flip back after delay
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initialiseGame} />

      {hasWon && (
        <div className="win-banner">
          <span>🎉 You Won!</span>
          <p>Matched all pairs in {moves} moves!</p>
          <button className="btn-reset" onClick={initialiseGame}>
            Play Again
          </button>
        </div>
      )}

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onclick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
