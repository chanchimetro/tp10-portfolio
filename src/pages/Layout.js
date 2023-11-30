import { Breadcrumbs, Typography, Modal, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../icon.png"
import "../styles/Layout.css"
import { getPathname } from "../services/scripts";
import { Link, useLocation } from "react-router-dom";

function Layout() {
	const [breadcrumbs, setBreadcrumbs] = useState(getPathname());
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const location = useLocation();

	useEffect(() => {
		setBreadcrumbs(getPathname());
	}, [location]);

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className="modal">
					gr3rgregrege
				</Box>
			</Modal>
			<nav className="navbar">
				<div className="navbar-top">
					<Link to={'/'} className="main-link">
						<h1 className="navTitle">
							www.Portfolio.com
						</h1>
					</Link>
				</div>
				<Breadcrumbs separator="\" aria-label="breadcrumb" className="path">
					<Link underline="hover" color="inherit" to={"/"} className="link">
						C:
					</Link>
					{breadcrumbs.map((b) =>
						<Link underline="hover" color="inherit" href={b} className="link">
							{b}
						</Link>
					)}
				</Breadcrumbs>
			</nav>
			<Outlet />
			<span className="footer">
				<p className="footerText"><Button onClick={handleOpen}>Open modal</Button></p>
			</span>
		</>
	);
}

export default Layout;