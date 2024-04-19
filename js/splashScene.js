/* global Phaser */

//* Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Apr 20234
// This is the Splash Scene 

/**
 * This class is the Splash Scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor(){
    super({ key: "splashScene" })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data){
    this.cameras.main.setBackgroumdColor("ffffff")
  }

/**
 * Can be defined on your own Scenes.
 * Use it to load assets
 */
 preload(){
  console.log("Splash Scene")
 }

/** 
 * Can be defined on  your own Scenes.
 * Use it to create your game objects.
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
  create(data) {
    //pass
  }

/**
 * Should be overridden by your own Scenes.
 * This method is called once per game step while the scene is running.
 * @param {number} time - The current time.
 * @param {number} delta - The delta time in ms since the last frame.
 */
  update(time,delta) {
    //pass
  }
}