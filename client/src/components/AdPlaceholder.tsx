import { Card } from "@/components/ui/card";

interface AdPlaceholderProps {
  format?: "horizontal" | "vertical" | "square";
  className?: string;
}

export function AdPlaceholder({ format = "horizontal", className = "" }: AdPlaceholderProps) {
  const heights = {
    horizontal: "h-24 md:h-32",
    vertical: "h-96",
    square: "h-64",
  };

  return (
    <Card className={`${heights[format]} ${className} bg-muted/30 border-dashed flex items-center justify-center`}>
      <div className="text-center text-muted-foreground text-sm">
        <div className="font-medium">Advertisement</div>
        <div className="text-xs mt-1">Google AdSense</div>
      </div>
    </Card>
  );
}
