import React, { useState } from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { id: 4, name: "Ann", department: "Finance", age: 22 },
  { id: 5, name: "Elisabeth", department: "HR", age: 16 },
  { id: 6, name: "Tom", department: "IT", age: 33 }
];

const EmployeeSearch = () => {
  const [query, setQuery] = useState("");

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee by Name</h2>
      <input
        type="text"
        placeholder="Enter employee name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.id}>
            {employee.name} – {employee.department}
          </li>
        ))}
        {filteredEmployees.length === 0 && query && (
          <li>No employee found.</li>
        )}
      </ul>
    </div>
  );
};

export default EmployeeSearch;

