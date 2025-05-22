import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const EmployeeList = () => {
  return (
    <ul>
      {employees.map((employee, index) => {
        
        const { id, name, department } = employee;

        const key = id || index;

        return (
          <li key={key}>
            {name} - {department}
          </li>
        );
      })}
    </ul>
  );
};

export default EmployeeList;