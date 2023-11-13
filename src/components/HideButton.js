import React from "react";

const HideButton = ({ handlesComments, buttonContent}) => {
  return (
    <>
      <button type="text" onClick={handlesComments}>
        {buttonContent}
      </button>
    </>
  );
};

export default HideButton;
