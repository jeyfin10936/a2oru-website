import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import DashboardOverview from "../Assets/dashboard-screens/Dashboard Overview.jpg"
import OrganizationManagement from "../Assets/dashboard-screens/Organization Management.jpg"
import UserManagement from "../Assets/dashboard-screens/User Management.jpg"
import ApplicationManagement from "../Assets/dashboard-screens/Application Management.jpg"
import SecuritySettings from "../Assets/dashboard-screens/Security Settings.jpg"
import UserProfileEdit from "../Assets/dashboard-screens/User Edit Screen.jpg"

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
        pageImage: DashboardOverview
    },
    {
        title: "Organization Management",
        pageImage: OrganizationManagement
    },
    {
        title: "User Management",
        pageImage: UserManagement
    },
    {
        title: "Application Management",
        pageImage: ApplicationManagement
    },
    {
        title: "Security Settings",
        pageImage: SecuritySettings
    },
    {
        title: "User Profile Edit",
        pageImage: UserProfileEdit
    }
]

function ScreensCarousel() {

    return (
        <section className="imageCarouselSection sec-top-bottom-spacing" id="Pages">
            <div className="container">
                <div className="headingGroup text-center">
                    <div className="subTitle"><span>Centralized Administration</span></div>
                    <h2 className="title">A Centralized <span className="highlightTitle">Dashboard</span> for Enterprise Identity Management</h2>
                    <p className="contentWrapper">Manage organizations, users, applications, roles, and security policies from one intuitive dashboard designed to simplify enterprise identity and access management.</p>
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
                    slidesPerView={2}
                    breakpoints={{
                        350: { slidesPerView: 1.1 },
                        479: { slidesPerView: 1.4 },
                        768: { slidesPerView: 1.6 },
                        1024: { slidesPerView: 1.8 },
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