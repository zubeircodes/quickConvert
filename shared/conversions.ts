export interface Unit {
  name: string;
  symbol: string;
  toBase: number | string;
  fromBase: number | string;
}

export interface Category {
  id: string;
  name: string;
  baseUnit: string;
  units: Unit[];
}

export const categories: Category[] = [
  {
    id: "length",
    name: "Length",
    baseUnit: "Meter",
    units: [
      { name: "Meter", symbol: "m", toBase: 1, fromBase: 1 },
      { name: "Kilometer", symbol: "km", toBase: 1000, fromBase: 1/1000 },
      { name: "Centimeter", symbol: "cm", toBase: 0.01, fromBase: 100 },
      { name: "Millimeter", symbol: "mm", toBase: 0.001, fromBase: 1000 },
      { name: "Mile", symbol: "mi", toBase: 1609.344, fromBase: 1/1609.344 },
      { name: "Yard", symbol: "yd", toBase: 0.9144, fromBase: 1/0.9144 },
      { name: "Foot", symbol: "ft", toBase: 0.3048, fromBase: 1/0.3048 },
      { name: "Inch", symbol: "in", toBase: 0.0254, fromBase: 1/0.0254 },
    ],
  },
  {
    id: "weight",
    name: "Weight",
    baseUnit: "Kilogram",
    units: [
      { name: "Kilogram", symbol: "kg", toBase: 1, fromBase: 1 },
      { name: "Gram", symbol: "g", toBase: 0.001, fromBase: 1000 },
      { name: "Milligram", symbol: "mg", toBase: 0.000001, fromBase: 1000000 },
      { name: "Metric Ton", symbol: "t", toBase: 1000, fromBase: 0.001 },
      { name: "Pound", symbol: "lb", toBase: 0.453592, fromBase: 2.20462 },
      { name: "Ounce", symbol: "oz", toBase: 0.0283495, fromBase: 35.274 },
    ],
  },
  {
    id: "temperature",
    name: "Temperature",
    baseUnit: "Celsius",
    units: [
      { name: "Celsius", symbol: "°C", toBase: "v", fromBase: "v" },
      { name: "Fahrenheit", symbol: "°F", toBase: "(v - 32) * 5 / 9", fromBase: "(v * 9 / 5) + 32" },
      { name: "Kelvin", symbol: "K", toBase: "v - 273.15", fromBase: "v + 273.15" },
    ],
  },
  {
    id: "volume",
    name: "Volume",
    baseUnit: "Cubic Meter",
    units: [
      { name: "Cubic Meter", symbol: "m³", toBase: 1, fromBase: 1 },
      { name: "Liter", symbol: "L", toBase: 0.001, fromBase: 1000 },
      { name: "Milliliter", symbol: "mL", toBase: 0.000001, fromBase: 1000000 },
      { name: "Gallon (US)", symbol: "gal", toBase: 0.00378541, fromBase: 264.172 },
      { name: "Quart (US)", symbol: "qt", toBase: 0.000946353, fromBase: 1056.69 },
      { name: "Pint (US)", symbol: "pt", toBase: 0.000473176, fromBase: 2113.38 },
      { name: "Cup (US)", symbol: "cup", toBase: 0.000236588, fromBase: 4226.75 },
      { name: "Fluid Ounce (US)", symbol: "fl oz", toBase: 0.0000295735, fromBase: 33814 },
    ],
  },
  {
    id: "area",
    name: "Area",
    baseUnit: "Square Meter",
    units: [
      { name: "Square Meter", symbol: "m²", toBase: 1, fromBase: 1 },
      { name: "Square Kilometer", symbol: "km²", toBase: 1000000, fromBase: 0.000001 },
      { name: "Square Centimeter", symbol: "cm²", toBase: 0.0001, fromBase: 10000 },
      { name: "Hectare", symbol: "ha", toBase: 10000, fromBase: 0.0001 },
      { name: "Square Mile", symbol: "mi²", toBase: 2589988.11, fromBase: 1/2589988.11 },
      { name: "Square Yard", symbol: "yd²", toBase: 0.836127, fromBase: 1/0.836127 },
      { name: "Square Foot", symbol: "ft²", toBase: 0.092903, fromBase: 1/0.092903 },
      { name: "Acre", symbol: "ac", toBase: 4046.86, fromBase: 1/4046.86 },
    ],
  },
  {
    id: "time",
    name: "Time",
    baseUnit: "Second",
    units: [
      { name: "Second", symbol: "s", toBase: 1, fromBase: 1 },
      { name: "Millisecond", symbol: "ms", toBase: 0.001, fromBase: 1000 },
      { name: "Minute", symbol: "min", toBase: 60, fromBase: 1/60 },
      { name: "Hour", symbol: "hr", toBase: 3600, fromBase: 1/3600 },
      { name: "Day", symbol: "day", toBase: 86400, fromBase: 1/86400 },
      { name: "Week", symbol: "wk", toBase: 604800, fromBase: 1/604800 },
      { name: "Month", symbol: "mo", toBase: 2628000, fromBase: 1/2628000 },
      { name: "Year", symbol: "yr", toBase: 31536000, fromBase: 1/31536000 },
    ],
  },
];

export const popularConversions = [
  { from: "cm", to: "in", fromUnit: "Centimeter", toUnit: "Inch", category: "length" },
  { from: "in", to: "cm", fromUnit: "Inch", toUnit: "Centimeter", category: "length" },
  { from: "kg", to: "lb", fromUnit: "Kilogram", toUnit: "Pound", category: "weight" },
  { from: "lb", to: "kg", fromUnit: "Pound", toUnit: "Kilogram", category: "weight" },
  { from: "°C", to: "°F", fromUnit: "Celsius", toUnit: "Fahrenheit", category: "temperature" },
  { from: "°F", to: "°C", fromUnit: "Fahrenheit", toUnit: "Celsius", category: "temperature" },
  { from: "km", to: "mi", fromUnit: "Kilometer", toUnit: "Mile", category: "length" },
  { from: "mi", to: "km", fromUnit: "Mile", toUnit: "Kilometer", category: "length" },
  { from: "m", to: "ft", fromUnit: "Meter", toUnit: "Foot", category: "length" },
  { from: "ft", to: "m", fromUnit: "Foot", toUnit: "Meter", category: "length" },
  { from: "L", to: "gal", fromUnit: "Liter", toUnit: "Gallon (US)", category: "volume" },
  { from: "gal", to: "L", fromUnit: "Gallon (US)", toUnit: "Liter", category: "volume" },
];
