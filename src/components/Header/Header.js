import React from "react";
import "./Header.css";
const Header = ({ onPageChange }) => {
  const onLinkClicked = (ev) => {
    ev.preventDefault();
    onPageChange(ev.target.id);
  };
  return (
    <div className="Header">
      <a href="Home" onClick={onLinkClicked} id="Home" className="customLinks">
        Home
      </a>
      <div className="HeaderLinks">
        <a
          href="MangalBhat"
          className="customLinks"
          id="MangalBhat"
          onClick={onLinkClicked}
        >
          Mangal Bhat Pooja
        </a>
        <a
          href="KaalSarp"
          className="customLinks"
          id="KaalSarp"
          onClick={onLinkClicked}
        >
          Kaal Sarp Pooja
        </a>
        <a href="tel:+917999026374" className="customLinks">
          Call
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=917999026374"
          className="customLinks"
          target='_blank'
          rel='noreferrer'
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};
export default Header;
