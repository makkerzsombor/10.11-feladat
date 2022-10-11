class Szazlabu{
    labakSzama;
    constructor(ujLabak){
        this.labakSzama = ujLabak;
    }
    toString() {
        let string = ' lábú százlábú';
        return this.labakSzama + string;
    }
    labakbolSzazlabuk()
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
     // Feladat 5
});