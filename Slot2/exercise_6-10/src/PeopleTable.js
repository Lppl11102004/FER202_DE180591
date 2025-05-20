function PeopleTable() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
  ];
  return (
    <div>
      <h2>People Table</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>Name</th><th>Age</th><th>Occupation</th></tr>
        </thead>
        <tbody>
          {people.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td><td>{p.age}</td><td>{p.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PeopleTable;