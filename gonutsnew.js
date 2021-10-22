window.addEventListener("load", welcome);
//window.addEventListener("load", anvilstart);


//window.addEventListener("load", rotation);
let lives = 3;
let score = 0;
let acorn = 10;
let macadamia = 50;
let gameIsPaused = false;
let gameHasEnded = false;

// sounds
let nutSound = document.querySelector("#nut_sound");
let anvilSound = document.querySelector("#anvil_sound");
let almondSound = document.querySelector("#almond_sound");
let backgroundSound = document.querySelector("#background_sound");
let levelcompleteSound = document.querySelector("#levelcomplete_sound");
let levelcompleteSound2 = document.querySelector("#levelcomplete_sound2");
let gameoverSound = document.querySelector("#gameover_sound");
let gameoverSound2 = document.querySelector("#gameover_sound2");
let buttonSound = document.querySelector("#button_sound");



function welcome() {


    document.querySelector("#title_screen").classList.remove("hidden");
document.querySelector("#play_button").addEventListener("click", start);
    document.querySelector("#play_button").addEventListener("mouseover", playbuttonSound);
    document.querySelector("#how_to_play_button").addEventListener("click", instructions);
    document.querySelector("#how_to_play_button").addEventListener("mouseover", playbuttonSound);
    //buttons
    document.querySelector("#play_button").classList.add("scaleUp");
document.querySelector("#how_to_play_button").classList.add("scaleUp");

document.querySelector("#close_button").classList.add("scaleUp");
document.querySelector("#restart_button").classList.add("scaleUp");
document.querySelector("#home_button2").classList.add("scaleUp");
document.querySelector("#restart_button2").classList.add("scaleUp");
document.querySelector("#home_button3").classList.add("scaleUp");
document.querySelector("#play_button2").classList.add("scaleUp");
document.querySelector("#home_button4").classList.add("scaleUp");

document.querySelector("#pause_button").classList.add("scaleUp");
document.querySelector("#home_button").classList.add("scaleUp");

document.querySelector("#mute_button2").classList.add("scaleUp");
}


/* document.querySelector("#anvil_container").classList.add("anvil_pos");
document.querySelector("#almond_container_0").classList.add("almond_pos1");
document.querySelector("#walnut_container_0").classList.add("walnut_pos1");
document.querySelector("#walnut_container_1").classList.add("walnut_pos2");
document.querySelector("#acorn_container_0").classList.add("acorn_pos1");
    document.querySelector("#acorn_container_1").classList.add("acorn_pos2");

    document.querySelector("#acorn_container_2").classList.add("acorn_pos3");
    document.querySelector("#acorn_container_3").classList.add("acorn_pos4");
 document.querySelector("#macadamia_container_0").classList.add("macadamia_pos4");
    document.querySelector("#macadamia_container_1").classList.add("macadamia_pos5");
*/


// Scape up buttons





function instructions() {
    console.log("show instructions");
    document.querySelector("#how_to_play_button").removeEventListener("click", instructions);
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#close_button").addEventListener("click", home); document.querySelector("#close_button").addEventListener("mouseover", playbuttonSound);
}

function home() {
    console.log("home");
   document.querySelector("#how_to_play_button").addEventListener("click", instructions);
    document.querySelector("#how_to_play_button").addEventListener("mouseover", playbuttonSound);

 document.querySelector("#close_button").removeEventListener("click", home);
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#game_over2").classList.add("hidden");
   document.querySelector("#instructions").classList.add("hidden");
     document.querySelector("#level_complete_squirrel").classList.add("hidden");
     document.querySelector("#level_complete_squirrel").classList.remove("appear");
    /*document.querySelector("#level_complete_squirrel").classList.add("stop");
     document.querySelector("#nuts_rotating_container").classList.add("stop");

    */document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#title_screen").classList.remove("hidden");
   document.querySelector("#liquid").classList.value = "";
        document.querySelector("#anvil_container").classList.value = "";
        document.querySelector("#almond_container_0").classList.value = "";



        // Walnut
        document.querySelector("#walnut_container_0").classList.value = "";
        document.querySelector("#walnut_container_1").classList.value = "";



        //ACORN

        document.querySelector("#acorn_container_0").classList.value = "";
        document.querySelector("#acorn_container_1").classList.value = "";

        document.querySelector("#acorn_container_2").classList.value = "";
        document.querySelector("#acorn_container_3").classList.value = "";

        document.querySelector("#life1").classList.remove("blackheart");
        document.querySelector("#life2").classList.remove("blackheart");

        document.querySelector("#life3").classList.remove("blackheart");




        //MACADAMIA
        document.querySelector("#macadamia_container_0").classList.value = "";

        document.querySelector("#macadamia_container_1").classList.value = "";

        document.querySelector("#anvil_sprite").removeEventListener("click", anvilDisappear);
        document.querySelector("#almond_sprite_0").removeEventListener("click", almondDisappear);
        document.querySelector("#walnut_sprite_0").removeEventListener("click", walnutDisappear);
        document.querySelector("#walnut_sprite_1").removeEventListener("click", walnutDisappear);
        document.querySelector("#acorn_sprite_0").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_1").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_2").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_3").removeEventListener("click", acornDisappear);
        document.querySelector("#macadamia_sprite_0").removeEventListener("click", macadamiaDisappear);
        document.querySelector("#macadamia_sprite_1").removeEventListener("click", macadamiaDisappear);
    document.querySelector("#almond_sprite_0").removeEventListener("animationiteration", newPosition);
        document.querySelector("#walnut_container_0").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#walnut_container_1").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#acorn_container_0").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_1").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_2").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_3").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#macadamia_container_0").removeEventListener("animationiteration", macadamiaPosition);
        document.querySelector("#macadamia_container_1").removeEventListener("animationiteration", macadamiaPosition);
     document.querySelector("#anvil_sprite").removeEventListener("transitionend", anvilrestart);
        document.querySelector("#almond_sprite_0").removeEventListener("transitionend", almondrestart);
        document.querySelector("#walnut_sprite_0").removeEventListener("transitionend", walnutrestart);
        document.querySelector("#walnut_sprite_1").removeEventListener("transitionend", walnutrestart);
        document.querySelector("#acorn_sprite_0").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_1").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_2").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_3").removeEventListener("transitionend", acornRestart);
        document.querySelector("#macadamia_sprite_0").removeEventListener("transitionend", macadamiarestart);
        document.querySelector("#macadamia_sprite_1").removeEventListener("transitionend", macadamiarestart);


        lives = 3;
    score = 0; document.querySelector("#macadamia_sprite_1").offsetHeight;

    document.querySelector("#liquid").classList.remove("stop");
    document.querySelector("#anvil_container").classList.remove("stop");
    document.querySelector("#almond_container_0").classList.remove("stop");

    document.querySelector("#character").classList.remove("stop");

    // Walnut
    document.querySelector("#walnut_container_0").classList.remove("stop");
    document.querySelector("#walnut_container_1").classList.remove("stop");



    //ACORN

    document.querySelector("#acorn_container_0").classList.remove("stop");
    document.querySelector("#acorn_container_1").classList.remove("stop");

    document.querySelector("#acorn_container_2").classList.remove("stop");
    document.querySelector("#acorn_container_3").classList.remove("stop");




    //MACADAMIA
    document.querySelector("#macadamia_container_0").classList.remove("stop");

    document.querySelector("#macadamia_container_1").classList.remove("stop");


    //Reset game
    gameHasEnded = false;
    stopSounds();

}


