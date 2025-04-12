import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverView from "./components/OverView.jsx";
import DetailedReport from "./components/DetailedReport.jsx";
import { Route, Routes } from "react-router-dom";
import Project from "./components/Project.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Teams from "./components/Teams.jsx";
import Analytics from "./components/Analytics.jsx";
import Messages from "./components/Messages.jsx";
import Integrations from "./components/Integrations.jsx";
function App() {
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        {/* <OverView />
        <DetailedReport /> */}

        <Routes>
          <Route>
            <Route path="/" element={<DashBoard></DashBoard>} />
            <Route path="/projects" element={<Project></Project>} />
            <Route path="/teams" element={<Teams></Teams>} />
            <Route path="/messages" element={<Messages></Messages>} />
            <Route path="/analytics" element={<Analytics></Analytics>} />
            <Route
              path="/integrations"
              element={<Integrations> </Integrations>}
            />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
