import "../styles/Home.css";
import { Badge, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import computerOutline from "../assets/computer-outline-right.png";
import computerOutlineWorks from "../assets/computer-outline-right-works.png";
import computerOutlineFavs from "../assets/computer-outline-right-favs.png";
import computerOutlineAboutMe from "../assets/computer-outline-right-aboutme.png";
import React, { useContext, useState } from "react";
import projectsContext from "../context/projectsContext";
import ProjectGallery from "../components/js/ProjectGallery";
import { useEffect } from "react";
import favContext from "../context/favContext";

function Home() {
	const pContext = useContext(projectsContext);
	const fContext = useContext(favContext);
	const [imgSrc, setImgSrc] = useState(computerOutline);
	const [projSample, setProjSample] = useState([]);

	useEffect(() => {
		if (pContext.projects.lenght > 0) {
			setProjSample([
				pContext.projects[0],
				pContext.projects[1],
				pContext.projects[2],
				pContext.projects[3],
				pContext.projects[4],
				pContext.projects[5],
			])
		}
	}, [pContext.projects])

	return (
		<>
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
								<Link to={'Works'} onMouseOver={() => setImgSrc(computerOutlineWorks)} onMouseLeave={() => setImgSrc(computerOutline)} className="link">WORKS [プロジェクト]</Link>
							</h1>
						</li>
						<li>
							<h1>
								<Badge
									color="error"
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									badgeContent={fContext.favProj.length}
								>
									<Link to={'Favourites'} onMouseOver={() => setImgSrc(computerOutlineFavs)} onMouseLeave={() => setImgSrc(computerOutline)} className="link">FAVOURITES [お気に入り]</Link>
								</Badge>
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
			<hr />
			<ProjectGallery array={projSample} />
		</>
	);
}

export default Home;