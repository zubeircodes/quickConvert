import { useState } from "react";
import { UnitSelect } from "../UnitSelect";
import { type Unit } from "@shared/conversions";

const mockUnits: Unit[] = [
  { name: "Meter", symbol: "m", toBase: 1, fromBase: 1 },
  { name: "Kilometer", symbol: "km", toBase: 1000, fromBase: 1000 },
  { name: "Centimeter", symbol: "cm", toBase: 0.01, fromBase: 0.01 },
  { name: "Inch", symbol: "in", toBase: 0.0254, fromBase: 0.0254 },
  { name: "Foot", symbol: "ft", toBase: 0.3048, fromBase: 0.3048 },
];

export default function UnitSelectExample() {
  const [value, setValue] = useState<Unit | null>(mockUnits[0]);

  return (
    <div className="w-full max-w-sm">
      <UnitSelect
        units={mockUnits}
        value={value}
        onValueChange={setValue}
        placeholder="Select a unit"
      />
    </div>
  );
}
