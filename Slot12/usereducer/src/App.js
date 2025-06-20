import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Đổi component ở đây để test từng bài
// import Counter from "./components/Counter";
// import ChangeNameAge from "./components/ChangeNameAge";
// import ItemList from "./components/ItemList";
// import QuestionBank from "./components/QuestionBank";
import QuestionBankPlus from "./components/QuestionBankPlus";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ChangeNameAge /> */}
      {/* <ItemList /> */}
      {/* <QuestionBank /> */}
      <QuestionBankPlus />
    </div>
  );
}

export default App;
