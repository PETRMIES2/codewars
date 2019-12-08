//6//http://phaser.io/docs/2.6.2/index
//http://opengameart.org/content/dungeon-tileset
//http://opengameart.org/content/16x16-rpg-tilesets
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'finnforce', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() {
    game.load.spritesheet('hero', 'assets/hero2.png', 20, 27, 12);
}

var player;
var cursors;
var facing = 'right';
//var map;
function create() {
    //  map = game.add.tilemap('map');
    //map.
    game.world.setBounds(-2000, -2000, 4000, 4000);
    //game.world.resize(3000, 3000);
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.stage.backgroundColor = '#1071bc';
 game.physics.p2.restitution = 0.5;
    //    var walk = hero.animations.add('walk');

    //  Enable Arcade Physics for the sprite
    //    game.physics.enable(hero, Phaser.Physics.ARCADE);
    //hero.animations.play('walk', 30, true);

    player = game.add.sprite(400, 600, 'hero');
    //player.anchor.setTo(0.5, 0.5);
    player.animations.add('left', [9, 10, 11], 10, true);
    player.animations.add('down', [6, 7, 8], 10, true);
    player.animations.add('up', [3, 4, 5], 10, true);
    player.animations.add('right', [0, 1, 2], 10, true);

    game.physics.p2.enable(player);
    player.body.fixedRotation = true;
    game.camera.follow(player);
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    if (cursors.up.isDown) {
        //        game.camera.y += 16;
        if (facing != 'up') {
          player.body.moveUp(200);
          player.animations.play('up');
            facing = 'up';
        }
    } else if (cursors.down.isDown) {
        if (facing != 'down') {
          player.body.moveDown(200);
          player.animations.play('down');
            facing = 'down';
        }

        //    game.camera.y -= 16;
    } else if (cursors.left.isDown) {
        if (facing != 'left') {
          player.body.moveLeft(200);
          player.animations.play('left');
            facing = 'left';
        }
        //        game.camera.x += 16;

    } else if (cursors.right.isDown) {
      if (facing != 'right') {
          player.body.moveRight(200);
          player.animations.play('right');
          facing = 'right';
      }

        //        game.camera.x -= 16;
    } else {
      player.body.velocity.x = 0;
      player.body.velocity.y = 0;

       if (facing != 'idle') {
           player.animations.stop();

           if (facing == 'left') {
               player.frame = 9;
           } else if (facing == 'right'){
               player.frame = 0;
           }else if (facing == 'up'){
               player.frame = 3;
           }else if (facing == 'down'){
               player.frame = 6;
           }

           facing = 'idle';
       }
    }

}

function render() {

    game.debug.spriteInfo(player, 32, 32);

}
