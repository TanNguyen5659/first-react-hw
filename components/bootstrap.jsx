import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'; // Import Container component for centering

function BasicExample() {
  return (
    <Container className="d-flex justify-content-center" style={{ height: '50vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/master/w_2240,c_limit/Rosen-Messi-Miami.jpg" />
        <Card.Body>
          <Card.Title>Best Soccer Player</Card.Title>
          <Card.Text>
            Lionel Messi, a footballing genius, has captivated audiences globally with his unparalleled skill and ability to transcend the sport. His remarkable career boasts an array of records and achievements, cementing his status as a true legend of the game.
          </Card.Text>
          <Button variant="primary">Explore more</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BasicExample;
