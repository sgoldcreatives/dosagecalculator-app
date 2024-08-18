"use client";
import React, { useState } from "react";
import { medications, Med } from "./components/columns";
import { pills, Pill } from "./components/pillcolumns";
import { Button } from "@/components/ui/button";
import * as Switch from "@radix-ui/react-switch";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { DataTable } from "./components/data-table";
import { NanError } from "./components/nanError";
import { Footer } from "./components/footer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DisclaimerBox } from "./components/disclaimerbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Title } from "./title";
import { ColumnDef } from "@tanstack/react-table";
import { ClearAllButton } from "./components/clearall-button";
import { FeedbackReport } from "./components/feedbackreport";
import { WeightContext } from "./context";
import { HowToDC } from "./components/howToComponents/howtoDC";
import { ToCustom } from "./toCustom";
import { AlertNewFeature } from "./components/newfeature-alert";

function lbsToKg(Pweight: number) {
  return Pweight / 2.205;
}
type User = (typeof medications)[0];

export interface PatientProfile {
  pname: string;
  pweight: string;
  pmg: string;
}

export function VetDose() {
  const [patientProfile, setPatientProfile] = useState<PatientProfile>({
    pname: "",
    pweight: "",
    pmg: "",
  });

  const handleMGChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mg = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pmg: mg,
    });
  };

  const updatePatientProfile = (patient: Partial<PatientProfile>) => {
    setPatientProfile((prevPatientProfile) => ({
      ...prevPatientProfile,
      ...patient,
    }));
  };

  // Handler for the weight change
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pweight: weight,
    });
  };

  const [selectedSwitch, setSelectedSwitch] = useState<
    "inj-oral" | "pill" | null
  >("inj-oral");

  const handleSwitchChange = (switchName: "inj-oral" | "pill") => {
    if (selectedSwitch === switchName) {
      // If the same switch is clicked, turn it off
      setSelectedSwitch(null);
    } else {
      // Otherwise, toggle the selected switch on and the other off
      setSelectedSwitch(switchName);
    }
  };

  const datapill = pills;
  const columnspill: ColumnDef<Pill>[] = [
    {
      id: "name",
      header: "Name",
      cell: ({ row }) => {
        const medications = row.original;
        const name = medications.name;
        const drugClass = medications.drugClass;
        return (
          <div>
            <strong>{name}</strong>
            <p className="text-sm">{drugClass}</p>
          </div>
        );
      },
    },
    {
      header: "Dose Range",
      id: "dosage-range",
      cell: ({ row }) => {
        const medications = row.original;
        const mindosage = medications.mindosage;
        const maxdosage = medications.maxdosage;
        const patientWeight = Number(patientProfile.pweight);

        const calculatedmin = mindosage * (patientWeight / 2.205);
        const calculatedmax = maxdosage * (patientWeight / 2.205);

        return (
          <div className="text-left font-medium">
            {patientWeight <= 0 || isNaN(patientWeight) ? (
              <NanError />
            ) : (
              <>
                {mindosage === 0
                  ? `${calculatedmax.toFixed(1)} mg`
                  : `${calculatedmin.toFixed(1)} mg - ${calculatedmax.toFixed(
                      1
                    )} mg`}
              </>
            )}
            <div className="text-sm text-slate-500">
              {mindosage === 0
                ? `Max dosage: ${maxdosage} mg/kg`
                : `(${mindosage} - ${maxdosage} mg/kg)`}
            </div>
          </div>
        );
      },
    },
    {
      header: "Doses Available",
      id: "dosesAvail",
      cell: ({ row }) => {
        const medications = row.original;
        const doses = medications.dosesAvail;

        const handleDoseClick = (dose: number) => {
          setPatientProfile((prevProfile) => ({
            ...prevProfile,
            pmg: dose.toString(), // Convert the dose to a string to match the pmg type
          }));
        };

        return (
          <div className="flex space-x-2 overflow-x-auto flex-nowrap">
            {doses.map((dose) => (
              <button
                key={dose}
                className={`px-4 py-2 rounded-md border-2 transition-colors duration-200 whitespace-nowrap ${
                  patientProfile.pmg === dose.toString()
                    ? "bg-violet-500 text-white border-violet-500"
                    : "bg-violet-200 text-violet-500 border-violet-500 hover:bg-violet-500 hover:text-white"
                }`}
                onClick={() => handleDoseClick(dose)}
              >
                {dose} mg
              </button>
            ))}
          </div>
        );
      },
    },
    {
      header: "Dosage by Pill",
      id: "stock dosage",
      cell: ({ row }) => {
        const medications = row.original;
        const mindosage = medications.mindosage;
        const maxdosage = medications.maxdosage;
        const patientWeight = Number(patientProfile.pweight);

        const calculatedmin = mindosage * (patientWeight / 2.205);
        const calculatedmax = maxdosage * (patientWeight / 2.205);
        const pillMg = Number(patientProfile.pmg);

        // Check if any of the critical values are NaN or zero
        if (
          isNaN(calculatedmax) ||
          isNaN(pillMg) ||
          calculatedmax === 0 ||
          pillMg === 0
        ) {
          return <h2 className="text-slate-400 ">Please select a mg...</h2>;
        }

        // Function to always round down to the nearest half
        const roundDownToNearestHalf = (num: number): number => {
          return Math.floor(num * 2) / 2;
        };

        const roundedMin =
          calculatedmin > 0
            ? roundDownToNearestHalf(calculatedmin / pillMg)
            : 0;
        const roundedMax = roundDownToNearestHalf(calculatedmax / pillMg);

        // Helper function to convert number to text and fraction
        const formatDosage = (dose: number): string => {
          switch (dose) {
            case 0.5:
              return "HALF (1/2)";
            case 1:
              return "ONE (1)";
            case 1.5:
              return "ONE AND A HALF (1 1/2)";
            case 2:
              return "TWO (2)";
            default:
              return `${dose}`; // Fallback for other values
          }
        };

        // Helper function to calculate the total milligrams
        const calculateMg = (dose: number): number => {
          return dose * pillMg;
        };

        // Conditionally render the dosage information
        return (
          <div>
            {roundedMin > 0 ? (
              <div>
                <span>
                  Give {formatDosage(roundedMin)} to {formatDosage(roundedMax)}.
                </span>
                <br />
                <span className="text-sm text-slate-500">
                  Give {roundedMin} ({calculateMg(roundedMin).toFixed(1)} mg) to{" "}
                  {roundedMax} ({calculateMg(roundedMax).toFixed(1)} mg).
                </span>
              </div>
            ) : (
              <div>
                <span>Give up to {formatDosage(roundedMax)}.</span>
                <br />
                <span className="text-sm text-slate-500">
                  Give up to {roundedMax} ({calculateMg(roundedMax).toFixed(1)}{" "}
                  mg).
                </span>
              </div>
            )}
          </div>
        );
      },
    },
    {
      header: "Instructions",
      id: "instructions",
      cell: ({ row }) => {
        const medications = row.original;
        const bio = row.getValue("bio");
        return (
          <div className="text-sm max-w-sm">{medications.instructions}</div>
        );
      },
    },
    {
      accessorKey: "dosageForm",
      header: "Dosage Form",
      cell: ({ row }) => {
        const medications = row.original;
        const dosageForm = row.getValue("dosageForm");

        return (
          <div>
            <HoverCard>
              <HoverCardTrigger className="text-3xl">
                {medications.dosageForm}
              </HoverCardTrigger>
              <HoverCardContent className="text-sm bg-violet-100 border-4 border-slate-300">
                Pill Form
              </HoverCardContent>
            </HoverCard>
          </div>
        );
      },
    },
  ];

  const data = medications;
  const columns: ColumnDef<Med>[] = [
    {
      header: "Information",
      id: "Bio",
      cell: ({ row }) => {
        const medications = row.original;
        const bio = row.getValue("bio");
        return (
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                size="icon"
                className="bg-violet-100 border-2 border-slate-300 "
              >
                <QuestionMarkCircledIcon className="h-4 w-4 " />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className=" text-slate-950 font-bold">
                  <h2> Info </h2>
                </DialogTitle>
                <DialogDescription className="text-lg text-slate-900 font-normal">
                  {medications.bio}
                  <p className="italic text-sm text-slate-500">
                    For any suggestions, bug reports, or errors found, feel free
                    to contact Saar!
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "concentration",
      header: "Concentration",
    },
    {
      accessorKey: "dosage",
      header: "Dosage",
      cell: ({ row }) => {
        const dosage = parseFloat(row.getValue("dosage"));
        const calculated = dosage * Number(patientProfile.pweight);

        return (
          <div className="text-left font-medium">
            {!isNaN(calculated) && calculated > 0 ? (
              calculated.toFixed(2) + " cc"
            ) : (
              <NanError />
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "dosageForm",
      header: "Dosage Form",
      cell: ({ row }) => {
        const medications = row.original;
        const dosageForm = row.getValue("dosageForm");

        return (
          <div>
            <HoverCard>
              <HoverCardTrigger className="text-3xl">
                {medications.dosageForm}
              </HoverCardTrigger>
              <HoverCardContent className="text-sm bg-violet-100 border-4 border-slate-300">
                {medications.dosageForm != "🍯"
                  ? "Injectable"
                  : "Oral Medication"}
              </HoverCardContent>
            </HoverCard>
          </div>
        );
      },
    },
  ];

  return (
    <main className="h-screen bg-sky-100 overflow-auto">
      <WeightContext.Provider value={patientProfile}>
        <div className="">
          <Title />
        </div>
        <div>
          <ToCustom />
        </div>
        <div className="flex items-center">
          <div className="border-2 rounded-md border-violet-300 bg-slate-100 m-4 pb-3 px-3 max-w-screen-md text-slate-950">
            <div className="items-center"></div>
            <div className="flex items-center font-semibold">
              <div className="mt-3 text-lg rounded-md bg-violet-100 border-violet-100 border-2 border-b-violet-500 w-full flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="ml-6 text-lg opacity-60 font-normal">
                    Patient&apos;s weight
                  </p>
                  <div className="flex items-center">
                    <input
                      className="input pb-2 input-bordered w-full max-w-sm font-normal text-end text-5xl bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none placeholder:text-slate-400"
                      placeholder="Enter weight..."
                      onChange={handleWeightChange}
                    />
                    <div className="text-slate-950 ml-2 text-5xl font-normal">
                      lbs
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center mt-5">
                  <Switch.Root
                    id="inj-oral-calculator"
                    checked={selectedSwitch === "inj-oral"}
                    onCheckedChange={() => handleSwitchChange("inj-oral")}
                    className="w-[48px] h-[28px] bg-gray-300 rounded-full relative outline-none cursor-pointer data-[state=checked]:bg-violet-300 border-2 border-violet-400"
                  >
                    <Switch.Thumb className="block w-[24px] h-[24px] bg-violet-400 rounded-full transition-transform duration-100 translate-x-0.25 data-[state=checked]:translate-x-[24px]" />
                  </Switch.Root>
                  <label
                    className="text-slate-500 text-md ml-2 whitespace-nowrap"
                    htmlFor="inj-oral-calculator"
                  >
                    💉 & 🍯
                  </label>
                </div>
                <div className="flex items-center mt-4">
                  <Switch.Root
                    id="pill-calculator"
                    checked={selectedSwitch === "pill"}
                    onCheckedChange={() => handleSwitchChange("pill")}
                    className="w-[48px] h-[28px] bg-gray-300 rounded-full relative outline-none cursor-pointer data-[state=checked]:bg-violet-300 border-2 border-violet-400"
                  >
                    <Switch.Thumb className="block w-[24px] h-[24px] bg-violet-400 rounded-full transition-transform duration-100 translate-x-0.25 data-[state=checked]:translate-x-[24px]" />
                  </Switch.Root>
                  <label
                    className="text-slate-500 text-md ml-2 whitespace-nowrap"
                    htmlFor="pill-calculator"
                  >
                    💊
                  </label>
                </div>
              </div>
            </div>
            {Number(patientProfile.pweight) > 0 ? (
              <div className="mt-4 flex text-3xl">
                <p className="input input-bordered w-full max-w-sm text-3xl text-end bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-dashed border-2 text-slate-950">
                  {lbsToKg(Number(patientProfile.pweight)).toFixed(1)}
                </p>
                <span className="text-slate-950 ml-2 mt-2.5">kgs</span>
              </div>
            ) : (
              <p></p>
            )}
            <div className="flex mt-4">
              <span className="mr-3">
                <HowToDC />
              </span>
              <span className="mr-3">
                <ClearAllButton />
              </span>
              <span className="mr-3">
                <DisclaimerBox />
              </span>
              <span className="mr-3">
                <FeedbackReport />
              </span>
            </div>
          </div>
          <AlertNewFeature />
        </div>

        {selectedSwitch === "inj-oral" && (
          <div className="m-2">
            <DataTable columns={columns} data={data} />
          </div>
        )}
        {selectedSwitch === "pill" && (
          <div className="m-2">
            <DataTable columns={columnspill} data={datapill} />
          </div>
        )}

        <Footer />
      </WeightContext.Provider>
    </main>
  );
}
