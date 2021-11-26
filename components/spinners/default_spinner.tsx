import 'animate.css'
import { useEffect, useState } from 'react';
export default function SpinnerDefault(props: any) {
    // useEffect(() => {

    //     return function cleanup() {

    //     }
    // }, [])
    let [remove, setRemove] = useState(props.show ? true : false)
    useEffect(() => {

        if (!props.show) {
            setTimeout(() => {
                setRemove(props.show ? true : false);
            }, 1000)
        }

    }, [props.show])
    return (
        <>
            {remove == true &&
                <div className={props.show ? "preloader" : "preloader animate__animated animate__fadeOut"}>
                    <div className="preloader-animation">
                        <div className="preloader-spinner">
                        </div>
                    </div>
                </div>
            }
        </>
    );
}