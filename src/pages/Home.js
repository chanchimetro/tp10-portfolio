import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import computerOutline from "../assets/computer-outline-right.png"
import React from "react";
import "../styles/Home.css";

function Home() {
	return (
		<Grid className="mainMenu" container>
			<Grid item xs={6}>
				<p className="img-holder">
					<img className="homeImg" src={computerOutline} />
				</p>
			</Grid>
			<Grid item xs={6}>
				<ul className="links">
					<li>
						<Link>PROJECTS</Link>
					</li>
					<li>
						<Link>FAVOURITES</Link>
					</li>
					<li>
						<Link>ABOUT ME</Link>
					</li>
					<li>
						<Link>HOLA</Link>
					</li>
				</ul>
			</Grid>
		</Grid>
	);
}

export default Home;