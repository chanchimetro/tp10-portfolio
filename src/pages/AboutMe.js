import "../styles/AboutMe.css"
import { Container, Grid } from "@mui/material";
import imgSrc from "../assets/profilePic.png"
import React from "react";

function AboutMe() {
	return (
		<Grid container className="profileCont">
			<Grid item xs={3}>
				<img className="profileImg" src={imgSrc}></img>
			</Grid>
			<Grid item xs={9}>
				<h1 className="profileName">Ignacio Lopez Abraham - student</h1>
				<p className="profileDesc">Mido un metro ochenta y uno
					Tengo un sillón azul
					En mi cuarto hay un baúl
					Y me gusta el almendrado
					Me despierto alunado
					Mi madre es medio terca
					Aunque nunca estuve preso, anduve cerca
					Soy de Aries, pelo castaño
					Algo tacaño y no colecciono nada
					Guardo la ropa ordenada
					Me aburro en nochebuena
					Si estornudo no hago ruido
					Y no hablo con la boca llena
					Puedo decir que soy de pocos amigos
					Pero de mis enemigos, no sé cuantos cosecho
					Tengo el ojo derecho desviado
					Dicen que soy bueno, aunque no sea bautizado
					Nací a las tres de la mañana
					Me llevo bien con mi hermana
					No creo en ovnis ni en zombies
					Y uso prendas talle "M"
					Juego con fuego, aunque el fuego me queme.
					</p>
					<ul className="profileList">
						<li><b>Knowledge:</b> ReactJS, NodeJS, MSsql, HTML, CSS, C#, C++</li>
						<li><b>Interests:</b> Music, Computer Science, Videogame Design</li>
						<li><b>Fears:</b> javascript</li>
					</ul>
			</Grid>
		</Grid>
	);
}

export default AboutMe;