import React from "react";
import { Button } from "react-bootstrap";
import { useStore } from "../store";
import { userLogout } from "../store/auth/actions";

const LogoutBtn = () => {
	const { dispatchUser } = useStore();

	const logout = () => {
		const res = confirm("Are you sure to logout?");
		if (!res) return;

		dispatchUser(userLogout());
	};

	return (
		<Button size="sm" onClick={logout} className="btn-danger">
			Logout
		</Button>
	);
};

export default LogoutBtn;