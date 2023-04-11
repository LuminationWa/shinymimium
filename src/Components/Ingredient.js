import React, { useState, useEffect } from "react";

const Ingredient = (props) => {
  //Variables
  const ingredientPicture = props.ingredientPicture;
  const frontTitle = props.frontTitle;
  const frontText = props.frontText;
  const frontPictures = props.frontPictures;
  const backTitle = props.backTitle;
  const backPicture = props.backPicture;
  const [modalSide, setModalSide] = useState("Front"); //Stores which side of the car should be shown
  const [content, setContent] = useState();

  //Functions
  const openModal = () => {};
  const changeSide = () => {
    //Sets the side to the opposite one
    modalSide === "Front" ? setModalSide("Back") : setModalSide("Front");
  };
  const writeBack = () => {
    //Writes back side content
    setContent(
      <div className="modal-back">
        <h1>{backTitle}</h1>
        <img alt="Back">{backPicture}</img>
      </div>
    );
  };
  const writeFront = () => {
    //Writes front side content
    setContent(
      <div className="modal-front">
        <h1>{frontTitle}</h1>
        {frontPictures.map((picture, index) => (
          <img key={index} alt="Front" src={picture} />
        ))}
        <p className="front-text">{frontText}</p>
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
