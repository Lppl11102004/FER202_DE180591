import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
  { name: "Tom", department: "IT", age: 33 },
  { name: "Aaron", department: "Finance", age: 27 }
];

const GroupedEmployeeList = () => {
  
  const grouped = employees.reduce((groups, employee) => {
    const dept = employee.department;
    if (!groups[dept]) {
      groups[dept] = [];
    }
    groups[dept].push(employee);
    return groups;
  }, {}); 


  const departments = Object.entries(grouped); 

  return (
    <div>
      <h2>Employees by Department</h2>
      {departments.map(([department, empList]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {empList.map((employee, index) => {
              const key = employee.id || index;
              return <li key={key}>{employee.name}</li>;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupedEmployeeList;