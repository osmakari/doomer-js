
// Setting screen width
const SCREENWIDTH = 320
 // Setting screen height
const SCREENHEIGHT = 200
/** HUD and menues scaling multiplier,
 * tied to the scale implied by the graphics 
 * */ 
const SCREEN_MUL = 1

// State updates, number of tics / second.
const TICRATE = 35


// The current state of the game: whether we are
// playing, gazing at the intermission screen,
// the game final animation, or a demo. 
let gamestate_t = {
    GS_LEVEL: 0,
    GS_INTERMISSION: 1,
    GS_FINALE: 2,
    GS_DEMOSCREEN: 3
}

// Difficulty/skill settings/filters.

// Skill flags.
const MTF_EASY = 1
const MTF_NORMAL = 2
const MTF_HARD = 4


let skill_t = {
    sk_baby: 0,
    sk_easy: 1,
    sk_medium: 2,
    sk_hard: 3,
    sk_nightmare: 4
}

// Key cards.
let card_t = {
    it_bluecard: 0,
    it_yellowcard: 1,
    it_redcard: 2,
    it_blueskull: 3,
    it_yellowskull: 4,
    it_redskull: 5,
    
    NUMCARDS: 6
}