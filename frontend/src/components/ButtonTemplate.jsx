/* eslint-disable react/prop-types */
import React from "react";
/* 
buttonType : type du bouton
buttonText : text du bouton
buttonStyle: css du bouton
methodOnClick : la methode lien au clique du bouton
*/
function ButtonTemplate({
  buttonType,
  buttonText,
  buttonStyle,
  methodOnClick,
}) {
  return (
    <div>
      <button
        // eslint-disable-next-line react/button-has-type
        type={buttonType}
        onClick={methodOnClick}
        className={`${buttonStyle}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonTemplate;
