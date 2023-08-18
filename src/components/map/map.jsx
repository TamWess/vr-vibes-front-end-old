import React, {useEffect} from "react";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./map.scss"

// région ile de france

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912027.7739688079!2d2.4919365393223765!3d48.693072676893316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1691516437068!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 

function GoogleMapSection (){

	const {isLoaded} = useLoadScript({
		googleMapsAPIKey: process.env.GoogleMapsAPIKey
	});
	if (!isLoaded) return <div>Loading...</div>;

	


	// useEffect(()=>{

	// })

	return(
		<GoogleMap zoom={11} center={{lat: 48.866667, lng: 2.333333}} mapContainerClassName="mapContainer"></GoogleMap>
	)
}

export default GoogleMapSection;

