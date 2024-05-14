"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NanError } from "../components/nanError";
import { Footer } from "../components/footer";
import TextInput from "../textinput";
import Link from "next/link";
import { ClearAllButton } from "../components/clearall-button";
import { HowToDC } from "../components/howtoDC";
import { Title } from "../title";
import { FeedbackReport } from "../components/feedbackreport";
const logoUrl = "/logo-clinic.png";

export default function Page() {
  const imgSize = 201 / 2;
  const [weight, setWeight] = useState("");
  const [dosage, setDosage] = useState("");
  const [concentration, setConcentration] = useState("");
  const handleWeightChange = (value: string) => {
    setWeight(value);
  };
  const handleDosageChange = (value: string) => {
    setDosage(value);
  };
  const handleConcentrationChange = (value: string) => {
    setConcentration(value);
  };
  
  return (
    <main className="h-screen bg-sky-100 overflow-auto">
      <Title />
      <div className="flex ml-4">
        <Link
          href="/"
          className="flex items-center mt-2 border-2 border-violet-300 rounded-md px-4 py-2 bg-white text-violet-700
                 hover:bg-violet-700 shadow-md hover:text-white transition duration-300 ease-in-out w-auto"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="ml-2"> Back to Home</span>
        </Link>
      </div>
      <div className="flex flex-col bg-slate-100 mb-4 rounded-md border-violet-300 border-2  max-w-full p-2 m-4 ">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mt-2 mb-2 text-slate-950">
            Custom Dosage Calculator
          </h1>
          <div className="flex">
            <HowToDC />
          </div>
        </div>
        <div className="flex items-center">
          <TextInput
            label="Enter patient's weight"
            onChange={handleWeightChange}
          />
          <span className="text-slate-950 ml-2">lbs</span>
        </div>
        <div className="flex items-center mb-2">
          <TextInput label="Enter the dosage" onChange={handleDosageChange} />
          <span className="text-slate-950 ml-2">mg per kg</span>
        </div>
        <div className="flex items-center mb-3">
          <label className="mr-4 font-semibold">Prescription: </label>
          <h2 className="input input-bordered w-full max-w-xs border-dashed text-end text-lg bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-2 text-slate-950">
            {Number(weight) > 0 &&
            Number(dosage) > 0 &&
            !isNaN(Number(weight)) &&
            !isNaN(Number(dosage)) ? (
              ((Number(weight) / 2.2) * Number(dosage)).toFixed(1)
            ) : (
              <NanError />
            )}
          </h2>
          <span className="text-slate-950 ml-2">mg</span>
        </div>
        <div className="flex items-center">
          <TextInput
            label="Enter the concentration"
            onChange={handleConcentrationChange}
          />
          <span className="text-slate-950 ml-2 ">mg per mL</span>
        </div>
        <div className="flex mt-6 mb-6">
          <h2 className="font-semibold text-lg mr-2">The result is:</h2>
          <h2 className="input input-bordered w-full max-w-xs text-lg rounded-md px-3 pt-2 text-slate-950">
            {Number(weight) > 0 &&
            Number(dosage) > 0 &&
            Number(concentration) > 0 &&
            !isNaN(Number(weight)) &&
            !isNaN(Number(dosage)) &&
            !isNaN(Number(concentration)) ? (
              <>
                {" "}
                {(
                  ((Number(weight) / 2.2) * Number(dosage)) /
                  Number(concentration)
                ).toFixed(2)}{" "}
                mL
              </>
            ) : (
              <span className="">
                <br />
              </span>
            )}
          </h2>
        </div>
        <div className="flex">
          <ClearAllButton />
          <span className="">
            <FeedbackReport />
          </span>{" "}
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-2xl ml-6 mt-4">Formula: </h1>
        <div className="flex items-center ml-8">
          {" "}
          <span className="mr-1 text-xl">
            {Number(weight) > 0 &&
            Number(dosage) > 0 &&
            Number(concentration) > 0 &&
            !isNaN(Number(weight)) &&
            !isNaN(Number(dosage)) &&
            !isNaN(Number(concentration)) ? (
              <>
                The result is:{" "}
                <span className="font-bold stacked-fractions">
                  (
                  <span className="inline-block border-solid border-b-2 border-black pb-1">
                    {Number(weight)}
                  </span>{" "}
                  / 1 ) * ( 1 /
                  <span className="inline-block border-solid border-b-2 border-black pb-1">
                    2.2
                  </span>
                  ) * (
                  <span className="inline-block border-solid border-b-2 border-black pb-1">
                    {Number(dosage)}
                  </span>{" "}
                  / 1 ) * ( 1 /
                  <span className="inline-block border-solid border-b-2 border-black pb-1">
                    {Number(concentration)}
                  </span>
                  )
                </span>
                {"= "}
                {(
                  ((Number(weight) / 2.2) * Number(dosage)) /
                  Number(concentration)
                ).toFixed(2)}{" "}
                mL
              </>
            ) : (
              <NanError />
            )}
          </span>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </main>
  );
}
