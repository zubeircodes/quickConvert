import { categories, type Unit } from "@shared/conversions";

function safeEvaluateFormula(formula: string | number, value: number): number {
  if (typeof formula === "number") {
    return value * formula;
  }

  const v = value;
  
  try {
    const sanitized = formula.replace(/v/g, String(v));
    
    const allowedChars = /^[\d\s+\-*/().]+$/;
    if (!allowedChars.test(sanitized)) {
      throw new Error("Invalid formula");
    }
    
    return Function('"use strict"; return (' + sanitized + ')')();
  } catch (e) {
    console.error("Formula evaluation error:", e);
    return 0;
  }
}

export function convertUnits(
  value: number,
  fromUnit: Unit,
  toUnit: Unit
): number {
  const baseValue = safeEvaluateFormula(fromUnit.toBase, value);
  const result = safeEvaluateFormula(toUnit.fromBase, baseValue);
  return result;
}

export function formatNumber(num: number): string {
  if (isNaN(num) || !isFinite(num)) {
    return "Error";
  }

  const absNum = Math.abs(num);
  
  if (absNum >= 1e12 || (absNum < 1e-6 && absNum > 0)) {
    const exp = num.toExponential(11);
    const [mantissa, exponent] = exp.split('e');
    const cleanMantissa = parseFloat(mantissa).toString();
    return `${cleanMantissa}E${exponent}`;
  }

  const str = num.toFixed(12);
  const [integer, decimal] = str.split('.');
  
  if (!decimal) return integer;
  
  const trimmed = decimal.replace(/0+$/, '');
  
  if (trimmed === '') return integer;
  
  return `${integer}.${trimmed}`;
}

export function parseInputValue(input: string): number | null {
  const cleaned = input.replace(/[\s,]/g, '');
  
  if (cleaned.includes('/')) {
    const parts = cleaned.split('/');
    if (parts.length === 2) {
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
        return numerator / denominator;
      }
    }
  }
  
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

export function findUnitBySymbolOrName(search: string): { unit: Unit; category: string } | null {
  const searchLower = search.toLowerCase().trim();
  
  for (const category of categories) {
    for (const unit of category.units) {
      if (
        unit.symbol.toLowerCase() === searchLower ||
        unit.name.toLowerCase() === searchLower
      ) {
        return { unit, category: category.id };
      }
    }
  }
  
  return null;
}

export function searchUnits(query: string): Array<{ unit: Unit; category: string; categoryName: string }> {
  const queryLower = query.toLowerCase().trim();
  if (!queryLower) return [];
  
  const results: Array<{ unit: Unit; category: string; categoryName: string }> = [];
  
  for (const category of categories) {
    for (const unit of category.units) {
      if (
        unit.name.toLowerCase().includes(queryLower) ||
        unit.symbol.toLowerCase().includes(queryLower)
      ) {
        results.push({
          unit,
          category: category.id,
          categoryName: category.name,
        });
      }
    }
  }
  
  return results;
}
