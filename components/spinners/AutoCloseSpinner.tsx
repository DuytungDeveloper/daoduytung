import 'animate.css'
import { useEffect, useState } from 'react';
export default function SpinnerDefault() {
    let [remove, setRemove] = useState(false)
    let [show, setShow] = useState(true)
    let [percent, setPercent] = useState(0);


    useEffect(() => {
        let perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = ((EstimatedTime / 1000) % 60) * 30;
        // Percentage Increment Animation
        let start = 0,
            end = 100,
            duration = time;

        let range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range));

        let timer = setInterval(function () {
            current += increment;
            setPercent(current);
            // console.log(current + "%");
            if (current == end) {
                setTimeout(() => {
                    setShow(false);
                }, 500);
                clearInterval(timer);
            }
        }, stepTime);

    }, []);
    useEffect(() => {
        if (!show) {
            setTimeout(() => {
                setRemove(true);
            }, 1500)
        }
    }, [show])
    return (
        <>
            {remove == false &&
                <div className={show ? "preloader" : "preloader animate__animated animate__fadeOut"}>
                    <div className="preloader-animation">
                        <div className="preloader-spinner">
                        </div>
                        <div className="progress" style={{ width: "30vw" }}>
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: percent.toString() + "%" }} >{percent}% </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}