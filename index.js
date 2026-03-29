//Lower Case: 97-122 (26)
//Upper case: 65-90 (26)
//Special chars: 33-47 (15) 58-64 (7) 91-96 (6) (punctuation)
//Numbers: 48-57

let passwordLenArg = 0;
let passwordUpperCharCount = 0;
let passwordSpeicalCharCount = 0;
let DarkMode = 1;
let intervalId = 0
let intervalId2 = 0

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
    // generatePassword("GenPwOne")
    // generatePassword("GenPwTwo")
        intervalId = window.setInterval(()=>{generatePassword("GenPwOne"), 100})
        intervalId2 = window.setInterval(()=>{generatePassword("GenPwTwo"), 100})
    
        setTimeout(() => {
            window.clearInterval(intervalId);
            window.clearInterval(intervalId2)
            },
            700)
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
            
            //Randomly place these inside array one by one
            while(contents.length != 0){
                genPw.push(contents.splice(Math.random()*contents.length, 1).toString() )
            }
            
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

    let moonEl = document.querySelector(".Moon")
    let sunEl = document.querySelector(".Sun")
    let darkModeBtn = document.querySelector("#darkModeBtn")
    if(DarkMode){ //dark
        moonEl.style.opacity = "1"
        sunEl.style.backgroundColor = "rgb(227, 238, 188)";
        sunEl.style.boxShadow = "none"
        sunEl.style.width= "70%"
        sunEl.style.height= "70%"
        moonEl.style.transform = "translate( 0px, 0px)"
        
    }
    else{ //bright
        moonEl.style.opacity = "0"
        sunEl.style.backgroundColor = "hsl(59, 70%, 51%)"
        sunEl.style.boxShadow = "0 0 2vh 5px rgb(247, 255, 130)"
        sunEl.style.width= "50%"
        sunEl.style.height= "50%"
        moonEl.style.transform = "translate(10px, -10px)"
    }
    console.log("Bobs")
    UpdateTheme()
}

function UpdateTheme(){
    
    let bodyEl = document.querySelector("body")
    let argWrapperEls = document.querySelectorAll(".argWrapper")
    let tabEls = document.querySelectorAll(".Tabs")
    let pEls = document.querySelectorAll("p")
    let TitleP = document.querySelector("#TitleP")
    let generatePasswordWrapperEls = document.querySelectorAll(".generatedPasswordsWrapper")
    let GenPWBtn = document.querySelector("#GenPwBtn")
    let ButtonEls = document.querySelectorAll("button")

    if(DarkMode){
        bodyEl.style.backgroundColor = "rgb(8, 8, 8)"
        for(let i = 0; i < argWrapperEls.length; i++){
            argWrapperEls[i].style.backgroundColor = "rgba(54, 54, 54, 0.301)"  
        }
        for(let i = 0; i < tabEls.length; i++){
            tabEls[i].style.backgroundColor = "#16db9057"
        }
        for(let i = 0; i < generatePasswordWrapperEls.length; i++){
            generatePasswordWrapperEls[i].style.backgroundColor = "rgba(54, 54, 54, 0.301)"
        }
        for(let i = 0; i < pEls.length; i++){
            pEls[i].style.color = "#22855f"
            pEls[i].style.textShadow = "1.4px 1px 1px #ffffffbd"
        }
        for(let i = 0; i < ButtonEls.length; i++){
            if(!(ButtonEls[i] === darkModeBtn)){
                ButtonEls[i].style.backgroundColor = "#16db9057"
                ButtonEls[i].style.border = "3px solid rgba(155, 155, 155, 0.747)"
            }
        }
        TitleP.style.color = "#22855f"
        TitleP.style.textShadow = "3px 2px #ffffffbd"
        GenPWBtn.style.backgroundColor = "#16db9057"
    }
    else{
        bodyEl.style.backgroundColor = "rgba(3, 19, 65, 0.89)"
        for(let i = 0; i < argWrapperEls.length; i++){
            argWrapperEls[i].style.backgroundColor = "rgba(44, 58, 97, 0.897)"
        }
        for(let i = 0; i < tabEls.length; i++){
            tabEls[i].style.backgroundColor = "hsla(49, 100%, 53%, 0.555)"
        }
        for(let i = 0; i < generatePasswordWrapperEls.length; i++){
            generatePasswordWrapperEls[i].style.backgroundColor = "rgba(44, 58, 97, 0.897)"
        }
        for(let i = 0; i < pEls.length; i++){
            pEls[i].style.color = "rgb(194, 189, 189)"
            pEls[i].style.textShadow = "1.8px 2px #1f1f1f"
        }
        for(let i = 0; i < ButtonEls.length; i++){
            if(!(ButtonEls[i] === darkModeBtn)){
                ButtonEls[i].style.backgroundColor = "rgba(238, 168, 18, 0.747)"
                ButtonEls[i].style.border = "3px solid rgba(170, 128, 38, 0.747)"
            }
        }
        TitleP.style.color = "rgb(194, 189, 189)"
        TitleP.style.textShadow = "3px 3px #b98823"
        GenPWBtn.style.backgroundColor = "rgba(238, 180, 55, 0.747)"
    }
}