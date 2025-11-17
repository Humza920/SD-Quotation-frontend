import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

// Import your page components (yeh tum bana lena baad mein)
import Dashboard from "./pages/Dashboard";
import CreateQuotation from "./pages/CreateQuotation";
import ClientList from "./pages/ClientList";
import Templates from "./pages/Templates";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        
     
        <main className="flex-1 ml-[255px] p-6 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/create-quotation" element={<CreateQuotation />} />
            <Route path="/dashboard/client-list" element={<ClientList />} />
            <Route path="/dashboard/templates" element={<Templates />} />
            <Route path="/dashboard/user-management" element={<UserManagement />} />
            
            {/* Default route - redirect to dashboard */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;