import avatar1 from "../assets/avatar1.png";
import { Pencil } from "lucide-react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import "../styles/DetailedReportStyle.css";

const columns = [
  {
    name: "",
    cell: () => <input type="checkbox" />,
    width: "60px",
  },
  {
    name: "CUSTOMER NAME",
    selector: (row) => row.name,
    cell: (row) => (
      <div className="customer-info">
        <img src={avatar1} alt={avatar1} className="avatar" />
        <span className="customer-name">{row.name}</span>
      </div>
    ),
    sortable: true,
  },
  {
    name: "COMPANY",
    selector: (row) => row.company,
    sortable: true,
  },
  {
    name: "ORDER VALUE",
    selector: (row) => row.value,
    sortable: true,
  },
  {
    name: "ORDER DATE",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "STATUS",
    selector: (row) => row.status,
    cell: (row) => (
      <span
        className={`status-badge ${row.status.toLowerCase().replace(" ", "-")}`}
      >
        {row.status}
      </span>
    ),
    sortable: true,
  },
];

const DetailedReport = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/report")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <div className="table-wrapper">
      <DataTable columns={columns} data={data} pagination highlightOnHover />
    </div>
  );
};
export default DetailedReport;
