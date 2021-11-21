import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import "./Recipe.css";

function Recipe({ title, calories, image, ingredients, url }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} sm={6}>
            <Card className="card-style">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text className = "paragraph">
                Calories: {calories.toFixed(0)}
                </Card.Text>
                <div className="buttons">
                <Button variant="primary" size = "sm" onClick={handleShow}>
                  INGREDIENTS
                </Button>
                <Button variant="outline-primary  border-2" size = "sm"  onClick = {() => window.open(url)}>
                  VIEW RECIPE
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className = "text-primary">{title} Ingredients:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size = "sm" onClick={handleClose}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Recipe;
