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
    generatePassword("GenPwOne")
    generatePassword("GenPwTwo");
})



//Add on click to passwords P to copy to clipboard

//Darkmode theme
const darkModeBtn = document.querySelector("#darkModeBtn")
darkModeBtn.addEventListener("click", () => ToggleDarkMode())


// for(let i = 0; i <1000; i++){
//     console.log(RanChar())
// }

function generatePassword(PLabel){
    if(passwordLenArg){
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
            
            console.log("CONTENTS: "+contents)
            //Randomly place these inside array one by one
            while(contents.length != 0){
                genPw.push(contents.splice(Math.random()*contents.length, 1).toString() )
            }
            console.log(genPw)
            //update using plabel
            const pwEl = document.querySelector("#"+PLabel)
            pwEl.textContent = genPw.join("") //Specifies i want the values to be sepearted by "" aka nothing

        }
        else{
            let PopupEl = document.querySelector("#WarningPopUp")
            PopupEl.style.display = "block"
            PopupEl.innerText="The length of the password is specified is less that the sum of the special character requested and the number of capital letters requested.\n\nPlease adjust the parameters before attempting to generate a password."
            setTimeout(() => {
                    let PopupEl = document.querySelector("#WarningPopUp");
                    PopupEl.style.display = "none" }
                , 5000);
        }
    }
    else{
        let PopupEl = document.querySelector("#WarningPopUp")
            PopupEl.style.display = "block"
            PopupEl.innerText="The length of the password must be more than 0\n\nAmmend this and try again"
            setTimeout(() => {
                    let PopupEl = document.querySelector("#WarningPopUp");
                    PopupEl.style.display = "none" }
                , 5000);
        }
    }


//Upper case: 65-90 (26)
function RanUpperChar(){
    return(
        String.fromCharCode( //convert int to ASCII string
            Math.floor( //round down decimal points
                Math.random()*(26)) //random number from 0-25 (difference between max and min values)
                +(65) //add offset to get back to upper case chars in ASCII +1 to fix 0-25 offset
            )
        )
    }


//Special chars: 33-47 (15)           58-64 (7) 91-96 (6) (punctuation)  32 + 6 = 38
//Numbers:                  48-57 (10)
// TOTAL: 54 possabilities
function RanSpecialChar(){
    //Make virtual pool of ASCII chars to make all odds even
    let option = Math.floor(Math.random() * 38) //(38 options but 37.9999 rounded down to 37 as "indexing" from 0
    if(option>=32){option+=26} //If ran char is after the gap between ASCII code 64 and 91, add the gap offset (25 letters in alphabet, non exclusive)
    option+=33 //add offset from value to ascii code

    return String.fromCharCode(option)
}
//Lower Case: 97-122 (26)
function RanChar(){
    //Virtual pool of chars to make odds even (26+26+54 = 106)
    let option = Math.floor(Math.random() * 106) //(106 options but 105.9999 rounded down to 105 as "indexing" from 0 so still 106 options
    if(option<26){return RanUpperChar()} //If 0-26
    else if(option>52){return RanSpecialChar()}
    else{
        return(
            String.fromCharCode( //convert int to ASCII string
                Math.floor( //round down decimal points
                    Math.random()*(26)) //random number from 0-25 (difference between max and min values)
                    +(97) //add offset to get back to upper case chars in ASCII +1 to fix 0-25 offset
                )
            )
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