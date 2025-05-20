function OldestYoungest() {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 22 }
  ];
  const oldest = people.reduce((max, p) => (p.age > max.age ? p : max), people[0]);
  const youngest = people.reduce((min, p) => (p.age < min.age ? p : min), people[0]);
  return (
    <div>
      <h2>Oldest and Youngest</h2>
      <p><strong>Oldest:</strong> {oldest.name} ({oldest.age})</p>
      <p><strong>Youngest:</strong> {youngest.name} ({youngest.age})</p>
    </div>
  );
}
export default OldestYoungest;