// MATRIX EFFECT

const canvas =
document.getElementById("matrixCanvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

const matrix =
letters.split("");

const fontSize = 16;

const columns =
canvas.width / fontSize;

const drops = [];

for(let x=0; x<columns; x++){

    drops[x] = 1;
}

function drawMatrix(){

    ctx.fillStyle =
    "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
    "#00f5ff";

    ctx.font =
    fontSize + "px monospace";

    for(let i=0; i<drops.length; i++){

        const text =
        matrix[
            Math.floor(
                Math.random()*matrix.length
            )
        ];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize >
            canvas.height &&
            Math.random() > 0.975
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix,35);
const terminal =
document.getElementById("terminalContent");

const hackerTexts = [

    "Initializing Encryption...","Access Granted...","Cyber Shield Enabled...","Firewall Activated...","Matrix Connected..."
];

function updateTerminal(){

    if(terminal){

        const line =
        document.createElement("div");

        line.innerHTML =
        "> " +
        hackerTexts[
            Math.floor(
                Math.random()*hackerTexts.length
            )
        ];

        terminal.appendChild(line);

        if(terminal.children.length > 8){

            terminal.removeChild(
                terminal.children[0]
            );
        }
    }
}

setInterval(updateTerminal,1500);

// COPY

function copyText(){

    const result =
    document.getElementById("resultText");

    result.select();

    navigator.clipboard.writeText(
        result.value
    );

    alert("Copied!");
}

// DOWNLOAD

function downloadResult(){

    const result =
    document.getElementById("resultText").value;

    const blob =
    new Blob(
        [result],
        {type:"text/plain"}
    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "encrypted_result.txt";

    link.click();
}

// CLEAR

function clearFields(){

    document.querySelector(".text-area").value = "";
}
const title=
document.querySelector("title");
const originalText=
title.innerText=

title.innerText="";
let index=0;
function typingEffect(){
    if(index<originalText.length){
        title.innerText +=
        originalText.charAt(index);
        index++;

        setTimeout(
            typingEffect,
            100
        );
    }
}
typingEffect();
// =============================
// TITLE TYPING EFFECT
// =============================

document.addEventListener("DOMContentLoaded",()=>{

    const title =
    document.querySelector(".title");

    if(title){

        const text =
        title.innerText;

        title.innerText = "";

        let i = 0;

        function typing(){

            if(i < text.length){

                title.innerText +=
                text.charAt(i);

                i++;

                setTimeout(
                    typing,
                    80
                );
            }
        }

        typing();
    }
});

// =============================
// SHOW / HIDE HISTORY
// =============================

function toggleHistory(){

    const history =
    document.getElementById(
        "historyContent"
    );

    if(history.style.display === "block"){

        history.style.display = "none";
    }

    else{

        history.style.display = "block";
    }
}  script.js