const random = Math.floor(Math.random() * 100) + 1;
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const hint = document.querySelector('.hint')
btn.addEventListener('click', () => {
    if(input.value == random) {
        hint.textContent = "You're right!";
    } else if(input.value < random) {
        hint.textContent = "Higher!";
    } else {
        hint.textContent = "Lower!";
    }
})