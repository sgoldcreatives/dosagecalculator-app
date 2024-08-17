"use client";
import React, { useState, ChangeEvent } from "react";
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
      accessorKey: "name",
      header: "Name",
    },
    {
      header: "Dosage Range",
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
                  ? "No min dosage"
                  : `${calculatedmin.toFixed(1)} mg`}
                {" - "}
                {!isNaN(calculatedmax) && calculatedmax > 0
                  ? `${calculatedmax.toFixed(1)} mg`
                  : "No max dosage"}
              </>
            )}
            <div className="text-sm text-slate-500">
              ({mindosage} - {maxdosage} mg/kg)
            </div>
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
  header: "Stock Dosage",
  id: "stock dosage",
  cell: ({ row }) => {
    const medications = row.original;
    const mindosage = medications.mindosage;
    const maxdosage = medications.maxdosage;
    const patientWeight = Number(patientProfile.pweight);

    const calculatedmin = mindosage * (patientWeight / 2.205);
    const calculatedmax = maxdosage * (patientWeight / 2.205);
    const pillMg = Number(patientProfile.pmg);

    // Check if any of the values are NaN or zero
    if (
      isNaN(calculatedmin) ||
      isNaN(calculatedmax) ||
      isNaN(pillMg) ||
      calculatedmin === 0 ||
      calculatedmax === 0 ||
      pillMg === 0
    ) {
      return null;
    }

    // If all values are valid, render the dosage information
    return (
      <div>
        Give {(calculatedmin / pillMg).toFixed(1)} to{" "}
        {(calculatedmax / pillMg).toFixed(1)} of a single {patientProfile.pmg} mg pill
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
            <div className="mt-3 text-base rounded-md bg-violet-100 border-violet-100 border-2 border-b-violet-500 w-full max-w-xs flex items-center justify-between p-2">
              <div className="flex flex-col">
                <p className="ml-4 text-sm opacity-60 font-normal">
                  mg in stock
                </p>
                <div className="flex items-center mt-1">
                  <input
                    className="input pb-1 input-bordered w-full max-w-xs font-normal text-end text-xl bg-violet-100 rounded-md px-2 pt-1 text-slate-950 focus:outline-none focus:border-none placeholder:text-slate-400"
                    placeholder="Enter mg..."
                    onChange={handleMGChange}
                  />
                  <div className="text-slate-950 ml-1 text-xl font-normal">
                    mg
                  </div>
                </div>
              </div>
            </div>
            <DataTable columns={columnspill} data={datapill} />
          </div>
        )}

        <Footer />
      </WeightContext.Provider>
    </main>
  );
}
