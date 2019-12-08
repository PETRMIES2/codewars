// Simplified for kata. Lots of mutation
function undoRedo(currentObject) {
  let commands = [Object.assign({}, currentObject)];
  let index = 0;
  let cutTail = () => {
    if (!commands.splice(index)) {
      commands.splice(index);
    }
  }
  let getCommandIfExists = indexSource => {
    let command = commands[indexSource];
    if (!command) {
      throw new Error("Nothing to do");
    }
    return command;
  }
  return {
    set: setValue,
    get: getValue,
    del: deleteValue,
    undo: undoLast,
    redo: redoLast
  };
  function setValue(key, value) {
    cutTail(index++);
    currentObject[key] = value;
    commands.push(Object.assign({}, currentObject));
  }

  function deleteValue(key) {
    cutTail(index++);
    delete currentObject[key];
    commands.push(Object.assign({}, currentObject));
  }

  function redoLast() {
    let command = getCommandIfExists(index + 1);
    index++;
    copyValuesFrom(command);
  }

  function undoLast() {
    let command = getCommandIfExists(index - 1);
    index--;
    copyValuesFrom(command);
  }

  function getValue(value) {
    return currentObject[value];
  }

  function copyValuesFrom(source) {
    for (var k in currentObject) {
      delete currentObject[k];
    }

    for (var k in source) {
      currentObject[k] = source[k];
    }
  }

  function print() {
    console.log(index, 'commands', commands, 'current', currentObject);

  }
}

/*let commandcurrentObject = {
  x: 1,
  y: 2
};
*/
let commandPattern = undoRedo({});
commandPattern.set('x', 5);
commandPattern.set('y', 6);
commandPattern.undo();
commandPattern.set('y', 66);
//commandPattern.redo();
commandPattern.undo();
commandPattern.redo();
