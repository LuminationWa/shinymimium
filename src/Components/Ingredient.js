import React, { useState, useEffect } from "react";

const Ingredient = (props) => {
  
  //Variables
  const ingredientPicture = props.ingredientPicture;
  const frontPicture = props.frontPicture;
  const backPicture = props.backPicture;
  const frontTitle = props.frontTitle;
  const backText = props.backText;
  const [modalSide, setModalSide] = useState("Front"); //Stores which side of the car should be shown
  const [content, setContent] = useState();

  //Functions
  const openModal = () => {};
  const changeSide = () => {
    //Sets the side to the opposite one
    modalSide === "Front" ? setModalSide("Back") : setModalSide("Front");
  };
  const writeFront = () => {
    //Writes front side content
    setContent(
      <div className="modal-front">
        <h1>{frontTitle}</h1>
        <img alt="Front">{frontPicture}</img>
      </div>
    );
  };
  const writeBack = () => {
    //Writes back side content
    setContent(
      <div className="modal-back">
        <img alt="Back">{backPicture}</img>
        <p className="back-text">{backText}</p>
      </div>
    );
  };

  //UseEffect
  useEffect(() => {
    //Displays content based on modal side variable
    modalSide === "Front" ? writeFront() : writeBack();
  }, [modalSide]);

  return (
    <div
      className="ingredient"
      onClick={() => {
        openModal();
      }}
      style={{ backgroundImage: ingredientPicture }}
    >
      <div className="modal hidden">
        <div className="modal-content">{content}</div>
        <button
          onClick={() => {
            changeSide();
          }}
        >
          Change side
        </button>
      </div>
    </div>
  );
};

export default Ingredient;
