import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import LogoutBtn from "../components/logout-btn";

const Header = () => {
	const { stateUser } = useStore();
	const { isUserLogin, user } = stateUser;

	return (
		<Navbar expand="lg" className="bg-warning">
			<Container>
				<Navbar.Brand to="/" as={Link}>
					AuthApp
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link to="/" as={Link}>
							Home
						</Nav.Link>
						<Nav.Link to="/login" as={Link}>
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				{isUserLogin ? (
					<div className="fw-bold">
						Hi {user.firstName} <LogoutBtn />
					</div>
				) : null}
			</Container>
		</Navbar>
	);
};

export default Header;