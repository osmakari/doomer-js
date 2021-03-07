
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
const gamestate_t = {
    GS_LEVEL: 0,
    GS_INTERMISSION: 1,
    GS_FINALE: 2,
    GS_DEMOSCREEN: 3
}

//
// Difficulty/skill settings/filters.
//

// Skill flags.
const MTF_EASY = 1
const MTF_NORMAL = 2
const MTF_HARD = 4

// Deaf monsters/do not react to sound.
const MTF_AMBUSH = 8

const skill_t = {
    sk_baby: 0,
    sk_easy: 1,
    sk_medium: 2,
    sk_hard: 3,
    sk_nightmare: 4
}

// Key cards.
const card_t = {
    it_bluecard: 0,
    it_yellowcard: 1,
    it_redcard: 2,
    it_blueskull: 3,
    it_yellowskull: 4,
    it_redskull: 5,
    
    NUMCARDS: 6
}

// The defined weapons,
//  including a marker indicating
//  user has not changed weapon.
const weapontype_t = {
    wp_fist: 0,
    wp_pistol: 1,
    wp_shotgun: 2,
    wp_chaingun: 3,
    wp_missile: 4,
    wp_plasma: 5,
    wp_bfg: 6,
    wp_chainsaw: 7,
    wp_supershotgun: 8,

    NUMWEAPONS: 9,
    
    // No pending weapon change.
    wp_nochange: 10
}


const ammotype_t = {

    am_clip: 0,	// Pistol / chaingun ammo.
    am_shell: 1,	// Shotgun / double barreled shotgun.
    am_cell: 2,	// Plasma rifle, BFG.
    am_misl: 3,	// Missile launcher.
    NUMAMMO: 4,
    am_noammo: 5	// Unlimited for chainsaw / fist.	
    
}

// Power up artifacts.
const powertype_t = {

    pw_invulnerability: 0,
    pw_strength: 1,
    pw_invisibility: 2,
    pw_ironfeet: 3,
    pw_allmap: 4,
    pw_infrared: 5,
    NUMPOWERS: 6
}

//
// Power up durations,
//  how many seconds till expiration,
//  assuming TICRATE is 35 ticks/second.
//

const powerduration_t = {
    INVULNTICS:(30*TICRATE),
    INVISTICS:(60*TICRATE),
    INFRATICS:(120*TICRATE),
    IRONTICS:(60*TICRATE)
}

//
// DOOM keyboard definition.
//

const KEY_RIGHTARROW = 39
const KEY_LEFTARROW = 37
const KEY_UPARROW = 38
const KEY_DOWNARROW = 40
const KEY_ESCAPE = 27
const KEY_ENTER = 13
const KEY_TAB = 9
const KEY_F1 = 112
const KEY_F2 = 113
const KEY_F3 = 114
const KEY_F4 = 115
const KEY_F5 = 116
const KEY_F6 = 117
const KEY_F7 = 118
const KEY_F8 = 119
const KEY_F9 = 120
const KEY_F10 = 121
const KEY_F11 = 122
const KEY_F12 = 123

const KEY_BACKSPACE = 8
const KEY_PAUSE = 19

const KEY_EQUALS = 222
const KEY_MINUS = 173

const KEY_RSHIFT = 16
const KEY_RCTRL = 17
const KEY_RALT = 18

const KEY_LALT = KEY_RALT





