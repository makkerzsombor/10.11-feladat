class Szazlabu{
    labakSzama;
    constructor(ujLabak){
        this.labakSzama = ujLabak;
    }
    toString() {
        let string = ' lábú százlábú';
        return this.labakSzama + string;
    }
    static labakbolSzazlabuk(t = []){
        return t.map(e => new Szazlabu(e));
    }    
}
//Feladat 5
function labakbolSzazlabuk(t = []){
    return t.map(e => new Szazlabu(e));
}  

//Feladat 6
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
    // Feladat 2
    document.getElementById('fel2').addEventListener('click', () => {    
        lista5 = [];    
        lista5.push(lista.filter(e => e % 5 == 0));
        lista5.forEach((e, index) => {
             console.log(index, e);
        })
    })   
    // Feladat 3
     document.getElementById('hozzaAd').addEventListener('click', () => {
        lista.push(parseInt(document.getElementById('bekertSzam').value));
     })
     // Feladat 4
     let sz = new Szazlabu(30);
     console.log(sz.toString());     
     // Feladat 6   

     // classen belül szazlabuMejelenites('letrehozas', Szazlabu.labakbolSzazlabuk(lista));

     szazlabuMejelenites('letrehozas', labakbolSzazlabuk(lista));
});