
//
// defaulted values
//
// temp for screenblocks (0-9)
let screenSize = null; //int

// -1 = no quicksave slot picked!
let quickSaveSlot = null; //int

// 1 = message to be printed
let messageToPrint = null; //int

// ...and here is the message string!
let messageString = null; //char*

// message x & y
let messx = null; //int
let messy = null; //int
let messageLastMenuActive = null; //int

// timed message = no input from user, boolean
let messageNeedsInput = null;

const SAVESTRINGSIZE = 24;

// we are going to be entering a savegame string
let saveStringEnter = null; //int
let saveSlot = null; // int, which slot to save in
let saveCharIndex = null; // int, which char we're editing

// old save description before edit
let saveOldString = [] //char, [SAVESTRINGSIZE] / [24]

let inhelpscreens = null; //boolean
let menuactive = null; //boolean


const SKULLXOFF = -32;
const LINEHEIGHT = 16;

let savegamestrings = [] //string array
let endstring = [] //string, [160]


class menuitem_t {

    // 0 = no cursor here, 1 = ok, 2 = arrows ok
    status = null; //short
    name = ""; //char

    // choice = menu item #.
    // if status = 2,
    //   choice=0:leftarrow,1:rightarrow
    routine = null; //(int choice)
    alphaKey = null; //char
}


class menu_t {
    numitmes = null; //short,  # of menu items
    prevMenu = null; //menu_s, previous menu
    menuitems = []; //menuitem_t, menu items
    routine = null; //(), draw routine
    x = null; //short
    y = null; //short, x,y of menu
    lastOn = null; //short, last item user was on in menu
}

let itemOn = null; //short, menu item skull is on
let skullAnimCounter = null; //short, skull animation counter
let whichSkull = null; //short,  which skull to draw

//
// DOOM MENU
//

const main_e = {
    newgame:0,
    options:1,
    loadgame:2,
    savegame:3,
    readthis:4,
    quitdoom:5,
    main_end:6
}


//
// EPISODE SELECT
//
const episodes_e = {
    ep1: 0,
    ep2: 1,
    ep3: 2,
    ep4: 3,
    ep_end: 4
}

//
// NEW GAME
//
const newgame_e = {
    killthings: 0,
    toorough: 1,
    hurtme: 2,
    violence: 3,
    nightmare: 4,
    newg_end: 5
}


//
// OPTIONS MENU
//
const options_e = {
    endgame: 0,
    messages: 1,
    detail: 2,
    scrnsize: 3,
    option_empty1: 4,
    mousesens: 5,
    option_empty2: 6,
    soundvol: 7,
    opt_end: 8
}

//TODO: continue from line 373 in m_menu.c