/* document.querySelector("#character").classList.add("rot");

document.querySelector("#acorn_container_3").classList.add("falling");

document.querySelector("#acorn_container_2").classList.add("falling");

document.querySelector("#acorn_container_1").classList.add("falling");
document.querySelector("#acorn_container_0").classList.add("falling");


document.querySelector("#anvil_container").classList.add("anvil_falling");
document.querySelector("#anvil_sprite").classList.add("anvil_scale");

document.querySelector("#walnut_container_1").classList.add("walnut_falling");

document.querySelector("#walnut_container_0").classList.add("walnut_falling");




document.querySelector("#macadamia_sprite_1").classList.add("macadamia_falling");


*/
// first selecting the right element
// In our case the container <div> that holds the sprite
/*function anvilstart() {
    console.log("function anvilstart()");
    document.querySelector("#anvil_container").classList.add("anvil_falling");
    //document.querySelector("#anvil_sprite").classList.add("anvil_scaling");
    document.querySelector("#anvil_sprite").addEventListener("click", anvilDisappear);
    document.querySelector("#anvil_sprite").addEventListener("animationiteration", suddenDeath);
}
*/
function start() {
    console.log("function start()");

    startTimer();
     //play background music
    playBackgroundSound();

    backgroundSound.addEventListener("ended", playBackgroundSound());
   //document.querySelector("#level_complete_squirrel").classList.add("hidden");
    document.querySelector("#home_button").addEventListener("click", home);
    document.querySelector("#home_button").addEventListener("mouseover", playbuttonSound);

document.querySelector("#home_button2").addEventListener("click", home);
    document.querySelector("#home_button2").addEventListener("mouseover", playbuttonSound);
document.querySelector("#home_button3").addEventListener("click", home);
    document.querySelector("#home_button3").addEventListener("mouseover", playbuttonSound);
    document.querySelector("#title_screen").classList.add("hidden");

    document.querySelector("#score").textContent = score;



    //document.querySelector("#almond_sprite_0").addEventListener("click", showPoints);

     document.querySelector("#anvil_container").addEventListener("animationstart", playAnvilSound);
    document.querySelector("#anvil_sprite").addEventListener("click", stopAnvilSound);

    document.querySelector("#character").classList.add("character_sprite");
    //ANVIL
    document.querySelector("#anvil_container").classList.add("anvil_falling");
    document.querySelector("#anvil_container").classList.add("anvil_pos");
    document.querySelector("#anvil_sprite").addEventListener("click", anvilDisappear);
    document.querySelector("#anvil_container").addEventListener("animationiteration", gameOver);

    // Almond
    document.querySelector("#almond_container_0").classList.add("almond_falling");
    document.querySelector("#almond_container_0").classList.add("almond_pos1");

    document.querySelector("#almond_sprite_0").addEventListener("click", loseLife);
   // document.querySelector("#walnut_sprite_0").addEventListener("click", showPoints);
   // document.querySelector("#walnut_sprite_1").addEventListener("click", showPoints);

    //document.querySelector("#life1").classList.add("redheart");

    document.querySelector("#almond_sprite_0").addEventListener("click", almondDisappear);
    document.querySelector("#almond_container_0").addEventListener("animationiteration", newPosition);
    // Walnut
    document.querySelector("#walnut_container_0").classList.add("walnut_pos1");
    document.querySelector("#walnut_container_0").classList.add("walnut_falling");
    document.querySelector("#walnut_container_1").classList.add("walnut_pos2");
    document.querySelector("#walnut_container_1").classList.add("walnut_falling");
    document.querySelector("#walnut_sprite_0").addEventListener("click", walnutDisappear);
    document.querySelector("#walnut_sprite_1").addEventListener("click", walnutDisappear);
    document.querySelector("#walnut_container_0").addEventListener("animationiteration", walnutPosition);
    document.querySelector("#walnut_container_1").addEventListener("animationiteration", walnutPosition);


    //ACORN
    /*var i = 0;
    for (i = 0; i < 4; i++) {
        document.querySelector("#acorn_container_" + i).classList.add("falling");
        document.querySelector("#acorn_sprite_" + i).addEventListener("click", acornDisappear);
    }
    */
    document.querySelector("#acorn_container_0").classList.add("acorn_falling");
    document.querySelector("#acorn_container_1").classList.add("acorn_falling");

    document.querySelector("#acorn_container_2").classList.add("acorn_falling");
    document.querySelector("#acorn_container_3").classList.add("acorn_falling");
    document.querySelector("#acorn_container_0").classList.add("acorn_pos1");
    document.querySelector("#acorn_container_1").classList.add("acorn_pos2");

    document.querySelector("#acorn_container_2").classList.add("acorn_pos3");
    document.querySelector("#acorn_container_3").classList.add("acorn_pos4");
    document.querySelector("#acorn_sprite_0").addEventListener("click", acornDisappear);
    document.querySelector("#acorn_sprite_1").addEventListener("click", acornDisappear);
    document.querySelector("#acorn_sprite_2").addEventListener("click", acornDisappear);
    document.querySelector("#acorn_sprite_3").addEventListener("click", acornDisappear);
    document.querySelector("#acorn_container_0").addEventListener("animationiteration", acornPosition);
    document.querySelector("#acorn_container_1").addEventListener("animationiteration", acornPosition);
    document.querySelector("#acorn_container_2").addEventListener("animationiteration", acornPosition);
    document.querySelector("#acorn_container_3").addEventListener("animationiteration", acornPosition);

    //MACADAMIA
    document.querySelector("#macadamia_container_0").classList.add("macadamia_falling");

    document.querySelector("#macadamia_container_0").classList.add("macadamia_pos1");
    document.querySelector("#macadamia_container_1").classList.add("macadamia_falling");
    document.querySelector("#macadamia_container_1").classList.add("macadamia_pos2");
    document.querySelector("#macadamia_sprite_0").addEventListener("click", macadamiaDisappear);
    document.querySelector("#macadamia_sprite_1").addEventListener("click", macadamiaDisappear);
    document.querySelector("#macadamia_container_0").addEventListener("animationiteration", macadamiaPosition);
    document.querySelector("#macadamia_container_1").addEventListener("animationiteration", macadamiaPosition);


    // Pause button
    document.querySelector("#pause_button").addEventListener("click", pauseGame);
    document.querySelector("#pause_button").addEventListener("mouseover", playbuttonSound);

    document.querySelector("#mute_button2").addEventListener("click", muteSound);
    document.querySelector("#mute_button2").addEventListener("mouseover", playbuttonSound);



}

 function restartGame() {
    console.log("restart");
    //hide unused screens
    //document.querySelector("#play2").removeEventListener("click", restartGame);

    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#game_over2").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
     document.querySelector("#level_complete_squirrel").classList.remove("appear");

   stopSounds();
playBackgroundSound();

    //document.querySelector("#level_complete_squirrel").classList.add("hidden");
    //reset variables
    lives = 3;
    score = 0;
    //remove paused classes
    document.querySelector("#level_complete_squirrel").classList.remove("stop");
    document.querySelector("#nuts_rotating_container").classList.remove("stop");
    document.querySelector("#liquid").classList.remove("stop");
    document.querySelector("#liquid").classList.remove("timer");
    document.querySelector("#anvil_container").classList.remove("stop");
    document.querySelector("#almond_container_0").classList.remove("stop");

    document.querySelector("#character").classList.remove("stop");

    // Walnut
    document.querySelector("#walnut_container_0").classList.remove("stop");
    document.querySelector("#walnut_container_1").classList.remove("stop");



    //ACORN

    document.querySelector("#acorn_container_0").classList.remove("stop");
    document.querySelector("#acorn_container_1").classList.remove("stop");

    document.querySelector("#acorn_container_2").classList.remove("stop");
    document.querySelector("#acorn_container_3").classList.remove("stop");




    //MACADAMIA
    document.querySelector("#macadamia_container_0").classList.remove("stop");

    document.querySelector("#macadamia_container_1").classList.remove("stop");

     
     /* document.querySelector("#anvil_sprite").classList.remove("stop");
        document.querySelector("#almond_sprite_0").classList.remove("stop");
        document.querySelector("#walnut_sprite_0").classList.remove("stop");
        document.querySelector("#walnut_sprite_1").classList.remove("stop");
        document.querySelector("#acorn_sprite_0").classList.remove("stop");
        document.querySelector("#acorn_sprite_1").classList.remove("stop");
        document.querySelector("#acorn_sprite_2").classList.remove("stop");
        document.querySelector("#acorn_sprite_3").classList.remove("stop");
        document.querySelector("#macadamia_sprite_0").classList.remove("stop");
        document.querySelector("#macadamia_sprite_1").classList.remove("stop");
     */

    //Reset game
    gameHasEnded = false;
   // startTimer();
    start();

}

