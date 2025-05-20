function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "David", age: 22, occupation: "Engineer" }
  ];
  const groups = people.reduce((acc, p) => {
    if (!acc[p.occupation]) acc[p.occupation] = [];
    acc[p.occupation].push(p.age);
    return acc;
  }, {});
  return (
    <div>
      <h2>Average Age by Occupation</h2>
      {Object.entries(groups).map(([occ, ages], idx) => {
        const avg = (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(2);
        return <p key={idx}><strong>{occ}:</strong> {avg}</p>;
      })}
    </div>
  );
}
export default AverageAgeByOccupation;