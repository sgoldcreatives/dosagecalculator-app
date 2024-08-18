"use client";
import { HowToCDC } from "../components/howToComponents/howtoCDC";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import {
  drugs,
  PlumbsDrugTable,
} from "./additionalappComponents/PlumbsDT_Columns";

import { DataTable } from "./additionalappComponents/PlumbsDT";
import { NanError } from "../components/nanError";
import { Footer } from "../components/footer";

import { Title } from "../title";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ClearAllButton } from "../components/clearall-button";
import { FeedbackReport } from "../components/feedbackreport";
import { Button } from "@/components/ui/button";
import { PlumbsPdf } from "../components/plumbspdf";

const logoUrl = "/logo-clinic.png";

export interface PatientProfile {
  pweight: string;
  pmaxdosage: string;
  pmindosage: string;
  pconcentration: string;
}

export default function Page() {
  const imgSize = 201 / 2;

  const [patientProfile, setPatientProfile] = useState<PatientProfile>({
    pweight: "",
    pmaxdosage: "",
    pmindosage: "",
    pconcentration: "",
  });

  const updatePatientProfile = (patient: Partial<PatientProfile>) => {
    setPatientProfile((prevPatientProfile) => ({
      ...prevPatientProfile,
      ...patient,
    }));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pweight: weight,
    });
  };
  const handleMaxDosageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dosage = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pmaxdosage: dosage,
    });
  };

  const handleMinDosageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dosage = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pmindosage: dosage,
    });
  };
  const handleConcentrationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const concentration = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pconcentration: concentration,
    });
  };

  const [showDosageComponent, setShowDosageComponent] = useState(false);

  const handleDosageSwitchChange = (checked: boolean) => {
    setShowDosageComponent(checked);
  };

  const [showConcentrationComponent, setShowConcentrationComponent] =
    useState(false);

  const handleConcentrationSwitchChange = (checked: boolean) => {
    setShowConcentrationComponent(checked);
  };

  const [activeComponent, setActiveComponent] = useState<
    "database" | "pdf" | null
  >("pdf");

  const handleDatabaseSwitchChange = () => {
    setActiveComponent((prevState) =>
      prevState === "database" ? null : "database"
    );
  };

  const handlePDFSwitchChange = () => {
    setActiveComponent((prevState) => (prevState === "pdf" ? null : "pdf"));
  };

  const data = drugs;
  const columns: ColumnDef<PlumbsDrugTable>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return (
          <div className="text-left font-medium">
            <strong>{row.getValue("name")}</strong>
          </div>
          
        );
      },
    },
    {
      id: "dosage recommendation",
      header: "Dosage Recommendation",
      cell: ({ row }) => {
        const drugs = row.original;
        const doseDog = row.getValue("doseDog");
        const doseCat = row.getValue("doseCat");

        return (
          <div className="text-left font-medium">
            <strong>For Dogs: </strong>
            {drugs.doseDog}
            <br />
            <strong>For Cats: </strong>
            {drugs.doseCat === "NOT RECOMMENDED" ? (
              <span className="text-red-600">NOT RECOMMENDED</span>
            ) : (
              <span>{drugs.doseCat}</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "drugType",
      header: "Drug Type",
    },
  ];

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
      <div className="flex  bg-slate-100 mb-4 rounded-md border-violet-300 border-2  max-w-full p-2 m-4 ">
        <div className="flex-col">
          <div className="mb-2 items-center mt-2">
            <h1 className="text-3xl font-semibold text-slate-950">
              Custom Dosage Calculator
            </h1>
            <Button
              className="mt-4 flex border-2 border-slate-500 rounded-md px-4 py-2 bg-white text-slate-700
               hover:bg-slate-700 shadow-md hover:text-white transition duration-300 ease-in-out"
              onClick={handlePDFSwitchChange}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-2">
                {activeComponent === "pdf"
                  ? "Hide Plumb's Veterinary Medicine Handbook"
                  : "Show Plumb's Veterinary Medicine Handbook"}
              </span>
            </Button>
            <Button
              className="mt-4 flex border-2 border-slate-500 rounded-md px-4 py-2 bg-white text-slate-700
               hover:bg-slate-700 shadow-md hover:text-white transition duration-300 ease-in-out"
              onClick={handleDatabaseSwitchChange}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-2">
                {activeComponent === "database"
                  ? "Hide Database Component"
                  : "Show Database Component"}
              </span>
            </Button>
          </div>
          <div className="mb-8 ml-4">
            <div>
              <h3 className="italic text-slate-500 mb-1 ">
                Additional options
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="minimum-dosage"
                onCheckedChange={handleDosageSwitchChange}
              />
              <Label htmlFor="minimum-dosage" className="text-xs">
                Add minimum dosage
              </Label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Switch
                id="concentration"
                onCheckedChange={handleConcentrationSwitchChange}
              />
              <Label htmlFor="concentration" className="text-xs">
                Add concentration
              </Label>
            </div>
          </div>
          <div className="items-center">
            <div className="mt-3 rounded-md bg-violet-100 max-w-xs w-auto border-violet-100 border-2 border-b-violet-500">
              <p className="ml-6 opacity-60 font-normal text-sm">
                Patient&apos;s weight
              </p>
              <div className="flex items-center">
                <input
                  className="input pb-2 input-bordered w-full font-normal text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                  value={patientProfile.pweight}
                  placeholder="Enter weight..."
                  onChange={handleWeightChange}
                />
                <div className="text-slate-950 ml-2 font-normal">lb</div>
              </div>
            </div>
          </div>
          <div>
            {showDosageComponent && (
              <div className="items-center">
                <div className="mt-3 rounded-md bg-violet-100 max-w-xs w-auto border-violet-100 border-2 border-b-violet-500">
                  <p className="ml-6 opacity-60 font-normal text-sm">
                    Patient&apos;s min dosage
                  </p>
                  <div className="flex items-center">
                    <input
                      className="input pb-2 input-bordered w-full font-normal text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                      value={patientProfile.pmindosage}
                      placeholder="Enter dosage..."
                      onChange={handleMinDosageChange}
                    />
                    <div className="text-slate-950 ml-2 font-normal">
                      mg per kg
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="items-center">
              <div className="mt-3 rounded-md bg-violet-100 max-w-xs w-auto border-violet-100 border-2 border-b-violet-500">
                <p className="ml-6 opacity-60 font-normal text-sm">
                  Patient&apos;s {showDosageComponent ? "max dosage" : "dosage"}
                </p>
                <div className="flex items-center">
                  <input
                    className="input pb-2 input-bordered w-full font-normal text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                    value={patientProfile.pmaxdosage}
                    placeholder="Enter dosage..."
                    onChange={handleMaxDosageChange}
                  />
                  <div className="text-slate-950 ml-2 font-normal">
                    mg per kg
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-5 mb-5">
            <label className="mr-4 font-semibold">Prescription: </label>
            {showDosageComponent && ( //min dosage
              <>
                <h2 className="text-lg text-slate-950">
                  {Number(patientProfile.pweight) > 0 &&
                  Number(patientProfile.pmindosage) > 0 &&
                  !isNaN(Number(patientProfile.pweight)) &&
                  !isNaN(Number(patientProfile.pmindosage))
                    ? (
                        (Number(patientProfile.pweight) / 2.2) *
                        Number(patientProfile.pmindosage)
                      ).toFixed(1)
                    : ""}
                </h2>
                <span className="text-slate-950 ml-2">mg</span>
                <h2 className="ml-2 mr-2 text-lg font-semibold">to</h2>
              </>
            )}
            <h2 className="text-lg text-slate-950">
              {Number(patientProfile.pweight) > 0 && //max dosage
              Number(patientProfile.pmaxdosage) > 0 &&
              !isNaN(Number(patientProfile.pweight)) &&
              !isNaN(Number(patientProfile.pmaxdosage))
                ? (
                    (Number(patientProfile.pweight) / 2.2) *
                    Number(patientProfile.pmaxdosage)
                  ).toFixed(1)
                : ""}
            </h2>
            <span className="text-slate-950 ml-2">mg</span>
          </div>
          {showConcentrationComponent && (
            <>
              <div className="items-center">
                <div className="mt-3 rounded-md bg-violet-100 max-w-xs w-auto border-violet-100 border-2 border-b-violet-500">
                  <p className="ml-6 opacity-60 font-normal text-sm">
                    Enter concentration
                  </p>
                  <div className="flex items-center">
                    <input
                      className="input pb-2 input-bordered w-full font-normal text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                      value={patientProfile.pconcentration}
                      placeholder="Enter concentration..."
                      onChange={handleConcentrationChange}
                    />
                    <div className="text-slate-950 ml-2 font-normal">
                      mg per mL
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 mb-6">
                <h2 className="font-semibold text-lg mr-2">The result is:</h2>
                <h2 className="input input-bordered w-full max-w-xs text-lg rounded-md px-3 pt-2 text-slate-950">
                  {Number(patientProfile.pweight) > 0 &&
                  Number(patientProfile.pmaxdosage) > 0 &&
                  Number(patientProfile.pconcentration) > 0 &&
                  !isNaN(Number(patientProfile.pweight)) &&
                  !isNaN(Number(patientProfile.pmaxdosage)) &&
                  !isNaN(Number(patientProfile.pconcentration)) ? (
                    <>
                      {" "}
                      {(
                        ((Number(patientProfile.pweight) / 2.2) *
                          Number(patientProfile.pmaxdosage)) /
                        Number(patientProfile.pconcentration)
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
            </>
          )}
          <div className="flex">
            <span className="mr-3">
              <HowToCDC />
            </span>
            <span className="mr-3">
              <ClearAllButton />
            </span>
            <span className="mr-3">
              <FeedbackReport />
            </span>
          </div>
        </div>
        {activeComponent === "pdf" && (
          <>
            <div className="ml-5 mt-3 flex">
              <PlumbsPdf />
            </div>
          </>
        )}
        {activeComponent === "database" && (
          <>
            <div className="ml-5 mt-3">
              <h1 className="text-2xl font-semibold">Dosage database</h1>
              <DataTable columns={columns} data={data} />
            </div>
          </>
        )}
      </div>
      {showConcentrationComponent && (
        <>
          <div className="">
            <h1 className="font-semibold text-2xl ml-6 mt-4">Formula: </h1>
            <div className="flex items-center ml-8">
              {" "}
              <span className="mr-1 text-xl">
                {Number(patientProfile.pweight) > 0 &&
                Number(patientProfile.pmaxdosage) > 0 &&
                Number(patientProfile.pconcentration) > 0 &&
                !isNaN(Number(patientProfile.pweight)) &&
                !isNaN(Number(patientProfile.pmaxdosage)) &&
                !isNaN(Number(patientProfile.pconcentration)) ? (
                  <>
                    The result is:{" "}
                    <span className="font-bold stacked-fractions">
                      (
                      <span className="inline-block border-solid border-b-2 border-black pb-1">
                        {Number(patientProfile.pweight)}
                      </span>{" "}
                      / 1 ) * ( 1 /
                      <span className="inline-block border-solid border-b-2 border-black pb-1">
                        2.2
                      </span>
                      ) * (
                      <span className="inline-block border-solid border-b-2 border-black pb-1">
                        {Number(patientProfile.pmaxdosage)}
                      </span>{" "}
                      / 1 ) * ( 1 /
                      <span className="inline-block border-solid border-b-2 border-black pb-1">
                        {Number(patientProfile.pconcentration)}
                      </span>
                      )
                    </span>
                    {"= "}
                    {(
                      ((Number(patientProfile.pweight) / 2.2) *
                        Number(patientProfile.pmaxdosage)) /
                      Number(patientProfile.pconcentration)
                    ).toFixed(2)}{" "}
                    mL
                  </>
                ) : (
                  <NanError />
                )}
              </span>
            </div>
          </div>
        </>
      )}
      <div className="mt-5">
        <Footer />
      </div>
    </main>
  );
}
