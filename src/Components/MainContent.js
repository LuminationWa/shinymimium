import React, { useState, useEffect } from "react";
import Memories from "../Assets/memories";
import Plates from "../Assets/plates";
import Soup from "../Assets/drawings/soup.png";

const MainContent = () => {
  //Variables
  const [memoriesArray, setMemoriesArray] = useState([]);
  //Functions
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const fillGrid = () => {
    const usedNumbers = []; //So doesn't repeat
    const selectedMemories = [];
    let i = 0;
    while (i < 12) {
      //Needs 12 elements so while loop more suitable
      let selectedNumber = getRandomInt(Memories.length - 1);
      if (!usedNumbers.includes(selectedNumber)) {
        //Only continues if hasn't been selected already
        selectedMemories.push(Memories[selectedNumber]);
        usedNumbers.push(selectedNumber);
        i++;
      }
    }
    setMemoriesArray(selectedMemories);
  };
  const getRandomPlate = () => {
    return Plates[getRandomInt(Plates.length)];
  };

  useEffect(() => {
    fillGrid();
  }, []);
  return (
    <div className="main-content">
      <div className="content-grid">
        {memoriesArray.map((memory, index) =>
        //Conditional so second column / row goes at first time as first
          index < 6 ? (
            <div
              className={`grid-plate animate__animated animate__fadeInLeft animate__delay-${index}s`}
              key={index}
              style={{ backgroundImage: `url(${getRandomPlate()})` }}
            ></div>
          ) : (
            <div
              className={`grid-plate animate__animated animate__fadeInLeft animate__delay-${
                index - 6
              }s`}
              key={index}
              style={{ backgroundImage: `url(${getRandomPlate()})` }}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default MainContent;
