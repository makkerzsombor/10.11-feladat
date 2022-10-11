class Szazlabu{    
    labakSzama;
    // Tiszta
    constructor(ujLabak){
        this.labakSzama = ujLabak;
    }
    // 
    toString() {
        let string = ' lábú százlábú';
        return this.labakSzama + string;
    }
    //classon belüli meghívás: Nem tiszta
    static labakbolSzazlabuk(t = []){
        return t.map(e => new Szazlabu(e));
    }    
}
//Feladat 5 Nem tiszta
function labakbolSzazlabuk(t = []){
    return t.map(e => new Szazlabu(e));
}  

//Feladat 6 Nem Tiszta
function szazlabuMejelenites(stringID , lista = []){       
    lista.forEach((e, index) => {
        let szuloElem = document.getElementById(stringID); 
        let listaElem = document.createElement('li');
        let listaElemText = document.createElement('p');
        listaElemText.textContent = e.toString();
        listaElem.appendChild(listaElemText);
        szuloElem.appendChild(listaElem); 
    });             
}
// Nem Tiszta
document.addEventListener('DOMContentLoaded', () => {
    let lista = [];
    for (let i = 0; i < 20; i++) {
        lista.push(Math.floor(Math.random() * 30) + 1)
    }
    let lista5 = [];
    // Feladat 2 Nem tiszta
    document.getElementById('fel2').addEventListener('click', () => {    
        lista5 = [];    
        lista5.push(lista.filter(e => e % 5 == 0));
        lista5.forEach((e, index) => {
             console.log(index, e);
        })
    })   
    // Feladat 3 Nem Tiszta
     document.getElementById('hozzaAd').addEventListener('click', () => {
        lista.push(parseInt(document.getElementById('bekertSzam').value));
     })
     // Feladat 4 Nem Tiszta
     let sz = new Szazlabu(30);
     console.log(sz.toString());     
     // Feladat 6   

     // classon belül szazlabuMejelenites('letrehozas', Szazlabu.labakbolSzazlabuk(lista));
     // classon kivüli: Tiszta
     szazlabuMejelenites('letrehozas', labakbolSzazlabuk(lista));
});