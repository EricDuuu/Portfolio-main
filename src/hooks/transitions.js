export const leftSlide = {
    offscreen: {
        x: -300
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1
        }
    }
};

export const rightSlide = {
    offscreen: {
        x: 300
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1
        }
    }
};