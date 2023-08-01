import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./reserverEntrepiseFamille.scss"

function ReserverEntrepriseFamille() {
	useEffect (()=>{
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
	})
	
  return (
    <div className="entrepriseFamille">
      <h2 className="titleEntrepriseFamille">
        RENDEZ VOTRE ÉVÉNEMENT OUBLIABLE !
      </h2>
      <h3 className="subtitleEntreprise">
        Team Building, Afterwork, Séminaire ...
      </h3>
      <h3 className="subtitleFamille">
        Baby Shower, Anniversaire, Mariage ...
      </h3>
      <img className="entrepriseChoice" src="/img/entreprise-choice.png" />
      <img className="familleChoice" src="/img/family-choice.png" />
      <Link className="reserverEntreprise" to="EvenementEntreprise">
        Réserver
      </Link>
      <Link className="reserverFamille" to="EvenementFamille">
        Réserver
      </Link>
      {/* <div className="friseContainer"> */}
      <img
        className="frise1"
        src="/img/frise-double-green-pastel.png"
        alt="okay"
      />
      {/* </div> */}

      <img className="frise2" src="/img/frise-double-green-pastel.png" />
      <img className="frise3" src="/img/frise-double-green-pastel.png" />
      <img className="frise4" src="/img/frise-double-green-pastel.png" />
      <img className="frise5" src="/img/frise-double-green-pastel.png" />
      <img className="frise6" src="/img/frise-double-green-pastel.png" />
    </div>
  );
}

export default ReserverEntrepriseFamille;
