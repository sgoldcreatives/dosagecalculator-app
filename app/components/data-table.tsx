"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import jsPDF from "jspdf";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { dosageForm } from "./combobox-data";
import { usePatientContext } from "../context";
import { toast } from "sonner";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const generatePDF = () => {
    const filteredRows = table
      .getSelectedRowModel()
      .rows.filter((row: any) => !row.isSelected) // Filter rows based on selection status
      .map((row: any) => {
        const name = row.getValue("name");
        const dosage = row.getValue("dosage");
        const calculated = (dosage * Number(patient.pweight)).toFixed(1); // Round to 1 decimal point
        return `${name} (${row.getValue(
          "concentration"
        )}): ${calculated} cc - (${row.getValue("dosageForm")})`;
      });

    const doc = new jsPDF();

    // Add patient's name as a header
    doc.setFontSize(16);
    doc.text(`Prescription List for ${patient.pname || "Unknown"}`, 15, 15);

    // Set font size and style for prescription details
    doc.setFontSize(12);

    filteredRows.forEach((rowString, index) => {
      doc.text(rowString, 15, 30 + index * 10); // Adjust the y-coordinate as needed
    });

    doc.save(`${patient.pname || "Unknown"}_prescriptionlist.pdf`);
  };

  const patient = usePatientContext();

  function handlePrintToPDF() {
    if (
      table.getFilteredSelectedRowModel().rows.length !== 0 &&
      !isNaN(Number(patient.pweight)) &&
      patient.pname !== ""
    ) {
      return generatePDF();
    } else {
      return toastError();
    }
  }
  function toastError() {
    const toastId = toast.error(
      <div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <div>Error generating PDF document</div>
        <div className="text-slate-400 italic">
          {patient.pname === "" && <div>Patient name is empty</div>}
          {Number(patient.pweight) === 0 && <div>Patient weight is zero</div>}
          {table.getFilteredSelectedRowModel().rows.length === 0 && (
            <div>No rows are selected</div>
          )}
        </div>
        <button
          onClick={() => toast.dismiss(toastId)}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          OK
        </button>
      </div>,
      {
        style: {
          border: "2px solid red",
          backgroundColor: "white",
          color: "red",
          padding: "10px",
          fontSize: "16px",
        },
      }
    );
  }
  function toastError_rowNotselected() {
    const toastId = toast.error(
      <div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <div>Error generating PDF document</div>
        <div className="text-slate-400 italic">
          Please select at least one row before printing.
        </div>
        <button
          onClick={() => toast.dismiss(toastId)}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          OK
        </button>
      </div>,
      {
        style: {
          border: "2px solid red",
          backgroundColor: "white",
          color: "red",
          padding: "10px",
          fontSize: "16px",
        },
      }
    );
  }

  return (
    <div className="text-slate-950 ml-2">
      <div>
        <div className="flex items-center py-4">
          <Input
            placeholder="Search by name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-md text-2xl bg-violet-100 border-2 border-violet-300"
          />
        </div>
      </div>
      <Table className="border-4 border-dashed text-xl rounded-md bg-violet-100  border-slate-300">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-4 border-dashed border-slate-300"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="bg-violet-100 border-4  border-violet-300">
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Toaster></Toaster>
    </div>
  );
}
