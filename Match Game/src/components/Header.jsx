export const GameHeader = ({ score, moves, onReset }) => {
  return (
    <header className="header">
      <h1 className="header-title">🎮 Memory Match</h1>
      <div className="header-stats">
        <div className="stat-box">
          <span className="stat-label">Matches</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Moves</span>
          <span className="stat-value">{moves}</span>
        </div>
      </div>
      <button className="btn-reset" onClick={onReset}>
        🔄 New Game
      </button>
    </header>
  );
};
