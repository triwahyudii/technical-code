
//bilangan ganjil
let bilanganGanjil = [];
for (let i=0; i<=100; i++) {
    if (i%2==1) {
        bilanganGanjil = [...bilanganGanjil, i]
    }
};

console.log(bilanganGanjil);

//bilangan prima
let bilanganPrima = [];
for (let i=0; i<=100; i++) {
    let prima = 0;
    for (let a=1; a<=i; a++) {
        if (i%a==0) {
            prima = prima + 1
        }
    }
    if (prima == 2) {
        bilanganPrima = [...bilanganPrima, i]
    }
};

console.log(bilanganPrima);

//segitiga
const generateSegitiga = (data) => {
    const char =data.toString()
    let c = 10
    for (let i=0; i<char.length +1; i++) {
        const powLopp = Math.pow(c, i).toString().substring(1)
        const result = char [i-1] + powLopp
        console.log(result)
    }
};

let angka = 1345000;
generateSegitiga(angka);