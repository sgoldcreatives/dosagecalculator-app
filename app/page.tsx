"use client";
import React, { useState } from "react";
import Image from "next/image";
import { medications, Med } from "./columns";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircledIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { DataTable } from "./data-table";
import { NanError } from "./additionalapps/nanError";
import { Footer } from "./footer";
import { DisclaimerBox } from "./disclaimerbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const logoUrl = "/logo-clinic.png";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { AlertNewFeature } from "./newfeature-alert";

function lbsToKg(Pweight: number) {
  return Pweight / 2.205;
}
type User = (typeof medications)[0];

export default function Home() {
  const [weight, setWeight] = useState("");
  const imgSize = 201 / 2;
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
      <AlertNewFeature />

      <div className="flex flex-col justify-between p-5">
        <div className="flex items-center bg-violet-100 rounded-md border-violet-300 border-2 p-3 max-w-screen-md ml-4">
          <Image
            src={logoUrl}
            alt="Logo of All Vet Care Animal Hospital"
            width={imgSize}
            height={imgSize}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
          <div className="ml-6">
            <h1 className="text-5xl font-semibold mt-2 text-slate-950">
              Dosage Calculator
            </h1>
            <Link
              href="/additionalapps"
              className="inline-block flex items-center mt-2 border-2 border-violet-300 rounded-md px-4 py-2 bg-white text-violet-700 hover:bg-violet-700 hover:text-white transition duration-300 ease-in-out"
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
              <span className="ml-1">
                {" "}
                Custom Dosage Calculator (Expiremental)
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-4 rounded-md border-slate-300 m-4 pb-3 px-3 border-dashed max-w-screen-md text-slate-950">
        <div className="flex items-center">
          <div className="flex items-center">
            Enter patient&apos;s weight:
            <div className="pl-4 pt-1">
              <div className="pt-5 flex items-center">
                <input
                  className="input input-bordered w-full max-w-xs text-end text-lg bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-2 text-slate-950"
                  value={weight}
                  placeholder=""
                  onChange={(e) => setWeight(e.target.value)}
                />
                <span className="text-slate-950 ml-2">lbs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-4 mt-8 flex">
          <p>Weight in kg:</p>
          <p className="ml-2 input input-bordered w-full max-w-xs text-lg text-end  bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-2 text-slate-950">
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
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
      <Footer />
    </main>
  );
}
