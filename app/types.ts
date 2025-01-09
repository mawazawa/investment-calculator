export interface InvestmentInput {
  startingInv: number;
  monthlyInv: number;
  monthlyInvGrowth: number;
  invLength: number;
}

export interface InvestmentInputWithClasses extends InvestmentInput {
  assetClasses: number;
}

export interface PortfolioCalculator {
  startingInv: number;
  monthlyInv: number;
  monthlyInvGrowth: number;
  invLength: number;
  assetClasses: number;
}

export type UseFormReturns = {
  inputs: InvestmentInputWithClasses;
  result: number | null;
  withoutInvResult: number | null;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export interface ResultProps {
  withoutInvResult: number | null;
  result: number;
}

export interface InputProps {
  label: string;
  name: string;
  value: string | number;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export interface SelectProps {
  label: string;
  name: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
