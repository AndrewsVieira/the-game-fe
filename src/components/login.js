import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {loginRequest} from '../pages/login/service/LoginService'
import { useHistory } from 'react-router-dom';

export default function LoginUser() {
    const history = useHistory();
    
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <Container>
            <Form>
                <Col>
                    <Row className="mb-4 w-25">
                        <Form.Control type="text" onChange={ e => setLogin(e.target.value) } maxLength={30} placeholder="Login" />
                    </Row>
                    <Row className="mb-4 w-25">
                        <Form.Control type="password" onChange={ e => setPassword(e.target.value) } placeholder="Senha" />
                    </Row>
                    <Row>
                        <Col xs="auto" className="my-1">
                            <Button variant="light" onClick={ () => loginRequest(login, password) }>Entrar</Button>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button variant="light">Criar Conta</Button>
                        </Col>
                    </Row>
                </Col>
            </Form>
        </Container>
    );
}


