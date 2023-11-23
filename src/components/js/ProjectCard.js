import '../css/ProjectCard.css';
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

/*
{
		"id": 1,
		"titulo": "E-Commerce",
		"descripcion": "Una copia del famoso E-Commerce Mercado Libre",
		"url": "https://github.com/martomorri/tp7_router.git",
		"tecnologia": "React",
		"favorito": false,
		"fecha_creacion": "2023/07/13",
		"imagenes": [
		]
}
*/

function ProjectCard({ project }) {
	return (
		<div className='card'>
			<Grid container>
				<Grid item xs={10}>
					<h2>
						{project.titulo}
					</h2>
				</Grid>
				<Grid item xs={2}>
					<h2>
						ok
					</h2>
				</Grid>
			</Grid>
			<p className='card-desc'>
				{project.descripcion}
			</p>
		</div>
	);
}

export default ProjectCard;