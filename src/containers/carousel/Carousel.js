import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { Centered, Heading2, Link, Paragraph } from "../../components";

export const Carousel = (props) => {
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <SwiperSlide key={item.id}>
          <Centered>
            <div className="w-3/4">
              <Heading2>{item.name}</Heading2>
              <Paragraph>{item.description}</Paragraph>
              <Link href={item.html_url}>Learn more</Link>
            </div>
          </Centered>
        </SwiperSlide>
      ))
    ) : (
      <p></p>
    );

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "25px",
      }}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={30}
      className="mySwiper"
    >
      {listRepos}
    </Swiper>
  );
};
