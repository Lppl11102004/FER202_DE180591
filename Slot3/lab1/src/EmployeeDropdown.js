import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const EmployeeDropdown = () => {
  return (
    <div>
      <label htmlFor="employeeSelect">Select Employee: </label>
      <select id="employeeSelect">
        {employees.map((employee, index) => {
          const { id, name } = employee;
          const key = id || index;
          return (
            <option key={key} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default EmployeeDropdown;