import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// dépendance parallax effets vaisseau star-wars:
import rallax from "rallax.js";
import "../../utils/style/libs/base.scss"
import "./home.famille.scss"
import GoogleMapSection from "../../components/map/map";
// dépendance animation compteurs
import anime from "animejs";

// -----------Import Components-----------

import AccueilFamille from "../../components/accueil.famille/accueil.famille";
import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";
import ReserverFamille from "../../components/reserverFamille/reserverFamille";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";
import SectionChiffres from "../../components/section.chiffres/section.chiffres";
// import GoogleMapSection from "../../components/map/map"

function HomeFamille() {

  useEffect(() => {

	// ! Pour observer les différents niveaux de scroll, utiliser le console.log ci-dessous
	// window.addEventListener("scroll", (e) => {
	// 	// console.log(window.scrollY);
	// })
  })
   
  return (
	<>
		<AccueilFamille/>
		<Reassurance/>
		<ReserverFamille/>
		<AvisUtilisateurs/>
		<ImaginezVous/>
		<SectionChiffres/>
		<GoogleMapSection/>
		<SimpleSlider/>
	</>
  );
}

export default HomeFamille;
