import React, { useRef, useState } from "react";
import DemoVideo from "../Assets/A2ORU_Video.mp4";
import ThumbImage from "../Assets/video-thumb-img.jpg";
import { Play, Pause, CircleCheckBig } from "lucide-react";
import Button from "../Components/Common/Button";
import Links from "../Components/Common/Link";

import "../CSS/VideoBanner.css";

function VideoBanner() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoStarted, setIsVideoStarted] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    /* Initial Play */
    const handlePlay = () => {
        setIsVideoStarted(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }

        }, 100);
    };

    /* Play / Pause */
    const handlePlayPause = (e) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    /* Mouse Move */
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;

        /* Prevent button over controls */
        if (y > rect.height - 80) return;
        setMousePosition({
            x: e.clientX - rect.left,
            y
        });
    };

    return (
        <section className="VideoBannerSection sec-top-bottom-spacing" id="ProductTour">
            <div className="container">
                <div className="LeftBlock">
                    <div className="headingGroup">
                        <div className="subTitle"><span>Product Tour</span></div>
                        <h2 className="title">See <span className="highlightTitle">A2ORE</span> in action</h2>
                        <p className="contentWrapper">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci error pariatur accusantium enim obcaecati alias est culpa facere.</p>
                    </div>

                    <div className="IconList">
                        <ul className="lists">
                            <li className="list">
                                <span className="listIcon"><CircleCheckBig className="bulletIcon" /></span>
                                <span className="listText">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                            </li>
                            <li className="list">
                                <span className="listIcon"><CircleCheckBig className="bulletIcon" /></span>
                                <span className="listText">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                            </li>
                            <li className="list">
                                <span className="listIcon"><CircleCheckBig className="bulletIcon" /></span>
                                <span className="listText">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                            </li>
                        </ul>
                    </div>

                    <Button link={Links.demoURL} target="_blank" text="Explore Now" />
                </div>
                
                <div className="RightBlock">
                    <div
                        className="VideoWrapper"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setShowCursor(true)}
                        onMouseLeave={() => setShowCursor(false)}
                    >

                        {/* Thumbnail */}
                        <div
                            className={`thumbnailWrapper ${
                                isVideoStarted ? "hide" : ""
                            }`}
                            onClick={handlePlay}
                        >
                            <img
                                src={ThumbImage}
                                alt="Video Thumbnail"
                                className="thumbnail"
                            />

                            <div className="videoOverlay">
                                <button className="playButton">
                                    <Play className="playIcon" />
                                </button>
                            </div>
                        </div>

                        {/* Video */}
                        <video
                            ref={videoRef}
                            className={`video ${
                                isVideoStarted ? "show" : ""
                            }`}
                            src={DemoVideo}
                            controls
                        />

                        {/* Floating Cursor */}
                        {showCursor && isVideoStarted && (
                            <div
                                className="cursorButton"
                                onClick={handlePlayPause}
                                style={{
                                    left: mousePosition.x,
                                    top: mousePosition.y
                                }}
                            >
                                {isPlaying ? (
                                    <Pause className="cursorIcon" />
                                ) : (
                                    <Play className="cursorIcon" />
                                )}

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default VideoBanner;