import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { popularConversions } from "@shared/conversions";

interface QuickLinksProps {
  onQuickConversion: (fromSymbol: string, toSymbol: string, category: string) => void;
}

export function QuickLinks({ onQuickConversion }: QuickLinksProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Popular Conversions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularConversions.map((conversion, index) => (
          <Card
            key={index}
            className="p-4 cursor-pointer hover-elevate active-elevate-2 transition-transform hover:-translate-y-1"
            onClick={() => onQuickConversion(conversion.from, conversion.to, conversion.category)}
            data-testid={`quick-link-${index}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium truncate">
                {conversion.from} → {conversion.to}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {conversion.fromUnit} to {conversion.toUnit}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
