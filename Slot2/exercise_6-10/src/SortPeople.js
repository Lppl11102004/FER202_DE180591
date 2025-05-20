function SortPeople() {
  const people = [
    { name: "Charlie", age: 30, occupation: "Teacher" },
    { name: "Bob", age: 17, occupation: "Student" },
    { name: "Alice", age: 25, occupation: "Engineer" },
  ];
  const sorted = [...people].sort((a, b) => {
    if (a.occupation !== b.occupation) return a.occupation.localeCompare(b.occupation);
    return a.age - b.age;
  });
  return (
    <div>
      <h2>Sorted People</h2>
      {sorted.map((p, index) => (
        <p key={index}>{p.occupation} - {p.name} - {p.age}</p>
      ))}
    </div>
  );
}
export default SortPeople;