function pauseGame() {
    if (gameIsPaused == false) {
        console.log("Game is set to paused");

       /* document.querySelector("#level_complete_squirrel").classList.add("stop");
     document.querySelector("#nuts_rotating_container").classList.add("stop");
        */
       
        
        document.querySelector("#liquid").classList.add("stop");
        document.querySelector("#anvil_container").classList.add("stop");
        document.querySelector("#character_sprite").classList.add("stop");
        document.querySelector("#character").classList.remove("character_sprite");
        document.querySelector("#almond_container_0").classList.add("stop");



        // Walnut
        document.querySelector("#walnut_container_0").classList.add("stop");
        document.querySelector("#walnut_container_1").classList.add("stop");



        //ACORN

        document.querySelector("#acorn_container_0").classList.add("stop");
        document.querySelector("#acorn_container_1").classList.add("stop");

        document.querySelector("#acorn_container_2").classList.add("stop");
        document.querySelector("#acorn_container_3").classList.add("stop");




        //MACADAMIA
        document.querySelector("#macadamia_container_0").classList.add("stop");

        document.querySelector("#macadamia_container_1").classList.add("stop");
        //Pause sprite animations
 document.querySelector("#anvil_sprite").classList.add("stop");
        document.querySelector("#almond_sprite_0").classList.add("stop");
        document.querySelector("#walnut_sprite_0").classList.add("stop");
        document.querySelector("#walnut_sprite_1").classList.add("stop");
        document.querySelector("#acorn_sprite_0").classList.add("stop");
        document.querySelector("#acorn_sprite_1").classList.add("stop");
        document.querySelector("#acorn_sprite_2").classList.add("stop");
        document.querySelector("#acorn_sprite_3").classList.add("stop");
        document.querySelector("#macadamia_sprite_0").classList.add("stop");
        document.querySelector("#macadamia_sprite_1").classList.add("stop");


        //remove all event listeners
        document.querySelector("#anvil_sprite").removeEventListener("click", anvilDisappear);
        document.querySelector("#almond_sprite_0").removeEventListener("click", almondDisappear);
        document.querySelector("#walnut_sprite_0").removeEventListener("click", walnutDisappear);
        document.querySelector("#walnut_sprite_1").removeEventListener("click", walnutDisappear);
        document.querySelector("#acorn_sprite_0").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_1").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_2").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_3").removeEventListener("click", acornDisappear);
        document.querySelector("#macadamia_sprite_0").removeEventListener("click", macadamiaDisappear);
        document.querySelector("#macadamia_sprite_1").removeEventListener("click", macadamiaDisappear);


       /* document.querySelector("#almond_container_0").removeEventListener("animationiteration", newPosition);
        document.querySelector("#walnut_container_0").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#walnut_container_1").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#acorn_container_0").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_1").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_2").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_3").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#macadamia_container_0").removeEventListener("animationiteration", macadamiaPosition);
        document.querySelector("#macadamia_container_1").removeEventListener("animationiteration", macadamiaPosition);





        document.querySelector("#anvil_sprite").removeEventListener("animationend", anvilrestart);
        document.querySelector("#almond_sprite_0").removeEventListener("animationend", almondrestart);
        document.querySelector("#walnut_sprite_0").removeEventListener("animationend", walnutrestart);
        document.querySelector("#walnut_sprite_1").removeEventListener("animationend", walnutrestart);
        document.querySelector("#acorn_sprite_0").removeEventListener("animationend", acornRestart);
        document.querySelector("#acorn_sprite_1").removeEventListener("animationend", acornRestart);
        document.querySelector("#acorn_sprite_2").removeEventListener("animationend", acornRestart);
        document.querySelector("#acorn_sprite_3").removeEventListener("animationend", acornRestart);
        document.querySelector("#macadamia_sprite_0").removeEventListener("animationend", macadamiarestart);
        document.querySelector("#macadamia_sprite_1").removeEventListener("animationend", macadamiarestart);
*/

        //
         
       /* document.querySelector("#almond_sprite_0").removeEventListener("transitionend", showPoints);
        document.querySelector("#walnut_sprite_0").removeEventListener("transitionend", walnutShowPoints);
        document.querySelector("#walnut_sprite_1").removeEventListener("transitionend", walnutShowPoints);
        document.querySelector("#acorn_sprite_0").removeEventListener("transitionend", acornShowPoints);
        document.querySelector("#acorn_sprite_1").removeEventListener("transitionend", acornShowPoints);
        document.querySelector("#acorn_sprite_2").removeEventListener("transitionend", acornShowPoints);
        document.querySelector("#acorn_sprite_3").removeEventListener("transitionend", acornShowPoints);
        document.querySelector("#macadamia_sprite_0").removeEventListener("transitionend", macadamiaShowPoints);
        document.querySelector("#macadamia_sprite_1").removeEventListener("transitionend", macadamiaShowPoints);
        */
        document.querySelector("#macadamia_sprite_1").offsetHeight;
        gameIsPaused = true;
    } else {
        console.log("Game is set to not paused");
        
         
       document.querySelector("#liquid").classList.remove("stop"); document.querySelector("#anvil_container").classList.remove("stop");
        document.querySelector("#almond_container_0").classList.remove("stop");

        document.querySelector("#character").classList.remove("character_sprite");
        document.querySelector("#character").classList.add("character_sprite");
        // Walnut
        document.querySelector("#walnut_container_0").classList.remove("stop");
        document.querySelector("#walnut_container_1").classList.remove("stop");



        //ACORN

        document.querySelector("#acorn_container_0").classList.remove("stop");
        document.querySelector("#acorn_container_1").classList.remove("stop");

        document.querySelector("#acorn_container_2").classList.remove("stop");
        document.querySelector("#acorn_container_3").classList.remove("stop");




        //MACADAMIA
        document.querySelector("#macadamia_container_0").classList.remove("stop");

        document.querySelector("#macadamia_container_1").classList.remove("stop");
        
        document.querySelector("#anvil_sprite").classList.remove("stop");
        document.querySelector("#almond_sprite_0").classList.remove("stop");
        document.querySelector("#walnut_sprite_0").classList.remove("stop");
        document.querySelector("#walnut_sprite_1").classList.remove("stop");
        document.querySelector("#acorn_sprite_0").classList.remove("stop");
        document.querySelector("#acorn_sprite_1").classList.remove("stop");
        document.querySelector("#acorn_sprite_2").classList.remove("stop");
        document.querySelector("#acorn_sprite_3").classList.remove("stop");
        document.querySelector("#macadamia_sprite_0").classList.remove("stop");
        document.querySelector("#macadamia_sprite_1").classList.remove("stop");

        document.querySelector("#anvil_sprite").addEventListener("click", anvilDisappear);
        document.querySelector("#almond_sprite_0").addEventListener("click", almondDisappear);
        document.querySelector("#walnut_sprite_0").addEventListener("click", walnutDisappear);
        document.querySelector("#walnut_sprite_1").addEventListener("click", walnutDisappear);
        document.querySelector("#acorn_sprite_0").addEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_1").addEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_2").addEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_3").addEventListener("click", acornDisappear);
        document.querySelector("#macadamia_sprite_0").addEventListener("click", macadamiaDisappear);
        document.querySelector("#macadamia_sprite_1").addEventListener("click", macadamiaDisappear);

         /*
         document.querySelector("#anvil_sprite").addEventListener("transitionend", anvilrestart);
        document.querySelector("#almond_sprite_0").addEventListener("transitionend", almondrestart);
        document.querySelector("#walnut_sprite_0").addEventListener("transitionend", walnutrestart);
        document.querySelector("#walnut_sprite_1").addEventListener("transitionend", walnutrestart);
        document.querySelector("#acorn_sprite_0").addEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_1").addEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_2").addEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_3").addEventListener("transitionend", acornRestart);
        document.querySelector("#macadamia_sprite_0").addEventListener("transitionend", macadamiarestart);
        document.querySelector("#macadamia_sprite_1").addEventListener("transitionend", macadamiarestart);

 /* document.querySelector("#almond_sprite_0").addEventListener("transitionend", showPoints);
        document.querySelector("#walnut_sprite_0").addEventListener("transitionend", walnutShowPoints);
        document.querySelector("#walnut_sprite_1").addEventListener("transitionend", walnutShowPoints);
        document.querySelector("#acorn_sprite_0").addEventListener("transitionend", acornShowPoints);
        document.querySelector("#acorn_sprite_1").addEventListener("transitionend", acornShowPoints);
        document.querySelector("#acorn_sprite_2").addEventListener("transitionend", acornShowPoints);
        document.querySelector("#acorn_sprite_3").addEventListener("transitionend", acornShowPoints);
        document.querySelector("#macadamia_sprite_0").addEventListener("transitionend", macadamiaShowPoints);
        document.querySelector("#macadamia_sprite_1").addEventListener("transitionend", macadamiaShowPoints);
*/
        gameIsPaused = false;
        // gameOver();
    }

}

