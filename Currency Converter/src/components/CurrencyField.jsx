import React from "react";

function CurrencyField({
  label,
  amount,
  currency,
  currencies = [],
  onAmountChange,
  onCurrencyChange,
  readOnly = false,
}) {
  return (
    <div className="currency-field">
      <p className="field-label">{label}</p>
      <div className="field-row">
        <input
          className="amount-input"
          type="number"
          value={amount}
          readOnly={readOnly}
          placeholder="0"
          onChange={(e) =>
            onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <select
          className="currency-select"
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyField;
