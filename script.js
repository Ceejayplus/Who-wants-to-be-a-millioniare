let questionBank = [
    {
        question : 'Entomology is the science that studies',
        option : ['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks'],
        answer : 'Insects'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','All of the above','Literature, Peace and Economics','Physiology or Medicine'],
        answer : 'All of the above'
    },
    {
        question : 'Exposure to sunlight helps a person improve his health because',
        option : ['the infrared light kills bacteria in the body','the ultraviolet rays convert skin oil into Vitamin D','resistance power increases','the pigment cells in the skin get stimulated and produce a healthy tan'],
        answer : 'the ultraviolet rays convert skin oil into Vitamin D'
    },
    {
        question: 'Philology is the',
        option : ['study of bones','science of languages','study of muscles','study of architecture'],
        answer : 'science of languages'
    },
    {
        question: 'The 2006 World Cup Football Tournament held in',
        option : ['France','Germany','China','Brazil'],
        answer : 'Germany'
    },
    {
        question: "The 'Black flag' signifies",
        option : ['revolution/danger','protest','peace','truce'],
        answer : 'protest'
    },
    {
        question: 'ICAO stands for',
        option : ['Indian Corporation of Agriculture Organization','International Civil Aviation Organization','Institute of Company of Accounts Organization','None of the above'],
        answer : 'International Civil Aviation Organization'
    },
    {
        question: 'The number of already named bones in the human skeleton is',
        option : ['200','206','212','218'],
        answer : '206'
    },
    {
        question: 'When light passes from air into glass it experiences change of',
        option : ['frequency and wavelength','wavelength and speed','frequency and speed','frequency, wavelength and speed'],
        answer : 'wavelength and speed'
    }
]

let amount = document.getElementById('amountEarned')
let question = document.getElementById('question');
let quizContainer = document.getElementById('quiz-container');
let scorecard = document.getElementById('scorecard')
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');


let next = document.querySelector('.next');
let points = document.getElementById('amountGained');
let span = document.querySelectorAll('span');
let i=0;
let score = 5000;
let wrongSong = new Audio('sound_wrong.mp3')
let rightSong = new Audio('sound_right.mp3')
var mySong = new Audio('sound_background.mp3')
let deleteTwo = new Audio('50-50_sound.mp3')
let closingSong = new Audio('Closing Theme_sound.mp3')
let audienceSong = new Audio('Ask The Audience_sound.mp3')
let friendSong = new Audio('Phone-A-Friend_sound.mp3')
let timeUpSong = new Audio('Time_Up_sound.mp3')

var countDown =()=>{
    let countedSecs = secs.value;
    countedSecs-- ;
    secs.value =  countedSecs
    myTimeout = setTimeout(countDown, 1000)
    if(countedSecs==0){
        gameOver.innerHTML = "Time Up"
        gameOver.style.color = "red"
        secs.value = "00"
        secs.style.color = "red"
        clearInterval(myTimeout)
        setTimeout(() => {
            location.reload()
        }, 1150);
    }
}

function displayQuestion(){
    for(let a = 0; a < span.length; a++){
        span[a].style.background = 'none';
    }
    question.innerHTML = questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    mySong.play()
}

// function to calculate scores
function calcScore(e){
    if(e.innerHTML === questionBank[i].answer && score > questionBank.length){
        score += 5000;
        document.getElementById(e.id).style.background = 'limegreen';
        rightSong.play()
    }
    else{
        wrongSong.play()
        document.getElementById(e.id).style.background = 'tomato';
       setTimeout(() => {window.location.href = "gameover.html"} ,1700)
    }
    setTimeout(nextQuestion,2000);
}

// function to display next question
function nextQuestion(){
    if(i < questionBank.length - 1){
        i += 1
        displayQuestion();
    }
    else{
        points.innerHTML =`Congratulations you have earned $ ${score}`;
        quizContainer.style.display = 'none'
        scoreboard.style.display = "block"
    }
}


// Back to Quiz button evenT
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank = document.getElementById('answerBank');
    let answers = document.getElementById('answers');
    scoreboard.style.display = 'block';
    for(let a = 0; a < questionBank.length; a++){
        let list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list)
    }
}

displayQuestion();

const removeTwo = () => {
    deleteTwo.play()
    option0.innerHTML = ""
    option3.innerHTML = ""
    document.getElementById("x").src="50-50-used.png"
    var removeTwo = document.getElementById("x")
    removeTwo.onclick = ""
    
}
const askAround = () => {
    audienceSong.play()
    document.getElementById("y").src="ask-the-audience-used.png"
    var askAround = document.getElementById("y")
    askAround.onclick = ""
}
const phoneFriend = () => {
    friendSong.play()
    document.getElementById("z").src="phone-a-friend-used.png"
    var phoneFriend = document.getElementById("z")
    phoneFriend.onclick = ""
}

function startMyGame(){
    window.location.href = "wwtbam.html"
}
function backToGame(){
    window.location.href = ("wwtbam.html")
}