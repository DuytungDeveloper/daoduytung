import { useEffect, useState } from 'react'
import 'animate.css'
export default function SpinnerDefault(props : any) {
    // useEffect(() => {

    //     return function cleanup() {

    //     }
    // }, [])
    return (
        <div className={props.show ? "preloader" : "preloader animate__animated animate__fadeOut"}>
            <div className="preloader-animation">
                <div className="preloader-spinner">
                </div>
            </div>
        </div>
    );
}