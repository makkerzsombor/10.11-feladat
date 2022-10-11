let lista = [];
let lista5 = [];

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
        lista.push(Math.floor(Math.random() * 30) + 1)
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 5 == 0) {
            lista5.push(lista[i])
        }
    }
    lista5.forEach((e, index) => {
         console.log(index, e);
    })
});