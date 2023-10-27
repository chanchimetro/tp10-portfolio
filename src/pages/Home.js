import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import computerOutline from "../assets/computer-outline-right.png";
import computerOutlineWorks from "../assets/computer-outline-right-works.png";
import computerOutlineFavs from "../assets/computer-outline-right-favs.png";
import computerOutlineAboutMe from "../assets/computer-outline-right-aboutme.png";
import React, { useState } from "react";
import "../styles/Home.css";

function Home() {
	const [imgSrc, setImgSrc] = useState(computerOutline);

	return (
		<Grid className="mainMenu" container>
			<Grid item xs={6}>
				<p className="img-holder">
					<img className="homeImg" src={imgSrc} />
				</p>
			</Grid>
			<Grid item xs={6}>
				<ul className="links-list">
					<li>
						<h1>
							<Link to={'Works'} onMouseOver={() => setImgSrc(computerOutlineWorks)} onMouseLeave={() => setImgSrc(computerOutline)} className="link">PROJECTS [プロジェクト]</Link>
						</h1>
					</li>
					<li>
						<h1>
							<Link to={'Favourites'} onMouseOver={() => setImgSrc(computerOutlineFavs)} onMouseLeave={() => setImgSrc(computerOutline)} className="link">FAVOURITES [お気に入り]</Link>
						</h1>
					</li>
					<li>
						<h1>
							<Link to={'AboutMe'} onMouseOver={() => setImgSrc(computerOutlineAboutMe)} onMouseLeave={() => setImgSrc(computerOutline)} className="link">ABOUT ME [私について]</Link>
						</h1>
					</li>
				</ul>
			</Grid>
		</Grid>
	);
}

export default Home;