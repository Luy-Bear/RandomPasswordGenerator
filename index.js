//Lower Case: 97-122
//Upper case: 65-90
//Special chars: 33-47 58-64 91-96 (punctuation)
//Numbers: 48-57

let passwordLenArg = 0;
let passwordUpperCharCount = 0;
let passwordSpeicalCharCount = 0;
let DarkMode = 1;

//Setting event listeners for buttons
//Password Length buttons
const increasePWLenBtn = document.querySelector("#AddLenBtn")
increasePWLenBtn.addEventListener('click', () => increaseArg("pwLenP"))
const decreasePWLenBtn = document.querySelector("#RmvLenBtn")
decreasePWLenBtn.addEventListener('click', () => decreaseArg("pwLenP"))

//Special Character Count buttons
const increaseSpecCountBtn = document.querySelector("#AddSpecCharBtn")
increaseSpecCountBtn.addEventListener('click', () => increaseArg("pwSpecCharP"))
const iecreaseSpecCountBtn = document.querySelector("#RmvSpecCharBtn")
iecreaseSpecCountBtn.addEventListener('click', () => decreaseArg("pwSpecCharP"))

//Upper Character Count buttons
const increaseUpperCountBtn = document.querySelector("#AddUpperChatBtn")
increaseUpperCountBtn.addEventListener('click', () => increaseArg("pwUpperCharP"))
const decreaseUpperCountBtn = document.querySelector("#RmvUpperChatBtn")
decreaseUpperCountBtn.addEventListener('click', () => decreaseArg("pwUpperCharP"))

//Generate/Refresh Password button
const GenPasswordBtn = document.querySelector("#GenPwBtn")
GenPasswordBtn.addEventListener('click', () => {
    generatePassword(GenPwOne)
    generatePassword(GenPwTwo);
})

//Add on click to passwords P to copy to clipboard

//Darkmode theme
const darkModeBtn = document.querySelector("#darkModeBtn")
darkModeBtn.addEventListener("click", () => ToggleDarkMode())


function generatePassword(PLabel){
    console.log("GeneratingPw")

    if(passwordUpperCharCount+passwordSpeicalCharCount <= passwordLenArg){
        //Pick passwordUpperCharCount x Upper Chars
        //pick passwordSpeicalCharCount x Special Chars
        //for passwordLenArg - (passwordUpperCharCount + passwordSpeicalCharCount) pick random 

        //Randomly place these inside array one by one
        //update using plabel

    }
    else{
        let PopupEl = document.querySelector("#WarningPopUp")
        PopupEl.style.display = "block"

        setTimeout(() => {
                let PopupEl = document.querySelector("#WarningPopUp");
                PopupEl.style.display = "none" }
            , 5000);
    }
    


}


function increaseArg(argPId){
    let argPEl = document.querySelector("#"+argPId)
    if(argPId==="pwLenP"){ //ADJUST FOR PASSWORD P ID
        passwordLenArg++
        argPEl.textContent = passwordLenArg
    }
    else if(argPId==="pwSpecCharP"){ //ADJUST FOR NUMBER OF NUMBER CHAR ID
        passwordSpeicalCharCount++
        argPEl.textContent = passwordSpeicalCharCount
    }
    else if(argPId==="pwUpperCharP"){ //ADJUST FOR NUMBER OF SPECIAL CHAR ID
        passwordUpperCharCount++
        argPEl.textContent = passwordUpperCharCount    
    }
}

function decreaseArg(argPId){
    let argPEl = document.querySelector("#"+argPId)
    if(argPId==="pwLenP"){
        passwordLenArg--
        if(passwordLenArg < 0){passwordLenArg = 0}
        argPEl.textContent = passwordLenArg
    }
    else if(argPId==="pwSpecCharP"){
        passwordSpeicalCharCount--
        if(passwordSpeicalCharCount < 0){passwordSpeicalCharCount = 0}
        argPEl.textContent = passwordSpeicalCharCount    
    }
    else if(argPId==="pwUpperCharP"){
        passwordUpperCharCount--
        if(passwordUpperCharCount < 0){passwordUpperCharCount = 0}
        argPEl.textContent = passwordUpperCharCount
    }
}

function ToggleDarkMode(){
    DarkMode = DarkMode?0:1
    //Update Theme ... somehow
}