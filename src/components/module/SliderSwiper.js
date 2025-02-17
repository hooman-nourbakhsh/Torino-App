"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import { e2p } from "@/utils/replaceNumber";
import { imageSlider } from "@/constants/imageSlider";
import ArrowRight from "@icons/arrow-right.svg";
import ArrowLeft from "@icons/arrow-left.svg";
import styles from "@/module/SliderSwiper.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <Swiper
        pagination={{
          type: "fraction",
          el: ".pagination",
          renderFraction: (currentClass, totalClass) =>
            `<span class="${totalClass}">${e2p(totalClass)}</span> / 
             <span class="${currentClass}">${e2p(currentClass)}</span>`,
          formatFractionCurrent: e2p,
          formatFractionTotal: e2p,
        }}
        modules={[Navigation, Pagination, EffectCards]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        cardsEffect={{
          perSlideOffset: 15,
          perSlideRotate: 0,
          slideShadows: false,
        }}
        grabCursor={true}
        effect={"cards"}
        slidesPerView={1.5}>
        {imageSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image src={slide.src} width={389} height={479} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigation}>
        <ArrowRight className="next " />
        <span className="pagination"></span>
        <ArrowLeft className="prev" />
      </div>
    </div>
  );
}
