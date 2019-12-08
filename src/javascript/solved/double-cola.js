// Mutable -version
// People standing in a line.
// Person drinks from vending machine
// After drinking person is doubled and moved to end of the line
// [x,y]
// 1.round = [y,x,x]
// 2.round = [x,x,y,y]
// 3.round = [x,y,y,x,x]...
// FIXME: awful and slow code
// Too much mutation and algoritm is horrible

function whoIsNext(names, drinkNumber) {
    const personStructure = convertToPerson(names);
    const nextPerson = next(personStructure);
    for (let drinkRound = 0; drinkRound < drinkNumber;) {
        person = nextPerson();
        if (drinkRound + person.frontOfLine > drinkNumber) {
          break;
        }
        drinkRound = drinkRound + person.frontOfLine;
        person.endOfLine = person.frontOfLine * 2;
        person.frontOfLine = 0;

    }
    return person.name;

}

next = persons => {
    let currentSelection = 0;
    return () => {
        let person = persons[currentSelection];
        if (person.frontOfLine <= 0) {
            person.frontOfLine = person.endOfLine;
            person.endOfLine = 0;
            currentSelection = (currentSelection + 1) % persons.length;
            person = persons[currentSelection];
        }
        return person;
    }
};
convertToPerson = (names) => names.map(name => {
    return {
        "name": name,
        "frontOfLine": 1,
        "endOfLine": 0
    }
});

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) === "Sheldon");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 2) === "Leonard");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 3) === "Penny");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 4) === "Rajesh");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5) === "Howard");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7) === "Sheldon");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8) === "Leonard");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 12) === "Rajesh");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) === "Penny");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5212432) === "Howard");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52124321) === "Leonard");
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5212432112) === 'Howard');
