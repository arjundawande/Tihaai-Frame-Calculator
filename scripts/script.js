let form = document.getElementById('form');
let input = document.getElementById('input');
let option = document.getElementById('option');
let error = document.getElementById('error');
let output = document.getElementById('ans');
let chakradharNote = document.getElementById('chakradharNote');
let suggestion = document.getElementById('suggestion');
let ansA, ansB, ansC;
let plus = " + ";
let note = document.getElementById('note');
output.textContent = '';
form.addEventListener('submit', (e)=>{
    e.preventDefault();
        if(option.value == "Normal Tihaai"){
            chakradharNote.textContent = "";
            note.textContent = "The first number represents number of matras of the mukhda and the second represents the matras of 'dha' and the avagraha (if any).";
            if(input.value > 13 && input.value < 17){
                ansA = 4;
                ansB = input.value/2 - 6;
            }
            else if(input.value > 10 && input.value < 14){
                ansA = 3;
                ansB = input.value/2 - 4.5;
            }
            else if(input.value > 7 && input.value < 11){
                ansA = 2;
                ansB = input.value/2 - 3;
            }
            else if(input.value > 3 && input.value < 8){
                ansA = 1;
                ansB = input.value/2 - 1.5;
            }
            else if(input.value == 3){
                ansA = 1
                ansB = 0.25;
            }
            else if(input.value == 2){
                ansA = 1;
                ansB = 0;
            }
            else if(input.value == 1){
                ansA = 0.5;
                ansB = 0;
            }
            else{
                input.value = '';
                error.style.display = 'block'
                input.style.borderBottom = '3px solid red';
                setTimeout(()=>{
                    note.style.display = 'none';
                    output.textContent = "";
                },1);
                setTimeout(()=>{
                    error.style.display = 'none';
                    input.style.borderBottom = '3px solid black';
                },2000);
                ansA = 0;
                ansB = 0;
            }
            output.textContent = ansA + " + " + ansB;
        }
        else if(option.value == "Chakradhar Tihaai"){
            let caseNum = parseInt(input.value);
            switch(caseNum){
                case 16:
                    ansA = 2;
                    ansB = 3;
                    ansC = 0;
                    break;
                case 15:
                    ansA = 2;
                    ansB = 2.5;
                    ansC = 1;
                    break;
                case 14:
                    ansA = 3;
                    ansB = 2;
                    ansC = 1;
                    break;
                case 13:
                    ansA = 3;
                    ansB = 2;
                    ansC = 0;
                    break;
                case 12:
                    ansA = 2;
                    ansB = 2;
                    ansC = 0.5;
                    break;
                case 11:
                    ansA = 2;
                    ansB = 2;
                    ansC = -0.5;
                    break;
                case 10:
                    ansA = 2;
                    ansB = 1.5;
                    ansC = 0.5;
                    break;
                case 9:
                    ansA = 1;
                    ansB = 1.5;
                    ansC = 1;
                    break;
                case 8:
                    ansA = 2;
                    ansB = 3;
                    ansC = 0;
                    break;
                case 7:
                    ansA = 3;
                    ansB = 2;
                    ansC = 1;
                    break;
                case 6:
                    ansA = 2;
                    ansB = 2;
                    ansC = 0.5;
                    break;
                case 5:
                case 4:
                case 3:
                case 2:
                case 1:
                    setTimeout(()=>{
                        output.textContent = "";
                        chakradharNote.textContent = "";
                        note.textContent = "As there is no standard Taal for 5, 4, 3, 2 and 1 matras, we cannot derive a formula for Chakradhar Tihaai of these matras.";
                    },1);
                    break;
                default:
                    input.value = '';
                    error.style.display = 'block'
                    input.style.borderBottom = '3px solid red';
                    setTimeout(()=>{
                        note.style.display = 'none';
                        chakradharNote.textContent = "";
                        output.textContent = "";
                    },1);
                    setTimeout(()=>{
                        error.style.display = 'none';
                        input.style.borderBottom = '3px solid black';
                    },2000);
                    ansA = 0;
                    ansB = 0;
                    ansC = 0;
            }
            output.textContent = ansA + " + (" + ansB + " × 3) + " + ansC;
            chakradharNote.textContent = "Please note that the Chakradhar Tihaai will be of 2 or 4 aavartans.";
            note.textContent = "The first number represents the number of matras of the main mukhda, the first number in the brackets represents the number of matras of the mukhda of the tihaai & the 'dha'. The '× 3' shows that the part of the bracket is played 3 times. The last number represents the number of matras of the avagraha.(if there is a '-' minus sign before this number, subtract that much matras from the last cycle of the tihaai in that frame.)"
        }
    note.style.display = 'block';
});