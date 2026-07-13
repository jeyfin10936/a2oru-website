import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import SliderImg01 from "../Assets/Main-Dashboard.jpg";

import { ChevronsRight } from "lucide-react";
import { ChevronsLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../CSS/ScreensCarousel.css";


const sliderData = [
    {
        title: "Dashboard Overview",
        pageImage: SliderImg01
    },
    {
        title: "Organization Management",
        pageImage: SliderImg01
    },
    {
        title: "User Management",
        pageImage: SliderImg01
    },
    {
        title: "Application Management",
        pageImage: SliderImg01
    },
    {
        title: "Security Settings",
        pageImage: SliderImg01
    }
]

function ScreensCarousel() {

    return (
        <section className="imageCarouselSection sec-top-bottom-spacing" id="Pages">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Centralized Administration</span></div>
                      
                    <h2 className="title">A Powerful <span className="highlightTitle">Dashboard</span> for Identity & Access Management</h2>
                    <p className="contentWrapper">The A2ORU dashboard gives administrators complete visibility into users, organizations, applications, authentication activities, and security settings—all from a centralized interface.</p>
                </div>

            </div>

            <div className="carouselWrapper">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={1200}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView={1.6}
                    breakpoints={{
                        350: { slidesPerView: 1.3 },
                        768: { slidesPerView: 1.4 },
                        1024: { slidesPerView: 1.5 },
                    }}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ el: ".dotsPagination", clickable: true, }}
                    // navigation={{ prevEl: ".prevArrow", nextEl: ".nextArrow", }}
                >
                    {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slideCard">
                        <img src={slide.pageImage} alt={`slide-${index}`} />
                        <h6 className="text-center title">{slide.title}</h6>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                <div className="paginationWrapper">
                    <div className="dotsPagination"></div>
                    {/* <div className="arrowPagination">
                        <button className="prevArrow">
                            <ChevronsLeft/>
                        </button>

                        <button className="nextArrow">
                            <ChevronsRight/>
                        </button>
                    </div> */}

                </div>
            </div>
        </section>


    )
}

export default ScreensCarousel;