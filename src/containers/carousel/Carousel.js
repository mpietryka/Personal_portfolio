import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MainContainer, Heading } from "../../components";

export const Carousel = () => {
  return (
    <MainContainer>
      <Heading>Github Repositories</Heading>
      <Swiper slidesPerView={1} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <p className="flex m-12 justify-center">Slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="flex m-12 justify-center">Slide 2</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="flex m-12 justify-center">Slide 3</p>
        </SwiperSlide>
      </Swiper>
    </MainContainer>
  );
};
