import React from "react";
import SuggestedCommunities from "../components/SuggestedCommunities";
import HelloText from "../components/HelloText";
const Communities = () => {
  return (
    <div className="communities">
      <HelloText />
      <div className="flex">
        <div className="left-side">
          <div className="community-list">
            <div className="community-list-single">
              <div className="community-list-img">
                <img
                  src="https://woonzero.com/clan-image/sd7799.jpg"
                  alt="woonzero community"
                />
              </div>
              <div className="community-list-body">
                <div className="communitiy-list-image">
                  <img
                    src="https://woonzero.com/clan-image/sd7799.jpg"
                    alt="woonzero community banner"
                  />
                </div>
                <div className="community-list-name">
                  <p className="name">Woonzero Community</p>
                  <div className="futures">
                    <div className="future">
                      <i class="ri-map-pin-line"></i>
                      <span>Muğla/türkiye</span>
                    </div>
                    <div className="future">
                      <i class="ri-user-line"></i>
                      <span>200 Üye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> <div className="community-list-single">
              <div className="community-list-img">
                <img
                  src="https://woonzero.com/clan-image/sd7799.jpg"
                  alt="woonzero community"
                />
              </div>
              <div className="community-list-body">
                <div className="communitiy-list-image">
                  <img
                    src="https://woonzero.com/clan-image/sd7799.jpg"
                    alt="woonzero community banner"
                  />
                </div>
                <div className="community-list-name">
                  <p className="name">Woonzero Community</p>
                  <div className="futures">
                    <div className="future">
                      <i class="ri-map-pin-line"></i>
                      <span>Muğla/türkiye</span>
                    </div>
                    <div className="future">
                      <i class="ri-user-line"></i>
                      <span>200 Üye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> <div className="community-list-single">
              <div className="community-list-img">
                <img
                  src="https://woonzero.com/clan-image/sd7799.jpg"
                  alt="woonzero community"
                />
              </div>
              <div className="community-list-body">
                <div className="communitiy-list-image">
                  <img
                    src="https://woonzero.com/clan-image/sd7799.jpg"
                    alt="woonzero community banner"
                  />
                </div>
                <div className="community-list-name">
                  <p className="name">Woonzero Community</p>
                  <div className="futures">
                    <div className="future">
                      <i class="ri-map-pin-line"></i>
                      <span>Muğla/türkiye</span>
                    </div>
                    <div className="future">
                      <i class="ri-user-line"></i>
                      <span>200 Üye</span>
                    </div>
                  </div>
                </div>
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

export default Communities;
