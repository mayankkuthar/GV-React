import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Logs: React.FC = () => {
  const [logs, setLogs] = useState<
  { }[]
>([]);

// Fetch logs from local storage
const fetchLogsFromLocalStorage = () => {
  const storedLogs = localStorage.getItem('logs');
  if (storedLogs) {
    setLogs(JSON.parse(storedLogs));
  } else {
    setLogs(JSON.parse("{}"));
  }
};

useEffect(() => {
  fetchLogsFromLocalStorage();
}, []);

  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Breadcrumb pageName="Logs" />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Block Name</th>
                <th>Error Log</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td style={{ width: '20%' }}>{log.dataset}</td>
                  <td style={{ width: '20%' }}>{log.block}</td>
                  <td style={{ width: '60%' }}>{log.error}</td>
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

export default Logs;
