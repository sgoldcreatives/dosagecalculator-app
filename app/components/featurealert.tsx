import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";

export function FeatureAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility of the alert

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setIsVisible(false); // Hide the alert after the dialog is closed
  };

  return (
    <>
      {isVisible && (
        <div className="mb-4">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                onClick={openDialog}
                className="flex items-center p-2 ml-4 text-black bg-yellow-50 border-4 border-yellow-200 rounded-md hover:bg-yellow-200 hover:text-black rotate-alert"
              >
                <span className="font-semibold">⚠️ New Features</span>
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
              <DialogTitle className="text-xl font-bold">
                New Features
              </DialogTitle>
              <DialogDescription className="space-y-4 mt-4 ">
                <p>💊 Click on the switch to calculate pill dosages.</p>
                <p>
                  📊 You can now calculate total pills. Thank you for the idea
                  Diana!
                </p>
              </DialogDescription>
              <button
                onClick={closeDialog}
                className="mt-4 p-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
              >
                Close
              </button>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
