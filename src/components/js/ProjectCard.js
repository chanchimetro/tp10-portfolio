import '../css/ProjectCard.css';
import React, { useContext, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Grid, IconButton } from '@mui/material';
import favIcon from "../../assets/fav.png"
import noFavIcon from "../../assets/nofav.png"
import favContext from '../../context/favContext';
import ProjectModal from './ProjectModal.js';

function ProjectCard({ project }) {
	const [show, setShow] = useState(false);
	const { favProj, setFavProj } = useContext(favContext);
	const [fav, setFav] = useState(false);

	const handleFav = () => {
		if (fav) {
			setFavProj(
				favProj.filter(f => f.id !== project.id)
			)
		} else {
			setFavProj([...favProj, project])
		}
	}

	const handleModal = () => {
		setShow(!show);
	}

	useEffect(() => {
		setFav(false);
		favProj.forEach(f => {
			if (f.id === project.id) setFav(true)
		});
	}, [favProj])

	return (
		<>
		<ProjectModal show={show} handleModal={handleModal} project={project}/>
			<div className='card'>
				<Grid container className='card-header'>
					<Grid item xs={11}>
						<h2>
							{project.titulo}
						</h2>
					</Grid>
					<Grid item xs={1} className='header-item'>
						<IconButton variant='danger' className='fav-btn' onClick={() => handleFav()}>
							<img className='img' src={fav ? favIcon : noFavIcon} alt="favBtn" />
						</IconButton>
					</Grid>
				</Grid>
				<p className='card-desc'>
					{project.descripcion}
				</p>
				<Button variant='link' onClick={handleModal}>More Info</Button>
			</div>
		</>
	);
}

export default ProjectCard;