function PersonDetails() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" }
  ];

  return (
    <div>
      <h2>Person Details</h2>
      {people.map((person, index) => (
        <div key={index}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Occupation: {person.occupation}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PersonDetails;