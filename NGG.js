const minNumb = 1;
const maxNumb = 100;
const NGG_Btn = document.getElementById('NGG_Btn');
const NGG_Label = document.getElementById('NGG_Label');
const display = document.getElementById('display');
const guess = document.getElementById('guess');
const Guess = document.getElementById('Guess');
let comp_ans;
let trials = 0;

NGG_Label.textContent = `Click on 'Play? :)' to start new game`
    NGG_Btn.onclick = function(){
        document.getElementById('guess').style.display = 'block';
        NGG_Btn.textContent = `Check`
        NGG_Label.textContent = `This is a New Game`
        display.textContent = `Please type in your guess and click check`

        comp_ans = Math.round((Math.random() * (maxNumb - minNumb)) + minNumb);
        NGG_Btn.onclick = function(){
            NGG_Label.textContent = ""
            if(guess.value == ''){
                display.textContent = `Please Enter a number:(`}
            else if(isNaN(guess.value)){
                display.textContent = `Only Numbers Please:(`}
            else{
                display.textContent = `Your guess is ${guess.value}`
                trials++
                console.log(trials);
                if(comp_ans < guess.value){
                    Guess.textContent = `Too High!!! Try Again :(`;}
                else if(comp_ans > guess.value){
                    Guess.textContent = `Too Low!!! Try Again :(`}
                else{
                    NGG_Label.textContent = `Correct!!! The Computer chose ${comp_ans}`;
                    Guess.textContent = `It took you ${trials} attempts :)`;
                    NGG_Btn.textContent = `Play Again?`;
                    NGG_Btn.onclick = function(){
                        NGG_Btn.onclick = window.location.reload()}}}}}