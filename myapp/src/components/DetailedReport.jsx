import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "CUSTOMER NAME",
    selector: (row) => row.name,
  },
  {
    name: "COMPANY",
    selector: (row) => row.company,
  },
  {
    name: "ORDER VALUE",
    selector: (row) => row.value,
  },
  {
    name: "ORDER DATE",
    selector: (row) => row.date,
  },
  {
    name: "STATUS",
    selector: (row) => row.status,
  },
];
const data = [
  {
    name: "John Doe",
    company: "ABC Corp",
    value: "$500",
    date: "2025-04-12",
    status: "Completed",
  },
];

const DetailedReport = () => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        noDataComponent="No Data Available"
      />
    </div>
  );
};

export default DetailedReport;
