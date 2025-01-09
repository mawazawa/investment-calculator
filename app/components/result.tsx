"use client";
import { ResultProps } from "../types";

export default function Result({ result, withoutInvResult }: ResultProps) {
  return (
    <div>
      <h3 className="text-xl">
        Without investing your portfolio would be worth:&nbsp;
        <span className="text-error">
          {withoutInvResult?.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })}
        </span>
      </h3>
      <h3 className="text-xl">
        You win this amount by investing compared to holding cash:&nbsp;
        <span className="text-warning">
          {withoutInvResult !== null
            ? (result - withoutInvResult).toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })
            : null}
        </span>
      </h3>
      <h3 className="text-xl">
        Your portfolio would be worth:&nbsp;
        <span className="text-success">
          {result?.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        </span>
      </h3>
    </div>
  );
}
