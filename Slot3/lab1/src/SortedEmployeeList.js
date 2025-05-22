

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
  { name: "Tom", department: "IT", age: 33 },
  { name: "Aaron", department: "Finance", age: 27 }
];

const SortedEmployeeList = () => {

  const sortedEmployees = [...employees].sort((a, b) => {

    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;


    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Sorted Employee List</h2>
      <ul>
        {sortedEmployees.map((employee, index) => {
          const { id, name, department } = employee;
          const key = id || index;
          return (
            <li key={key}>
              {name} - {department}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortedEmployeeList;