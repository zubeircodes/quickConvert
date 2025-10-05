import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CmToIn from "@/pages/CmToIn";
import InToCm from "@/pages/InToCm";
import KgToLb from "@/pages/KgToLb";
import LbToKg from "@/pages/LbToKg";
import CToF from "@/pages/CToF";
import FToC from "@/pages/FToC";
import KmToMi from "@/pages/KmToMi";
import MiToKm from "@/pages/MiToKm";
import MToFt from "@/pages/MToFt";
import FtToM from "@/pages/FtToM";
import LToGal from "@/pages/LToGal";
import GalToL from "@/pages/GalToL";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cm-to-inches" component={CmToIn} />
      <Route path="/inches-to-cm" component={InToCm} />
      <Route path="/kg-to-lb" component={KgToLb} />
      <Route path="/lb-to-kg" component={LbToKg} />
      <Route path="/celsius-to-fahrenheit" component={CToF} />
      <Route path="/fahrenheit-to-celsius" component={FToC} />
      <Route path="/km-to-miles" component={KmToMi} />
      <Route path="/miles-to-km" component={MiToKm} />
      <Route path="/meters-to-feet" component={MToFt} />
      <Route path="/feet-to-meters" component={FtToM} />
      <Route path="/liters-to-gallons" component={LToGal} />
      <Route path="/gallons-to-liters" component={GalToL} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
