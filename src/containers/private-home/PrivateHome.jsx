import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/session';
import { Container, Row, Col, Table } from 'reactstrap';


import { findAllPost } from '../../client/post.client';

const PrivateHome = () => {

    const [posts, setPosts] = useState([]);

    const handlerLogout = () => {
        logout();
    };

    useEffect(() => {
        findAllPost().then((response) => {
            const posts = response.data.data;
            setPosts(posts);
        }).catch((err) => {
            debugger;
        })
       return () => {
            // alert('Chao private');
       } 
    }, []);

    return (
        <Container className="private-home">
            Private Home
            <button onClick={handlerLogout}>Cerrar Sesión</button>
            <Link to="/">Home</Link>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                </Row>
        </Container>
    );
};

export default PrivateHome;