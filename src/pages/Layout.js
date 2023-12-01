import { Breadcrumbs, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css"
import { getPathname } from "../services/scripts";
import { Link, useLocation } from "react-router-dom";

function Layout() {
	const [breadcrumbs, setBreadcrumbs] = useState(getPathname());
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	const location = useLocation();

	useEffect(() => {
		setBreadcrumbs(getPathname());
	}, [location]);

	return (
		<>
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
						<Link underline="hover" color="inherit" to={b} className="link">
							{b}
						</Link>
					)}
				</Breadcrumbs>
			</nav>
			<Outlet />
			<Grid container spacing={2} className="footer">
				<Grid item xs={6} className="footer-link-cont">
					<a href="https://www.youtube.com/watch?v=mk30VO5zpi8">© 2023 Chanchimetro, Inc.™</a>
					<a href="https://github.com/chanchimetro">Github</a>
					<a href="https://www.linkedin.com/in/ignaciolopezabraham">LinkedIn</a>
				</Grid>
				<Grid item xs={6} className="footer-form">
						<input placeholder="e-mail" type="email"></input>
						<input placeholder="(nice) Message" type="text"></input>
						<button>Send!</button>
				</Grid>
			</Grid>
		</>
	);
}

export default Layout;