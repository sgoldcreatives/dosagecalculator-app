import { Button } from "@/components/ui/button";

export function ClearAllButton() {
  const handleReload = () => {
    window.location.reload(); // Reload the page when the button is clicked
  };
  return (
    <div>
      <Button
        className="flex items-center border-2 border-red-300 rounded-md px-4 py-2 bg-red-50 text-red-700
               hover:bg-red-700 hover:text-white shadow-md transition duration-300 ease-in-out"
        onClick={handleReload}
      >
        Clear All
      </Button>
    </div>
  );
}
