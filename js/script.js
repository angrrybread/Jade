// ===============================
// LOADING PAGE
// ===============================

const loading = document.querySelector(".loading-container");

if (loading) {

    const messages = [

        "Preparing something special...",
        "Almost there...",
        "Just one more second...",
        "Ready. ♡"

    ];

    const loadingText = document.getElementById("loadingText");

    let i = 0;

    const interval = setInterval(() => {

        i++;

        if(i < messages.length){

            loadingText.textContent = messages[i];

        }

    },900);

    setTimeout(()=>{

        clearInterval(interval);

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="welcome.html";

        },800);

    },3600);

}



// ===============================
// CONTINUE BUTTON
// ===============================

const continueBtn = document.getElementById("continueBtn");

if(continueBtn){

    continueBtn.onclick=function(){

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="question.html";

        },800);

    }

}// ===============================
// QUESTION PAGE
// ===============================

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const funnyText = document.getElementById("funnyText");

const messages = [

    "Hmm... are you sure? 😂",
    "Nice try. 🤨",
    "Wrong button. 😆",
    "Nope nope nope.",
    "You're persistent HAHAHA.",
    "Just press Yes. 🥹",
    "Pretty please? 💛"

];

let clickCount = 0;

if(noBtn){

    noBtn.addEventListener("mouseover",moveButton);

    noBtn.addEventListener("click",moveButton);

}

function moveButton(){

    const x=Math.random()*350;

    const y=Math.random()*120;

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

    funnyText.innerHTML=messages[
        clickCount % messages.length
    ];

    clickCount++;

    yesBtn.style.transform=`scale(${1+clickCount*0.08})`;

    if(clickCount>=7){

        noBtn.style.display="none";

        funnyText.innerHTML="HAHAHAHAHAHH";

    }

}

if(yesBtn){

    yesBtn.onclick=function(){

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="confession.html";

        },800);

    }

}// ==========================
// ENVELOPE
// ==========================

// ==========================
// ENVELOPE OPEN
// ==========================

const envelope = document.getElementById("envelope");
const music = document.getElementById("bgMusic");
const openText = document.getElementById("openText");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");

        if (music) {

            music.volume = 0.35;

            music.play().catch(() => {
                console.log("Music couldn't start.");
            });

        }

        if (openText) {

            openText.classList.add("hide");

        }

    });

}
