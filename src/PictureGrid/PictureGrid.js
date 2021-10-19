import React from "react";
import "./PictureGrid.css";

function PictureGrid() {
  return (
    <div>
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
      <div className="subPictureGrid">
        <img
          className="backgroundPictureGrid"
          src="//unsplash.it/250/250"
          alt=""
        />
        <div className="musicText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eveniet illo dolor facere fugit omnis voluptatibus natus? Quas
            tempore et sapiente maxime recusandae beatae placeat consectetur
            quaerat iusto distinctio amet pariatur veritatis eius, deserunt
            exercitationem rem? Aliquam nihil amet debitis dolores nobis
            mollitia officiis expedita ea asperiores aperiam, dolor repellendus.
          </p>
        </div>
      </div>
      <div className="overlappingPictureGrid">
        <div className="pictureGridMain">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eveniet illo dolor facere fugit omnis voluptatibus natus? Quas
            tempore et sapiente maxime recusandae beatae placeat consectetur
            quaerat iusto distinctio amet pariatur veritatis eius, deserunt
            exercitationem rem? Aliquam nihil amet debitis dolores nobis
            mollitia officiis expedita ea asperiores aperiam, dolor repellendus.
          </p>
        </div>
        <img className="pictureGridSubOne" src="//unsplash.it/250/100" alt="" />
        <img className="pictureGridSubTwo" src="//unsplash.it/240/100" alt="" />
      </div>

      <div className="overlappingPictureGridTwo">
        <div className="pOne"></div>
        <div className="pTwo"></div>
        <div className="pThree"></div>
      </div>
    </div>
  );
}

export default PictureGrid;
