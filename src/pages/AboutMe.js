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
				<h1 className="profileName">Ignacio L████ A█████ - student</h1>
				<p className="profileDesc">My name is not important... What is important is what I'm going to do. I just fucking hate this world and the human worms feasting on it's carcass. My whole life is just cold, bitter hatred... and I always wanted to die violently. This the time of vengeance and no life is worth saving. And I will put in the grave as many as I can. It's time for me to kill... and it's time for me to die.
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