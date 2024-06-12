function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lastSide = 'right';

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('bg-square');

    const side = lastSide === 'left' ? 'right' : 'left';
    lastSide = side;

    const animatedBgHeight = document.querySelector('.animated-bg').offsetHeight;
    const startY = getRandomInt(0, animatedBgHeight - 50);

    const duration = getRandomInt(15, 20);

    if (side === 'left') {
        square.style.left = '-50px';
        square.style.top = `${startY}px`;
        square.style.animation = `move-and-shrink-left ${duration}s forwards`;
    } else {
        square.style.right = '-50px';
        square.style.top = `${startY}px`;
        square.style.animation = `move-and-shrink-right ${duration}s forwards`;
    }

    document.querySelector('.animated-bg').appendChild(square);

    setTimeout(() => {
        square.remove();
    }, duration * 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(createSquare, 500);

    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @keyframes move-and-shrink-left {
            0% {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateX(50vw) scale(0) rotate(-180deg);
                opacity: 0;
            }
        }
        @keyframes move-and-shrink-right {
            0% {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateX(-50vw) scale(0) rotate(180deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleElement);
});
