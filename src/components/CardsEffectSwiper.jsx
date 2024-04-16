import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import LayoutCard from "./LayoutCard";
const CardsEffectSwiper = ({ slides, cardDirection = "ltr" }) => {
  return (
    <Box
      zIndex={3}
      width={{
        lg: 780,
      }}
      sx={{
        "& .swiper-pagination-fraction": {
          "--swiper-pagination-bottom": "-40px",
          color: "#19233550",
          fontSize: "20px",
        },
        "& .swiper-slide-active .layout-card": {
          filter: "grayscale(0%)",
        },
        "& .swiper-button-next , .swiper-button-prev": {
          width: "60px",
          height: "60px",
          transition: "0.3s ",
          bgcolor: "colorPrimary",
          borderRadius: "50%",
          color: "white",
          opacity: 0,
        },

        "&:hover .swiper-button-prev , &:hover .swiper-button-next": {
          opacity: 1,
        },
        "& .swiper-button-prev:hover , .swiper-button-next:hover": {
          transform: "scale(1.1)",
        },

        "& .swiper-button-prev:after, .swiper-button-next:after": {
          fontSize: "18px",
        },
      }}
    >
      <Swiper
        loop
        loopAdditionalSlides={1}
        dir={cardDirection}
        navigation
        grabCursor
        pagination={{ type: "fraction" }}
        breakpoints={{
          1200: {
            width: 780,
            height: 600,
          },
        }}
        effect="cards"
        modules={[EffectCards, Pagination, Navigation]}
      >
        {slides.map((manageObj) => (
          <SwiperSlide key={manageObj.title}>
            <LayoutCard {...manageObj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardsEffectSwiper;
