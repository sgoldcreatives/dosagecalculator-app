import { createContext, useContext } from "react";
import { PatientProfile } from "./vetdose";

export const WeightContext = createContext<PatientProfile | undefined>(undefined);

export function usePatientContext() {
    const patient = useContext(WeightContext)

    if (patient === undefined) {
        throw new Error('usePatientContext must be used with a WeightContext')
    }
    return patient;
}