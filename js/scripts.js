document.addEventListener('DOMContentLoaded', () => {
    const polaroids = document.querySelectorAll('.polaroid');
    const container = document.querySelector('.container');

    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;

    const bodyHeight = document.body.clientHeight;

    const polaroidWidth = 170; // width + padding
    const polaroidHeight = 200; // height + padding

    const halfPolaroids = Math.floor(polaroids.length / 2);

    let topCount = 0;
    let bottomCount = 0;

    polaroids.forEach((polaroid) => {
        polaroid.style.setProperty('--random-angle', Math.floor(Math.random() * 20 - 10));
        polaroid.style.setProperty('--random-z', Math.floor(Math.random() * 10 + 1));

        let top, left;

        if (Math.random() > 0.5 && topCount < halfPolaroids || bottomCount >= halfPolaroids) {
            // Posicionar en la parte superior
            top = Math.random() * (containerTop - polaroidHeight);
            topCount++;
        } else {
            // Posicionar en la parte inferior
            top = Math.random() * (bodyHeight - containerTop - containerHeight - polaroidHeight) + containerTop + containerHeight;
            bottomCount++;
        }

        left = Math.random() * (document.body.clientWidth - polaroidWidth);

        polaroid.style.top = `${top}px`;
        polaroid.style.left = `${left}px`;
    });

    // Paint elements
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.style.background = getRandomColor();
    });
});

/**
 * @returns {String} RGB Color
 */
function getRandomColor() {
    const colors = [
        '#FFD700', 
        '#FF6347', 
        '#8A2BE2', 
        '#00FA9A', 
        '#FF69B4'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}
