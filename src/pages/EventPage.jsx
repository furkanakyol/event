import React from "react";
import SuggestedCommunities from "../components/SuggestedCommunities";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
const EventPage = () => {
  let params = useParams();
  const { data, error } = useSWR(
    process.env.REACT_APP_DEF_URL + "event?link=" + params.eventId
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="evet-page">
      <div className="flex">
        <div className="left-side" style={{ width: "75%" }}>
          <div className="event-image">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.slider ? (
                data.slider.map((slider) => (
                  <SwiperSlide>
                    <img src={slider.slider_image} className="sliderimg" />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png" className="sliderimg" />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className="event-name">
            <div className="event-img">
              <img
                src={data.image}
                alt="event img"
              />
            </div>
            <div className="event-name-tx">
              <p>{data.name}</p>
              <div className="futures">
                <div className="future">
                  <i class="ri-calendar-event-line"></i>
                  <span>{data.date}</span>
                </div>
                <div className="future">
                  <i class="ri-map-pin-line"></i>
                  <span>{data.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="event-desc" >
            <span dangerouslySetInnerHTML={{__html: data.description}}></span>
            <iframe
              src={`https://www.google.com/maps/embed?pb=${data.maps_embed}`}
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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

export default EventPage;
