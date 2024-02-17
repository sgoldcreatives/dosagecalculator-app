import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export function AlertNewFeature() {
  return (
    <div className="bg-white border-2 rounded-md border-slate-500 text-lg inline-block align-middle p-2 m-4 ml-9">
      <h3 className="font-bold">Heads up!</h3>
      <p>
        You can now read up about all of these drugs! Look for the{" "}
        <QuestionMarkCircledIcon className="h-4 w-4 inline-block align-middle" />{" "}
        icon!
      </p>
    </div>
  );
}
