"use client";
import { InputProps } from "../types";

export default function Input({
  label,
  name,
  value,
  handleChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-5">
      <label className=" gap-5">{label}</label>
      <input
        className="input input-bordered"
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
