import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const SideModal = (props) => {
  const [selectedImage, setSelectedImage] = useState("1");
  const maxImages = 43; // Number of images in folder

  const handleClose = () => {
    props.onClose();
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (!event.target.closest(".modal-content")) {
        props.onClose();
      }
    };
    for (let i = 0; i < 100 ; i++) {
        console.log(getRandomInt(19 + 1));
    }

    document.addEventListener("mousedown", handleClickOutsideModal);

    if (props.show) {
      setSelectedImage(getRandomInt(maxImages));
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [props.show]);

  return (
    <Modal show={props.show} onHide={handleClose} centered className="front-picture animate__animated animate__bounceIn">
      <Modal.Body className="side-modal-body">
        <img
          src={require(`../Assets/screenshots/side/${selectedImage}.png`)}
          alt="Memory"
        />
      </Modal.Body>
    </Modal>
  );
};

export default SideModal;
