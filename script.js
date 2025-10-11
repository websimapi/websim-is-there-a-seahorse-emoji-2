document.querySelectorAll('.creature').forEach(emoji => {
    emoji.addEventListener('click', () => {
        emoji.style.animation = 'bounce 0.5s';
        setTimeout(() => {
            emoji.style.animation = '';
        }, 500);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3) rotate(10deg); }
    }
`;
document.head.appendChild(style);

