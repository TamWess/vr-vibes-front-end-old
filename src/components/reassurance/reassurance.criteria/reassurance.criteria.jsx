import "./reassurance.criteria.scss";
import React, { useEffect, useRef } from "react";
import "../../../utils/style/libs/base.scss";

function ReassuranceCriteria() {
  return (
    <React.Fragment>
      <div className="reassuranceCriteriaDiv">
        <div className="reassuranceCriteria">DÉPLACEMENT<br/>INCLUS</div>
        <div className="reassuranceCriteria">CLIENTS 100%<br/>SATISFAITS</div>
        <div className="reassuranceCriteria">LES MEILLEURES JEUX<br/>VR DISPONIBLES</div>
      </div>
    </React.Fragment>
  );
}

export default ReassuranceCriteria;
