import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './Carts.css';

function Carts({ carts, setCarts }) {
  const totalPrice = carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2);

  return (
    <div className="carts-page text-center">
      <div className="carts-items-container d-flex flex-wrap justify-content-center gap-3 mb-4">
        {carts.map((cart) => (
          <Card style={{ width: '18rem' }} key={cart.id}>
            <Card.Img variant="top" src={cart.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{cart.title}</Card.Title>
              <Card.Text>
                <b>${cart.price.toFixed(2)}</b>
              </Card.Text>
              <Button
                variant="outline-danger"
                onClick={() => setCarts(carts.filter((c) => c.id !== cart.id))}
              >
                Remove from Carts
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

     
      <h5 className="mb-3">
        Products:
        <Badge bg="danger" className="mx-2">
          {carts.length} Items
        </Badge>
        - Total price:
        <Badge bg="success" className="mx-2">
          ${totalPrice}
        </Badge>
      </h5>

   
      <Button
        variant="warning"
        className="fw-bold px-4"
      >
        Checkout 🛒
      </Button>
      <span className="ms-2"></span>
    </div>
  );
}

export default Carts;
