import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/home/home";
import "./index.css"


function Router() {
  return (
    
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    
  );
}

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <Router />
      <div className="simbolo-girando"></div>
    </QueryClientProvider>
  );
}

export default App;
