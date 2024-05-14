let captcha = document.querySelector('.captcha');
let reloadBtn = document.querySelector('.reload-btn')
let inputField = document.querySelector('.input')
let checkBtn = document.querySelector('.check-btn');
let statusText = document.querySelector('.status-text')

let allCharacters = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M', 'N','O','P','Q','R','S','T','U','V','X','Y','Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p','q','r','s','t','u','v','x','y','z',0,1,2,3,4,5,6,7,8,9];








checkBtn.addEventListener('click', (e) => {
    e.preventDefault()
    statusText.style.display='block';
    let inputVal = inputField.value.split('').join('');
    if(inputVal == captcha.innerText) {
        statusText.style.color = '#fff'
        statusText.innerText='Nice, CAptcha matched'
        setTimeout(()=> {
            statusText.style.display='';
            inputField.value = '';
            captcha.innerText='';
            getCaptcha();
        }, 4000);
    } else {
        statusText.style.color='#ff0000';
        statusText.innerText = 'Captcha not matched.Please try agian later'
    }
});


function getCaptcha() {
    for(let i = 0; i<6 ; i++) {
        let randomeChar = allCharacters[Math.floor(Math.random()*allCharacters.length)]
        captcha.innerText += `${randomeChar}`;

    }
}



reloadBtn.addEventListener('click', ()=>{
    captcha.innerHTML = '';
    getCaptcha();
})