function newPosition() {
    console.log("function newPosition()");
    console.log(this);
    document.querySelector("#almond_container_0").classList.value = "";
    document.querySelector("#almond_container_0").offsetHeight;

    // document.querySelector("#almond_container_0").classList.add("almond_falling");

    let randPos = Math.floor(Math.random() * 5) + 1;
    console.log(randPos);
    document.querySelector("#almond_container_0").classList.add("almond_pos" + randPos);
    start();
}
//ACORN
function acornPosition() {
    console.log("function acornPosition()");
    console.log(this);

    this.classList.value = "";
    this.offsetHeight;

    this.classList.add("acorn_falling");

    let randPos = Math.floor(Math.random() * 8) + 1;
    console.log(randPos);
    this.classList.add("acorn_pos" + randPos);

}

function acornDisappear() {
    console.log("function acornDisappear()");
    console.log(this);

    this.removeEventListener("click", acornDisappear);
    this.parentElement.classList.add("stop");
    this.classList.add("disappear");

// play sound
    nutSound.currentTime = 0;
    nutSound.play();

    score = score + acorn;
    if (score >= 500) {

        levelComplete();


    }

    document.querySelector("#score").textContent = score;
    this.addEventListener("transitionend", acornShowPoints);


}

function acornRestart() {
    console.log("function acornRestart()");
    console.log(this);

    this.removeEventListener("animationend", acornRestart);
this.classList.add("acorn_sprite");
    this.classList.remove("tenpoints");

    this.parentElement.classList.value = "";
    this.classList.remove("disappear");



    this.offsetHeight;

    this.parentElement.classList.add("acorn_falling");
    this.addEventListener("click", acornDisappear);

    let randPos = Math.floor(Math.random() * 8) + 1;
    console.log(randPos);
    this.parentElement.classList.add("acorn_pos" + randPos);
}
//ANVIL

