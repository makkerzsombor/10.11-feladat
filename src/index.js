class Szazlabu{
    //Nincs mellékhatása
    labakSzama;
    constructor(ujLabak){
        this.labakSzama = ujLabak;
    }
    //Nincs mellékhatása
    toString() {
        let string = ' lábú százlábú';
        return this.labakSzama + string;
    }
    //classon belüli meghívás: Van mellékhatása
    static labakbolSzazlabuk(t = []){
        return t.map(e => new Szazlabu(e));
    }    
}
//Feladat 5 Van mellékhatása
function labakbolSzazlabuk(t = []){
    return t.map(e => new Szazlabu(e));
}  

//Feladat 6 Van mellékhatása
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

document.addEventListener('DOMContentLoaded', () => {
    let lista = [];
    for (let i = 0; i < 20; i++) {
        lista.push(Math.floor(Math.random() * 30) + 1)
    }
    let lista5 = [];
    // Feladat 2 Van mellékhatása
    document.getElementById('fel2').addEventListener('click', () => {    
        lista5 = [];    
        lista5.push(lista.filter(e => e % 5 == 0));
        lista5.forEach((e, index) => {
             console.log(index, e);
        })
    })   
    // Feladat 3 Van mellékhatása
     document.getElementById('hozzaAd').addEventListener('click', () => {
        lista.push(parseInt(document.getElementById('bekertSzam').value));
     })
     // Feladat 4 Van mellélhatása
     let sz = new Szazlabu(30);
     console.log(sz.toString());     
     // Feladat 6   

     // classon belül szazlabuMejelenites('letrehozas', Szazlabu.labakbolSzazlabuk(lista));
     // classon kivüli: Van mellékhatása
     szazlabuMejelenites('letrehozas', labakbolSzazlabuk(lista));
});