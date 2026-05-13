import React, { useEffect, useRef, useState } from "react";

function Counter({
    end,
    duration = 1000,
    prefix = "",
    suffix = ""
}) {

    const [count, setCount] = useState(0);

    const counterRef = useRef(null);

    const [started, setStarted] =
        useState(false);

    useEffect(() => {

        const observer =
            new IntersectionObserver(

                ([entry]) => {

                    if (
                        entry.isIntersecting &&
                        !started
                    ) {

                        setStarted(true);
                    }
                },

                {
                    threshold: 0.5
                }
            );

        if (counterRef.current) {

            observer.observe(
                counterRef.current
            );
        }

        return () => {

            if (counterRef.current) {

                observer.unobserve(
                    counterRef.current
                );
            }
        };

    }, [started]);

    useEffect(() => {

        if (!started) return;

        let start = 0;

        const startTime = performance.now();

        const animate = (currentTime) => {

            const progress = Math.min(
                (currentTime - startTime) /
                    duration,
                1
            );

            const currentCount =
                progress * end;

            setCount(currentCount);

            if (progress < 1) {

                requestAnimationFrame(
                    animate
                );
            }
        };

        requestAnimationFrame(animate);

    }, [started, end, duration]);

    return (

        <span ref={counterRef}>

            {prefix}

            {Number.isInteger(end)
                ? Math.floor(count)
                : count.toFixed(1)}

            {suffix}

        </span>
    );
}

export default Counter;