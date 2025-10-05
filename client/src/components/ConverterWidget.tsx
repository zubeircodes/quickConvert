import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UnitSelect } from "./UnitSelect";
import { SwapButton } from "./SwapButton";
import { convertUnits, formatNumber, parseInputValue } from "@/lib/conversion";
import { type Unit } from "@shared/conversions";
import { useDebounce } from "../hooks/use-debounce";

interface ConverterWidgetProps {
  units: Unit[];
  initialFromUnit?: Unit;
  initialToUnit?: Unit;
  onConversion?: (value: string, fromUnit: Unit, toUnit: Unit, result: string) => void;
}

export function ConverterWidget({
  units,
  initialFromUnit,
  initialToUnit,
  onConversion,
}: ConverterWidgetProps) {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromUnit, setFromUnit] = useState<Unit | null>(initialFromUnit || units[0]);
  const [toUnit, setToUnit] = useState<Unit | null>(initialToUnit || units[1]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const debouncedFromValue = useDebounce(fromValue, 300);

  useEffect(() => {
    if (!debouncedFromValue.trim() || !fromUnit || !toUnit) {
      setToValue("");
      setError("");
      return;
    }

    if (!units.includes(fromUnit) || !units.includes(toUnit)) {
      setError("Units must be from the same category!");
      setToValue("");
      return;
    }

    const parsed = parseInputValue(debouncedFromValue);
    
    if (parsed === null) {
      setError("Please provide a valid number!");
      setToValue("");
      return;
    }

    setError("");
    const result = convertUnits(parsed, fromUnit, toUnit);
    const formatted = formatNumber(result);
    setToValue(formatted);

    if (onConversion && formatted !== "Error") {
      onConversion(debouncedFromValue, fromUnit, toUnit, formatted);
    }
  }, [debouncedFromValue, fromUnit, toUnit]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  };

  const handleFromUnitChange = (unit: Unit) => {
    if (units.includes(unit)) {
      setFromUnit(unit);
    }
  };

  const handleToUnitChange = (unit: Unit) => {
    if (units.includes(unit)) {
      setToUnit(unit);
    }
  };

  const handleCopy = async () => {
    if (toValue) {
      await navigator.clipboard.writeText(toValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="p-8 md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:gap-6">
        <div className="space-y-4">
          <Label htmlFor="from-value" className="text-sm font-medium uppercase tracking-wide">
            From
          </Label>
          <Input
            id="from-value"
            type="text"
            placeholder="Enter value"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="h-14 text-2xl"
            data-testid="input-from-value"
            autoFocus
          />
          <UnitSelect
            units={units}
            value={fromUnit}
            onValueChange={handleFromUnitChange}
            placeholder="Select unit"
            testId="select-from-unit"
          />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <SwapButton onSwap={handleSwap} />
        </div>

        <div className="md:hidden flex justify-center -my-4">
          <SwapButton onSwap={handleSwap} />
        </div>

        <div className="space-y-4">
          <Label htmlFor="to-value" className="text-sm font-medium uppercase tracking-wide">
            To
          </Label>
          <div className="relative">
            <Input
              id="to-value"
              type="text"
              placeholder="Result"
              value={toValue}
              readOnly
              className="h-14 text-2xl bg-muted/50 pr-12"
              data-testid="input-to-value"
            />
            {toValue && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className="absolute right-1 top-1 h-12 w-12"
                data-testid="button-copy"
                aria-label="Copy result"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-chart-2" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
          <UnitSelect
            units={units}
            value={toUnit}
            onValueChange={handleToUnitChange}
            placeholder="Select unit"
            testId="select-to-unit"
          />
        </div>
      </div>

      {error && (
        <div className="mt-6 text-sm text-destructive text-center" data-testid="text-error">
          {error}
        </div>
      )}

      {toValue && !error && fromValue && (
        <div className="mt-6 text-center text-sm text-muted-foreground" data-testid="text-result">
          <span className="font-medium text-foreground">{fromValue}</span>{" "}
          {fromUnit?.symbol} ={" "}
          <span className="font-medium text-foreground">{toValue}</span>{" "}
          {toUnit?.symbol}
        </div>
      )}
    </Card>
  );
}
