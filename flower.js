// Get colors from URL parameters
const params = new URLSearchParams(window.location.search);
const colors = params.get('colors').split(',');

// Apply colors to petals
const petals = document.querySelectorAll('.petal');
const angleIncrement = 360 / petals.length;
const radius = 10; // Adjust this value to change the radius of the flower

petals.forEach((petal, index) => {
    const angle = index * angleIncrement;
    const radians = angle * (Math.PI / 180);
    
    const xOffset = Math.cos(radians) * radius;
    const yOffset = Math.sin(radians) * radius;
    
    const rotation = angle + 90; // Rotate petals to face outward
    const transform = `rotate(${rotation}deg)`;
    
    petal.style.left = `calc(50% + ${xOffset - 30}px)`; // Adjust for half of petal width
    petal.style.top = `calc(50% + ${yOffset - 60}px)`; // Adjust for petal height
    petal.style.transform = transform;
    petal.style.backgroundColor = colors[index % colors.length];
});

