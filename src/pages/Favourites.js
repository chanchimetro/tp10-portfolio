import "../styles/Gallery.css";
import React, { useContext } from "react";
import ProjectGallery from "../components/js/ProjectGallery";
import favContext from "../context/favContext";
import { Grid } from "@mui/material";

function Favourites() {
	const { favProj } = useContext(favContext);

	return (
		<>
			<Grid className="galleryCont">
				<h1 className="galleryTitle">
					Favourite projects
				</h1>
				{
					favProj.length > 0 ? <ProjectGallery array={favProj} /> :
						<p className="noWorks">Hmmmm no favourite projects yet...</p>
				}
			</Grid>
		</>
	);
}

export default Favourites;