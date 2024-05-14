import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DisclaimerBox() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="flex items-center border-2 border-orange-300 rounded-md px-4 py-2 bg-orange-50 text-orange-500
               hover:bg-orange-500 hover:text-white transition shadow-md duration-300 ease-in-out"
        >
          Dosage Disclaimer
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-orange-500 border-4">
        <AlertDialogHeader>
          <AlertDialogTitle>Disclaimer:</AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-slate-800">
            These calculations are intended for use under veterinary
            supervision. Many of these computations are based on lean body mass.
            In cases where a pet is overweight, it is advisable to reduce the
            calculated dose to accommodate for adipose tissue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="flex items-center border-2 border-orange-300 rounded-md px-4 py-2 bg-orange-50 text-orange-500
               hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
          >
            Agree
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
