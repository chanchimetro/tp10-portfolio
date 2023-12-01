import "../styles/AboutMe.css"
import { Container, Grid } from "@mui/material";
import imgSrc from "../assets/profilePic.png"
import React from "react";

function AboutMe() {
	return (
		<Grid container className="profileCont">
			<Grid item xs={3}>
				<img className="profileImg" src={imgSrc}></img>
			</Grid>
			<Grid item xs={9}>
				<h1 className="profileName">Ignacio Lopez Abraham</h1>
				<p className="profileDesc">Current (not for long) student at ORT Highschool.
					</p>
					<ul className="profileList">
						<li><b>Knowledge:</b> ReactJS, NodeJS, MSsql, HTML, CSS, C#, C++</li>
						<li><b>Interests:</b> Music, Computer Science, Videogame Design</li>
						<li><b>Fears:</b> javascript</li>
					</ul>
			</Grid>
		</Grid>
	);
}

export default AboutMe;