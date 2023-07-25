import axios from "axios";
import { useEffect, useReducer } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ApiError } from "../types/ApiError";
import CarouselFadeExample from "../components/Carousel";

type State = {
    products: Product[],
    loading: boolean
    error: string
}

type Action =
    | { type: 'FETCH_REQUEST' }
    | {
        type: 'FETCH_SUCCESS'
        payload: Product[]
    }
    | { type: 'FETCH_FAIL'; payload: string }

const initialState: State = {
    products: [],
    loading: true,
    error: '',
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

function HomePage() {
    const [{ loading, error, products }, dispatch] = useReducer<
        React.Reducer<State, Action>
    >(reducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('/api/products')
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
            }
        }
        fetchData()
    }, [])

    return (
        loading ? (
            <LoadingBox />
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            < div >
                <h1>HOMEPAGE</h1>  <Container className="mt-3">
                    <CarouselFadeExample />
                    <Row>
                        {products.map((product) => (
                            <Col className="" key={product.slug} sm={6} md={4} lg={3}>
                                <Link style={{ textDecoration: 'none' }} to={'/product/' + product.slug}>
                                    <img className="rounded product-img" src={product.image} />
                                    <p className="offer">23% off</p>
                                    <h3>{product.name}</h3>
                                    <p>US$ {product.price}</p>

                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
        )
    )
}

export default HomePage