import React from "react";
import HelloText from "../components/HelloText";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Link } from "react-router-dom";
import SuggestedCommunities from "../components/SuggestedCommunities";
import { grey } from "@mui/material/colors";
import useSWR from "swr";
const Home = () => {
  const { data, error } = useSWR(process.env.REACT_APP_DEF_URL + "events");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="home">
      <HelloText />
      <div className="home-content">
        <div className="home-list">
          {data.map((data) => (
            <Link to={"/event/" + data.event_link}>
              <div className="home-list-item">
                <div className="home-list-image">
                  <img src={data.image} alt="woonzero community" />
                </div>
                <div className="home-list-body">
                  <div className="home-list-feature">
                    <div className="feature">
                      <i class="ri-calendar-event-fill"></i>
                      <span>{data.date}</span>
                    </div>
                    <div className="feature">
                      <i class="ri-map-pin-line"></i>
                      <span>{data.location}</span>
                    </div>
                  </div>
                  <p>{data.name}</p>
                </div>
                <div className="home-list-footer">
                  <div className="community-name">
                    <Link
                      to={"/c/" + data.community_link}
                      className="community-name-p"
                    >
                      {data.community_name}
                    </Link>
                  </div>
                  <AvatarGroup sx={{ width: 60 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={data.avatar1}
                      sx={{ width: 30, height: 30, cursor: "pointer" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src={data.avatar2}
                      sx={{ width: 30, height: 30, cursor: "pointer" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      sx={{
                        width: 30,
                        height: 30,
                        cursor: "pointer",
                        bgcolor: grey[200],
                        color: "black",
                        fontSize: 10,
                      }}
                      className="avatar-group-item"
                    >
                      +{data.plussort}
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="right-side">
          <SuggestedCommunities />
        </div>
      </div>
    </div>
  );
};

export default Home;
