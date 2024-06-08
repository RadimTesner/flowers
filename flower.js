const params = new URLSearchParams(window.location.search);
const colors = params.get('colors').split(',');

const petals = document.querySelectorAll('.petal');
const angleIncrement = 360 / petals.length;
const radius = 10;

petals.forEach((petal, index) => {
    const angle = index * angleIncrement;
    const radians = angle * (Math.PI / 180);
    
    const xOffset = Math.cos(radians) * radius;
    const yOffset = Math.sin(radians) * radius;
    
    const rotation = angle + 90;
    const transform = `rotate(${rotation}deg)`;
    
    petal.style.left = `calc(50% + ${xOffset - 30}px)`;
    petal.style.top = `calc(50% + ${yOffset - 60}px)`;
    petal.style.transform = transform;
    petal.style.backgroundColor = colors[index % colors.length];
});

