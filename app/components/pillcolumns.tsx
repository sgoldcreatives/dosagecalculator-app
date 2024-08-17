export interface Pill {
  id: number;
  mindosage: number;
  maxdosage: number;
  name: string;
  tags: medTags[];
  dosageForm: medForm;
  bio: string;
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
    bio: "Acepromazine is a tranquilizer used in veterinary medicine to sedate dogs and manage anxiety. Administer every 12-24 hours, with a lower dosage range recommended for Great Dane breeds due to their sensitivity.",
  },
  {
    id: 2,
    mindosage: 5,
    maxdosage: 20,
    name: "Enrofloxacin (Baytril)",
    tags: ["For Dogs", "Antibiotic"],
    dosageForm: "💊",
    bio: "Enrofloxacin is a broad-spectrum antibiotic used in veterinary medicine to treat bacterial infections in dogs and cats. Administered once daily, with dosage adjustments needed for renal-impaired patients and caution advised for use in young, growing animals.",
  },
];
