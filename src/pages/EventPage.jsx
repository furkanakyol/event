import React from "react";
import SuggestedCommunities from "../components/SuggestedCommunities";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
const EventPage = () => {
  return (
    <div className="evet-page">
      <div className="flex">
        <div className="left-side" style={{width:"75%"}}>
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
              <SwiperSlide><img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="sliderimg"/></SwiperSlide>
              <SwiperSlide><img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="sliderimg"/></SwiperSlide>
            </Swiper>
          </div>
          <div className="event-name">
            <div className="event-img">
              <img
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="event img"
              />
            </div>
            <div className="event-name-tx">
              <p>Woonzero Community buluşması</p>
              <div className="futures">
                <div className="future">
                  <i class="ri-calendar-event-line"></i>
                  <span>25 Haziran</span>
                </div>
                <div className="future">
                  <i class="ri-map-pin-line"></i>
                  <span>Muğla/Türkiye</span>
                </div>
              </div>
            </div>
          </div>
          <div className="event-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              risus morbi adipiscing etiam feugiat nunc luctus nisi. Quis id
              sapien venenatis felis. Purus, pretium, pellentesque placerat
              commodo, tellus. Purus eget tempus, vestibulum mauris tristique
              lectus enim sit. Ut risus, dolor at at. Ut magna a faucibus vitae.
              At tellus fringilla imperdiet rutrum proin rutrum. Nunc mi sodales
              et eleifend sed hac. Nibh commodo eget et mattis lorem amet
              malesuada. Sed odio enim justo aliquet. Rhoncus nec faucibus
              mattis vulputate suspendisse nibh aliquam tellus. At enim vel diam
              quis lectus nunc aliquam nunc. Pharetra vivamus at quam
              sollicitudin tempor, etiam id mauris feugiat. Sit et sit sagittis
              sapien, congue proin id nullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              risus morbi adipiscing etiam feugiat nunc luctus nisi. Quis id
              sapien venenatis felis. Purus, pretium, pellentesque placerat
              commodo, tellus. Purus eget tempus, vestibulum mauris tristique
              lectus enim sit. Ut risus, dolor at at. Ut magna a faucibus vitae.
              At tellus fringilla imperdiet rutrum proin rutrum. Nunc mi sodales
              et eleifend sed hac. Nibh commodo eget et mattis lorem amet
              malesuada. Sed odio enim justo aliquet. Rhoncus nec faucibus
              mattis vulputate suspendisse nibh aliquam tellus. At enim vel diam
              quis lectus nunc aliquam nunc. Pharetra vivamus at quam
              sollicitudin tempor, etiam id mauris feugiat. Sit et sit sagittis
              sapien, congue proin id nullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              risus morbi adipiscing etiam feugiat nunc luctus nisi. Quis id
              sapien venenatis felis. Purus, pretium, pellentesque placerat
              commodo, tellus. Purus eget tempus, vestibulum mauris tristique
              lectus enim sit. Ut risus, dolor at at. Ut magna a faucibus vitae.
              At tellus fringilla imperdiet rutrum proin rutrum. Nunc mi sodales
              et eleifend sed hac. Nibh commodo eget et mattis lorem amet
              malesuada. Sed odio enim justo aliquet. Rhoncus nec faucibus
              mattis vulputate suspendisse nibh aliquam tellus. At enim vel diam
              quis lectus nunc aliquam nunc. Pharetra vivamus at quam
              sollicitudin tempor, etiam id mauris feugiat. Sit et sit sagittis
              sapien, congue proin id nullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              risus morbi adipiscing etiam feugiat nunc luctus nisi. Quis id
              sapien venenatis felis. Purus, pretium, pellentesque placerat
              commodo, tellus. Purus eget tempus, vestibulum mauris tristique
              lectus enim sit. Ut risus, dolor at at. Ut magna a faucibus vitae.
              At tellus fringilla imperdiet rutrum proin rutrum. Nunc mi sodales
              et eleifend sed hac. Nibh commodo eget et mattis lorem amet
              malesuada. Sed odio enim justo aliquet. Rhoncus nec faucibus
              mattis vulputate suspendisse nibh aliquam tellus. At enim vel diam
              quis lectus nunc aliquam nunc. Pharetra vivamus at quam
              sollicitudin tempor, etiam id mauris feugiat. Sit et sit sagittis
              sapien, congue proin id nullam.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5771754410334!2d28.25630876555827!3d36.85260127244736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfbdd3fe00f67f%3A0x8d1f5049b6aa87c4!2zxLBuw7Zuw7wgQ2QuLCA0ODcwMCBNYXJtYXJpcy9NdcSfbGE!5e0!3m2!1str!2str!4v1655920444484!5m2!1str!2str" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
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
