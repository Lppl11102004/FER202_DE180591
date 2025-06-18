import React from "react";
import { Container } from "react-bootstrap";
import ValidatedInput from "./components/ValidatedInput";
import ValidatedForm from "./components/ValidatedForm";
import ValidatedFormAdvanced from "./components/ValidatedFormAdvanced";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="mt-5">
      <div className="mb-4">
        <h3>Exe4</h3>
        <ValidatedInput />
      </div>

      <div className="mb-4">
        <h3>Exe5</h3>
        <ValidatedForm />
      </div>

      <div className="mb-4">
        <h3>Exe6</h3>
        <ValidatedFormAdvanced />
      </div>
    </Container>
  );
}

export default App;
