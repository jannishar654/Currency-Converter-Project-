import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white/30 p-4 rounded-xl shadow-inner flex justify-between items-center ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/70 text-sm mb-1 block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
           className="outline-none w-full bg-white/80 py-2 px-2 text-lg font-semibold text-gray-900 rounded-md placeholder-gray-500"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount === 0 ? "" : amount}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(
              Number(e.target.value.replace(/^0+(?=\d)/, "")) // remove leading 0s
            )
          }
        />
      </div>

      <div className="w-1/2 text-right">
        <p className="text-black/70 text-sm mb-1">Currency</p>
        <select
          className="rounded-md px-3 py-2 bg-white/90 shadow-md cursor-pointer outline-none font-semibold text-gray-800"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
