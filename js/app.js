let sum1 = prompt("Birinchi son kiriting ?");

for (let i = 0; i < sum1; i++) {
    if (i % 2 === 0) {
        alert(`${sum1}: juft son`);
    } else {
        continue;
    }
}

alert("Boshqa sahifaga o'tish uchun 🆗 tugmasini bosing!");

let sum2 = prompt("Ikkinchi son kiriting ?");

for (let i = 0; i < sum2; i++) {
    sum3 = sum2 + sum1;    
    alert(sum3);
}