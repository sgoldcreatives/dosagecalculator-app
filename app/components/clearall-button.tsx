import { Button } from "@/components/ui/button";

export function ClearAllButton() {
  const handleReload = () => {
    window.location.reload(); // Reload the page when the button is clicked
  };
  return (
    <div>
      <Button variant='destructive' onClick={handleReload}>Clear All</Button>
    </div>
  );
}
