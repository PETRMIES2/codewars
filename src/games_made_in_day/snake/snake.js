const snake = (function world() {

  let snakeModel = {
    x: 0,
    y: 0,
    color: 'orange',
    next: undefined
  };
  let lastPartOfSnake = snakeModel;
  let canvas = document.getElementById("snakeCanvas");
  let context = canvas.getContext("2d");
  let width = canvas.width;
  let height = canvas.height;
  let blockSize = Math.floor(width / 60);
  let snakeSize = 1;
  let candy = candyToRandomPlace(snakeModel);

  redrawCanvas(canvas);
  canvas.tabIndex = 1000;
  canvas.addEventListener('keydown', update);

  function updateModel(model) {
    if (model.next !== undefined) {
      updateModel(model.next);
      model.next.x = model.x;
      model.next.y = model.y;
    }
  }

  function update(event) {
    updateModel(snakeModel);
    if (event.keyCode === 39) {
      snakeModel.x += 10;
    }
    if (event.keyCode === 37) {
      snakeModel.x += -10;
    }
    if (event.keyCode === 38) {
      snakeModel.y += -10;
    }
    if (event.keyCode === 40) {
      snakeModel.y += 10;
    }
    redrawCanvas(canvas);
  }

  function newMove(target, x = 0, y = 0) {
    let copy = Object.assign({}, target);
    copy.x += x;
    copy.y += y;
    copy.color = 'grey';
    return copy;
  }

  function reserved(candy, snakePart) {
    if (snakePart.next !== undefined) {
      return reserved(candy, snakePart.next);
    }
    return candy && snakePart && (candy.x == snakePart.x) && (candy.y == snakePart.y);
  }
  function candyToRandomPlace() {
    let candy = {};
    do {
      candy.x = Math.floor((Math.random() * width / blockSize) + 1) * blockSize;
      candy.y = Math.floor((Math.random() * height / blockSize) + 1) * blockSize;
    } while (reserved(candy, snakeModel));
    candy.color = 'red';
    return candy;
  }

  function redrawCanvas(canvas) {
    clearScreen(canvas);
    let context2D = canvas.getContext("2d");
    if (candy.x === snakeModel.x && candy.y === snakeModel.y) {
      ++snakeSize;
      let newPart = newMove(lastPartOfSnake, 0, 0);
      lastPartOfSnake.next = newPart;
      lastPartOfSnake = newPart;
      candy = candyToRandomPlace();
    }
    context2D.beginPath();
    drawItem(context2D, snakeModel, blockSize);
    let model = snakeModel.next;
    while (model !== undefined) {
      drawItem(context2D, model, blockSize);
      model = model.next;
    }
    context2D.closePath();
    context2D.beginPath();
    drawItem(context2D, candy, blockSize);
    context2D.closePath();
  }

  function clearScreen(canvas) {
    context.beginPath();
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawItem(context2D, item, blockSize) {
    context2D.rect(item.x, item.y, blockSize, blockSize);
    context2D.fillStyle = item.color;
    context2D.fill();
  }

  let animationId;

  function move() {
    let xDiff = snakeModel.x - candy.x;
    let yDiff = snakeModel.y - candy.y;
    if (xDiff < 0) {
      update({
        keyCode: 39
      })
    } else if (xDiff > 0) {
      update({
        keyCode: 37
      })
    } else if (yDiff < 0) {
      update({
        keyCode: 40
      })
    } else if (yDiff > 0) {
      update({
        keyCode: 38
      })
    }
    animationId = requestAnimationFrame(move);
  }

  function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

    animationId = requestAnimationFrame(move);
  }

  function stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    cancelAnimationFrame(animationId);
  }
  return {
    start: start,
    stop: stop
  };

})();
