import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, name: action.newName } : item
        )
      };
    case "SORT_ALPHA":
      return { ...state, items: [...state.items].sort((a, b) => a.name.localeCompare(b.name)) };
    case "SORT_TIME":
      return { ...state, items: [...state.items].sort((a, b) => a.id - b.id) };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  filter: ""
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id, name) => {
    setEditingId(id);
    setEditText(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, newName: editText });
    setEditingId(null);
    setEditText("");
  };

  const filteredItems = state.items.filter(item =>
    item.name.toLowerCase().includes(state.filter?.toLowerCase() || "")
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="offset-md-2">
          <Form className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter item name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <Button className="mt-2" onClick={handleAddItem}>Add Item</Button>
          </Form>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search item..."
              onChange={(e) => dispatch({ type: "SET_FILTER", filter: e.target.value })}
            />
            <Button variant="outline-secondary" onClick={() => dispatch({ type: "SORT_ALPHA" })}>Sort A-Z</Button>
            <Button variant="outline-secondary" onClick={() => dispatch({ type: "SORT_TIME" })}>Sort Time</Button>
          </InputGroup>

          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                {editingId === item.id ? (
                  <>
                    <Form.Control
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="me-2"
                    />
                    <Button variant="success" onClick={() => handleSaveEdit(item.id)}>Save</Button>
                  </>
                ) : (
                  <>
                    {item.name}
                    <div>
                      <Button size="sm" variant="warning" onClick={() => handleEditItem(item.id, item.name)}>Edit</Button>{" "}
                      <Button size="sm" variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
