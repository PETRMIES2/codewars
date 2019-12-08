// Example of mutation. One big problem in OO
let Flock = function(n) {
    this.seagulls = n;
};
Flock.prototype.conjoin = function(other) {
    this.seagulls += other.seagulls;
    return this;
};
Flock.prototype.breed = function(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
};
let flock_a = new Flock(4);
let flock_b = new Flock(2);
let flock_c = new Flock(0);

let joinedAC = flock_a.conjoin(flock_c);
console.log("joined", joinedAC);
console.log(flock_a);

let breededWithB = joinedAC.breed(flock_b);
console.log("breededWithB", breededWithB);
console.log(flock_a);

let breededWithAB = flock_a.breed(flock_b);
console.log("breededWithAB", breededWithAB);
console.log(flock_a);

let result = flock_a.conjoin(breededWithAB);
console.log("result", result);
//=> 32
