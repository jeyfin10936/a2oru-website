import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import DashboardOverview from "../Assets/dashboard-screens/dashboard-overview.webp"
import OrganizationManagement from "../Assets/dashboard-screens/organization-management.webp"
import UserManagement from "../Assets/dashboard-screens/user-management.webp"
import ApplicationManagement from "../Assets/dashboard-screens/application-management.webp"
import SecuritySettings from "../Assets/dashboard-screens/security-settings.webp"
import UserProfileEdit from "../Assets/dashboard-screens/user-edit-screen.webp"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../CSS/ScreensCarousel.css";
import { ChevronsRight } from "lucide-react";


const sliderData = [
  {
    title: "Dashboard Overview",
    pageImage: DashboardOverview,
    points: [
      "Monitor users information",
      "Provide administrators with operational visibility",
      "Give administrators a quick overview of the environment",
    ],
  },
  {
    title: "Organization Management",
    pageImage: OrganizationManagement,
    points: [
      "Manage multiple organizations from a centralized platform",
      "Maintain organization-specific users, roles, and applications",
      "Control access within the appropriate organizational context",
    ],
  },
  {
    title: "User Management",
    pageImage: UserManagement,
    points: [
      "Create and manage enterprise users",
      "Maintain user profiles and account information",
      "Assign and manage roles",
      "Manage user lifecycle status",
    ],
  },
  {
    title: "Application Management",
    pageImage: ApplicationManagement,
    points: [
      "Manage multiple applications from one administration console",
      "Configure application-specific access",
      "Associate users and roles with applications",
      "Manage application modules and permissions",
    ],
  },
  {
    title: "Security Settings",
    pageImage: SecuritySettings,
    points: [
      "Configure authentication security policies",
      "Control failed-login attempts and account lockout behavior",
      "Configure OTP expiration and security settings",
      "Manage concurrent-session restrictions",
    ],
  },
  {
    title: "User Profile Edit",
    pageImage: UserProfileEdit,
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
                    // navigation={{ prevEl: ".prevArrow", nextEl: ".nextArrow", }}
                >
                    {
                        sliderData.map((slide, index) => (
                            <SwiperSlide key={index}>

                                <div className="slideCard">

                                    <div className="mediaGroup">

                                        <img src={slide.pageImage} alt={`slide-${index}`} />

                                    </div>

                                    <div className="contentGroup">

                                        <h6 className="title">{slide.title}</h6>

                                        <ul className="overlayList">

                                            {
                                                slide.points.map((point, idx) => (

                                                <li key={idx}>

                                                    <span className="icon">

                                                        <ChevronsRight className="featureIcon" size={15} strokeWidth={2} />

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