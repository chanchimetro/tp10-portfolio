import { Breadcrumbs, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../icon.png"
import "../styles/Layout.css"
import { getPathname } from "../services/scripts";

function Layout() {
	let breadcrumbs = getPathname();

	return (
		<>
			<nav className="navbar">
				<div className="navbar-top">
					<Link href={'/'} className="main-link">
						<h1 className="navTitle">
							www.Portfolio.com
						</h1>
					</Link>
				</div>
				<Breadcrumbs separator="\" aria-label="breadcrumb" className="path">
					<Link underline="hover" color="inherit" href="/">
						C:
					</Link>
					{breadcrumbs.map((b) =>
						<Link underline="hover" color="inherit" href={b}>
							{b}
						</Link>
					)}
				</Breadcrumbs>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;