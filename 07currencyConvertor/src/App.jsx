import {useState} from "react";
import {InputBox} from "./components";
import useCurrencyInfo from "./Hook/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertCurrency, setConvertCurrency] = useState(0);

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to);
        setTo(from)
        setConvertCurrency(amount)
        setAmount(convertCurrency)
    }

    const convert = () => {
        setConvertCurrency(amount * currencyInfo[to])
    }

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center">
            <div className="w-full">
                <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox 
                            label="From" 
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox 
                            label="To"
                            amount={convertCurrency}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisabled
                            />
                        </div>
                        <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-4 rounded-lg"

                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
