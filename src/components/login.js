import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {login1} from '../pages/login/service/LoginService'

export default function LoginUser() {

    const [login, setLogin] = useState('');

    return (
        <Container>
            <Form>
                <Col>
                    <Row className="mb-4 w-25">
                        <Form.Control type="text" onChange={e => setLogin(e.target.value)} maxLength={30} placeholder="Login" />
                    </Row>
                    <Row className="mb-4 w-25">
                        <Form.Control type="password" placeholder="Senha" />
                    </Row>
                    <Row>
                        <Col xs="auto" className="my-1">
                            <Button variant="light" onClick={() => login1(login, null, null)}>Entrar</Button>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button variant="light" type="submit">Criar Conta</Button>
                        </Col>
                    </Row>
                </Col>
            </Form>
        </Container>
    );
}


