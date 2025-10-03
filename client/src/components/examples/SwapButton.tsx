import { SwapButton } from "../SwapButton";

export default function SwapButtonExample() {
  const handleSwap = () => {
    console.log("Swap triggered");
  };

  return <SwapButton onSwap={handleSwap} />;
}
