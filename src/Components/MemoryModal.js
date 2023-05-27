import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const MemoryModal = (props) => {
  const [pictureCount, setPictureCount] = useState(0);
  const [currentSide, setCurrentSide] = useState("front");
  const mem = props.memory;

  const frontPictures = mem.frontPictures.map((picture, index) => (
    <img
      key={index}
      src={require(`../Assets/screenshots/${picture}.png`)}
      alt="Memory"
      className={`front-picture animate__animated animate__bounceIn ${
        mem.frontPictures.length > 1 ? "pointer" : ""
      }`}
      onClick={() => {
        mem.frontPictures[pictureCount + 1]
          ? setPictureCount(pictureCount + 1)
          : setPictureCount(0);
      }}
    />
  ));

  const handleClose = () => {
    props.onClose();
  };

  const handleTurn = () => {
    setCurrentSide(currentSide === "front" ? "back" : "front");
  };

  useEffect(() => {
    // This effect will be triggered whenever `currentSide` changes
    console.log("currentSide changed:", currentSide);
  }, [currentSide]);

  return (
    <Modal show={props.show} onHide={handleClose} centered>
      {currentSide === "front" ? (
        <div className="modal-main-content">
          <Modal.Header>
            <Modal.Title className="animate__animated animate__bounceIn">
              {mem.frontTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {frontPictures[pictureCount]}
            <p className="animate__animated animate__bounceIn">
              {mem.frontText}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="animate__animated animate__bounceIn"
            >
              Close
            </Button>
            <Button
              variant="secondary"
              onClick={handleTurn}
              className="animate__animated animate__bounceIn"
            >
              Turn card
            </Button>
          </Modal.Footer>
        </div>
      ) : (
        <div className="modal-main-content">
          <Modal.Header>
            <Modal.Title className="animate__animated animate__bounceIn">
              {mem.backTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={require(`../Assets/photos/${mem.backPicture}`)}
              alt="Memory"
              className="front-picture animate__animated animate__bounceIn"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="animate__animated animate__bounceIn"
            >
              Close
            </Button>
            <Button
              variant="secondary"
              onClick={handleTurn}
              className="animate__animated animate__bounceIn"
            >
              Turn card
            </Button>
          </Modal.Footer>
        </div>
      )}
    </Modal>
  );
};

export default MemoryModal;
