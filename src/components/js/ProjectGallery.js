import '../css/ProjectGallery.css';
import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectGallery = ({ array }) => {
	return (
		<Grid container spacing={3} className="projCont">
			{
				array.map((p) => (
					<Grid item xs={6}>
						<ProjectCard project={p} />
					</Grid>
				))
			}
		</Grid>
	)
}

export default ProjectGallery;