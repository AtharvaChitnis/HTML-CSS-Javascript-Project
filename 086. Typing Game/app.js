const main = document.querySelector('.main');
const typeArea = document.querySelector('.typingArea');
const btn =document.querySelector('.btn');

const words = [
    'A day in the life of a programmer',
    'What is JavaScript?',
    'What is React?',
    'What is Programming Language?',
    'What is your name?',
    'Where are you from?',
    'This is just random word',
    'What is Remix.js?',
    'New Technologies',
    'Is programming hard?',
    'Why do you wanna become a programmer?',
    'Which progamming language you like the most?',
    'Whatis Golang? and why do you wanna learn it?',
    'What is CSS',
];

const game = {
    start: 0,
    end: 0,
    user:'',
    arrText:'',
};

btn.addEventListener('click', () => {
    if(btn.textContent === 'Start') {
        play();
        typeArea.value = '';
        typeArea.disabled = false;
    }else if (btn.textContent === 'Done') {
        typeArea.disabled = true;
        main.style.borderColor = 'white';
        end();
    }
});

function play() {
    let randText = Math.floor(Math.random() * words.length);
    main.textContent = words[randText];
    game.arrText = words[randText];
    main.style.bordrColor = '#c8c8c8';
    btn.textContent = 'Done';
    const duration =new Date();
    game.start = duration.getTime();  //unix timestamp
}

function end() {
    const duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start) / 1000;
    game.user = typeArea.value;
    const correct = results();
    main.style.borderColor = 'white';
    main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
    btn.textContent = 'Start';
}

function results() {
    let valueOne = game.arrText.split('');
    let valueTwo = game.user.split('');
    let score = 0;
    valueOne.forEach((word,idx) => {
        if(word === valueTwo[idx]) {
            score++;
        }
    });

    return { score, total: valueOne.length};
}