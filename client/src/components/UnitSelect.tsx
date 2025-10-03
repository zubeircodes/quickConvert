import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { type Unit } from "@shared/conversions";

interface UnitSelectProps {
  units: Unit[];
  value: Unit | null;
  onValueChange: (unit: Unit) => void;
  placeholder?: string;
  testId?: string;
}

export function UnitSelect({
  units,
  value,
  onValueChange,
  placeholder = "Select unit",
  testId = "unit-select",
}: UnitSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const filteredUnits = units.filter(
    (unit) =>
      unit.name.toLowerCase().includes(search.toLowerCase()) ||
      unit.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 text-sm font-medium"
          data-testid={testId}
        >
          {value ? (
            <span className="flex items-center gap-2">
              <span>{value.name}</span>
              <span className="text-muted-foreground">({value.symbol})</span>
            </span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            ref={inputRef}
            placeholder="Search units..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            data-testid="input-unit-search"
          />
        </div>
        <div className="max-h-64 overflow-auto p-1">
          {filteredUnits.length === 0 && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No units found.
            </div>
          )}
          {filteredUnits.map((unit) => (
            <button
              key={unit.name}
              onClick={() => {
                onValueChange(unit);
                setOpen(false);
                setSearch("");
              }}
              className={cn(
                "relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none hover-elevate",
                value?.name === unit.name && "bg-accent"
              )}
              data-testid={`option-${unit.symbol}`}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value?.name === unit.name ? "opacity-100" : "opacity-0"
                )}
              />
              <span className="flex-1 text-left">{unit.name}</span>
              <span className="text-muted-foreground text-xs">{unit.symbol}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
