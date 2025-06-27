import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Regex kiểm tra email
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Regex kiểm tra số điện thoại
const isValidPhone = (phone) =>
  /^\d{10,15}$/.test(phone);

const UserForm = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleValidation = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Tên không được để trống!";
    } else if (formData.name.trim().length < 3 || formData.name.trim().length > 50) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
    }

    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }

    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }

    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";
    }

    if (!formData.gender) {
      newErrors.gender = "Vui lòng chọn giới tính!";
    }

    if (!formData.agreed) {
      newErrors.agreed = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      onSubmit(formData);

      setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        gender: "",
        agreed: false,
      });
      setShowAlert(false);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>

      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <strong>Lỗi:</strong>
          <ul className="mb-0">
            {Object.values(errors).map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Giới tính</Form.Label>
          <Form.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          >
            <option value="">-- Chọn giới tính --</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.gender}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAgreed">
          <Form.Check
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            label="Đồng ý với điều khoản"
            isInvalid={!!errors.agreed}
            feedback={errors.agreed}
            feedbackType="invalid"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

UserForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
