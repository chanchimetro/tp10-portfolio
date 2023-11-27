import React from "react";
import projectsContext from "../context/projectsContext";
import ProjectGallery from "../components/js/ProjectGallery";
import { useContext } from "react";

function Works() {
	const pContext = useContext(projectsContext);

	return (
		<>
			<ProjectGallery array={pContext.projects}/>
		</>
	);
}

export default Works;