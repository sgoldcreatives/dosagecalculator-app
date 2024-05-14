import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { QuestionMarkCircledIcon, Pencil2Icon } from "@radix-ui/react-icons";

export function AlertNewFeature() {
  return (
    <div className="bg-slate-200 border-2 ml-4 mt-2 shadow-md rounded-md border-slate-500 text-xs inline-block align-middle p-2">
      <h3 className="font-bold italic flex">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        {"  "}
        Heads up!
      </h3>
      <p>You can now create and calculate your own custom dosages!</p>
      <p>
        To do so, click on the{" "}
        <Pencil2Icon className="h-6 w-6 inline-block align-middle border-2 border-slate-300 rounded-md p-1" />{" "}
        icon!
      </p>
    </div>
  );
}
