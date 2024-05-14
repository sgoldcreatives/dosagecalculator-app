"use client";
import React, { useState } from "react";
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

function lbsToKg(Pweight: number) {
  return Pweight / 2.205;
}
type User = (typeof medications)[0];

export default function Home() {
  const [weight, setWeight] = useState("");
  const data = medications;
  const columns: ColumnDef<Med>[] = [
    {
      id: "Instructions",
      cell: ({ row }) => {
        const medications = row.original;
        const dosage = parseFloat(row.getValue("dosage"));
        const calculated = dosage * Number(weight);
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
        const calculated = dosage * Number(weight);

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
      <div className="">
        <Title/>
        <div className="flex ml-4">
          <Link
            href="/additionalapps"
            className=" flex items-center mt-2 border-2 shadow-md border-violet-300 h-1/2 rounded-md px-4 py-2 bg-white text-violet-700 hover:bg-violet-700 hover:text-white transition duration-300 ease-in-out"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="ml-1"> Custom Dosage Calculator</span>
          </Link>
          <AlertNewFeature />
        </div>
      </div>

      <div className="">
        <div className="border-2 rounded-md border-violet-300 bg-slate-100 m-4 pb-3 px-3 max-w-screen-md text-slate-950">
          <div className="flex items-center">
            <div className="flex items-center font-semibold">
              <div className="mt-3 rounded-md bg-violet-100 border-violet-100 border-2 border-b-violet-500">
                <p className="ml-6 opacity-60 font-normal text-sm">
                  Patient&apos;s weight
                </p>
                <div className="flex items-center">
                  <input
                    className="input pb-2 input-bordered w-full max-w-xs font-normal text-end text-lg bg-violet-100 rounded-md px-3 pt-2 text-slate-950 focus:outline-none focus:border-none"
                    value={weight}
                    placeholder=""
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <div className="text-slate-950 ml-2 font-normal">lbs</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-4 flex text-xl">
            <p className="input input-bordered w-full max-w-xs text-xl text-end  bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-dashed border-2 text-slate-950">
              {Number(weight) > 0 && !isNaN(Number(weight)) ? (
                lbsToKg(Number(weight)).toFixed(1)
              ) : (
                <NanError />
              )}
            </p>
            <span className="text-slate-950 ml-2 mt-2.5">kgs</span>
            <span className="ml-10">
              <DisclaimerBox />
            </span>
            <span className="ml-4">
              <ClearAllButton />
            </span>
          </div>
        </div>
      </div>
      <div className="m-2">
        <DataTable columns={columns} data={data} />
      </div>
      <Footer />
    </main>
  );
}
