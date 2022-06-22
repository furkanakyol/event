import React from "react";
import SuggestedCommunities from "../components/SuggestedCommunities";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import EventList from "../components/EventList";
const CommunitPage = () => {
  let params = useParams();
  const { data, error } = useSWR(
    process.env.REACT_APP_DEF_URL + "community?link=" + params.communityId
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="evet-page">
      <div className="flex">
        <div className="left-side" style={{ width: "75%" }}>
          <div className="event-image">
            <img src={data.community_banner} alt="" style={{width:"100%", height:"100%"}} />
          </div>
          <div className="event-name">
            <div className="event-img">
              <img src={data.community_img} alt="event img" />
            </div>
            <div className="event-name-tx">
              <p>{data.community_name}</p>
              <div className="futures">
                <div className="future">
                  <i class="ri-user-line"></i>
                  <span>{data.user_sort} üye</span>
                </div>
              </div>
            </div>
          </div>
          <div className="event-desc">
            <h3>Bu topluluğun oluşturduğu etkinlikler:</h3>
            <EventList/>

          </div>
        </div>
        <div
          className="right-side"
          style={{ paddingTop: "132px", paddingLeft: "20px" }}
        >
          <SuggestedCommunities />
        </div>
      </div>
    </div>
  );
};

export default CommunitPage;
