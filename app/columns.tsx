export interface Med {
  id: number;
  dosage: number;
  name: string;
  concentration: string;
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
    concentration: "1.5 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "Oral",
  },
  {
    id: 2,
    dosage: 0.045,
    name: "Metronidazole",
    concentration: "100 mg/mL",
    tags: ["Antibiotic", "For Cats", "For Dogs", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 3,
    dosage: 0.03,
    name: "Panacur",
    concentration: "100 mg/mL",
    tags: ["For Dogs", "For Cats", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 4,
    dosage: 0.009,
    name: "Ketofen",
    concentration: "100 mg/mL",
    tags: ["For Dogs", "Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 5,
    dosage: 0.04,
    name: "Rimadyl/Carprofen",
    concentration: "50 mg/mL",
    tags: ["For Dogs", "Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 6,
    dosage: 0.018,
    name: "Meloxicam",
    concentration: "5 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 7,
    dosage: 0.03,
    name: "Buprenorphine",
    concentration: "0.3 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 8,
    dosage: 0.015,
    name: "Buprenorphine (0.6mg/mL)",
    concentration: '0.6 mg/mL',
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 9,
    dosage: 0.045,
    name: "Cerenia",
    concentration: '10 mg/mL',
    tags: ["For Dogs", "For Cats", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 10,
    dosage: 0.009,
    name: "Triamcinolone",
    concentration: "50 mg/5 mL",
    tags: ["Steroid", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 11,
    dosage: 0.045,
    name: "Convenia",
    concentration:'80 mg/mL',
    tags: ["Antibiotic", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 12,
    dosage: 0.099,
    name: "Cefazolin",
    concentration: "1 g/vial",
    tags: ["Antibiotic", "For Dogs", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 13,
    dosage: 0.226,
    name: "Propofol",
    concentration:"50 mg/5 mL",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 14,
    dosage: 0.0226,
    name: "Famotidine",
    concentration: '10 mg/mL',
    tags: ["Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 15,
    dosage: 0.018,
    name: "Diphenhydramine",
    concentration: "50 mg/mL",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 16,
    dosage: 0.027,
    name: "Metoclopramide",
    concentration: "5 mg/mL",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 17,
    dosage: 0.04,
    name: "Zycortal",
    concentration: "25 mg/mL",
    tags: ["Steroid", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 18,
    dosage: 0.113,
    name: "Ondansetron",
    concentration: "40 mg/20 mL",
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 19,
    dosage: 0.022,
    name: "Doxycycline",
    concentration: "100 mg/mL",
    tags: ["Antibiotic", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 20,
    dosage: 0.056,
    name: "Gabapentin (K9)",
    concentration: '80 mg/mL',
    tags: ["For Dogs", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 21,
    dosage: 0.085,
    name: "Gabapentin (Fel)",
    concentration: "80 mg/mL",
    tags: ["For Cats", "Tx"],
    dosageForm: "Oral",
  },
  {
    id: 22,
    dosage: 0.0997,
    name: "Hydrocodone",
    concentration: "5 mg/1.5 mg/5 mL",
    tags: ["Pain", "Sx"],
    dosageForm: "Oral",
  },
  {
    id: 23,
    dosage: 0.09,
    name: "Depomedrol",
    concentration: "20 mg/mL",
    tags: ["Steroid", "Tx"],
    dosageForm: "Injectable",
  },
  {
    id: 24,
    dosage: 0.018,
    name: "Atropine",
    concentration: "8 mg/20 mL", 
    tags: ["Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 25,
    dosage: 0.045,
    name: "Onsior",
    concentration: "20 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 26,
    dosage: 0.181,
    name: "Nocita",
    concentration: "13.3 mg/mL", 
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 27,
    dosage: 0.02267,
    name: "Hydromorphone",
    concentration: "2 mg/mL",
    tags: ["Pain", "Sx"],
    dosageForm: "Injectable",
  },
  {
    id: 28,
    dosage: 0.0999,
    name: "Meloxicam",
    concentration: "0.5 mg/mL",
    tags: ["For Dogs", "For Cats", "Pain", "Sx"],
    dosageForm: "Oral",
  },
];
