const covid = ["J&J", "Pfizer", "Covaxin"];
console.log(covid);

console.log('====Adding element====');
covid.push("Sputnick");
console.log(covid);

console.log('===Traversing Array ====');
for (const iterator of covid) {
    console.log(iterator);

}

console.log('=== Array Destructuring===');

var { '0': first, "1": second, "2": third, '3': forth } = covid
console.log(first, second, third, forth);


