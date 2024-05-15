// context.tsx
import React, { createContext, useContext } from "react";

// Define your context
export const MyContext = createContext<any>(null);

// Custom hook to consume the context
export const WeightContext = () => useContext(MyContext);
