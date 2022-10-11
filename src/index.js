
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
});