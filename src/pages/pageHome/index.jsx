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

		const divFrise = document.querySelector(".friseContainer");

		// frises défilant de droite à gauche
		const frise1 = document.querySelector(".frise1");
		const frise3 = document.querySelector(".frise3");
		const frise5 = document.querySelector(".frise5");
	
		// frises défilant de droite à gauche
		const frise2 = document.querySelector(".frise2");
		const frise4 = document.querySelector(".frise4");
		const frise6 = document.querySelector(".frise6");


		
		let friseRight = -1500;

		setInterval (()=> {
				frise1.style.right = `${friseRight}px`
				friseRight +=20

				if (frise1.style.right> "100px"){
					friseRight = -1500
				}
		}, 1000)

		setInterval (()=> {
				frise3.style.right = `${friseRight}px`
				friseRight +=20

				if (frise3.style.right> "100px"){
					friseRight = -1500
				}
		}, 1000)

		setInterval (()=> {
				frise5.style.right = `${friseRight}px`
				friseRight +=20

				if (frise5.style.right> "100px"){
					friseRight = -1500
				}
		}, 1000)

		let friseLeft = -1500
		
		setInterval (()=> {
				frise2.style.left = `${friseLeft}px`
				friseLeft +=20

				if (frise2.style.left> "100px"){
					friseLeft = -1500
				}
		}, 1000)

		setInterval (()=> {
				frise4.style.left = `${friseLeft}px`
				friseLeft +=20

				if (frise4.style.left> "100px"){
					friseLeft = -1500
				}
		}, 1000)

		setInterval (()=> {
				frise6.style.left = `${friseLeft}px`
				friseLeft +=20

				if (frise6.style.left> "100px"){
					friseLeft = -1500
				}
		}, 1000)
// setTimeout(()=>{
		
// 	},1000)
// 		console.log(frise1.style.right);

		// let friseLeft = -2100;

		// setInterval (()=> {
		// 		frise2.style.right = `${friseLeft}px`
		// 		friseLeft +=20
		// }, 1000)
		// if (frise2.style.left> "100px"){
		// 	frise2.style.left = "-1800px"
		// }
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
				{/* <div className="friseContainer"> */}
			<img className="frise1" src="/img/frise-double-green-pastel.png" alt="okay"/>
				{/* </div> */}
			
			<img className="frise2" src="/img/frise-double-green-pastel.png"/>
			<img className="frise3" src="/img/frise-double-green-pastel.png"/>
			<img className="frise4" src="/img/frise-double-green-pastel.png"/>
			<img className="frise5" src="/img/frise-double-green-pastel.png"/>
			<img className="frise6" src="/img/frise-double-green-pastel.png"/>
		</div>
		<ImaginezVous/>
		<SimpleSlider/>
    </div>
  );
}

export default Home;
