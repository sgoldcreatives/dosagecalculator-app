"use client";
import React, { useState } from "react";
import Image from "next/image";
import { medications, Med } from "./columns";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { DataTable } from "./data-table";
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

function lbsToKg(Pweight: number) {
  return Pweight / 2.205;
}
type User = (typeof medications)[0];
const nanError = "Enter a number!";

export default function Home() {
  const [weight, setWeight] = useState("");
  const imgSize = 201 / 2;
  const data = medications;
  const columns: ColumnDef<Med>[] = [
    {
      id: "actions",
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
                      medications.dosage +
                      "."}
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
      accessorKey: 'concentration',
      header: 'Concentration',
    },
    {
      accessorKey: "dosage",
      header: "Dosage",
      cell: ({ row }) => {
        const dosage = parseFloat(row.getValue("dosage"));
        const calculated = dosage * Number(weight);

        return (
          <div className="text-left font-medium">
            {!isNaN(calculated) && calculated > 0
              ? calculated.toFixed(2) + " cc"
              : nanError}
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
      <div className="flex flex-col justify-between p-5">
        <div className="flex  bg-violet-100 rounded-md border-violet-300 border-2 pl-3 py-3 max-w-screen-md ml-4">
          <Image
            src={logoUrl}
            alt="Logo of All Vet Care Animal Hospital"
            width={imgSize}
            height={imgSize}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
          <h1 className="text-5xl font-semibold ml-6 mt-6 text-slate-950">
            Dosage Calculator
          </h1>
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
              {Number(weight) > 0 && !isNaN(Number(weight))
                ? lbsToKg(Number(weight)).toFixed(1)
                : nanError}
            </p>
            <span className="text-slate-950 ml-2 mt-2.5">kgs</span>
          </div>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
        <div className="flex bottom-0 right-0 p-5 ">
          <p className=" text-gray-500 italic text-xs">
            Created by Saar Gold - December 2023
          </p>
          <Link
            href="https://github.com/sgoldcreatives/dosagecalculator-app"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-3 underline text-xs text-blue-600"
          >
            {" "}
            GitHub{" "}
          </Link>
        </div>
      </div>
    </main>
  );
}
