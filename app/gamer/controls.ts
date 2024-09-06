export const scrollUp = () => {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
    });
};

export const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
};
