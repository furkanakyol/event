import React from "react";
import HelloText from "../components/HelloText";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import { grey } from "@mui/material/colors";
const Home = () => {
  return (
    <div className="home">
      <HelloText />
      <div className="home-content">
        <div className="home-list">
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-map-pin-line"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="home-list-item">
            <div className="home-list-image">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="woonzero community"
              />
            </div>
            <div className="home-list-body">
              <div className="home-list-feature">
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>25 haziran</span>
                </div>
                <div className="feature">
                  <i class="ri-calendar-event-fill"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
              <p>Woonzero community topluluk buluşması</p>
            </div>
            <div className="home-list-footer">
              <div className="community-name">
                <p className="community-name-p">Woonzero Community</p>
              </div>
              <AvatarGroup sx={{ width: 60 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 30, height: 30, cursor: "pointer" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
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
                  +20
                </Avatar>
              </AvatarGroup>
            </div>
          </div>
        </div>
        <div className="right-side">
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
                  <p className="p1">Woonzero Community das das dasdsadsa</p>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
