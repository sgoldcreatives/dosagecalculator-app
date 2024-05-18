"use client";
import React, { useState, ChangeEvent } from "react";
import { medications, Med } from "./components/columns";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { DataTable } from "./components/data-table";
import { NanError } from "./components/nanError";
import { Footer } from "./components/footer";
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
import Link from "next/link";
import { AlertNewFeature } from "./components/newfeature-alert";
import { ClearAllButton } from "./components/clearall-button";
import { FeedbackReport } from "./components/feedbackreport";
import { Checkbox } from "@/components/ui/checkbox";
import { WeightContext } from "./context";
import { HowToDC } from "./components/howToComponents/howtoDC";
import { ToCustom } from "./toCustom";

function lbsToKg(Pweight: number) {
  return Pweight / 2.205;
}
type User = (typeof medications)[0];
export interface PatientProfile {
  pname: string;
  pweight: string;
}
export function VetDose() {
  const [patientProfile, setPatientProfile] = useState<PatientProfile>({
    pname: "",
    pweight: "",
  });

  const updatePatientProfile = (patient: Partial<PatientProfile>) => {
    setPatientProfile((prevPatientProfile) => ({
      ...prevPatientProfile,
      ...patient,
    }));
  };

  // Handler for the name change
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    updatePatientProfile({ pname: event.target.value });
  };

  // Handler for the weight change
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value;
    setPatientProfile({
      ...patientProfile,
      pweight: weight,
    });
  };

  const data = medications;
  const columns: ColumnDef<Med>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <span>
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
          <span className="ml-2">Select All</span>
        </span>
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "Instructions",
      cell: ({ row }) => {
        const medications = row.original;
        const dosage = parseFloat(row.getValue("dosage"));
        const calculated = dosage * Number(patientProfile.pweight);
        return (
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                size="icon"
                className="bg-violet-100 border-2 border-slate-300 "
              >
                <MagnifyingGlassIcon className="h-4 w-4 " />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="italic text-slate-400 text-base">
                  {!isNaN(calculated) && calculated > 0
                    ? ""
                    : "Slight error, you have not entered a number!"}
                </DialogTitle>
                <DialogDescription className="text-lg font-medium text-slate-950">
                  {!isNaN(calculated) && calculated > 0
                    ? "For " +
                      medications.name +
                      " give " +
                      calculated.toFixed(2) +
                      "cc " +
                      (medications.dosageForm === "Oral"
                        ? "by mouth."
                        : "by injection.")
                    : "Generally for " +
                      medications.name +
                      " you should multiply the patient's weight (in lbs) by " +
                      medications.dosage.toFixed(3) +
                      "."}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      },
    },
    {
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
      accessorKey: "tags",
      header: "Tags",
    },
    {
      accessorKey: "dosageForm",
      header: "Dosage Form",
    },
  ];

  return (
    <main className="h-screen bg-sky-100 overflow-auto">
      <WeightContext.Provider value={patientProfile}>
        <div className="">
          <Title />
        </div>
        <div>
          <ToCustom/>
        </div>
        <div className="">
          <div className="border-2 rounded-md border-violet-300 bg-slate-100 m-4 pb-3 px-3 max-w-screen-md text-slate-950">
            <div className="items-center">
              <div className="mt-3 rounded-md bg-violet-100 max-w-xs w-auto border-violet-100 border-2 border-b-violet-500">
                <p className="ml-6 opacity-60 font-normal text-sm">
                  Patient&apos;s name
                </p>
                <div className="flex items-center">
                  <input
                    className="input pb-2 input-bordered w-full font-normal text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                    value={patientProfile.pname}
                    placeholder="Enter name..."
                    onChange={handleNameChange}
                  />
                  <div className="text-slate-950 ml-2 font-normal"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center font-semibold">
              <div className="mt-3 rounded-md bg-violet-100 border-violet-100 border-2 border-b-violet-500">
                <p className="ml-6 opacity-60 font-normal text-sm">
                  Patient&apos;s weight
                </p>
                <div className="flex items-center">
                  <input
                    className="input pb-2 input-bordered w-full max-w-xs font-normal text-end text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                    placeholder="Enter weight..."
                    onChange={handleWeightChange}
                  />
                  <div className="text-slate-950 ml-2 font-normal">lbs</div>
                </div>
              </div>
            </div>
            <div className=" mt-4 flex text-xl">
              <p className="input input-bordered w-full max-w-xs text-xl text-end  bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-dashed border-2 text-slate-950">
                {Number(patientProfile.pweight) > 0 ? (
                  lbsToKg(Number(patientProfile.pweight)).toFixed(1)
                ) : (
                  <NanError />
                )}
              </p>
              <span className="text-slate-950 ml-2 mt-2.5">kgs</span>
            </div>
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
        </div>
        <div className="m-2">
          <DataTable columns={columns} data={data} />
        </div>
        <Footer />
      </WeightContext.Provider>
    </main>
  );
}
