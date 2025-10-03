import { AdPlaceholder } from "../AdPlaceholder";

export default function AdPlaceholderExample() {
  return (
    <div className="space-y-6">
      <AdPlaceholder format="horizontal" />
      <div className="grid grid-cols-2 gap-4">
        <AdPlaceholder format="square" />
        <AdPlaceholder format="square" />
      </div>
      <AdPlaceholder format="vertical" />
    </div>
  );
}
