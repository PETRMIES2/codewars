//Mutable-version
//TODO immutable: recusive and without recursion
function dirReduc(array){
// Mutation happens only inside this function but it is still
// really awful code.
  let directions = array.slice(0);
  let uselessMove = check();
  let index = 0;
  while (index < directions.length-1) {
    if (uselessMove(directions[index], directions[index+1])) {
      directions.splice(index,2);
      index = 0;
    } else {
      ++index;
    }
  }
  return directions;
}

check = () => {
    let opposites = new Map();
    opposites.set("NORTH", "SOUTH");
    opposites.set("EAST", "WEST");
    opposites.set("SOUTH", "NORTH");
    opposites.set("WEST", "EAST");

    return (current, next) => {
      return opposites.get(current) === next;
    }
}


console.log("RESULT", dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log("RESULT", dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log("RESULT", dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
