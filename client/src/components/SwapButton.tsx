import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwapButtonProps {
  onSwap: () => void;
}

export function SwapButton({ onSwap }: SwapButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onSwap}
      className="h-12 w-12 rounded-full transition-transform active:rotate-180 duration-300"
      data-testid="button-swap"
      aria-label="Swap units"
    >
      <ArrowLeftRight className="h-5 w-5" />
    </Button>
  );
}
