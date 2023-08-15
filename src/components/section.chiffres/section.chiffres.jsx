import React, { useEffect } from "react";
import "./section.chiffres.scss";
import anime from "animejs";

function SectionChiffres() {
	// const numberUsersStart = 0;
	let animeDiv = document.querySelector(".laVRcest");

	useEffect(() => {
		let changeNumber = document.querySelector(".numbers1");
		anime({
			targets: changeNumber,
			innerHTML: [0, 4.8],
			easing: "linear",
			round: 50, // Will round the animated value to 1 decimal


		});
		const divFrise = document.querySelector(".friseContainer");

		// frises défilant de droite à gauche
		const frise7 = document.querySelector(".frise7");
		const frise9 = document.querySelector(".frise9");

		// frises défilant de droite à gauche
		const frise8 = document.querySelector(".frise8");
		



		let friseRight = -1500;

		setInterval(() => {
			frise7.style.right = `${friseRight}px`
			friseRight += 20

			if (frise7.style.right > "100px") {
				friseRight = -1500
			}
		}, 1000)

		setInterval(() => {
			frise9.style.right = `${friseRight}px`
			friseRight += 20

			if (frise9.style.right > "100px") {
				friseRight = -1500
			}
		}, 1000)


		let friseLeft = -1500

		setInterval(() => {
			frise8.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise8.style.left > "100px") {
				friseLeft = -1500
			}
		}, 1000)


	})



	return (
		<div className="laVRcest">
			<div className="badge1">
				<div className="avisUtilisateurs1">Avis Utilisateurs</div>
				<div className="numbers1"></div>
				<div className="sur1">/5</div>
			</div>
			<div className="badge2">
				<div className="avisUtilisateurs2">Avis Utilisateurs</div>
				<div className="numbers2"></div>
				<div className="sur2">/5</div>
			</div>
			<div className="badge3">
				<div className="avisUtilisateurs3">Avis Utilisateurs</div>
				<div className="numbers3"></div>
				<div className="sur3">/5</div>
			</div>
			<img className="frise7" src="/img/frise-double-green-pastel.png" alt="okay"/>
			<img className="frise8" src="/img/frise-double-green-pastel.png" />
			<img className="frise9" src="/img/frise-double-green-pastel.png" />
		</div>

	);
}

export default SectionChiffres;