function anvilDisappear() {
    console.log("function anvilDisappear()");
    document.querySelector("#anvil_sprite").removeEventListener("click", anvilDisappear);
    document.querySelector("#anvil_container").classList.add("stop");


    document.querySelector("#anvil_sprite").classList.add("disappear");
    document.querySelector("#anvil_sprite").addEventListener("transitionend", anvilrestart);
}

function anvilrestart() {
    console.log("function anvilrestart ()");
    document.querySelector("#anvil_sprite").removeEventListener("transitionend", anvilrestart);
    document.querySelector("#anvil_container").classList.remove("stop");
    document.querySelector("#anvil_sprite").classList.remove("disappear");

    document.querySelector("#anvil_container").classList.remove("anvil_falling");

    document.querySelector("#anvil_sprite").offsetHeight;

    start();
}

// ALMOND
/* function almondDisappear() {
    console.log("function almondDisappear()");

    document.querySelector("#almond_sprite_0").removeEventListener("click", almondDisappear);
    document.querySelector("#almond_container_0").classList.add("stop");
  almondSound.currentTime = 0;
    almondSound.play();
    document.querySelector("#almond_sprite_0").classList.add("disappear");

;
    document.querySelector("#almond_sprite_0").addEventListener("transitionend", almondrestart);
}
*/
function almondDisappear() {
    console.log("function almondDisappear()");

    document.querySelector("#almond_sprite_0").removeEventListener("click", almondDisappear);
    document.querySelector("#almond_container_0").classList.add("stop");
  almondSound.currentTime = 0;
    almondSound.play();
    document.querySelector("#almond_sprite_0").classList.add("disappear");


    document.querySelector("#almond_sprite_0").addEventListener("transitionend", showPoints);
}

function almondrestart() {
    console.log("function restart()");
    document.querySelector("#almond_sprite_0").removeEventListener("animationend", almondrestart);

   document.querySelector("#almond_sprite_0").classList.remove("minuslife");
    document.querySelector("#almond_sprite_0").classList.add("almond_sprite"); document.querySelector("#almond_container_0").classList.remove("stop");
    document.querySelector("#almond_container_0").classList.remove("almond_pos1");
    document.querySelector("#almond_sprite_0").classList.remove("disappear");
    document.querySelector("#almond_container_0").classList.remove("almond_falling");

    document.querySelector("#almond_container_0").offsetHeight;


    newPosition();

}


//WALNUT

