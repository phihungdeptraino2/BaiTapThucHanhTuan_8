import { useState } from "react";
import "../styles/SidebarStyle.css";
import {
  LayoutDashboard,
  Folder,
  Users,
  PieChart,
  MessageSquare,
  Code,
} from "lucide-react";

const Sidebar = () => {
  const [select, setSelect] = useState(0);

  const navs = [
    { label: "Dashboard", icon: <LayoutDashboard /> },
    { label: "Projects", icon: <Folder /> },
    { label: "Teams", icon: <Users /> },
    { label: "Analytics", icon: <PieChart /> },
    { label: "Messages", icon: <MessageSquare /> },
    { label: "Integrations", icon: <Code /> },
  ];

  return (
    <nav>
      <h2 className="logo">Logo</h2>
      <ul>
        {navs.map((item, index) => (
          <li
            key={index}
            className={select === index ? "active" : ""}
            onClick={() => setSelect(index)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
      <img src="/sidebarimage.png" alt="anh lo go" width="200" />
    </nav>
  );
};

export default Sidebar;
