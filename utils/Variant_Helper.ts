const default_Initial = {
    opacity: 0,
    height: '100%'
};
const slideUp = {
    name: "Slide Up",
    variants: {
        initial: {
            ...default_Initial,
            opacity: 0,
            top: "100vh",
            scale: 0.4
        },
        animate: {
            opacity: 1,
            top: "0vh",
            scale: 1
        },
        exit: {
            opacity: 0,
            top: "100vh",
            scale: 0.4
        }
    },
    transition: {
        duration: 0.7
    }
};

const slideRight = {
    name: "Slide Right",
    variants: {
        initial: {
            ...default_Initial,
            opacity: 0,
            left: "-100%",
            scale: 0.6
        },
        animate: {
            opacity: 1,
            left: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            left: "100%",
            scale: 0.6
        }
    },
    transition: {
        duration: 0.7
    }
};

const fadeBack = {
    name: "Fade Back",
    variants: {
        initial: {
            ...default_Initial,
            opacity: 0,
            scale: 0.4,
            // x: '50%',
            // y: '50%',
            // z: -50
        },
        animate: {
            opacity: 1,
            scale: 1,
            // x: 0,
            // y: 0,
            // z: 0
        },
        exit: {
            opacity: 0,
            scale: 0.4
        }
    },
    transition: {
        duration: 0.7
    }
};

const rotateY = {
    name: "Rotate Y",
    variants: {
        initial: {
            ...default_Initial,
            opacity: 1,
            rotateY: 90
        },
        animate: {
            rotateY: 0
        },
        exit: {
            rotateY: 90
        }
    },
    transition: {
        duration: 0.7
    }
};

const rotateX = {
    name: "Rotate X",
    variants: {
        initial: {
            ...default_Initial,
            rotateZ: 90,
            opacity: 1,

            scale: 0.6,
        },
        animate: {
            opacity: 1,
            rotateZ: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            rotateZ: 90,
            scale: 0.6
        }
    },
    transition: {
        duration: 0.7
    }
};

const rotateZ = {
    name: "Rotate Z",
    variants: {
        initial: {
            ...default_Initial,
            opacity: 0,
            rotateZ: 360
        },
        animate: {
            opacity: 1,
            rotateZ: 0
        },
        exit: {
            opacity: 0,
            rotateZ: 360
        }
    },
    transition: {
        duration: 0.7
    }
};

export default {
    Arrays: [
        slideUp,
        slideRight,
        fadeBack,
        rotateX,
        rotateY,
        rotateZ,
    ],
    Objects: {
        slideUp,
        slideRight,
        fadeBack,
        rotateX,
        rotateY,
        rotateZ,
        // myCustom: {
        //      = name: "Rotate Z",
        //     variants: {
        //         initial: {
        //             opacity: 0,
        //             height: '100%',

        //             // x:'-100%',
        //             // y:'-100%',

        //             x: '3000px',
        //             y: '0',
        //         },
        //         animate: {
        //             opacity: 1,
        //             height: '100%',

        //             // x:'0',
        //             // y:'0',

        //             x: '0',
        //             y: '0',
        //         },
        //         exit: {
        //             opacity: 0,
        //             rotateZ: 360
        //         }
        //     },
        //     transition: {
        //         // ease: "easeOut", duration: 1,

        //         opacity: { ease: "linear" },
        //         layout: { duration: 2 }
        //     }
        // }
    }
};