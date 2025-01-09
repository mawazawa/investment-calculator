import { useState } from "react";
import { portfolioCalculator, withoutInvCalculator } from "../utils/calculator";
import { InvestmentInputWithClasses, UseFormReturns } from "../types";

export function useForm(): UseFormReturns {
  const [inputs, setInputs] = useState<InvestmentInputWithClasses>({
    startingInv: 0,
    monthlyInv: 0,
    monthlyInvGrowth: 0,
    invLength: 0,
    assetClasses: 0.105,
  });
  const [result, setResult] = useState<number | null>(null);
  const [withoutInvResult, setWithoutInvResult] = useState<number | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: name === "assetClasses" ? parseFloat(value) : Number(value),
    }));
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      startingInv,
      monthlyInv,
      monthlyInvGrowth,
      invLength,
      assetClasses,
    } = inputs;

    const calculatedResult = portfolioCalculator({
      startingInv,
      monthlyInv,
      monthlyInvGrowth,
      invLength,
      assetClasses,
    });

    setResult(calculatedResult);

    const calculatedWithoutInvResult = withoutInvCalculator({
      startingInv,
      monthlyInv,
      monthlyInvGrowth,
      invLength,
    });

    setWithoutInvResult(calculatedWithoutInvResult);
  }

  return {
    inputs,
    result,
    withoutInvResult,
    handleChange,
    handleSubmit,
  };
}
