import { Grid } from "@mui/material";
import computerOutline from "../assets/computer-outline-right.png"
import React from "react";
import "../styles/Home.css";

function Home() {
	return (
		<Grid className="mainMenu" container spacing={2}>
			<Grid item xs={2}>
				<img className="homeImg" src={computerOutline}/>
			</Grid>
		</Grid>
	);
}

export default Home;