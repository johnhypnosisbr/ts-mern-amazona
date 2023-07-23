import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { sampleProducts } from "../data";

function CompProducts() {
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    {sampleProducts.map((product) => (
                        <Col className="" key={product.slug} sm={6} md={4} lg={3}>
                            <img className="rounded product-img" src={product.image} />
                            <h3>{product.name}</h3>
                            <p>US$ {product.price}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CompProducts