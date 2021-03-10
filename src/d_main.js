
function D_DoomLoop () {
    // JS so we need to poll animation frame...


    let __gloop = () => {
        
        // This is the while(1) loop


        requestAnimationFrame(__gloop);
    };


    requestAnimationFrame(__gloop);
}

function D_DoomMain() {

    console.log("V_Init: allocate screens. \n")
    V_Init();

    // LOADING A FILE:
    let d = JS_LoadFile("test").then((data) => {
        // "data" is an arraybuffer, data.toString() to get string
    }).catch((e) => {
        // Possible error
    });
    //Loading defaults
    M_LoadDefaults()

    W_InitMultipleFiles(["doom1.wad"]);
    // Never returning from this loop
    D_DoomLoop();
}