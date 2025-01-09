"use client";
import { SelectProps } from "../types";

export default function Select({ label, name, handleChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-5">
      <label>{label}</label>
      <p>
        <em>
          Stock asset returns are calculated on up to 20 years of average
          return. Past performance is not indicative of future performance, so
          take note that it is only historic data and not forecasting.
        </em>
      </p>
      <select
        className="select select-bordered"
        id={name}
        name={name}
        onChange={handleChange}
      >
        <option value="0.105">S&P500 - AAR: 10.5%</option>
        <option value="0.138">Nasdaq - AAR: 13.8%</option>
        <option value="1.03">Bitcoin - AAR: 103%</option>
        <option value="1.94">Ethereum - AAR: 194%</option>
      </select>
    </div>
  );
}
