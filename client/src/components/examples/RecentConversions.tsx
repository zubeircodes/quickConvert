import { RecentConversions } from "../RecentConversions";
import { type RecentConversion } from "@/hooks/useRecentConversions";

const mockConversions: RecentConversion[] = [
  {
    id: "1",
    value: "100",
    fromUnit: "Centimeter",
    toUnit: "Inch",
    fromSymbol: "cm",
    toSymbol: "in",
    result: "39.37",
    category: "length",
    timestamp: Date.now() - 120000,
  },
  {
    id: "2",
    value: "5",
    fromUnit: "Kilometer",
    toUnit: "Mile",
    fromSymbol: "km",
    toSymbol: "mi",
    result: "3.107",
    category: "length",
    timestamp: Date.now() - 300000,
  },
];

export default function RecentConversionsExample() {
  const handleSelect = (conversion: RecentConversion) => {
    console.log("Selected:", conversion);
  };

  const handleRemove = (id: string) => {
    console.log("Remove:", id);
  };

  return (
    <RecentConversions
      conversions={mockConversions}
      onSelect={handleSelect}
      onRemove={handleRemove}
    />
  );
}