function walnutPosition() {
    console.log("function walnutPosition()");
    console.log(this);

     this.classList.value = "";
    //document.querySelector("#walnut_container_1").classList.value = "";
   //  document.querySelector("#walnut_container_0").classList.value = "";

   // document.querySelector("#walnut_container_0").offsetHeight;

    this.offsetHeight;

   this.classList.add("walnut_falling");

    let randPos = Math.floor(Math.random() * 5) + 1;
    console.log(randPos);
    this.classList.add("walnut_pos" + randPos);

    start();
}

function walnutDisappear() {

    console.log("function walnutDisappear()");
    console.log(this);

    this.removeEventListener("click", walnutDisappear);
    this.parentElement.classList.add("stop");
    this.classList.add("disappear");
  nutSound.currentTime = 0;
    nutSound.play();


    let walnut = 20;
    score = score + walnut;
    if (score >= 500) {

        levelComplete();


    }

    document.querySelector("#score").textContent = score;
    this.addEventListener("transitionend", walnutShowPoints);
}
//document.querySelector("#almond_sprite_0").addEventListener("animationend", restart);



function walnutrestart() {
    console.log("function walnutrestart()");
    console.log(this);
    // do;cument.querySelector("#walnut_container_0").classList.remove("stopdo
    this.removeEventListener("animationend", walnutrestart);
     this.parentElement.classList.remove("stop");
    //this.parentElement.classList.remove("walnut_pos");
 //document.querySelector("#walnut_container_0").classList.remove("walnut_pos1");
   // document.querySelector("#walnut_container_1").classList.remove("walnut_pos2");
    this.classList.add("walnut_sprite");
    this.classList.remove("twentypoints");
    this.parentElement.classList.value = "";
    this.classList.remove("disappear");
     this.offsetHeight;
     //document.querySelector("#walnut_sprite_0").classList.remove("twentypoints");
  //  document.querySelector("#walnut_sprite_1").classList.remove("twentypoints");
 //   document.querySelector("#walnut_sprite_0").classList.remove("twentypoints");
     //document.querySelector("#walnut_sprite_1").classList.remove("twentypoints");
//this.classList.add("walnut_sprite");
   //  this.classList.add("walnut_sprite");
    this.parentElement.classList.remove("walnut_falling");
    //document.querySelector("#walnut_container_0").classList.remove("walnut_pos1");
    //document.querySelector("#walnut_container_1").classList.remove("walnut_pos2"); //document.querySelector("#walnut_sprite_0").classList.remove("rotation");
    // this.parentElement.classList.remove("walnut_falling");


 //   document.querySelector("#walnut_container_0").offsetHeight;
//walnutPosition();

    this.addEventListener("click", walnutDisappear);

    let randPos = Math.floor(Math.random() * 5) + 1;
    console.log(randPos);
    this.parentElement.classList.add("walnut_pos" + randPos);

}
//MACADAMIA
function macadamiaPosition() {
    console.log("function macadamiaPosition()");
    console.log(this);

    this.classList.value = "";
    this.offsetHeight;

    this.classList.add("macadamia_falling");

    let randPos = Math.floor(Math.random() * 5) + 1;
    console.log(randPos);
    this.classList.add("macadamia_pos" + randPos);

}

function macadamiaDisappear() {
    console.log("function macadamiaDisapear()");
    console.log(this);
    score = score + macadamia;

    document.querySelector("#score").textContent = score;
  nutSound.currentTime = 0;
    nutSound.play();
    this.removeEventListener("click", macadamiaDisappear);
    this.parentElement.classList.add("stop");
    this.classList.add("disappear");
    if (score >= 500) {

        levelComplete();


    }
    this.addEventListener("transitionend",macadamiaShowPoints);
    /* document.querySelector("#macadamia_sprite_0").classList.add("disappear");
    document.querySelector("#macadamia_sprite_1").classList.add("disappear");
    document.querySelector("#macadamia_sprite_0").addEventListener("transitionend", macadamiarestart);
    document.querySelector("#macadamia_sprite_1").addEventListener("transitionend", macadamiarestart);
*/
}

function macadamiarestart() {
    console.log("macadamiarestart");
    console.log(this);
    this.removeEventListener("animation", macadamiarestart);
this.classList.remove("fiftypoints");

        this.classList.add("macadamia_sprite");
    this.parentElement.classList.value = "";
    this.classList.remove("disappear");

    //document.querySelector("#walnut_container_0").classList.remove("walnut_pos1");
    //document.querySelector("#walnut_container_1").classList.remove("walnut_pos2"); //document.querySelector("#walnut_sprite_0").classList.remove("rotation");
    // this.parentElement.classList.remove("walnut_falling");

    this.offsetHeight;

    this.parentElement.classList.add("macadamia_falling");
    this.addEventListener("click", macadamiaDisappear);

    let randPos = Math.floor(Math.random() * 5) + 1;
    console.log(randPos);
    this.parentElement.classList.add("macadamia_pos" + randPos);

}



function loseLife() {


    document.querySelector("#life" + lives).classList.add("blackheart");
    lives--;
    console.log("You have " + lives + " lives left");
    if (lives == 0) {
        gameOver();
    }
}

