import React, { useState, useEffect } from "react";
import Memories from "../Assets/memories";
import Plates from "../Assets/plates";
import MemoryModal from "./MemoryModal";

const MainContent = React.memo(() => {
  // Variables
  const [memoriesArray, setMemoriesArray] = useState([]); // Stores chosen memories
  const [selectedMemoryIndex, setSelectedMemoryIndex] = useState(0); // Stores the memory to be displayed within the modal
  const [plateImages, setPlateImages] = useState([]); // Stores the randomly selected plate images
  const [modalVisible, setModalVisible] = useState(false); // Tracks the visibility of the modal
  const [modalKey, setModalKey] = useState(0); // Key to force re-render of MemoryModal component

  // Functions
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const fillGrid = () => {
    // Fills grid with elements and also links ID to memories array
    const usedNumbers = []; // So it doesn't repeat
    const selectedMemories = [];
    const selectedPlates = [];
    let i = 0;
    while (i < 12) {
      // Needs 12 elements, so while loop is more suitable
      let selectedNumber = getRandomInt(Memories.length - 1);
      if (!usedNumbers.includes(selectedNumber)) {
        // Only continues if it hasn't been selected already
        selectedMemories.push(selectedNumber);
        selectedPlates.push(Plates[getRandomInt(Plates.length)]);
        usedNumbers.push(selectedNumber);
        i++;
      }
    }
    setMemoriesArray(selectedMemories);
    setPlateImages(selectedPlates);
  };

  const selectMemoryAndOpenModal = (index) => {
    setSelectedMemoryIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    fillGrid();
  }, []);

  // HTML
  return (
    <div className="main-content">
      <div className="content-grid">
        {memoriesArray.map((memory, index) => (
          <div
            className={`pointer grid-plate animate__animated animate__fadeInLeft animate__delay-${
              index % 6
            }s`}
            key={index}
            id={memory}
            onClick={() => selectMemoryAndOpenModal(index)}
            style={{ backgroundImage: `url(${plateImages[index]})` }}
          ></div>
        ))}
        <MemoryModal
          key={modalKey}
          memory={Memories[selectedMemoryIndex]}
          show={modalVisible}
          onClose={closeModal}
        />
      </div>
    </div>
  );
});

export default MainContent;

