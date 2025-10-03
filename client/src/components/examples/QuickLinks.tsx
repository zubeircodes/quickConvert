import { QuickLinks } from "../QuickLinks";

export default function QuickLinksExample() {
  const handleQuickConversion = (from: string, to: string, category: string) => {
    console.log("Quick conversion:", { from, to, category });
  };

  return <QuickLinks onQuickConversion={handleQuickConversion} />;
}
