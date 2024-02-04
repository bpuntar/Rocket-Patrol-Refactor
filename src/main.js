// Name: Brandon Apuntar
// Mod Title: Rocket Patrol Plus
// Mods: New Spaceship (5pts), new enemy spaceship animation (3pts), Control Rocket after firing (1pt),
// Particle emitter (5pts), New title screen (3pts), countdown timer (3pts),
//
// Citations:
// samme countdown timer from:
// https://phaser.discourse.group/t/countdown-timer/2471/9
// Particle system inspiration from:
// https://labs.phaser.io/edit.html?src=src\game%20objects\particle%20emitter\emit%20at%20pointer.js
// adapted to use with .explode 
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

