function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 22, occupation: "Engineer" }
  ];
  const groups = people.reduce((acc, p) => {
    if (!acc[p.occupation]) acc[p.occupation] = [];
    acc[p.occupation].push(p);
    return acc;
  }, {});
  return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.entries(groups).map(([occupation, group], index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          {group.map((p, i) => (
            <p key={i}>{p.name} - {p.age}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
export default GroupByOccupation;