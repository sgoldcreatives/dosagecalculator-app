"use client";

export interface PlumbsDrugTable {
  id: number;
  name: string;
  doseDog: string;
  doseCat: string;
  drugType: drugType;
}

export type drugType =
  | "NSAID"
  | "Sedation"
  | "Antibiotic"
  | "Opioid"
  | "Steroid";

export const drugs: PlumbsDrugTable[] = [
  {
    id: 1,
    name: "Cefpodoxime Proxetil",
    doseDog:
      "For susceptible skin infections: 5 to 10 mg/kg PO once daily. Should be administered for 5 to 7 days or 2 to 3 days beyond cessation of clinical signs, up to a maximum of 28 days",
    doseCat:
      "For susceptible skin and soft tissue infections: 5 mg/kg PO q12h or 10 mg/kg PO once daily",
    drugType: "Antibiotic",
    },
    {
        id: 2,
        name: "Carprofen",
        doseDog: "4.4 mg/kg PO; may be given once daily or divided and given as 2.2. mg/kg twice daily; round dose to nearest half caplet increment. ",
        doseCat: "NOT RECOMMENDED",
        drugType: "NSAID"
    }
];
