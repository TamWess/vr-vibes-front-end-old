import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import rallax from "rallax.js";
// import "../../utils/style/base.scss";
// import "../../utils/style/style.scss";
import "../../utils/style/libs/base.scss"
import "./style.scss"
import Reassurance from "../../components/reassurance/reassurance.brands";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";

// import Slideshow from "../../../src/components/slide/index";
// import "../../components/slide/style.scss"

// ----------REACT-----------

function Home() {

  useEffect(() => {

	// Pour observer les différents niveaux de scroll, utiliser le console.log ci-dessous

	window.addEventListener("scroll", (e) => {
		// console.log(window.scrollY);
	})

	// 840px est la valeur à partir de laquelle le component ImaginezVous apparait

				// window.addEventListener("scroll", function () {
		// 	if (window.scrollY > 200) {
		// 	  header.style.top = "-90px";
		// 	  if (window.scrollY < scroll) {
		// 		header.style.top = "0px";
		// 	  }
		// 	}
		// 	scroll = window.scrollY;
		//   });
		const divFrise = document.querySelector(".friseContainer");
		const frise = document.querySelector(".frise1");

		let friseRight = 0;

		setInterval (()=> {
				frise.style.right = `${friseRight}px`
				friseRight +=20
		}, 1000)
  })
   
  return (
    <div className="home">
		<div className="accueilImage">
			<h2 className="titleWhite1">VR</h2>
			<h2 className="titleTurquoise1"> + Événements</h2>
			<h2 className="titleTurquoise2">=</h2>
			<h2 className="titleTurquoise3">MOMENT</h2>
			<h2 className="titleWhite2">PARFAIT !</h2>
		</div>
		<Reassurance/>
		<div className="entrepriseFamille">
			<h2 className="titleEntrepriseFamille">RENDEZ VOTRE ÉVÉNEMENT OUBLIABLE !</h2>
			<h3 className="subtitleEntreprise">Team Building, Afterwork, Séminaire ...</h3>
			<h3 className="subtitleFamille">Baby Shower, Anniversaire, Mariage ...</h3>
			<img className="entrepriseChoice" src="/img/entreprise-choice.png"/>
			<img className="familleChoice" src="/img/family-choice.png"/>
			<Link className="reserverEntreprise" to="EvenementEntreprise">Réserver</Link>
			<Link className="reserverFamille" to="EvenementFamille">Réserver</Link>

				<div className="frise1"/>
			
			<img className="frise2" src="/icns/frise-green.png"/>
			<img className="frise3" src="/icns/frise-green.png"/>
			<img className="frise4" src="/icns/frise-green.png"/>
			<img className="frise5" src="/icns/frise-green.png"/>
			<img className="frise6" src="/icns/frise-green.png"/>
		</div>
		<ImaginezVous/>
		<SimpleSlider/>
    </div>
  );
}

export default Home;
