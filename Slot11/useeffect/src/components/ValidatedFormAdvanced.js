import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function ValidatedFormAdvanced() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agree: false,
  });

  const [valid, setValid] = useState({
    name: false,
    gender: false,
    country: false,
    agree: false,
  });

  // Xác thực name
  useEffect(() => {
    setValid((prev) => ({ ...prev, name: name.trim().length >= 3 }));
  }, [name]);

  // Xác thực gender
  useEffect(() => {
    setValid((prev) => ({ ...prev, gender: gender !== "" }));
  }, [gender]);

  // Xác thực country
  useEffect(() => {
    setValid((prev) => ({ ...prev, country: country !== "" }));
  }, [country]);

  // Xác thực checkbox
  useEffect(() => {
    setValid((prev) => ({ ...prev, agree: agree }));
  }, [agree]);

  const isFormValid = Object.values(valid).every((v) => v === true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          isInvalid={touched.name && !valid.name}
        />
        <Form.Control.Feedback type="invalid">
          Name must be at least 3 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGender" className="mt-3">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            inline
            label="Male"
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, gender: true }))}
          />
          <Form.Check
            inline
            label="Female"
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Other"
            type="radio"
            name="gender"
            value="Other"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {touched.gender && !valid.gender && (
          <div className="text-danger mt-1">Please select a gender.</div>
        )}
      </Form.Group>

      <Form.Group controlId="formCountry" className="mt-3">
        <Form.Label>Country</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, country: true }))}
          isValid={touched.country && valid.country}
          isInvalid={touched.country && !valid.country}
        >
          <option value="">Select country...</option>
          <option value="Ha Noi">Hà Nội</option>
          <option value="Da Nang">Đà Nẵng</option>
          <option value="Ho Chi Minh">Hồ Chí Minh</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select a country.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formAgree" className="mt-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          onBlur={() => setTouched((prev) => ({ ...prev, agree: true }))}
          isInvalid={touched.agree && !valid.agree}
        />
        {touched.agree && !valid.agree && (
          <div className="text-danger">You must agree to continue.</div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default ValidatedFormAdvanced;
