import React from "react";
import "./PictureGrid.css";

function PictureGrid() {
  return (
    <div className="pictureGridContainer">
      <div className="mainPicture">
        <img src="//unsplash.it/500/500" alt="" />
        <div className="sidePictureOne">
          <img src="//unsplash.it/250/250" alt="" />
        </div>
        <div className="sidePictureTwo">
          <img src="//unsplash.it/125/125" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PictureGrid;
