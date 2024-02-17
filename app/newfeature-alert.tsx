import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export function AlertNewFeature() {
  return (
    <div className="bg-slate-200 border-2 rounded-md border-slate-500 text-lg inline-block align-middle p-2 m-4 ml-9">
      <h3 className="font-bold italic">Heads up!</h3>
      <p>You can now explore information about all of these medications.</p>
      <p>
        Keep an eye out for the{" "}
        <QuestionMarkCircledIcon className="h-8 w-8 inline-block align-middle border-2 border-slate-300 rounded-md p-1" />{" "}
        icon!
      </p>
    </div>
  );
}
