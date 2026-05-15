# 🎮 Memory Match Game

A fun and interactive **memory card matching game** built with **React** and **Vite**. Flip cards to find matching pairs — the fewer moves, the better!

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Vanilla-1572B6?style=flat&logo=css3&logoColor=white)

---

## 🕹️ How to Play

1. Click any card to flip it over and reveal the emoji
2. Click a second card to find its match
3. If the two cards match — they stay face up ✅
4. If they don't match — they flip back over ❌
5. Match all 8 pairs to win the game 🎉

---

## ✨ Features

- 🔀 **Random shuffle** — Cards are shuffled every new game so it's never the same twice
- 🧠 **Match detection** — Automatically checks if two flipped cards are a pair
- 📊 **Live score & move tracker** — Tracks your matches and total moves in real time
- 🏆 **Win detection** — Celebrate when all pairs are found
- 🔄 **New Game / Play Again** — Reset and reshuffle at any time
- 🃏 **3D card flip animation** — Smooth CSS perspective flip effect
- 💚 **Matched card glow** — Matched pairs pulse green as visual feedback
- 📱 **Responsive design** — Works on desktop and mobile

---

## 🛠️ Built With

| Tech | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI components & state management |
| [Vite](https://vitejs.dev) | Lightning-fast dev server & bundler |
| Vanilla CSS | Styling, animations & 3D card flip |
| Google Fonts (Outfit) | Typography |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/match-game.git

# Navigate into the project
cd match-game

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open your browser at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.jsx      # Individual card component (flip logic & faces)
│   └── Header.jsx    # Scoreboard with matches, moves & new game button
├── App.jsx           # Main game logic (state, shuffle, match detection)
├── index.css         # All styles including 3D card flip animation
└── main.jsx          # App entry point
```

---

## 🧑‍💻 What I Learned

This project helped me practise core React concepts:

- `useState` — managing game state (cards, score, moves, win condition)
- `useEffect` — running logic on mount and reacting to state changes
- **Props** — passing data and callback functions between components
- **Conditional rendering** — showing the win banner only when the game is complete
- **List rendering** with `.map()` and the importance of `key` props
- **Immutable state updates** — never mutating state directly in React

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
