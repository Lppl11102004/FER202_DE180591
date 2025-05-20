function FirstTeenager() {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 15 },
  ];
  const teen = people.find(p => p.age >= 13 && p.age <= 19);
  return (
    <div>
      <h2>First Teenager</h2>
      {teen ? <p>{teen.name} is a teenager</p> : <p>No teenager found</p>}
    </div>
  );
}
export default FirstTeenager;