function gameOver() {
    console.log("function gameOver()");

    // stop call soudns
    stopSounds();
    playGameoverSound();
    gameoverSound.addEventListener("ended", playGameoverSound);
    // Checking the game running status
    if (gameHasEnded == false) {
        document.querySelector("#liquid").classList.value = "";
        document.querySelector("#anvil_container").classList.value = "";
        document.querySelector("#almond_container_0").classList.value = "";



        // Walnut
        document.querySelector("#walnut_container_0").classList.value = "";
        document.querySelector("#walnut_container_1").classList.value = "";



        //ACORN

        document.querySelector("#acorn_container_0").classList.value = "";
        document.querySelector("#acorn_container_1").classList.value = "";

        document.querySelector("#acorn_container_2").classList.value = "";
        document.querySelector("#acorn_container_3").classList.value = "";

        document.querySelector("#life1").classList.remove("blackheart");
        document.querySelector("#life2").classList.remove("blackheart");

        document.querySelector("#life3").classList.remove("blackheart");




        //MACADAMIA
        document.querySelector("#macadamia_container_0").classList.value = "";

        document.querySelector("#macadamia_container_1").classList.value = "";
/*
        document.querySelector("#anvil_sprite").classList.value ="";
        document.querySelector("#almond_sprite_0").classList.value ="";
        document.querySelector("#walnut_sprite_0").classList.value ="";
        document.querySelector("#walnut_sprite_1").classList.value ="";
        document.querySelector("#acorn_sprite_0").classList.value ="";
        document.querySelector("#acorn_sprite_1").classList.value ="";
        document.querySelector("#acorn_sprite_2").classList.value ="";
        document.querySelector("#acorn_sprite_3").classList.value ="";
        document.querySelector("#macadamia_sprite_0").classList.value ="";
        document.querySelector("#macadamia_sprite_1").classList.value ="";

       */ document.querySelector("#anvil_sprite").removeEventListener("click", anvilDisappear);
        document.querySelector("#almond_sprite_0").removeEventListener("click", almondDisappear);
        document.querySelector("#walnut_sprite_0").removeEventListener("click", walnutDisappear);
        document.querySelector("#walnut_sprite_1").removeEventListener("click", walnutDisappear);
        document.querySelector("#acorn_sprite_0").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_1").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_2").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_3").removeEventListener("click", acornDisappear);
        document.querySelector("#macadamia_sprite_0").removeEventListener("click", macadamiaDisappear);
        document.querySelector("#macadamia_sprite_1").removeEventListener("click", macadamiaDisappear);
         document.querySelector("#almond_container_0").removeEventListener("animationiteration", newPosition);
        document.querySelector("#walnut_container_0").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#walnut_container_1").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#acorn_container_0").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_1").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_2").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_3").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#macadamia_container_0").removeEventListener("animationiteration", macadamiaPosition);
        document.querySelector("#macadamia_container_1").removeEventListener("animationiteration", macadamiaPosition);
         document.querySelector("#anvil_sprite").removeEventListener("transitionend", anvilrestart);
        document.querySelector("#almond_sprite_0").removeEventListener("transitionend", almondrestart);
        document.querySelector("#walnut_sprite_0").removeEventListener("transitionend", walnutrestart);
        document.querySelector("#walnut_sprite_1").removeEventListener("transitionend", walnutrestart);
        document.querySelector("#acorn_sprite_0").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_1").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_2").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_3").removeEventListener("transitionend", acornRestart);
        document.querySelector("#macadamia_sprite_0").removeEventListener("transitionend", macadamiarestart);
        document.querySelector("#macadamia_sprite_1").removeEventListener("transitionend", macadamiarestart);


        document.querySelector("#macadamia_sprite_1").offsetHeight;


        if (lives > 0) {
            document.querySelector("#game_over").classList.remove("hidden");

        } else {
            document.querySelector("#game_over2").classList.remove("hidden");

        }


        /* document.querySelector("#restart_button").classList.remove("hidden");
         document.querySelector("#restart_button2").classList.remove("hidden");
         */
        document.querySelector("#restart").addEventListener("click", restartGame);
        document.querySelector("#restart").addEventListener("mouseover", playbuttonSound);
        document.querySelector("#restart2").addEventListener("click", restartGame);
        document.querySelector("#restart2").addEventListener("mouseover", playbuttonSound);
        gameHasEnded = true;
    }

}

function startTimer() {
    console.log("function startTimer()");
    document.querySelector("#liquid").classList.add("timer");


    document.querySelector("#liquid").addEventListener("animationend", gameOver);
}


// Checking if game is paused

// } else {
// If player has lives left, start a timeuot of 1 second
//   setTimeout(showTime, 1000);

function levelComplete() {
    console.log("level complete");

    stopSounds();
    playLevelcompleteSound();
    levelcompleteSound.addEventListener("ended", playLevelcompleteSound);

     if (gameHasEnded == false) {
        //remove all classes
        document.querySelector("#liquid").classList.value = "";
        document.querySelector("#anvil_container").classList.value = "";
        document.querySelector("#almond_container_0").classList.value = "";



        // Walnut
        document.querySelector("#walnut_container_0").classList.value = "";
        document.querySelector("#walnut_container_1").classList.value = "";



        //ACORN

        document.querySelector("#acorn_container_0").classList.value = "";
        document.querySelector("#acorn_container_1").classList.value = "";

        document.querySelector("#acorn_container_2").classList.value = "";
        document.querySelector("#acorn_container_3").classList.value = "";

        document.querySelector("#life1").classList.remove("blackheart");
        document.querySelector("#life2").classList.remove("blackheart");

        document.querySelector("#life3").classList.remove("blackheart");




        //MACADAMIA
        document.querySelector("#macadamia_container_0").classList.value = "";

        document.querySelector("#macadamia_container_1").classList.value = "";
        document.querySelector("#anvil_sprite").removeEventListener("click", anvilDisappear);
        document.querySelector("#almond_sprite_0").removeEventListener("click", almondDisappear);
        document.querySelector("#walnut_sprite_0").removeEventListener("click", walnutDisappear);
        document.querySelector("#walnut_sprite_1").removeEventListener("click", walnutDisappear);
        document.querySelector("#acorn_sprite_0").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_1").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_2").removeEventListener("click", acornDisappear);
        document.querySelector("#acorn_sprite_3").removeEventListener("click", acornDisappear);
        document.querySelector("#macadamia_sprite_0").removeEventListener("click", macadamiaDisappear);
        document.querySelector("#macadamia_sprite_1").removeEventListener("click", macadamiaDisappear);
         document.querySelector("#almond_container_0").removeEventListener("animationiteration", newPosition);
        document.querySelector("#walnut_container_0").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#walnut_container_1").removeEventListener("animationiteration", walnutPosition);
        document.querySelector("#acorn_container_0").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_1").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_2").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#acorn_container_3").removeEventListener("animationiteration", acornPosition);
        document.querySelector("#macadamia_container_0").removeEventListener("animationiteration", macadamiaPosition);
        document.querySelector("#macadamia_container_1").removeEventListener("animationiteration", macadamiaPosition);
         document.querySelector("#anvil_sprite").removeEventListener("transitionend", anvilrestart);
        document.querySelector("#almond_sprite_0").removeEventListener("transitionend", almondrestart);
        document.querySelector("#walnut_sprite_0").removeEventListener("transitionend", walnutrestart);
        document.querySelector("#walnut_sprite_1").removeEventListener("transitionend", walnutrestart);
        document.querySelector("#acorn_sprite_0").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_1").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_2").removeEventListener("transitionend", acornRestart);
        document.querySelector("#acorn_sprite_3").removeEventListener("transitionend", acornRestart);
        document.querySelector("#macadamia_sprite_0").removeEventListener("transitionend", macadamiarestart);
        document.querySelector("#macadamia_sprite_1").removeEventListener("transitionend", macadamiarestart);

        document.querySelector("#macadamia_sprite_1").offsetHeight;

        document.querySelector("#level_complete").classList.remove("hidden");

         document.querySelector("#level_complete_squirrel").classList.remove("hidden");
    document.querySelector("#level_complete_squirrel").classList.add("appear");


         document.querySelector("#home_button4").addEventListener("click", home);
         document.querySelector("#home_button4").addEventListener("mouseover", playbuttonSound);

    document.querySelector("#play2").addEventListener("click", restartGame);
         document.querySelector("#play2").addEventListener("mouseover", playbuttonSound);
         gameHasEnded = true;

}
}

