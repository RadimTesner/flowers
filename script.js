let counter = 0;
const toggled_colors = [];
const colors = ['red', 'yellow', 'orange', 'pink', 'purple', 'blue', 'turquoise', 'darkred', 'lightblue'];
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            const clickedClass = event.currentTarget.classList;
            const color = clickedClass[1];
            
            if (clickedClass.contains('selected')) {
                card.classList.remove('selected');
                counter--;

                const indexToRemove = toggled_colors.indexOf(color);
                if (indexToRemove !== -1) {
                    toggled_colors.splice(indexToRemove, 1);
                }
            } else if (counter < 3) {
                card.classList.add('selected');
                counter++;
                toggled_colors.push(color);
                console.log(toggled_colors);
            }   
        });
    });
});

function randomgen() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('selected');
    });
    counter = 0;
    toggled_colors.length = 0;

    const selectedColors = [];
    while (selectedColors.length < 3) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (!selectedColors.includes(randomColor)) {
            selectedColors.push(randomColor);
        }
    }

    cards.forEach(card => {
        const color = card.classList[1];
        if (selectedColors.includes(color)) {
            card.classList.add('selected');
            toggled_colors.push(color);
            counter++;
        }
    });
}

document.querySelector('.generate a').addEventListener('click', (event) => {
    event.preventDefault();
    const baseUrl = 'flower.html';
    const queryParams = new URLSearchParams({ colors: toggled_colors.join(',') });
    window.location.href = `${baseUrl}?${queryParams.toString()}`;
});

