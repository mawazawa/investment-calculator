import { InvestmentInput, PortfolioCalculator } from "../types";

export function portfolioCalculator({
  startingInv,
  monthlyInv,
  monthlyInvGrowth,
  invLength,
  assetClasses,
}: PortfolioCalculator): number {
  const monthlyRate = assetClasses / 12;
  const months = invLength * 12;
  const invGrowthRate = 1 + monthlyInvGrowth / 100;

  let total = startingInv;

  for (let i = 0; i < months; i++) {
    if (i > 0 && i % 12 === 0) {
      monthlyInv *= invGrowthRate;
    }

    total += monthlyInv;
    total *= 1 + monthlyRate;
  }

  return total;
}

export function withoutInvCalculator({
  startingInv,
  monthlyInv,
  monthlyInvGrowth,
  invLength,
}: InvestmentInput): number {
  const months = invLength * 12;
  const invGrowthRate = 1 + monthlyInvGrowth / 100;

  let total = startingInv;

  for (let i = 0; i < months; i++) {
    if (i > 0 && i % 12 === 0) {
      monthlyInv *= invGrowthRate;
    }

    total += monthlyInv;
  }

  return total;
}
