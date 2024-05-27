/* global Phaser */

//* Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Apr 20234
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

// create the new scenes 
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()

/**
 * Start Phaser game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// Note: Remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// the start scene
game.scene.start("splashScene")
