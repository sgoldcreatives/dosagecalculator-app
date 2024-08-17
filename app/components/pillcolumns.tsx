export interface Pill {
  id: number;
  mindosage: number;
  maxdosage: number;
  name: string;
  tags: medTags[];
  dosageForm: medForm;
  instructions: string;
}

export type medForm = "💊";
export type medTags =
  | "For Dogs"
  | "For Cats"
  | "Sx"
  | "Tx"
  | "Pain"
  | "Antibiotic"
  | "Steroid";

export const pills: Pill[] = [
  {
    id: 1,
    mindosage: 0.5,
    maxdosage: 1.5,
    name: "Acepromazine",
    tags: ["For Dogs"],
    dosageForm: "💊",
    instructions: "Given eveyr 12-24 hours as needed for assistance with post operative care or sedation. Dose with caution in Great Dane breeds.",
  },
  {
    id: 2,
    mindosage: 5,
    maxdosage: 10,
    name: "Enrofloxacin (Baytril)",
    tags: ["For Dogs", "Antibiotic"],
    dosageForm: "💊",
    instructions: "Given every 12 hours (BID) for no more than 10-14 days.",
  },
  {
    id: 3,
    mindosage: 0,
    maxdosage: 2.2,
    name: "Carprofen",
    tags: ["For Dogs", "Pain"],
    dosageForm: "💊",
    instructions: "Given every 12 hours (BID) usually for no more than 14 days as it has an impact on Kidney levels",
  },
  {
    id: 4,
    mindosage: 1.25,
    maxdosage: 10,
    name: "Gabapentin",
    tags: ["For Dogs", "For Cats", "Pain"],
    dosageForm: "💊",
    instructions: "Given once daily",
  },
  {
    id: 5,
    mindosage: 0.4,
    maxdosage: 0.6,
    name: "Apoquel",
    tags: ["For Dogs"],
    dosageForm: "💊",
    instructions: "Twice daily (BID) for up to 14 days. Continue therapy once daily (SID) thereafter for maintenance",
  },
];
