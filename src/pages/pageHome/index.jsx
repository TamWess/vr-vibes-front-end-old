import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import rallax from "rallax.js";
// import "../../utils/style/base.scss";
// import "../../utils/style/style.scss";
import "../../utils/style/libs/base.scss"
import "./style.scss"
import Reassurance from "../../components/reassurance/reassurance.brands";
import ReserverEntrepriseFamille from "../../components/reserverEntrepriseFamille/reserverEntrepiseFamille";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";

// import Slideshow from "../../../src/components/slide/index";
// import "../../components/slide/style.scss"

// ----------REACT-----------

function Home() {

  useEffect(() => {

	// ! Pour observer les différents niveaux de scroll, utiliser le console.log ci-dessous
	// window.addEventListener("scroll", (e) => {
	// 	// console.log(window.scrollY);
	// })

  })
   
  return (
    <div className="home">
		<img className="logoVRvibes" src="/icns/vr-vibes-logo.png"/>
		<div className="imageVREntreprise"/>
		<div className="imageVRFamille"/>
		<div className="accueilImage">
			{/* <h2 className="titleWhite1">VR</h2>
			<h2 className="titleTurquoise1"> + Événements</h2>
			<h2 className="titleTurquoise2">=</h2>
			<h2 className="titleTurquoise3">MOMENT</h2>
			<h2 className="titleWhite2">PARFAIT !</h2> */}
		</div>
		<Reassurance/>
		<AvisUtilisateurs/>
		<ReserverEntrepriseFamille/>
		<ImaginezVous/>
		<SimpleSlider/>
    </div>
  );
}

export default Home;
