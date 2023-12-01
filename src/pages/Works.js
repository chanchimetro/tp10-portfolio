import "../styles/Gallery.css";
import React, { useEffect, useState } from "react";
import projectsContext from "../context/projectsContext";
import ProjectGallery from "../components/js/ProjectGallery";
import { useContext } from "react";
import { Grid } from "@mui/material";

function Works() {
	const [loading, setLoading] = useState(true);
	const pContext = useContext(projectsContext);

	useEffect(() => {
		if (pContext.projects) {
			setLoading(false);
		}
	},[pContext])

	return (
		loading ? <></> :
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