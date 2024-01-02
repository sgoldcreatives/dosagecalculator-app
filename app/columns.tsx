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
  | "Steroid"

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
  {
    id: 3,
    dosage: 0.03,
    name: "Panacur",
    tags: ["For Dogs", "For Cats", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 4,
    dosage: 0.009,
    name: "Ketofen",
    tags: ["For Dogs", "Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 5,
    dosage: 0.04,
    name: "Rimadyl/Carprofen",
    tags: ["For Dogs", "Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 6,
    dosage: 0.018,
    name: "Meloxicam",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 7,
    dosage: 0.03,
    name: "Buprenorphine (0.3mg/mL)",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 8,
    dosage: 0.015,
    name: "Buprenorphine (0.6mg/mL)",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 9,
    dosage: 0.045,
    name: "Cerenia",
    tags: ["For Dogs", "For Cats", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 10,
    dosage: 0.009,
    name: "Triamcinolone",
    tags: ["Steroid", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 11,
    dosage: 0.045,
    name: "Convenia",
    tags: ["Antibiotic", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 12,
    dosage: 0.099,
    name: "Cefazolin",
    tags: ["Antibiotic", "For Dogs", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 13,
    dosage: 0.226,
    name: "Propofol",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 14,
    dosage: 0.0226,
    name: "Famotidine",
    tags: ["Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 15,
    dosage: 0.018,
    name: "Diphenhydramine",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 16,
    dosage: 0.027,
    name: "Metoclopramide",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 17,
    dosage: 0.04,
    name: "Zycortal",
    tags: ["Steroid", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 18,
    dosage: 0.113,
    name: "Ondansetron",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 19,
    dosage: 0.022,
    name: "Doxycycline",
    tags: ["Antibiotic", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 20,
    dosage: 0.06,
    name: "Gabapentin (K9)",
    tags: ["For Dogs", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 21,
    dosage: 0.09,
    name: "Gabapentin (Fel)",
    tags: ["For Cats", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 22,
    dosage: 0.0997,
    name: "Hydrocodone",
    tags: ["Pain", "Sx"],
    dosageForm: "Oral",
  },
  {
    id: 23,
    dosage: 0.09,
    name: "Depomedrol",
    tags: ["Steroid", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 24,
    dosage: 0.018,
    name: "Atropine",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 25,
    dosage: 0.045,
    name: "Onsior",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 26,
    dosage: 0.181,
    name: "Nocita",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 27,
    dosage: 0.02267,
    name: "Hydromorphine",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
];
