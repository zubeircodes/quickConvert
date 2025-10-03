import { ConverterWidget } from "../ConverterWidget";
import { type Unit } from "@shared/conversions";

const mockUnits: Unit[] = [
  { name: "Meter", symbol: "m", toBase: 1, fromBase: 1 },
  { name: "Kilometer", symbol: "km", toBase: 1000, fromBase: 1000 },
  { name: "Centimeter", symbol: "cm", toBase: 0.01, fromBase: 0.01 },
  { name: "Foot", symbol: "ft", toBase: 0.3048, fromBase: 0.3048 },
];

export default function ConverterWidgetExample() {
  return (
    <div className="max-w-4xl mx-auto">
      <ConverterWidget
        units={mockUnits}
        initialFromUnit={mockUnits[0]}
        initialToUnit={mockUnits[3]}
      />
    </div>
  );
}
