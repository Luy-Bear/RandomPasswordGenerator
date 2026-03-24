//Lower Case: 97-122 (26)
//Upper case: 65-90 (26)
//Special chars: 33-47 (15) 58-64 (7) 91-96 (6) (punctuation)
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
        let contents = []
        let genPw = []
        //Pick passwordUpperCharCount x Upper Chars
        for(let i = 0; i <passwordUpperCharCount; i++){
            contents.push(RanUpperChar())
        }

        //pick passwordSpeicalCharCount x Special Chars
        for(let i = 0; i <passwordSpeicalCharCount; i++){
            contents.push(RanSpecialChar())
        }

        //for passwordLenArg - (passwordUpperCharCount + passwordSpeicalCharCount) pick random 
        for(let i = 0; i <(passwordLenArg- (passwordUpperCharCount + passwordSpeicalCharCount)); i++){
            contents.push(RanChar())
        }
        
        console.log(contents)
        //Randomly place these inside array one by one
        while(contents.length != 0){
            genPw.push(contents.splice(Math.random()*contents.length, 1).toString() )
        }
        console.log(genPw)
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

//Upper case: 65-90
function RanUpperChar(){
    return(
        String.fromCharCode( //convert int to ASCII string
            Math.floor( //round down decimal points
                Math.random()*(26)) //random number from 0-25 (difference between max and min values)
                +(65) //add offset to get back to upper case chars in ASCII +1 to fix 0-25 offset
            )
        )
    }

function RanSpecialChar(){return "b"}
function RanChar(){return "c"}


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