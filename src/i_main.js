// MAIN - initializes the game
function I_Main () {
    canvas = document.getElementById("doom-canvas");
    ctx = canvas.getContext("2d");

    // TODO: ADD MULTIPLIER
    canvas.width = SCREENWIDTH;
    canvas.height = SCREENHEIGHT;

    canvas.style.width = SCREENWIDTH;
    canvas.style.height = SCREENHEIGHT;

    D_DoomMain();
}


// JS onload
window.onload = () => {
    I_Main();
};