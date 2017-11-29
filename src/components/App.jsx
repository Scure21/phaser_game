import React, { Component } from "react";
import { game, preload, create, update } from "../game.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      platforms: [],
      player: [],
      cursor: [],
      stars: [],
      score: 0,
      scoreText: 0,
      monster: [],
      walk: []
    };

    this.preload = this.preload.bind(this);
    // this.create = this.create.bind(this);
  }

  componentDidMount() {
    //when the component mounts, render the canvas
    const gameInstance = new Phaser.Game(800, 600, Phaser.AUTO, "app", {
      preload: this.preload,
      create: create,
      update: update
    });
    !this.state.game &&
      this.setState({ game: gameInstance }, gameInstance => {
        return this.preload(this.state.game);
      });
    // this.create(gameInstance);
  }

  preload(gameInstance) {
    gameInstance.load.image("sky", "/assets/sky.png");
    gameInstance.load.image("ground", "/assets/platform.png");
    gameInstance.load.image("star", "/assets/star.png");
    gameInstance.load.spritesheet("dude", "/assets/dude.png", 32, 48);
    gameInstance.load.spritesheet("monster", "/assets/baddie.png", 32, 32);
  }

  // create(gameInstance) {
  //   // Creating the ground and ledges
  //   // Enable physics
  //   game.physics.startSystem(Phaser.Physics.ARCADE);
  //   // background
  //   game.add.sprite(0, 0, "sky");

  //   // platform
  //   this.setState({ platforms: game.add.group() });
  //   this.state.platforms.enableBody = true;

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

  render() {
    return <div className="app-container"> </div>;
  }
}
