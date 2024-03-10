import React, { useRef } from "react";
import { BiLike, BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { sliderData } from "../../data/Home";
import { IoIosStar } from "react-icons/io";
const HomeSlider = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <div className=" mt-[8rem] w-full flex justify-center items-center flex-col">
        <div className="flex justify-center items-center ">
          <h1 className="text-secondheading text-main-dark uppercase">
            What you get
          </h1>
        </div>

        <h1 className="text-mianheading ">Our top Resources</h1>
        <div className="flex justify-end items-center w-[79%]">
          <div className="flex gap-4 ">
            <div
              className="bg-[#BEFEFA] p-2 rounded-full flex justify-center items-center"
              onClick={goPrev}
            >
              <BiSolidLeftArrow className="cursor-pointer text-main-dark text-[22px]" />
            </div>
            <div
              className="bg-[#BEFEFA] p-2 rounded-full flex justify-center items-center"
              onClick={goNext}
            >
              <BiSolidRightArrow className="cursor-pointer text-main-dark text-[22px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-8 mb-4">
        <Swiper
          ref={swiperRef}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Autoplay]}
          className="w-full "
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[511px] h-[332px] relative">
                <img
                  src={item.img}
                  alt=""
                  className="absolute w-[80%] h-[90%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
                />
                <div className="absolute bottom-0 right-0 flex justify-center items-center flex-col gap-3 w-[70%] bg-white p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-[15px] font-[800]">{item.name}</p>
                      <p className="text-sm text-[#505050]">{item.jobTitle}</p>
                    </div>

                    <div className="flex justify-center gap-3 items-center">
                      <div className="text-white text-sm bg-[#5D5DFF] p-1 rounded-full flex justify-center items-center">
                        <BiLike />
                      </div>
                      <p className="text-[15px] font-[800]">Testimonial</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[16px]">
                      I would recommend Notion for anyone trying to get the word
                      out about their business. It has saved me so much time!
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 flex justify-center items-center py-3 px-3 gap-1  bg-black">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <div className="flex flex-row justify-center items-center text-white ">
                        <IoIosStar />
                      </div>
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeSlider;
