import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { MainContainer } from "../../components";

export const Carousel = () => {
  return (
    <>
      <MainContainer>
        <Swiper className="mySwiper">
          <SwiperSlide>
              <p className="m-16 text-center">Slide 1</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 2</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 3</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 4</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 5</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 6</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 7</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="m-16 text-center">Slide 8</p>
          </SwiperSlide>
        </Swiper>
      </MainContainer>
    </>
  );
};
