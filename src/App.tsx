import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { LoadBalancing } from "./pages/LoadBalancing";
import { Caching } from "./pages/Caching";
import { CapTheorem } from "./pages/CapTheorem";
import { DatabaseSharding } from "./pages/DatabaseSharding";
import { MicroservicesVsMonolith } from "./pages/MicroservicesVsMonolith";
import { MessageQueues } from "./pages/MessageQueues";
import { RateLimiting } from "./pages/RateLimiting";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/load-balancing" element={<LoadBalancing />} />
          <Route path="/caching" element={<Caching />} />
          <Route path="/cap-theorem" element={<CapTheorem />} />
          <Route path="/database-sharding" element={<DatabaseSharding />} />
          <Route
            path="/microservices-vs-monolith"
            element={<MicroservicesVsMonolith />}
          />
          <Route path="/message-queues" element={<MessageQueues />} />
          <Route path="/rate-limiting" element={<RateLimiting />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;