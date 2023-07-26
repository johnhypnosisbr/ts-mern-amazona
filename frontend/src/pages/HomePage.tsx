import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet-async";
import CarouselFadeExample from "../components/Carousel";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";




function HomePage() {
    const { data: products, isLoading, error } = useGetProductsQuery()

    return isLoading ? (
        <LoadingBox />
    ) : error ? (
        <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    ) : (
        < div >
            <Container className="padding">
                <CarouselFadeExample />
                <Row>
                    <Helmet>
                        <title>John - Store</title>
                    </Helmet>
                    {products!.map((product) => (
                        <Col className="" key={product.slug} sm={6} md={4} lg={3}>
                            <ProductItem product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    )
}

export default HomePage