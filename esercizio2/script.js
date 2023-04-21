/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


const divisibility = prompt('pari o dispari?');
const number = parseInt(prompt('dammi un numero da 1 a 5'));
const computer = numberPc(1,5);
const sum = number + computer ;
console.log(number , computer , sum , divisibility)



if(divisibility == pariodispari(sum)){
    console.log('hai vinto')
}else{
    console.log('hai perso')
}


function numberPc(min,max){
   return Math.floor(Math.random() * 5) + 1
    
}

    function pariodispari(number){
        if(number % 2 == 0){
            return 'pari';
        }
        return 'dispari'
    }
