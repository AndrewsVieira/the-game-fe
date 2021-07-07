import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import '../index.css';

export default function Header() {
    return (
        <Container className="header">
        <Navbar light>
          <NavbarBrand href="/question">Jogar</NavbarBrand>
          <NavbarBrand href="/ranking">Ranking</NavbarBrand>
        </Navbar>
      </Container>
    );
}