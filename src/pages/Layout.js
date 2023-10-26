import { Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../icon.png"
import "../styles/Layout.css"

function Layout() {
	let pathname = window.location.pathname.split('/');
	useEffect(() => {
		pathname = window.location.pathname.split('/');
		console.log(pathname);
	}, []);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-top">
					<h1 className="navTitle">www.Portfolio.com</h1>
				</div>
				<Breadcrumbs aria-label="breadcrumb" className="path" separator="\">
					<Link underline="none" color="inherit" href="/">
						C:
					</Link>
					{pathname}
				</Breadcrumbs>
			</nav>
			<Outlet/>
		</>
	);
}

export default Layout;