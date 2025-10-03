import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { popularConversions } from "@shared/conversions";

interface QuickLinksProps {
  onQuickConversion: (fromSymbol: string, toSymbol: string, category: string) => void;
}

const conversionRoutes: Record<string, string> = {
  "cm-in": "/cm-to-inches",
  "in-cm": "/inches-to-cm",
  "kg-lb": "/kg-to-lb",
  "lb-kg": "/lb-to-kg",
  "°C-°F": "/celsius-to-fahrenheit",
  "°F-°C": "/fahrenheit-to-celsius",
  "km-mi": "/km-to-miles",
  "mi-km": "/miles-to-km",
  "m-ft": "/meters-to-feet",
  "ft-m": "/feet-to-meters",
  "L-gal": "/liters-to-gallons",
  "gal-L": "/gallons-to-liters",
};

export function QuickLinks({ onQuickConversion }: QuickLinksProps) {
  const getRoute = (from: string, to: string) => {
    return conversionRoutes[`${from}-${to}`];
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Popular Conversions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularConversions.map((conversion, index) => {
          const route = getRoute(conversion.from, conversion.to);
          
          if (route) {
            return (
              <Link key={index} href={route}>
                <Card
                  className="p-4 cursor-pointer hover-elevate active-elevate-2"
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
              </Link>
            );
          }

          return (
            <Card
              key={index}
              className="p-4 cursor-pointer hover-elevate active-elevate-2"
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
          );
        })}
      </div>
    </div>
  );
}
