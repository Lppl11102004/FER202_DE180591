import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";

function App() {
  const userData = { name: "lamlpp@fe.edu.vn", age: 21 };
  return (
    <>
      <Welcome name="lamlpp@fe.edu.vn" />
      <UserProfile user={userData} />
    </>
  );
}

export default App;

