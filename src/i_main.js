// MAIN - initializes the game
function I_Main () {
    canvas = document.getElementById("doom-canvas");
    ctx = canvas.getContext("2d");

    // TODO: ADD MULTIPLIER
    canvas.width = SCREENWIDTH*scaler;
    canvas.height = SCREENHEIGHT*scaler;

    canvas.style.width = SCREENWIDTH*scaler;
    canvas.style.height = SCREENHEIGHT*scaler;

    D_DoomMain();
}


// JS onload
window.onload = () => {
    I_Main();
};