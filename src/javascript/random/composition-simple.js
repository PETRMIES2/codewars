function name(name) {
  return `Your car is type of '${name}'`
};

function engine(engine, power) {
  return `your engine is '${engine}' and it contains '${power}' horsepower`
};

function vehicle(carname, carEngine, hp) {

  return {
    motor: () => engine(carEngine, hp),
    car: () => name(carname),
    info: function() {
      console.log(this.car() + ' and ' + this.motor());
    }
  }
}

let ferrari = vehicle('Ferrari', 'V8', '500');
ferrari.info();
