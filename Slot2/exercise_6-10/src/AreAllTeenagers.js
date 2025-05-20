function AreAllTeenagers() {
  const people = [
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 15 },
  ];
  const allTeens = people.every(p => p.age >= 13 && p.age <= 19);
  return (
    <div>
      <h2>Teen Check</h2>
      <p>{allTeens ? "All are teenagers" : "Not all are teenagers"}</p>
    </div>
  );
}
export default AreAllTeenagers;
