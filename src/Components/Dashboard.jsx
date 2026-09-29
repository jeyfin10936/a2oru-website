import { useEffect, useRef, useState } from "react";

import dashBoardVideo from "../Assets/A2ORU_Video_new.mp4";
import "../CSS/Dashboard.css";

function Dashboard() {

    const videoRef = useRef(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {

        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    setShouldLoadVideo(true);
                    observer.disconnect();

                }

            },
            {
                rootMargin: "300px",
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
                            src={dashBoardVideo}
                            type="video/mp4"
                        />
                    )}
                </video>

            </div>

        </section>
    );
}

export default Dashboard;