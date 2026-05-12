import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo.jsx";
import CurrencyField from "./components/CurrencyField.jsx";

function App() {
	// 1. The Brain (Memory/State)
	const [amount, setAmount] = useState("");
	const [fromCurrency, setFromCurrency] = useState("usd");
	const [toCurrency, setToCurrency] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState("");

	// 2. Fetching Data
	const currencyInfo = useCurrencyInfo(fromCurrency);
	const options = Object.keys(currencyInfo);

	// 3. The Math Logic
	const swap = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const convert = () => {
		if (!amount) {
			setConvertedAmount("");
			return;
		}
		const rate = currencyInfo[toCurrency];
		const result = Number(amount) * rate;
		setConvertedAmount(parseFloat(result.toFixed(2)));
	};

	return (
		<div className="app">
			{/* Header */}
			<header className="app-header">
				<h1 className="app-title">Currency Converter</h1>
			</header>

			<div className="converter-card">
				{/* --- FROM --- */}
				<CurrencyField
					label="From"
					amount={amount}
					currency={fromCurrency}
					currencies={options}
					onAmountChange={(newAmount) => setAmount(newAmount)}
					onCurrencyChange={(newCurrency) => setFromCurrency(newCurrency)}
				/>

				{/* Divider */}
				<div className="swap-row">
					<span className="swap-line" />
					<button className="swap-btn" onClick={swap}>
						Swap
					</button>
				</div>

				{/* --- TO --- */}
				<CurrencyField
					label="To"
					amount={convertedAmount}
					currency={toCurrency}
					currencies={options}
					onAmountChange={(newAmount) => setConvertedAmount(newAmount)}
					onCurrencyChange={(newCurrency) => setToCurrency(newCurrency)}
					readOnly={true}
				/>

				{/* Convert Button */}
				<button className="convert-btn" onClick={convert}>
					Convert
				</button>
			</div>
		</div>
	);
}

export default App;
