import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "../../utils/style/libs/base.scss"
import "./style.scss";

function Template() {
  useEffect(() => {});

  return (
    <>
      <header>
        <div className="header">
          <Link to="Home">
            <img className="headerLogo"
              src="/icns/vr-vibes-logo.svg"
              alt="VR Vibes logo entreprise réalité virtuelle animation VR événement Paris ">
			</img>
          </Link>
		  <Link to="" className="itemsNav">Animation pour Entreprise</Link>
		  <Link to="" className="itemsNav">Animation Événements Familiaux</Link>
		  <Link to="" className="itemsNav">Productions VR</Link>
		  <Link to="" className="contactButton">Contact</Link>
        </div>
      </header>

      <section>
        <Outlet />
      </section>
      <footer>
        <div className="footer">
          <div className="footerDiv01">
            <p>Mentions légales</p>
            <p>CGU</p>
            <p>CGV</p>
          </div>
          <div className="footerDiv02">
            <p>Plan du site</p>
            <p>La carte</p>
            <p>San Cho Story</p>
            <p>Le resto</p>
            <p>Actus</p>
          </div>
          <div className="footerDiv03">
            <div className="footerDiv03Text">
              <p>San Cho en région parisienne</p>
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
          <div className="footerDiv05">
            <img src="/icns/facebook.svg" alt="" />
            <img src="/icns/instagram.svg" alt="" />
            <img src="/icns/twitter.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Template;
