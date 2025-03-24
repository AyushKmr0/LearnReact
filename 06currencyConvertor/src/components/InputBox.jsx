import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "USD",
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    return (
        <div
            className={`bg-white p-3 rounded-lg text-sm flex ${className} `}
        >
            <div className="w-1/2">
                <label htmlFor="" className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-4"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(event) =>
                        onAmountChange &&
                        onAmountChange(Number(event.target.value))
                    }
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="bg-gray-100 rounded-lg px-2 cursor-pointer"
                    value={selectCurrency}
                    disabled={currencyDisabled}
                    onChange={(event) =>
                        onCurrencyChange && onCurrencyChange(event.target.value)
                    }
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
