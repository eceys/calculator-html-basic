//doc
const buttons = document.querySelectorAll('.button');
const resultBox =  document.querySelector('.resultBox');


//var
// buttons.addEventListener('click',clickedButtons);
let lastResult = 0;
let lastMath = 0;
buttons.forEach(button => {
    button.addEventListener('click',clickedButtons);
});


//func
function clickedButtons(e){
    let command = e.path[0].innerText;
    if(command == 'CE'){
        CECommand();
    }else if(command == '+'){
        plusCommand();
    }else if(command == '-'){
        subCommand();
    }else if(command == '*'){
        mulCommand();
    }else if(command == '/'){
        divCommand();
    }else if(command == '='){
        eqaulsCommand();
    }else if(command == 'C'){
        let text = resultBox.innerText.split('');
        if(text.length > 0){
            let newText = text.slice(0,-1);
            resultBox.innerText = newText.splice(',').join('');
        }   
    }else if(command == '%'){
        modCommand();
    }
    else{
        numberCommand(command);
    }
}

function CECommand(){
    resultBox.innerText = "";
}

function numberCommand(command){
    resultBox.innerText = resultBox.innerText + command;
}

function plusCommand(){
    if(lastMath == 0){
        resultBox.innerText = resultBox.innerText + '+';
    }else{
        let cheText = checkText();
        if(cheText != 1){
            resultBox.innerText = resultBox.innerText + '+';
        }else{
            mathProcess();
        }
    }
    lastMath = 1;
}

function subCommand(){
    if(lastMath == 0){
        resultBox.innerText = resultBox.innerText + '-';
    }else{
        let cheText = checkText();
        if(cheText != 1){
            resultBox.innerText = resultBox.innerText + '-';
        }else{
            mathProcess();
        }
    }
    lastMath = 2;
}

function mulCommand(){
    if(lastMath == 0){
        resultBox.innerText = resultBox.innerText + '*';
    }else{
        let cheText = checkText();
        if(cheText != 1){
            resultBox.innerText = resultBox.innerText + '*';
        }else{
            mathProcess();
        }
    }
    lastMath = 3;

}

function divCommand(){
    
    if(lastMath == 0){
        resultBox.innerText = resultBox.innerText + '/';
    }else{
        let cheText = checkText();
        if(cheText != 1){
            resultBox.innerText = resultBox.innerText + '/';
        }else{
            mathProcess();
        }
    }
    lastMath = 4;
}


function modCommand(){
    if(lastMath == 0){
        resultBox.innerText = resultBox.innerText + '%';
    }else{
        let cheText = checkText();
        if(cheText != 1){
            resultBox.innerText = resultBox.innerText + '%';
        }else{
            mathProcess();
        }
    }
    lastMath = 5;
}

function eqaulsCommand(){
    let cheText = checkText();
    if(cheText != 1){
        zeroEquals();
    }else{
        mathProcess();
    }
    
}

function mathProcess(){
    if(lastMath == 1){
        let text = resultBox.innerText.split('+');
        let result = parseInt(text[0]) + parseInt(text[1]);
        resultBox.innerText = result;
    }else if(lastMath == 2){
        let text = resultBox.innerText.split('-');
        let result = parseInt(text[0]) - parseInt(text[1]);
        resultBox.innerText = result;
    }else if(lastMath == 3){
        let text = resultBox.innerText.split('*');
        let result = parseInt(text[0]) * parseInt(text[1]);
        resultBox.innerText = result;
    }else if(lastMath == 4){
        let text = resultBox.innerText.split('/');
        if(text[1] != 0){
            let result = parseInt(text[0]) / parseInt(text[1]);
            resultBox.innerText = result;
        }else{
            resultBox.innerText = "";
        }
    }else if(lastMath == 5){
        let text = resultBox.innerText.split('%');
        let result = parseInt(text[0]) % parseInt(text[1]);
        resultBox.innerText = result;
    }
}


function checkText(){
    let textCheck = resultBox.innerText.split('+');
    if(textCheck[1] != undefined){
        return 1;
    }
    textCheck = resultBox.innerText.split('-');
    if(textCheck[1] != undefined){
        return 1;
    }
    textCheck = resultBox.innerText.split('*');
    if(textCheck[1] != undefined){
        return 1;
    }
    textCheck = resultBox.innerText.split('/');
    if(textCheck[1] != undefined){
        return 1;
    }
    textCheck = resultBox.innerText.split('%');
    if(textCheck[1] != undefined){
        return 1;
    }
    return 0;
}

function zeroEquals(){
    
    if(lastMath == 1){
        let text = resultBox.innerText.split('+');
        resultBox.innerText = text[0];
    }else if(lastMath == 2){
        let text = resultBox.innerText.split('-');
        resultBox.innerText = text[0];
    }else if(lastMath == 3){
        let text = resultBox.innerText.split('*');
        resultBox.innerText = text[0];
    }else if(lastMath == 4){
        let text = resultBox.innerText.split('/');
        resultBox.innerText = text[0];
    }else if(lastMath == 5){
        let text = resultBox.innerText.split('%');
        resultBox.innerText = text[0];
    }
}

