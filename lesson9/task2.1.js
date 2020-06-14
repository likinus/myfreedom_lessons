let arrNames = ['Igor', 'Nastya', 'Valera', 'Sasha'];
    if (arrNames.length < 2){
    arrNames[1] = "Alex";
    }
let [firstName, secondName, ...otherNames] = arrNames;

console.log(otherNames[0], otherNames[1]);
console.log(firstName);
console.log(secondName);
