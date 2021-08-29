import React from "react";
import "./LanguageHeader.css";
const LanguageHeader = () => {
  return (
    <div className="LanguageHeader">
      <a href="." className="languageSelectorButtons">
        हिन्दी 
      </a>
      <span>|</span>
      <a href="." className="languageSelectorButtons">
        English &nbsp;
      </a>
    </div>
  );
};
export default LanguageHeader;
