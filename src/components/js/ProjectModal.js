import "../css/ProjectModal.css"
import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const ProjectModal = ({ show, handleModal }) => {
	return (
		<Modal
			open={show}
			onClose={handleModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			className="modal"
		>
			<div className="modal-div">
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Text in a modal
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</div>
		</Modal>
	);
}

export default ProjectModal;