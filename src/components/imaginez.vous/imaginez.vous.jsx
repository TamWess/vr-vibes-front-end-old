import React, { Component, ReactFragment, useEffect } from "react";
import "./imaginez.vous.scss";
import rallax from 'rallax.js'


function ImaginezVous() {
	
	useEffect(() => {
		const targetVaisseau = document.querySelector('.vaisseau')
		const parallaxVaisseau = rallax(targetVaisseau, { speed: 0.3 })
		
		const targetTitle = document.querySelector('.title')
		const parallaxTitle = rallax(targetTitle, { speed: 0.1 })
		
		const targetText = document.querySelector('.text')
		const parallaxText = rallax(targetText, { speed: 0.17 })
	
	});
		
	return (
		<div className="imaginezVous">
			<img className="background" src="/img/star-wars-space-battle.jpg" alt="vr-vibes vrvibes star-wars-space" />
			<img className="vaisseau" src="/img/vaisseau star wars.png" alt="vr-vibes vrvibes star-wars-vaisseau" />
			<h2 className="title">Imaginez-vous...</h2>
			<div className="text">
			Imaginez-vous transporter vos invités dans des mondes <br/>
			virtuels époustouflants et participer à des jeux en équipe <br/> 
			palpitants. Les rires, la joie et les moments de surprise se <br/>
			multiplieront, créant des souvenirs durables et des <br/>
			conversations animées pour les années à venir.
			<br/>
			<br/>
			Nos animateurs qualifiés seront présents pour guider vos <br/> 
			invités dans cette expérience immersive. Nous adaptons <br/> 
			nos activités de réalité virtuelle en fonction de l'âge et des <br/>
			préférences de chacun. Des jeux interactifs pour les plus <br/>
			jeunes aux simulations immersives pour les adultes, il y en a pour tous les goûts.
			<br/>
			<br/>
			Nos animateurs qualifiés seront présents pour guider vos <br/> 
			invités dans cette expérience immersive. Nous adaptons <br/> 
			nos activités de réalité virtuelle en fonction de l'âge et des <br/>
			préférences de chacun. Des jeux interactifs pour les plus <br/>
			jeunes aux simulations immersives pour les adultes, il y en a pour tous les goûts.
			</div>
		</div>
	)
};

export default ImaginezVous;