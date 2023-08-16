import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./reserverEntrepise.scss"

function ReserverEntreprise() {
	
	useEffect(() => {
		
		// frises défilant de droite à gauche
		const frise1 = document.querySelector(".frise1");
		const frise3 = document.querySelector(".frise3");
		const frise5 = document.querySelector(".frise5");

		const frise15 = document.querySelector(".frise15");
		const frise17 = document.querySelector(".frise17");
		const frise19 = document.querySelector(".frise19");
		
		// frises défilant de droite à gauche
		const frise2 = document.querySelector(".frise2");
		const frise4 = document.querySelector(".frise4");
		const frise6 = document.querySelector(".frise6");

		const frise16 = document.querySelector(".frise16");
		const frise18 = document.querySelector(".frise18");
		const frise20 = document.querySelector(".frise20");

		// -------RESPONSIVE------
		
		if(window.screen.width<576){
			// setTimeout(() => {
			// 	const entrepriseFamille = document.querySelector(".entrepriseFamille");
			// 	const subtitleFamille = document.querySelector(".subtitleFamille");
			// 	const familleChoice = document.querySelector(".familleChoice");
			// 	const reserverEntreprise = document.querySelector(".reserverEntreprise");
	
	
			// 		entrepriseFamille.insertBefore(subtitleFamille,familleChoice);
			// 		entrepriseFamille.insertBefore(reserverEntreprise,subtitleFamille);
			// }, 300)	
				
			// frise15.remove();
			// frise16.remove();
			// frise17.remove();
			// frise18.remove();
			// frise19.remove();
			// frise20.remove();
		}	

		// --------FIN DE REPONSIVE------


		let friseRight = -1500;
		
		setInterval(() => {
			frise1.style.right = `${friseRight}px`
			friseRight += 20

			if (frise1.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise3.style.right = `${friseRight}px`
			friseRight += 20

			if (frise3.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise5.style.right = `${friseRight}px`
			friseRight += 20

			if (frise5.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise15.style.right = `${friseRight}px`
			friseRight += 20

			if (frise15.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise17.style.right = `${friseRight}px`
			friseRight += 20

			if (frise17.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise19.style.right = `${friseRight}px`
			friseRight += 20

			if (frise19.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		let friseLeft = -1500

		setInterval(() => {
			frise2.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise2.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise4.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise4.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise6.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise6.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise16.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise16.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise18.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise18.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise20.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise20.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)
	})

	return (
		<div className="entrepriseFamille">
			<h2 className="titleEntrepriseFamille">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h2>
			<div className="entreprise">
				<h3 className="subtitleEntreprise">
					Team Building, Afterwork, Séminaire ...
				</h3>
				<img className="entrepriseChoice" src="/img/entreprise-choice.png" />
				<Link className="reserverEntreprise" to="EvenementEntreprise">
					Réserver
				</Link>
			</div>
			<img className="frise15" src="/img/frise-double-green-pastel.png" alt="okay" />
			<img className="frise16" src="/img/frise-double-green-pastel.png" />
			<img className="frise17" src="/img/frise-double-green-pastel.png" />
			<img className="frise18" src="/img/frise-double-green-pastel.png" />
			<img className="frise19" src="/img/frise-double-green-pastel.png" />
			<img className="frise20" src="/img/frise-double-green-pastel.png" />
		</div>
	);
}

export default ReserverEntreprise;
