import "../styles/AboutMe.css"
import { Container, Grid } from "@mui/material";
import React from "react";

function AboutMe() {
	return (
		<Grid container className="profileCont">
			<Grid item xs={2}>
				<img className="profileImg" src="https://lh3.bunny.novaskin.me/NgYj3DoxTihNJ2lvIBO_0zXkj3eocVvxKrerC9WLqfeWPqbw4SH4PAF509cKvSI1weZ3ug-412GGUM3C_i5x_Q=rw-h400"></img>
			</Grid>
			<Grid item xs={10}>
				<h1 className="profileName">Ignacio Lopez Abraham</h1>
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
					Juego con fuego, aunque el fuego me queme
					Pero no soy tan complicado como para huir
					Ni quedarme aquí en silencio
					Pero no soy tan simple como para no advertir
					Que no hay tres minutos
					Ni hay cien palabras
					Que me puedan definir</p>
			</Grid>
		</Grid>
	);
}

export default AboutMe;