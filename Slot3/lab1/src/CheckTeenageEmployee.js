import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
  { name: "Tom", department: "IT", age: 33 }
];

const CheckTeenageEmployee = () => {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h2>Teenage Employee Check</h2>
      <p>Is there any teenage employee (age 10-20)? {isTeenager.toString()}</p>
    </div>
  );
};

export default CheckTeenageEmployee;