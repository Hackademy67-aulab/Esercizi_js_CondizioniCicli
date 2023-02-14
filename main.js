

// CONDIZIONI-ESERCIZIO 1


// let giorno = 1;



// if(giorno==1){

//     console.log('lunedì')
// } 
// else if (giorno==2){
//     console.log('martedì')
// }
//  else if (giorno==3){
//     console.log('mercoledì')
// }
//  else if (giorno==4){
//     console.log('giovedì')
// }
//  else if (giorno==5){
//     console.log('venerdì')
// }
// else if (giorno==6){
//     console.log('sabato')
// }
// else if (giorno==7){
//     console.log('domenica')
// } else if(giorno<1){
//     console.log('Numero_inesistente')
// }
// else if(giorno>7){
//     console.log('Numero_inesistente')
// }


// CONDIZIONI- ESERCIZIO 2


// let voto = 50;


// if(voto<18 && voto>0){
//     console.log('insufficiente')
// }
// else if(voto>=18 && voto<21){
//     console.log('sufficiente')
// }
// else if(voto>=21 && voto<24){
//     console.log('Buono')
// }
// else if(voto>=24 && voto<27){
//     console.log('Distinto')
// }
// else if(voto>=27 && voto<29){
//     console.log('Ottimo')
// }
// else if(voto==30){
//     console.log('Eccellente')
// }
// else if(voto<0){
//     console.log('Inesistente')
// }
// else(voto>30){
//     console.log('inesistente')
// }



// CICLI - ESERCIZIO 1

// let p1 = 0;
// let p2 = 0
// let nTiri = 5;
// let min = 1;
// let max = 6;

// for(let i = 1; i <=nTiri; i++){

//     p1 = p1 + Math.floor(Math.random()*(max - min +1)+min);
 
//     p2 = p2 + Math.floor(Math.random()*(max - min +1)+min);

// }

// if( p1 > p2 ){
//     console.log ('Il vincitore è il primo giocatore');
// }

// else if (p1 < p2){

//     console.log('Il vincitore è il secondo giocatore ');
// }

// else {

//     console.log('I giocatori hanno pareggiato')
// }

// console.log(p1);
// console.log(p2);


// CICLI - ESERCIZIO 2 

let tab = 3;

for (let i = 1; i <= 10; i++) {
  let result = i * tab;
  console.log(`${tab} x ${i} = ${result}`);
}

