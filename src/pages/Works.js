import "../styles/Gallery.css";
import React from "react";
import projectsContext from "../context/projectsContext";
import ProjectGallery from "../components/js/ProjectGallery";
import { useContext } from "react";
import { Grid } from "@mui/material";

function Works() {
	const pContext = useContext(projectsContext);

	return (
		<>
			<Grid className="galleryCont">
				<h1 className="galleryTitle">
					Works
				</h1>
				<p className="noWorks">This is a gallery of selected works that I've done throughout highschool. (Quality may vary :p)</p>
				<ProjectGallery array={pContext.projects} />
			</Grid>
		</>
	);
}

export default Works;