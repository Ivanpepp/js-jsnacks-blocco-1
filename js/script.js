/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */

/* const primaParola = prompt('Inserisci la prima parola');
const secondaParola = prompt('Inserisci la seconda parola');

if (primaParola.length < secondaParola.length) {
    alert('questa e` la parola piu` corta: ' + primaParola);
    alert('questa e` la parola piu` lunga: ' +secondaParola);
}else if (primaParola.length > secondaParola.length){
    alert('questa e` la parola piu` corta: ' + secondaParola);
    alert('questa e` la parola piu` lunga: ' + primaParola);
}else if (primaParola.length == secondaParola.length) {
    alert ('le due parole sono lunghe uguali');
}
 */
/**
 * Calcola la somma e la media dei primi 10 numeri
 */

/* let somma = 0;
let media = 0;
for(let i=0; i < 10; i++){
    somma += i;
    media = somma / i;
}

 for (let i = 0; i <10; i++){
     somma += i;
     media = somma / i;
 }
  */
 // con il while
/* let k=0;

/* while (k < 10 ){
    somma += k;
    media = somma / k;
    k++;
} */

//con il do while
/* do {
    somma += k;
    media = somma / k;
   k++;
}while (k< 10 ) */
/* console.log(somma);
console.log(media);  */

/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */

 /*  let nuovoArray = [];

 for(let i = 0; i < 5 ; i++){
     let parola = prompt('inserisci una parola');
     if (parola == parola.toUpperCase()){
         alert('HAI INSERITO UNA PAROAL TUTTO IN MAUISCOLO! NON ADRA` NELL ARRAY')
     }else{
         nuovoArray.push(parola);
     }
 }
 console.log(nuovoArray); */

 /* BONUS */
 /* let nuovoArray = [];
let i = 0;
        do{
            let parola = prompt('inserisci una parola');
            if(parola == nuovoArray[i]){
                alert('HAI INSERITO DUE PAROLE UGUALI! STAI ATTENTO! MA VERRA` COMUNQUE SMISTATA FRA LE LISTE!');
            }
            nuovoArray.push(parola);
            if (parola == parola.toUpperCase()){
                document.getElementById('lista-maiuscole').innerHTML += '<li>' + parola + '</li>';
            }else if (parola == parola.toLowerCase()){
                document.getElementById('lista-minuscole').innerHTML += '<li>' + parola + '</li>';
            }else{
                document.getElementById('lista-miste').innerHTML += '<li>' + parola + '</li>';
                }
        }while (i < 5);

  */
 /*
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
 */

/* let somma = 0;
for (let i=0; i<10; i++){
    let k = parseInt(prompt('inserisci un numero'));
    if (isNaN(k)){
        alert('non hai inserito un numero, pertanto il tuo numero verra` scelto casualmente');
    }
    somma= parseInt(somma + k);
}
alert(somma); */

/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

/* const k = ['luca', 'marco', 'antonio'];
const nomeUtente=prompt('inserisci il tuo nome');
let n = k.length + 1;
for(i=0; i < k.length; i++){
    if (k[i] == nomeUtente){
     n = i;
    }
}
if (n <= k.length){
    alert('puoi partecipare');
} else {
    alert('non sei nella lista');
}
 */

/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

/* let nuovoArray = new Array;
 for (i=0; i<6; i++){
     let n = parseInt(prompt('inserisci un numero'));
     if ((n % 2) != 0){
         nuovoArray.push(n);
     }
 }
 console.log(nuovoArray); */


/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

/* 
let somma = 0;

for (let i=0; i<5; i++){
    somma += parseInt(prompt('inserisci un numero'));
    
}
document.getElementById('somma-for').innerHTML = 'La somma dei numeri con il ciclo for e` ' + somma;
let sommaNuova = 0;
let k = 0;
while(k<5){
    sommaNuova += parseInt(prompt('inserisci un numero'));
    k++;
}
document.getElementById('somma-while').innerHTML = 'La somma dei numeri con il ciclo while e` ' + sommaNuova;
 */

/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

/*  const listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
  const listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

  

  for (let i = 0; i < 8; i++){
    let nomeCasuale = listaNomi[Math.floor(Math.random()*listaNomi.length + 1)];
    let cognomeCasuale = listaCognomi[Math.floor(Math.random()*listaCognomi.length + 1)];
    document.getElementById('lsita-nome-cognome').innerHTML += '<li>' + nomeCasuale + ' ' + cognomeCasuale + '</li>';
  }
 */

/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */
 /* let arrCibo = ['pane', 'pasta', 'lievito','fagioli','mais','carne'];
 let arrBevande = ['acqua','coca','sprite','birra','vino','limoncello','fanta', 'pepsi','gazzosa'];
 
 
 let randElement = '';
 while(arrCibo.length != arrBevande.length){
     if(arrCibo.length < arrBevande.length){
         randElement = arrBevande[Math.floor(Math.random() * arrBevande.length)];
         arrCibo.push(randElement);
     }
     if(arrCibo.length > arrBevande.length){
         randElement = arrCibo[Math.floor(Math.random() * arrCibo.length)];
         arrBevande.push(randElement);
     }
 }
 
 for (let i=0 ; i< arrCibo.length; i++){
     document.getElementById('prima-lista').innerHTML += '<li>' + arrCibo[i] + '</li>';
     document.getElementById('seconda-lista').innerHTML += '<li>' + arrBevande[i] + '</li>';
 } */
 