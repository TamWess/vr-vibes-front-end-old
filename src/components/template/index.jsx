import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import "../../utils/style/libs/base.scss";
import "./style.scss";
import 'animate.css';

// Responsive App ip adress: http://192.168.8.123:3000/

function Template() {
	useEffect(() => { 

		// Tentative changement d'animation logo nav au changement de width screen

		if(window.screen.width<576){
			document.getElementsByClassName("animate__pulse").className = "animate__tada";
		}
	});

	return (
		<>
			<header>
				<div className="header">
					<Link to="Home">
						<img className="headerLogo animate__animated animate__pulse"
							src="/icns/vr-vibes-logo.png"
							alt="VR Vibes logo entreprise réalité virtuelle animation VR événement Paris ">
						</img>
					</Link>
					<Link to="" className="itemsNav">Animation VR pour Entreprise</Link>
					<Link to="" className="itemsNav">Animation VR pour Événements Familiaux</Link>
					<Link to="" className="itemsNav">Productions VR</Link>
					<Link to="" className="contactButton">Contact</Link>
				</div>
			</header>

			<section>
				<Outlet />
			</section>
			<footer>
				<img className="friseGreenPastel" src="/img/frise-pastel.png" alt="" />
				<img className="friseGreenPastel" src="/img/frise-green-pastel.png" alt="" />
				<img className="friseFooter" src="/img/frise-footer.png" alt="" />
				<div className="footer">
					<div className="footerDiv01">
						<p>Mentions légales</p>
						<p>CGU</p>
						<p>CGV</p>
					</div>
					<div className="footerDiv02">
						<p>Plan du site</p>
						<p>Pour les entreprises</p>
						<p>Pour les événements familiaux</p>
						<p>Notre catalogue d'expériences VR</p>
						<p>Actus</p>
					</div>
					<div className="footerDiv03">
						<div className="footerDiv03Text">
							<p>VR Vibes dans toute la région parisienne</p>
						</div>
						<div className="locationLogo"></div>
						{/* <GoogleMap 
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
			></GoogleMap> */}
					</div>
					<div className="footerDiv04">
						<p>Contact</p>
						<p>0ù nous trouver</p>
						<p>FAQ</p>
					</div>

					{/* Reseaux sociaux */}
					{/* <div className="footerDiv05">
            <img src="/icns/facebook.svg" alt="" />
            <img src="/icns/instagram.svg" alt="" />
            <img src="/icns/twitter.svg" alt="" />
          </div> */}

				</div>
			</footer>
		</>
	);
}

export default Template;
