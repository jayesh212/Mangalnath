import React from "react";
import KaalSarpImage from "../../images/kaalsarp.jpg"
const KaalSarp = () => {
  return (
    <div className="renderArea">
      <h1 className="pageHeading">Kaal Sarp Puja</h1>
      <div className="page">
        <div>
          <p>
            Kaal Sarp Puja Cost Ujjain Mangalnath Temple can vary on the
            type of puja performed at mangalnath temple.
          </p>
          <ul>
            <li>
              The First type Mangal Puja is Normal Mangal Puja Costs Rs. 2100.
            </li>
            <li>The Second type is Special Mangal Puja & Cost is Rs. 3100 </li>
            <li>
              The Third type of Mangal Puja is Special Puja & Cost is RS 4100.
            </li>
          </ul>
          <h3>
            For Any Type of Puja Contact Pandit Om Ji Bharadwaj + 91 9981159011{" "}
          </h3>
        </div>
        <img src={KaalSarpImage} className='pujaImage'></img>
      </div>
    </div>
  );
};
export default KaalSarp;
