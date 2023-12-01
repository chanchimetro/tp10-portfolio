import "../css/ProjectModal.css"
import favIcon from "../../assets/fav.png"
import noFavIcon from "../../assets/nofav.png"
import { Grid, Link, Modal, Typography } from "@mui/material";
import React from "react";

const ProjectModal = ({ show, handleModal, project }) => {
	return (
		<Modal
			open={show}
			onClose={handleModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			className="modal"
		>
			<div className="modal-div">
				<Grid container sx={{ height: 20 }}>
					<Grid item xs={10}>
						<Typography id="modal-modal-description">
							{project.fecha_creacion}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Link id="modal-modal-description" href={project.url}>
							Git Repository
						</Link>
					</Grid>
				</Grid>
				<hr />
				<Grid container>
					<Grid item xs={6}>
						<Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2, mb: 2 }}>
							{project.titulo}
						</Typography>
						<Typography id="modal-modal-description">
							{project.descripcion}
							<ul>
								<li><b>Technology:</b> {project.tecnologia}</li>
							</ul>
						</Typography>
					</Grid>
					<Grid item xs={6} className="proj-img-cont">
						<img className="proj-img" src={project.imagenes[0]}>
						</img>
					</Grid>
				</Grid>
			</div>
		</Modal>
	);
}

export default ProjectModal;