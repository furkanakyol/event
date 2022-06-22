import React from "react";
import avatar1 from "../img/avatar1.png";
const SuggestedCommunities = () => {
  return (
    <div className="suggested-communities">
      <div className="communities-title">
        <i class="ri-group-line"></i>
        <span>Önerilen topluluklar</span>
      </div>
      <div className="communities-body">
        <div className="community-item">
          <div className="flex-1">
            <img src={avatar1} alt="" />
          </div>
          <div className="flex-2">
            <p className="p1">Woonzero Community</p>
            <div className="p2">
              <div className="future">
                <i class="ri-map-pin-line"></i>
                <span>Muğla/Türkiye</span>
              </div>
              <div className="future">
                <i class="ri-user-line"></i>
                <span>200 üye</span>
              </div>
            </div>
          </div>
        </div>
        <div className="community-item">
          <div className="flex-1">
            <img src={avatar1} alt="" />
          </div>
          <div className="flex-2">
            <p className="p1">Woonzero Community</p>
            <div className="p2">
              <div className="future">
                <i class="ri-map-pin-line"></i>
                <span>Muğla/Türkiye</span>
              </div>
              <div className="future">
                <i class="ri-user-line"></i>
                <span>200 üye</span>
              </div>
            </div>
          </div>
        </div>
        <div className="community-item">
          <div className="flex-1">
            <img src={avatar1} alt="" />
          </div>
          <div className="flex-2">
            <p className="p1">Woonzero Community</p>
            <div className="p2">
              <div className="future">
                <i class="ri-map-pin-line"></i>
                <span>Muğla/Türkiye</span>
              </div>
              <div className="future">
                <i class="ri-user-line"></i>
                <span>200 üye</span>
              </div>
            </div>
          </div>
        </div>
        <div className="community-item">
          <div className="flex-1">
            <img src={avatar1} alt="" />
          </div>
          <div className="flex-2">
            <p className="p1">Woonzero Community</p>
            <div className="p2">
              <div className="future">
                <i class="ri-map-pin-line"></i>
                <span>Muğla/Türkiye</span>
              </div>
              <div className="future">
                <i class="ri-user-line"></i>
                <span>200 üye</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCommunities;
