import React, { useState } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import './dashboard.css';
const DashBoard = () => {
  const [studentsData, setStudentsData] = useState([]);

  // Function to handle file upload and conversion to JSON
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event.target.result;
      const workbook = XLSX.read(fileData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setStudentsData(data);
      localStorage.setItem('StudentData', JSON.stringify(data));
    };
    reader.readAsBinaryString(file);
  };

  // Function to handle export of JSON data
  const handleExport = () => {
    const data = localStorage.getItem('StudentData');
    const fileData = new Blob([data], { type: 'application/json' });
    FileSaver.saveAs(fileData, 'student_data.json');
  };

  return (
    <div >
      <div className='dashboard'>
      <div>
      <h3>Students</h3>
      <p>List of all the students in database</p>
      </div>
      <div className='buttons'>
      <label htmlFor="file-upload">Import</label>
            <input
              id="file-upload"
              type="file"
              accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
      <button className = "btn btn-dark  btn-block text-center" onClick={handleExport}> Export as CSV</button>
      </div>
      </div>
      <table className='table align-middle mb-0 bg-white'>

        <thead className='bg-light'>
          <tr>
            <th  scope="col">Student Name</th>
            <th  scope="col">Roll Number</th>
            <th  scope="col">Address</th>
            <th  scope="col">Institute</th>
            <th  scope="col">Course</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student, index) => (
            <tr key={index}>
              <td>{student[0]}</td>
              <td>{student[1]}</td>
              <td>{student[2]}</td>
              <td>{student[3]}</td>
              <td>{student[4]}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
