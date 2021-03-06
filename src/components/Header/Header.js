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
        <a href="tel:+919981159011" className="customLinks">
          Call
        </a>
        <a
          href="https://wa.me/send?phone=919981159011"
          className="customLinks"
          target="_blank"
          rel='noreferrer'
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};
export default Header;