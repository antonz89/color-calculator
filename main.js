const prompt = require('prompt-sync')({sigint: true});

let x1 
let x2 
let y1 

console.log("Select an operation: combine colors - 1;  deconstruct a color - 2 ")
let inputOne = Number(prompt('> '));


//____________________________________________________________________________________
if (inputOne === 1){
    console.log("Color combining. Select color 1: 'red', 'blue', 'yellow'");
    x1 = prompt('> ');
    console.log("Color combining. Select color 2: 'red', 'blue', 'yellow'");
    x2 = prompt('> ');
//_____________________________________________________________________________________   
} else if (inputOne === 2){
    console.log("Color deconstructing. Select a color: 'purple', 'orange', 'green'");
    y1 = prompt('> '); 
} 
//_____________________________________________________________________________________
if ( inputOne === 1 && x1 ==='red' && x2 ==='blue'){
    console.log('purple');
} else if (inputOne === 1 && x1==='red'&&x2==='yellow'){
    console.log('orange');
} else if (inputOne === 1 && x1==='blue'&&x2==='yellow'){
    console.log('green');
} else if (inputOne === 1){
    console.log('error');
}
//_______________________________________________________________________
if (inputOne === 2 && y1 === 'purple'){
    console.log('red + blue');
} else if (inputOne === 2 && y1 === 'orange'){
    console.log('red + yellow');
} else if (inputOne === 2 && y1 === 'green'){
    console.log('blue + yellow');
} else if (inputOne === 2){
    console.log('error');
}





 
















