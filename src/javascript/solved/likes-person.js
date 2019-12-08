function likes(names) {
    return createText(names, names.length);
}

createText = ([x, y, z], elements = 0) => {
    let text = [
        `no one likes this`,
        `${x} likes this`,
        `${x} and ${y} like this`,
        `${x}, ${y} and ${z} like this`,
        `${x}, ${y} and ${elements - 2} others like this`
    ]
    return text[Math.min(elements, 4)];
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes(['Alex', 'Jacob', 'Mark']));
console.log(likes(['Alex', 'Jacob']));
console.log(likes(['Alex']));
console.log(likes([]));
