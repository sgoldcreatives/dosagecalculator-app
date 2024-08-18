export interface Pill {
  mindosage: number;
  maxdosage: number;
  name: string;
  drugClass: medTags;
  dosageForm: medForm;
  instructions: string;
  dosesAvail: number[];
}

export type medForm = "💊";
export type medTags =
  | "Sedative"
  | "Analgesic"
  | "Opioid"
  | "NSAID"
  | "Antibiotic"
  | "Steroid"
  | "Anti-Itch"
  | "Antiemetic";

export const pills: Pill[] = [
  {
    mindosage: 0.5,
    maxdosage: 1,
    name: "Acepromazine",
    drugClass: "Sedative",
    dosageForm: "💊",
    instructions:
      "Given every 12-24 hours as needed for assistance with post operative care or sedation. Dose with caution in Great Dane breeds.",
    dosesAvail: [10, 25],
  },
  {
    mindosage: 0.4,
    maxdosage: 0.6,
    name: "Apoquel",
    drugClass: "Anti-Itch",
    dosageForm: "💊",
    instructions:
      "Twice daily (BID) for up to 14 days. Continue therapy once daily (SID) thereafter for maintenance.",
    dosesAvail: [3.6, 5.4, 16],
  },
  {
    mindosage: 0,
    maxdosage: 2.205,
    name: "Carprofen",
    drugClass: "NSAID",
    dosageForm: "💊",
    instructions:
      "Given every 12 hours (BID) usually for no more than 14 days as it has an impact on kidney levels, for this reason, it is better to underdose.",
    dosesAvail: [25, 75, 100],
  },
  {
    mindosage: 5,
    maxdosage: 7,
    name: "Cefpodoxime",
    drugClass: "Antibiotic",
    dosageForm: "💊",
    instructions: "Given every 24 hours (SID) for no more than 7-10 days.",
    dosesAvail: [100, 200],
  },
  {
    mindosage: 0,
    maxdosage: 2,
    name: "Cerenia",
    drugClass: "Antiemetic",
    dosageForm: "💊",
    instructions:
      "Given every 24 hours (SID) until resolution of acute vomiting.",
    dosesAvail: [16, 64, 160],
  },
  {
    mindosage: 5,
    maxdosage: 10,
    name: "Enrofloxacin",
    drugClass: "Antibiotic",
    dosageForm: "💊",
    instructions: "Given every 12 hours (BID) for no more than 10-14 days.",
    dosesAvail: [22.7, 68, 136],
  },
  {
    mindosage: 4,
    maxdosage: 8,
    name: "Gabapentin",
    drugClass: "Analgesic",
    dosageForm: "💊",
    instructions: "Given once daily (SID).",
    dosesAvail: [50, 100, 300, 600],
  },
];