function stopSounds() {
    console.log("stop sound");
    nutSound.pause();
    anvilSound.pause();
    buttonSound.pause();
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
    backgroundSound.removeEventListener("ended", playBackgroundSound);
    gameoverSound.pause();
    gameoverSound.removeEventListener("ended", playGameoverSound);
    gameoverSound2.pause();
    gameoverSound2.removeEventListener("ended", playGameoverSound);
    levelcompleteSound.pause();
    levelcompleteSound.removeEventListener("ended", playLevelcompleteSound);
    levelcompleteSound2.pause();
    levelcompleteSound2.removeEventListener("ended", playLevelcompleteSound);
}

function playBackgroundSound() {
    console.log("background sound");
    backgroundSound.play();
}
    function playGameoverSound() {
    console.log("gameover sound");
    gameoverSound.play();
         gameoverSound2.play();
}
    function playLevelcompleteSound() {
    console.log("level complete sound");
    levelcompleteSound.play();
        levelcompleteSound2.play();
}
    function muteSound () {
        console.log("mute");
       if (backgroundSound.muted == false) {
            backgroundSound.muted = true;
            gameoverSound.muted = true;
            levelcompleteSound.muted = true;
           levelcompleteSound2.muted =true;
            gameoverSound2.muted = true;

document.querySelector("#mute_button2").classList.add("unmute_button");

        } else {
            backgroundSound.muted = false;
            gameoverSound.muted = false;
            levelcompleteSound.muted = false;
            levelcompleteSound2.muted =false;
            gameoverSound2.muted =false;
            document.querySelector("#mute_button2").classList.remove("unmute_button");
        }

    }

function playAnvilSound(){




anvilSound.currentTime = 0;
anvilSound.play();
}

function stopAnvilSound() {
    anvilSound.pause();
}
function playbuttonSound(){


 buttonSound.currentTime = 0;
    buttonSound.play();
}

 function showPoints() {
     console.log("show points");

  document.querySelector("#almond_sprite_0").classList.remove("almond_sprite");

     document.querySelector("#almond_sprite_0").removeEventListener("transitionend", showPoints);

     document.querySelector("#almond_sprite_0").classList.remove("disappear");

     document.querySelector("#almond_sprite_0").classList.add("minuslife");
    document.querySelector("#almond_sprite_0").addEventListener("animationend", almondrestart);
}

    function macadamiaShowPoints() {
        console.log ("macadamia show points");
        console.log (this);

        this.classList.remove("macadamia_sprite");

        this.removeEventListener("transitionend", macadamiaShowPoints);
        this.classList.remove("disappear");

     this.classList.add("fiftypoints");
      this.addEventListener("animationend", macadamiarestart);

    }
function acornShowPoints() {
        console.log ("acorn show points");
        console.log (this);

        this.classList.remove("acorn_sprite");

        this.removeEventListener("transitionend", acornShowPoints);
        this.classList.remove("disappear");

     this.classList.add("tenpoints");
      this.addEventListener("animationend", acornRestart);

    }
function walnutShowPoints() {
        console.log ("walnut show points");
        console.log (this);

        this.classList.remove("walnut_sprite");

        this.removeEventListener("transitionend", walnutShowPoints);
        this.classList.remove("disappear");

     this.classList.add("twentypoints");
      this.addEventListener("animationend", walnutrestart);

    }
    /* console.log("show points");
    console.log(this);

    document.querySelector("#walnut_sprite_0").removeEventListener("click", showPoints);
     document.querySelector("#walnut_sprite_1").removeEventListener("click", showPoints);
     document.querySelector("#walnut_sprite_0").classList.remove("walnut_sprite");
     document.querySelector("#walnut_sprite_1").classList.remove("walnut_sprite");
   document.querySelector("#walnut_sprite_0").classList.add("twentypoints");
    document.querySelector("#walnut_sprite_1").classList.add("twentypoints");
}
*/
   // }


/*function appear() {
    console.log("appear");

    document.querySelector("#level_complete_squirrel").classList.remove("hidden");
    document.querySelector("#level_complete_squirrel").classList.add("appear");


         document.querySelector("#home_button4").addEventListener("click", home);
    document.querySelector("#play2").addEventListener("click", restartGame);


    gameHasEnded = true;
}
*/
