import React from "react";
import HelloText from "../components/HelloText";
import SuggestedCommunities from "../components/SuggestedCommunities";

const Categories = () => {
  return (
    <div className="categories">
      <HelloText />
      <div className="flex">
        <div className="left-side">
          <div className="categories-lists">
            <div className="categories-single">
              <div className="categories-img">
                <img
                  src="https://woonzero.com/clan-image/wlq3753.jpg"
                  alt="categories img"
                />
              </div>
              <div className="categories-body">
                <p>Konser</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <SuggestedCommunities />
        </div>
      </div>
    </div>
  );
};

export default Categories;
