import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import OverlayImg from "../Assets/overlay-img.webp"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../CSS/ScreensCarousel.css";
import { ChevronsRight } from "lucide-react";


const sliderData = [
  {
    title: "Dashboard Overview",

    points: [
      "Monitor users information",
      "Provide administrators with operational visibility",
      "Give administrators a quick overview of the environment",
    ],
  },
  {
    title: "Organization Management",

    points: [
      "Manage multiple organizations from a centralized platform",
      "Maintain organization-specific users, roles, and applications",
      "Control access within the appropriate organizational context",
    ],
  },
  {
    title: "User Management",
  
    points: [
      "Create and manage enterprise users",
      "Maintain user profiles and account information",
      "Assign and manage roles",
      "Manage user lifecycle status",
    ],
  },
  {
    title: "Application Management",

    points: [
      "Manage multiple applications from one administration console",
      "Configure application-specific access",
      "Associate users and roles with applications",
      "Manage application modules and permissions",
    ],
  },
  {
    title: "Security Settings",
  
    points: [
      "Configure authentication security policies",
      "Control failed-login attempts and account lockout behavior",
      "Configure OTP expiration and security settings",
      "Manage concurrent-session restrictions",
    ],
  },
  {
    title: "User Profile Edit",
  
    points: [
      "Update and maintain user profile information",
      "Manage account details from a centralized interface",
      "Maintain accurate user information",
    ],
  },
];

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
                        1024: { slidesPerView: 2.3 },
                        1280: { slidesPerView: 2.5 },
                    }}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ el: ".dotsPagination", clickable: true, }}
                >
                    {
                        sliderData.map((slide, index) => (
                            <SwiperSlide key={index}>

                                <div className="slideCard">

                                    <div className="mediaGroup">

                                        <img src={OverlayImg} alt="Overlay" width="438" height="223" loading="lazy" />

                                    </div>

                                    <div className="contentGroup">

                                        <h3 className="title">{slide.title}</h3>

                                        <ul className="overlayList">

                                            {
                                                slide.points.map((point, idx) => (

                                                <li key={idx}>

                                                    <span className="icon">

                                                        <ChevronsRight className="featureIcon" size={18} strokeWidth={2} />

                                                    </span>

                                                    <span>{point}</span>
                                                </li>

                                                ))
                                            }
                                        </ul>

                                    </div>

                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className="paginationWrapper">
                    <div className="dotsPagination"></div>
                </div>
            </div>
        </section>


    )
}


export default ScreensCarousel;