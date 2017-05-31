var btn1, btn2, btn3, btnOk;
var step1, step2, step3, step4, step5;
var hint1, hint2, hint3, hint4, hint5;
var secretKey, hint, i;

window.onload = function start(){
    btn1 = byId("un");
    btn1.onclick = colorSwitch;
    btn2 = byId("deux");
    btn2.onclick = colorSwitch;
    btn3 = byId("trois");
    btn3.onclick = colorSwitch;
    btnOk = select("button");
    btnOk.onclick = playTheGame;

    step1 = byId("step1");
    step2 = byId("step2");
    step3 = byId("step3");
    step4 = byId("step4");
    step5 = byId("step5");

    hint1 = byId("hint1");
    hint2 = byId("hint2");
    hint3 = byId("hint3");
    hint4 = byId("hint4");
    hint5 = byId("hint5");

    i=1
    randomizeIt();
}

var reloadGame = function reloadGame(){
    i=1;
    randomizeIt();

    step1.innerHTML="";
    step2.innerHTML="";
    step3.innerHTML="";
    step4.innerHTML="";
    step5.innerHTML="";

    hint1.innerHTML="";
    hint2.innerHTML="";
    hint3.innerHTML="";
    hint4.innerHTML="";
    hint5.innerHTML="";
}

var randomizeIt = function randomizeIt(){
    var key = {
        g : Math.floor(Math.random() * (3 - 1 +1)) + 1,
        c : Math.floor(Math.random() * (3 - 1 +1)) + 1,
        d : Math.floor(Math.random() * (3 - 1 +1)) + 1
    }

    if(key.g===1){key.g="blue"}
    else if(key.g===2){key.g="red"}
    else if(key.g===3){key.g="yellow"}

    if(key.c===1){key.c="blue"}
    else if(key.c===2){key.c="red"}
    else if(key.c===3){key.c="yellow"}

    if(key.d===1){key.d="blue"}
    else if(key.d===2){key.d="red"}
    else if(key.d===3){key.d="yellow"}

    secretKey = key
}

var colorSwitch = function colorSwitch(){
    if(this.classList.contains("blue")){
        this.classList.remove("blue");
        this.classList.add("red")
    }else if(this.classList.contains("red")){
        this.classList.remove("red");
        this.classList.add("yellow")
    }else if(this.classList.contains("yellow")){
        this.classList.remove("yellow");
        this.classList.add("blue")
    }
}

var playTheGame = function playTheGame(){
    var essai = {
        g : btn1.className,
        c : btn2.className,
        d : btn3.className
    }

    var thisG = document.createElement("div");
    thisG.className = essai.g;
    var thisC = document.createElement("div");
    thisC.className = essai.c;
    var thisD = document.createElement("div");
    thisD.className = essai.d;

    byId("step"+i).appendChild(thisG);
    byId("step"+i).appendChild(thisC);
    byId("step"+i).appendChild(thisD);

    hint = {
        ok : 0,
        mp : 0,
        no : 0
    }

    //g
    if (essai.g === secretKey.g){
        hint.ok += 1
    }else if(essai.g === secretKey.c || essai.g === secretKey.d){
        hint.mp += 1
    }else{
        hint.no += 1
    }

    //c
    if (essai.c === secretKey.c){
        hint.ok += 1
    }else if(essai.c === secretKey.g || essai.c === secretKey.d){
        hint.mp += 1
    }else{
        hint.no += 1
    }

    //d
    if (essai.d === secretKey.d){
        hint.ok += 1
    }else if(essai.d === secretKey.c || essai.d === secretKey.g){
        hint.mp += 1
    }else{
        hint.no += 1
    }

    if(hint.ok === 3){
        alert("Bravo !");
        reloadGame()
    } else if(i <= 5){
        byId("hint"+i).innerHTML= hint.ok +" bon et "+ hint.mp +" mal placé(s)";
        i+=1
    } else {
        alert("Perdu !");
        reloadGame()
    }
}