import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <NavbarBs.Brand
          style={{ fontSize: "2.25rem", fontWeight: "500", color: "orange" }}
        >
          <Nav.Link to="/" as={NavLink}>
            SpiceHub
          </Nav.Link>
        </NavbarBs.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/shop" as={NavLink}>
            Shop
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-secondary"
            className="rounded-circle"
          >
            <FaShoppingCart />
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "orange",
                color: "white",
                width: "1.3rem",
                height: "1.3rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};