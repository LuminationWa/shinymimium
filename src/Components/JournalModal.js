import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Journal from "../Assets/journal";

const JournalModal = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleClose = () => {
    props.onClose();
  };
  const handlePageChange = (action) => {
    if (currentPage === Journal.length - 1 && action === "next") {
      setCurrentPage(0);
    } else if (currentPage === 0 && action === "previous") {
      setCurrentPage(Journal.length - 1);
    } else {
      return action === "next"
        ? setCurrentPage(currentPage + 1)
        : setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      centered
      className="animate__animated animate__bounceIn custom-modal"
    >
      <Modal.Header>
        <Modal.Title className="animate__animated animate__bounceIn">
          {Journal[currentPage].date}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="side-modal-body">
        {Journal[currentPage].description}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => handlePageChange("previous")}
          className="animate__animated animate__bounceIn"
        >
          Back
        </Button>
        <Button
          variant="secondary"
          onClick={() => handlePageChange("next")}
          className="animate__animated animate__bounceIn"
        >
          Next
        </Button>
      </Modal.Footer>
      <p>{currentPage + 1} / {Journal.length}</p>
    </Modal>
  );
};

export default JournalModal;
