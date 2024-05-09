import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckboxReactHookFormMultiple } from "./checkbox-data";

export function DialogBox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto bg-violet-100 border-2 border-violet-300"
        >
          Edit Tag Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-slate-500">
            Hi! I don&apos;t do anything yet, but I will....
          </DialogTitle>
          <DialogTitle>Edit Tag Filters</DialogTitle>
          <DialogDescription>
            Choose which tags to show in the table. Click submit when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CheckboxReactHookFormMultiple />
        </div>
      </DialogContent>
    </Dialog>
  );
}
