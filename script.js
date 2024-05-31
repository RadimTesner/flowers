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

function randomgen(){
    let selectedColors = [];
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'brown', 'pink', 'black'];
    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 9);
        selectedColors.push(colors[randomNumber]);
    }


    cards.forEach(card => {
        const clickedClass = card.classList;
        const color = clickedClass[1];
        if (selectedColors.indexOf(color) !== -1) {
            card.classList.add('selected');
        }
    });
}

