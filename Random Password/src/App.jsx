import React, { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setChar] = useState(false);
  const [numbersAllowed, setNumbers] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  const copypsw = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, charAllowed, numbersAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numbersAllowed, generatePassword]);

  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <div className="icon-wrap">🔐</div>
          <h1 className="title">Password Generator</h1>
          <p className="subtitle">Create strong, secure passwords instantly</p>
        </div>

        <div className="password-row">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your password"
            ref={passwordRef}
            className="password-input"
          />
          <button
            onClick={copypsw}
            className={`copy-btn ${copied ? "copied" : ""}`}
          >
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>

        <div className="length-control">
          <div className="length-label">
            <span>Length</span>
            <span className="length-value">{length}</span>
          </div>
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="range-slider"
          />
        </div>

        <div className="options-row">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={numbersAllowed}
              onChange={() => setNumbers((prev) => !prev)}
              className="toggle-input"
            />
            <span className="toggle-track">
              <span className="toggle-thumb"></span>
            </span>
            <span className="toggle-text">Numbers</span>
          </label>

          <label className="toggle-label">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setChar((prev) => !prev)}
              className="toggle-input"
            />
            <span className="toggle-track">
              <span className="toggle-thumb"></span>
            </span>
            <span className="toggle-text">Symbols</span>
          </label>
        </div>

        <button onClick={generatePassword} className="regenerate-btn">
          ↻ Regenerate
        </button>
      </div>
    </div>
  );
}

export default App;
