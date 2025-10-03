import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConverterWidget } from "@/components/ConverterWidget";
import { QuickLinks } from "@/components/QuickLinks";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { categories, type Unit } from "@shared/conversions";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConversionPageProps {
  fromSymbol: string;
  toSymbol: string;
  title: string;
  description: string;
  pageTitle: string;
}

export default function ConversionPage({
  fromSymbol,
  toSymbol,
  title,
  description,
  pageTitle,
}: ConversionPageProps) {
  const [fromUnit, setFromUnit] = useState<Unit | null>(null);
  const [toUnit, setToUnit] = useState<Unit | null>(null);
  const [categoryUnits, setCategoryUnits] = useState<Unit[]>([]);

  useEffect(() => {
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    let foundFrom: Unit | null = null;
    let foundTo: Unit | null = null;
    let foundCategory: Unit[] = [];

    for (const category of categories) {
      const from = category.units.find((u) => u.symbol === fromSymbol);
      const to = category.units.find((u) => u.symbol === toSymbol);
      
      if (from && to) {
        foundFrom = from;
        foundTo = to;
        foundCategory = category.units;
        break;
      }
    }

    setFromUnit(foundFrom);
    setToUnit(foundTo);
    setCategoryUnits(foundCategory);
  }, [fromSymbol, toSymbol, description, pageTitle]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back-home">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Quick Convert</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-page-title">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-page-description">
            {description}
          </p>
        </div>

        <AdPlaceholder format="horizontal" />

        {fromUnit && toUnit && categoryUnits.length > 0 && (
          <div className="space-y-6">
            <ConverterWidget
              units={categoryUnits}
              initialFromUnit={fromUnit}
              initialToUnit={toUnit}
              onConversion={() => {}}
            />
          </div>
        )}

        <AdPlaceholder format="horizontal" />

        <div className="prose prose-sm max-w-none dark:prose-invert">
          <h3>About This Conversion</h3>
          <p>
            Use our free online converter to quickly convert {fromUnit?.name.toLowerCase()} to{" "}
            {toUnit?.name.toLowerCase()}. Simply enter a value and get instant results.
          </p>
          <p>
            This converter provides accurate {fromUnit?.name} to {toUnit?.name} conversions
            for everyday use, whether you're cooking, working on a project, or traveling.
          </p>
        </div>

        <div className="text-center">
          <Link href="/">
            <Button variant="outline" data-testid="button-more-conversions">
              View All Conversions
            </Button>
          </Link>
        </div>

        <QuickLinks onQuickConversion={() => {}} />

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
