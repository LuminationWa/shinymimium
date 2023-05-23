import React, { useState, useEffect } from "react";

const MemoryModal = (memory) => {
  let mem = memory.memory;
  const [pictureCount, setPictureCount] = useState(0); //Used to store index of displayed picture
  const frontPictures = mem.frontPictures.map((picture, index) => (
    <img
      key={index}
      src={require(`../Assets/screenshots/${picture}.png`)}
      alt="Memory"
      className="front-picture"
      onClick={() => {
        mem.frontPictures[pictureCount + 1] ? setPictureCount(pictureCount + 1) : setPictureCount(0);
      }}
    />
  ));
  return (
    <div className="main-modal animate__animated animate__pulse">
      <h1>{mem.frontTitle}</h1>
      {frontPictures[pictureCount]}
      <p>{mem.frontText}</p>
    </div>
  );
};

export default MemoryModal;
