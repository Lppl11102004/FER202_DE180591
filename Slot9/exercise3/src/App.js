import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";

function App() {
  const userData = { name: "lamlpp@fe.edu.vn", age: 21 };
  const namesList = ["lamlpp@fe.edu.vn", "test@fe.edu.vn"];
  return (
    <>
      <Welcome name="lamlpp@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
    </>
  );
}

export default App;
