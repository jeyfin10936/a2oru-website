import { useEffect, useRef, useState } from "react";

import "../CSS/Dashboard.css";

// const dashboardVideoSrc = `${process.env.PUBLIC_URL}/A2ORU_Video_new.mp4`;

const dashboardVideoSrc = `${process.env.PUBLIC_URL}/A2ORU_Motion.mp4`;

function Dashboard() {

    const videoRef = useRef(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {

        const video = videoRef.current;

        if (!video) return;

        const isMobileViewport =
            window.matchMedia("(max-width: 768px)").matches;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    setShouldLoadVideo(true);
                    observer.disconnect();

                }

            },
            {
                rootMargin: isMobileViewport ? "0px" : "300px",
            }
        );

        observer.observe(video);

        return () => observer.disconnect();

    }, []);

    return (
        <section className="mainDashboardImg">

            <div className="container">

                <video
                    ref={videoRef}
                    className="dashBoardVideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                    preload="none"
                >
                    {shouldLoadVideo && (
                        <source
                            src={dashboardVideoSrc}
                            type="video/mp4"
                        />
                    )}
                </video>

            </div>

        </section>
    );
}

export default Dashboard;
