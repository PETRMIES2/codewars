function firstNonRepeatingLetter(word) {
    let character = word
        .split('')
        .find(char => (word.match(new RegExp(char,"gi")) || "").length === 1);
    return character || "";
}

console.log(firstNonRepeatingLetter("sTreSS") === "T");
