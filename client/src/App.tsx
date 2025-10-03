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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cm-to-inches" component={CmToIn} />
      <Route path="/inches-to-cm" component={InToCm} />
      <Route path="/kg-to-lb" component={KgToLb} />
      <Route path="/lb-to-kg" component={LbToKg} />
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
