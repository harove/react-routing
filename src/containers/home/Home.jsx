import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';


import { findAllPost } from '../../client/post.client';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        findAllPost().then((response) => {
            const posts = response.data.data;
            this.setState({ posts });
        }).catch((err) => {
            debugger;
        })
    }

    render() {
        const { posts } = this.state;
        return (
            <Container className="home">
                Home
                <Row>
                    {posts.map((post) => (
                        <Col key={post.id}>
                            <Card>
                                <CardHeader>{post.title}</CardHeader>
                                <CardBody>{post.description}</CardBody>
                                <CardFooter>
                                    <Link to={`/post/${post.id}`}>Detalle</Link>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Home;