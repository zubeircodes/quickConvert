import { Clock, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type RecentConversion } from "@/hooks/useRecentConversions";
import { formatDistanceToNow } from "date-fns";

interface RecentConversionsProps {
  conversions: RecentConversion[];
  onSelect: (conversion: RecentConversion) => void;
  onRemove: (id: string) => void;
}

export function RecentConversions({
  conversions,
  onSelect,
  onRemove,
}: RecentConversionsProps) {
  if (conversions.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <h3 className="text-lg font-semibold">Recent Conversions</h3>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        {conversions.map((conversion) => (
          <Card
            key={conversion.id}
            className="p-4 min-w-[240px] cursor-pointer hover-elevate active-elevate-2 group relative"
            onClick={() => onSelect(conversion)}
            data-testid={`recent-${conversion.id}`}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(conversion.id);
              }}
              data-testid={`button-remove-${conversion.id}`}
            >
              <X className="h-3 w-3" />
            </Button>
            <div className="text-sm font-medium">
              {conversion.value} {conversion.fromSymbol} → {conversion.result}{" "}
              {conversion.toSymbol}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {formatDistanceToNow(conversion.timestamp, { addSuffix: true })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
