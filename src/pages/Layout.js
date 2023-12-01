import { Breadcrumbs, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form"
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css"
import { getPathname } from "../services/scripts";
import { Link, useLocation } from "react-router-dom";

function Layout() {
	const [breadcrumbs, setBreadcrumbs] = useState(getPathname());

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => console.log(data)

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className="form-label">Contact:</label>
						<input placeholder="e-mail" {...register("email")} />
						<input placeholder="message" {...register("message")} />
						<Button color="error" className="form-btn" type="submit">Send</Button>
					</form>
				</Grid>
			</Grid>
		</>
	);
}

export default Layout;