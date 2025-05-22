import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const EmployeeTable = () => {
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => {
          const { id, name, department } = employee;
          const displayId = id || index + 1;
          const key = id || index;

          return (
            <tr key={key}>
              <td>{displayId}</td>
              <td>{name}</td>
              <td>{department}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;