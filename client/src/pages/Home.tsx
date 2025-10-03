import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ConverterWidget } from "@/components/ConverterWidget";
import { QuickLinks } from "@/components/QuickLinks";
import { RecentConversions } from "@/components/RecentConversions";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { categories, type Unit } from "@shared/conversions";
import { findUnitBySymbolOrName } from "@/lib/conversion";
import { useRecentConversions } from "@/hooks/useRecentConversions";

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState<Unit | null>(null);
  const [toUnit, setToUnit] = useState<Unit | null>(null);
  const { recent, addRecent, removeRecent } = useRecentConversions();

  const currentCategory = categories.find((c) => c.id === activeCategory);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromSymbol = params.get("from");
    const toSymbol = params.get("to");
    const value = params.get("value");

    if (fromSymbol && toSymbol) {
      const fromResult = findUnitBySymbolOrName(fromSymbol);
      const toResult = findUnitBySymbolOrName(toSymbol);

      if (fromResult && toResult && fromResult.category === toResult.category) {
        setActiveCategory(fromResult.category);
        setFromUnit(fromResult.unit);
        setToUnit(toResult.unit);

        if (value) {
          const input = document.querySelector<HTMLInputElement>('[data-testid="input-from-value"]');
          if (input) {
            input.value = value;
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    if (currentCategory) {
      const validFromUnit = fromUnit && currentCategory.units.includes(fromUnit) 
        ? fromUnit 
        : currentCategory.units[0];
      const validToUnit = toUnit && currentCategory.units.includes(toUnit)
        ? toUnit
        : currentCategory.units[1] || currentCategory.units[0];
      
      if (validFromUnit !== fromUnit || validToUnit !== toUnit) {
        setFromUnit(validFromUnit);
        setToUnit(validToUnit);
      }
    }
  }, [currentCategory, fromUnit, toUnit]);

  const handleConversion = useCallback(
    (value: string, from: Unit, to: Unit, result: string) => {
      if (value && result && result !== "Error") {
        addRecent({
          value,
          fromUnit: from.name,
          toUnit: to.name,
          fromSymbol: from.symbol,
          toSymbol: to.symbol,
          result,
          category: activeCategory,
        });

        const params = new URLSearchParams();
        params.set("from", from.symbol);
        params.set("to", to.symbol);
        params.set("value", value);
        window.history.replaceState({}, "", `?${params.toString()}`);
      }
    },
    [activeCategory, addRecent]
  );

  const handleQuickConversion = (fromSymbol: string, toSymbol: string, category: string) => {
    const fromResult = findUnitBySymbolOrName(fromSymbol);
    const toResult = findUnitBySymbolOrName(toSymbol);

    if (fromResult && toResult) {
      setActiveCategory(category);
      setTimeout(() => {
        setFromUnit(fromResult.unit);
        setToUnit(toResult.unit);
      }, 0);
    }
  };

  const handleRecentSelect = (conversion: typeof recent[0]) => {
    const fromResult = findUnitBySymbolOrName(conversion.fromSymbol);
    const toResult = findUnitBySymbolOrName(conversion.toSymbol);

    if (fromResult && toResult) {
      setActiveCategory(conversion.category);
      setTimeout(() => {
        setFromUnit(fromResult.unit);
        setToUnit(toResult.unit);
        
        const input = document.querySelector<HTMLInputElement>('[data-testid="input-from-value"]');
        if (input) {
          input.value = conversion.value;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Unit Converter</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl space-y-12">
        <AdPlaceholder format="horizontal" />

        <div className="space-y-6">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {currentCategory && fromUnit && toUnit && 
           currentCategory.units.includes(fromUnit) && 
           currentCategory.units.includes(toUnit) && (
            <ConverterWidget
              key={activeCategory}
              units={currentCategory.units}
              initialFromUnit={fromUnit}
              initialToUnit={toUnit}
              onConversion={handleConversion}
            />
          )}
        </div>

        <AdPlaceholder format="horizontal" />

        {recent.length > 0 && (
          <RecentConversions
            conversions={recent}
            onSelect={handleRecentSelect}
            onRemove={removeRecent}
          />
        )}

        <QuickLinks onQuickConversion={handleQuickConversion} />

        <AdPlaceholder format="horizontal" />
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Fast, accurate unit conversions for everyday use</p>
        </div>
      </footer>
    </div>
  );
}
