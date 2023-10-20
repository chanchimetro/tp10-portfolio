import { Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import logo from "../icon.png"
import "../styles/Layout.css"

function Layout() {
	let pathname;
	useEffect(() => {
		pathname = window.location.pathname.split('/');
		console.log(pathname);
	}, [window.location.pathname]);

	return (
		<nav className="navbar">
			<h1 className="navTitle">www.Portfolio.com</h1>
			<hr></hr>
			<Breadcrumbs aria-label="breadcrumb" className="path" separator="\">
				<Link underline="none" color="inherit" href="/">
					C:
				</Link>
				{
					pathname
				}
			</Breadcrumbs>
			<hr></hr>
		</nav>
	);
}

export default Layout;