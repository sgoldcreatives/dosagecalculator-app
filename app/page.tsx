"use client";
import React, { useState } from "react";
import Image from "next/image";
import Signature from "@/components/Signature";
import { medications, Med } from "./columns";
import { DataTable } from "./datatable";

const logoUrl = "/logo-clinic.png";
import { ColumnDef } from "@tanstack/react-table";

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
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "dosage",
      header: "Dosage",
      cell: ({ row }) => {
        const dosage = parseFloat(row.getValue("dosage"));
        const calculated = dosage * Number(weight);

        return <div className="text-right font-medium">{(calculated).toFixed(2) + ' cc'}</div>;
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
              {Number(weight) > 0 ? (
                lbsToKg(Number(weight) / 2.205).toFixed(1)
              ) : (
                <></>
              )}
            </p>
            <span className="text-slate-950 ml-2 mt-2.5">kgs</span>
          </div>
        </div>
        <div>
          {" "}
          <DataTable columns={columns} data={data} />
        </div>
        <Signature />
      </div>
    </main>
  );
}
