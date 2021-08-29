import React from "react";
import MangalBhatImage from "../../images/mangalbhat.jpg";
import './mangalbhat.css';
const MangalBhat = () => {
  return (
    <div className="renderArea">
      <h1 className="pageHeading">Mangal Bhat Puja</h1>
      <div className="page">
        <div>
          <p>
            Mangal Bhat Dosh Puja Cost Ujjain Mangalnath Temple is vary on type
            of puja perform at mangalnath temple. different type of Mangal Bhat
            Puja as given below.
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
          <p>
            Which type of puja you have to perform is depends on horoscope &
            position of Mangal Graha In your Kundali. so it is always best to
            show your kundali to us before performing puja. if the kundali is
            mangalik and degree of mangal graha is high then the person has to
            face a lot of problems in his life, to avoid problems Mangal Bhat
            Puja is done
          </p>
          <h4>For Any Type of Puja Contact Pandit Om Ji Bharadwaj + 91 7999026374  </h4>
        </div>
        <img src={MangalBhatImage}></img>
      </div>
    </div>
  );
};
export default MangalBhat;
