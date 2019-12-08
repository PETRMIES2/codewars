var DI = function(dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function(func) {
  let argumentNames = func.toString()
    .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/mg, '')
    .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
    .split(/,/);
  let callerFunctions = argumentNames.map(name => this.dependency[name]);
  if (argumentNames.length === 1) {
    return func;
  }
  return () => func.apply(func, callerFunctions);
}

var deps = {
  'dep1': function() {
    return 'this is dep1';
  },
  'dep2': function() {
    return 'this is dep2';
  },
  'dep3': function() {
    return 'this is dep3';
  },
  'dep4': function() {
    return 'this is dep4';
  }
};

let di = new DI(deps);
let functionWithDI = di.inject(function(dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});
let functionWithoutDI = di.inject(function() {
  return ["HElloe", "wll"].join(' -> ');
});

console.log(functionWithDI());
console.log(functionWithoutDI());
