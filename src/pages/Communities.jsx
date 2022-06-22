import React from "react";
import SuggestedCommunities from "../components/SuggestedCommunities";
import HelloText from "../components/HelloText";
import useSWR from "swr";
import { Link } from "react-router-dom";
const Communities = () => {
  const { data, error } = useSWR(process.env.REACT_APP_DEF_URL + "communities");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="communities">
      <HelloText />
      <div className="flex">
        <div className="left-side">
          <div className="community-list">
            {data.map((data) => (
              <Link to={"/c/"+data.community_link}>
                <div className="community-list-single">
                  <div className="community-list-img">
                    <img
                      src={data.community_banner}
                      alt={data.community_name}
                    />
                  </div>
                  <div className="community-list-body">
                    <div className="communitiy-list-image">
                      <img src={data.community_img} alt={data.community_name} />
                    </div>
                    <div className="community-list-name">
                      <p className="name">{data.community_name}</p>
                      <div className="futures">
                        <div className="future">
                          <i class="ri-map-pin-line"></i>
                          <span>{data.community_location}</span>
                        </div>
                        <div className="future">
                          <i class="ri-user-line"></i>
                          <span>{data.user_sort} üye</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
