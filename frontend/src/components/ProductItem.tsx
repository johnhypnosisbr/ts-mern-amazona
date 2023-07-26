import { Button, Card, Row } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: { product: Product }) {
    return <Card className="cardPadding">
        <Link to={`/product/${product.slug}`}>
            <img src={product.image} className="card-img-top" alt={product.name} />
        </Link>
        <Card.Body>
            <Link to={`/product/${product.slug}`}>
                <Row>

                    <Card.Title className="cardTitle">
                        <p className="cardText">
                            {product.name}
                        </p></Card.Title>
                </Row>

            </Link>
            <Rating rating={product.rating} numReviews={product.numReview} />
            <Card.Text>${product.price}</Card.Text>
            {product.countInStock === 0 ? (
                <Button variant="light" disabled>
                    Out of Stock
                </Button>
            ) : (
                <Button>Add to Cart</Button>
            )}
        </Card.Body>
    </Card>
}

export default ProductItem