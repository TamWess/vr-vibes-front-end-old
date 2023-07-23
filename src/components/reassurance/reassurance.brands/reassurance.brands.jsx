import "./reassurance.brands.scss";
import React, { useEffect, useRef} from "react";
import "../../../utils/style/libs/base.scss";

function ReassuranceBrands() {

  return (
	<React.Fragment>
		<div className="reassuranceBrands">
			<div className="nosPartenaires">NOS PARTENAIRES</div>
			<div ><img className="logoPartenaires" src="/icns/sanofi-logo.png" alt="" /></div>
			<div ><img className="logoPartenaires" src="/icns/ponticelli-logo.png" alt="" /></div>
			<div ><img className="logoPartenaires" src="/icns/partners-formation-logo.png" alt="" /></div>
		</div>
	</React.Fragment>

  );
}

export default ReassuranceBrands;
