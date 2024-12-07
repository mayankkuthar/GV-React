import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

const Configurations = () => {
  // Initial data for the sheets
  const initialData = {
    Survey_Config: [
      { id: 1, surveyType: "Type A", referenceName: "Ref A", folder: "Folder A", year: 2022, fileName: "File A", sheetName: "Sheet A", execute: "Yes" },
      { id: 2, surveyType: "Type B", referenceName: "Ref B", folder: "Folder B", year: 2023, fileName: "File B", sheetName: "Sheet B", execute: "No" },
    ],
    Dataset_A: Array(35)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        datasetColumn: `Column ${index + 1}`,
        metaDataTable: `Table ${index + 1}`,
        metaDataColumn: `Column ${index + 1}`,
        granularity: `Granularity ${index + 1}`,
        metaDataType: `Type ${index + 1}`,
        mapping: `Mapping ${index + 1}`,
      })),
    Dataset_B: Array(70)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        datasetColumn: `Column ${index + 1}`,
        metaDataTable: `Table ${index + 1}`,
        metaDataColumn: `Column ${index + 1}`,
        granularity: `Granularity ${index + 1}`,
        metaDataType: `Type ${index + 1}`,
        mapping: `Mapping ${index + 1}`,
      })),
  };

  const [activeSheet, setActiveSheet] = useState("Survey_Config");
  const [data, setData] = useState(() => {
    // Load data from localStorage or initialize with default
    const storedData = localStorage.getItem("sheetData");
    return storedData ? JSON.parse(storedData) : initialData;
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sheetData", JSON.stringify(data));
  }, [data]);

  const handleEdit = (sheet, rowId, key, value) => {
    const updatedSheet = data[sheet].map((row) =>
      row.id === rowId ? { ...row, [key]: value } : row
    );
    setData({ ...data, [sheet]: updatedSheet });
  };

  const getActiveSheetData = () => data[activeSheet] || [];

  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Breadcrumb pageName="Configurations" />
        <div className="tabs text-black dark:text-white">
          {Object.keys(data).map((sheet) => (
            <button
              key={sheet}
              onClick={() => setActiveSheet(sheet)}
              className={sheet === activeSheet ? "active" : ""}
            >
              {sheet.replace("_", " ")}
            </button>
          ))}
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {Object.keys(getActiveSheetData()[0] || {}).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getActiveSheetData().map((row) => (
                <tr key={row.id}>
                  {Object.entries(row).map(([key, value]) => (
                    <td key={key}>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleEdit(activeSheet, row.id, key, e.target.value)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>
        {`
        /* Tabs Styling */
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.tabs button {
  background: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin: 0 8px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  color: black; /* Default color */
}

.tabs button.active {
  background: rgb(255, 107, 70);
  color: white; /* White text for the active tab */
  border-color: rgb(255, 87, 50);
}

/* Table Styling */
.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  font-family: "Popins", sans-serif;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  font-weight: bold;
  background: none; /* Removed background color */
}

td input {
  width: 100%;
  border: none;
  padding: 8px;
  background-color: transparent;
  font-size: 14px;
}

td input:focus {
  outline: 2px solid rgb(255, 107, 70);
}
        `}
      </style>
    </>
  );
};

export default Configurations;
