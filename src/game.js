// export var game = new Phaser.Game(800, 600, Phaser.AUTO, "app", {
//   preload: preload,
//   create: create,
//   update: update
// });

// export function preload(gameInstance) {
//   game.load.image("sky", "public/assets/sky.png");
//   game.load.image("ground", "public/assets/platform.png");
//   game.load.image("star", "public/assets/star.png");
//   game.load.spritesheet("dude", "public/assets/dude.png", 32, 48);
//   game.load.spritesheet("monster", "public/assets/baddie.png", 32, 32);
// }

// var platforms;
// var player;
// var cursor;
// var stars;
// var score = 0;
// var scoreText;
// var monster;
// var walk;

// export function create(gameInstance) {
//   // Creating the ground and ledges
//   // Enable physics
//   game.physics.startSystem(Phaser.Physics.ARCADE);
//   // background
//   game.add.sprite(0, 0, "sky");

//   // platform
//   platforms = game.add.group();
//   platforms.enableBody = true;

//   var ground = platforms.create(0, game.world.height - 64, "ground");
//   ground.scale.setTo(2, 2);
//   ground.body.immovable = true;

//   var ledge = platforms.create(400, 400, "ground");
//   ledge.body.immovable = true;
//   ledge = platforms.create(-150, 250, "ground");
//   ledge.body.immovable = true;

//   // Player
//   player = game.add.sprite(32, game.world.height - 150, "dude");
//   game.physics.arcade.enable(player);
//   // player physics properties
//   player.body.bounce.y = 0.2;
//   player.body.gravity.y = 300;
//   player.body.collideWorldBounds = true;

//   // animations to move left and right
//   player.animations.add("left", [0, 1, 2, 3], 10, true);
//   player.animations.add("right", [5, 6, 7, 8], 10, true);

//   //  Our controls.
//   cursors = game.input.keyboard.createCursorKeys();

//   // Monster
//   monster = game.add.sprite(400, game.world.height - 150, "monster");
//   game.physics.arcade.enable(monster);
//   // Monster physics
//   monster.body.bounce.y = 0.2;
//   monster.body.gravity.y = 200;
//   monster.body.collideWorldBounds = true;
//   // monster animations left, right
//   // monster.animations.add('left', [0, 1], 5, true);
//   // monster.animations.add('right', [2, 3], 5, true);

//   // walk function
//   monster.animations.add("walk");
//   monster.animations.play("walk", 5, true);
//   // monster.animations.play('right');
//   //monster.animations.play(5, 'walk');

//   // Stars
//   stars = game.add.group();
//   stars.enableBody = true;

//   for (var i = 0; i < 12; i++) {
//     var star = stars.create(i * 70, 0, "star");
//     star.body.gravity.y = 200;
//     star.body.bounce.y = 0.7 + Math.random() * 0.2;
//   }

//   // Score
//   scoreText = game.add.text(16, 16, "Score: 0", {
//     fontSize: "32px",
//     fill: "#000"
//   });
// }

// export function update(gameInstance) {
//   //  Collide the player and the stars with the platforms
//   game.physics.arcade.collide(player, platforms);
//   // check for monster collisions with platforms
//   game.physics.arcade.collide(monster, platforms);
//   // check for stars collision with platforms
//   game.physics.arcade.collide(stars, platforms);
//   // check for player collision with stars
//   game.physics.arcade.overlap(player, stars, collectStar, null, this);

//   // player movement with the keyboard
//   player.body.velocity.x = 0;

//   if (cursors.left.isDown) {
//     //  Move to the left
//     player.body.velocity.x = -150;
//     player.animations.play("left");
//   } else if (cursors.right.isDown) {
//     //  Move to the right
//     player.body.velocity.x = 150;
//     player.animations.play("right");
//   } else {
//     //  Stand still
//     player.animations.stop();
//     player.frame = 4;
//   }

//   //  Allow the player to jump if they are touching the ground.
//   if (cursors.up.isDown && player.body.touching.down) {
//     player.body.velocity.y = -350;
//   }
// }

// // Util functions
// function collectStar(player, star) {
//   // Removes the star from the screen
//   star.kill();

//   // update the score
//   score += 10;
//   scoreText.text = "Score: " + score;
// }
