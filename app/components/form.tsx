"use client";
import Input from "./input";
import Select from "./select";
import { useForm } from "../hooks/useForm";
import Result from "./result";

export default function Form() {
  const { inputs, result, withoutInvResult, handleChange, handleSubmit } =
    useForm();

  return (
    <>
      <div className="flex flex-col gap-10 xl:max-w-[1200px] justify-center items-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
            <Input
              label="How much is your starting investment?"
              name="startingInv"
              value={inputs.startingInv || "0"}
              handleChange={handleChange}
            />
            <Input
              label="How much can you invest monthly?"
              name="monthlyInv"
              value={inputs.monthlyInv || "0"}
              handleChange={handleChange}
            />
            <Input
              label="How much your monthly investments grow yearly in percents?"
              name="monthlyInvGrowth"
              value={inputs.monthlyInvGrowth || "0"}
              handleChange={handleChange}
            />
            <Input
              label="How long do you want to invest? (years)"
              name="invLength"
              value={inputs.invLength || "0"}
              handleChange={handleChange}
            />
          </div>
          <Select
            label="Which asset class would you like to invest in?"
            name="assetClasses"
            handleChange={handleChange}
          />
          <button
            className="btn btn-primary w-[50%] self-center"
            type="submit"
            id="submitbtn"
          >
            Calculate
          </button>
        </form>
        {result !== null && (
          <Result result={result} withoutInvResult={withoutInvResult} />
        )}
      </div>
    </>
  );
}
