export interface Med {
  id: number;
  dosage: number;
  name: string;
  tags: medTags[];
  dosageForm: medForm;
}
"use client";


export type medForm = "Oral" | "Injectable";
export type medTags =
  | "For Dogs"
  | "For Cats"
  | "Sx"
  | "Tx"
  | "Pain"
  | "Antibiotic"
  | "Steroid";

export const medications: Med[] = [
  {
    id: 1,
    dosage: 0.03,
    name: "Meloxicam",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "Oral",
  },
  {
    id: 2,
    dosage: 0.045,
    name: "Metronidazole",
    tags: ["Antibiotic", "For Cats", "For Dogs", "Tx"],
    dosageForm: "Oral",
  },
  //   {
  //     dosage: 0.03,
  //     name: "Panacur",
  //     dosageForm: "Oral",
  //   },
  //   {
  //     dosage: 0.009,
  //     name: "Ketofen",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.04,
  //     name: "Rimadyl/Carprofen",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.018,
  //     name: "Meloxicam",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.03,
  //     name: "Buprenorphine (0.3mg/mL)",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.015,
  //     name: "Buprenorphine (0.6mg/mL)",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.045,
  //     name: "Cerenia",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.009,
  //     name: "Triamcinolone",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.045,
  //     name: "Convenia",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.099,
  //     name: "Cefazolin",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.226,
  //     name: "Propofol",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.0226,
  //     name: "Famotidine",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.018,
  //     name: "Diphenhydramine",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.027,
  //     name: "Metoclopramide",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.04,
  //     name: "Zycortal",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.113,
  //     name: "Ondansetron",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.022,
  //     name: "Doxycycline",
  //     dosageForm: "Oral",
  //   },
  //   {
  //     dosage: 0.06,
  //     name: "Gabapentin (K9)",
  //     dosageForm: "Oral",

  //   },
  //   {
  //     dosage: 0.09,
  //     name: "Gabapentin (Fel)",
  //     dosageForm: "Oral",

  //   },
  //   {
  //     dosage: 0.0997,
  //     name: "Hydrocodone",
  //     dosageForm: "Oral",

  //   },
  //   {
  //     dosage: 0.09,
  //     name: "Depomedrol",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.018,
  //     name: "Atropine",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.045,
  //     name: "Onsior",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.181,
  //     name: "Nocita",
  //     dosageForm: "Injectable",
  //   },
  //   {
  //     dosage: 0.02267,
  //     name: "Hydromorphine",
  //     dosageForm: "Injectable",
  //   },
];
