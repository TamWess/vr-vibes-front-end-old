import React, { } from "react"
import "./accueil.entreprise.scss"



function AccueilEntreprise() {

	return (
		<div className="home1">
			<img className="logoVRvibes" src="/icns/vr-vibes-logo.png" />
			{/* <div className="divTestBlue"/> */}
			<div className="imageVREntreprise1 animate__animated animate__backInLeft" />
			<div className="imageVREntreprise2 animate__animated animate__backInDown" />
			<div className="imageVREntreprise3 animate__animated animate__backInRight" />
			<div className="accueilImage"></div>
			<img className="frise1" src="/img/frise-double-green-pastel.png" alt="okay" />
			<img className="frise2" src="/img/frise-double-green-pastel.png" />
			<img className="frise3" src="/img/frise-double-green-pastel.png" />
			<img className="frise4" src="/img/frise-double-green-pastel.png" />
			<img className="frise5" src="/img/frise-double-green-pastel.png" />
			<img className="frise6" src="/img/frise-double-green-pastel.png" />
		</div>
	)
}

export default AccueilEntreprise;
