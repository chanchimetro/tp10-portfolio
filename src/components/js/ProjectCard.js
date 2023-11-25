import '../css/ProjectCard.css';
import React, { useContext, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import favIcon from "../../assets/fav.png"
import noFavIcon from "../../assets/nofav.png"
import favContext from '../../context/favContext';

function ProjectCard({ project }) {
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

	useEffect(() => {
		setFav(false);
		favProj.forEach(f => {
			if (f.id === project.id) setFav(true)
		})
	}, [favProj])

	return (
		<div className='card'>
			<Grid container className='card-header'>
				<Grid item xs={10}>
					<h2>
						{project.titulo}
					</h2>
				</Grid>
				<Grid item xs={2} className='header-item'>
					<Button variant='danger' className='fav-btn' onClick={() => handleFav()}>
						<img className='img' src={fav ? favIcon : noFavIcon} alt="favBtn" />
					</Button>
				</Grid>
			</Grid>
			<p className='card-desc'>
				{project.descripcion}
			</p>
		</div>
	);
}

export default ProjectCard;