let score = 0;
let userName = '';

const punchingToy = document.getElementById('punchingToy');
const scoreDisplay = document.getElementById('score');
const nameDisplay = document.getElementById('nameDisplay');
const imageUpload = document.getElementById('imageUpload');
const userNameInput = document.getElementById('userName');
const startGameButton = document.getElementById('startGame');

startGameButton.addEventListener('click', () => {
    userName = userNameInput.value.trim();
    if (userName) {
        nameDisplay.textContent = `${userName}'s `;
        userNameInput.disabled = true;
        startGameButton.disabled = true;
    } else {
        alert('Name Type Panu.');
    }
});

punchingToy.addEventListener('click', () => {
    if (userName) {
        score++;
        scoreDisplay.textContent = score;

        punchingToy.style.animation = 'none';
        setTimeout(() => {
            punchingToy.style.animation = '';
        }, 100);
    } else {
        alert('name type panauvm');
    }
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            punchingToy.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});
