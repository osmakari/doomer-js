// Emacs style mode select   -*- C++ -*- 
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// DESCRIPTION:
//	Printed strings for translation.
//	English language support (default).
//
//-----------------------------------------------------------------------------

#ifndef __D_ENGLSH__
let __D_ENGLSH__

//
//	Printed strings for translation
//

//
// D_Main.C
//
let D_DEVSTR	"Development mode ON.\n"
let D_CDROM	"CD-ROM Version: default.cfg from c:\\doomdata\n"

//
//	M_Menu.C
//
let PRESSKEY 	"press a key."
let PRESSYN 	"press y or n."
let QUITMSG	    "are you sure you want to\nquit this great game?"
let LOADNET 	"you can't do load while in a net game!\n\n"PRESSKEY
let QLOADNET	"you can't quickload during a netgame!\n\n"PRESSKEY
let QSAVESPOT	"you haven't picked a quicksave slot yet!\n\n"PRESSKEY
let SAVEDEAD 	"you can't save if you aren't playing!\n\n"PRESSKEY
let QSPROMPT 	"quicksave over your game named\n\n'%s'?\n\n"PRESSYN
let QLPROMPT	"do you want to quickload the game named\n\n'%s'?\n\n"PRESSYN

let NEWGAME	\
"you can't start a new game\n"\
"while in a network game.\n\n"PRESSKEY

let NIGHTMARE	\
"are you sure? this skill level\n"\
"isn't even remotely fair.\n\n"PRESSYN

let SWSTRING	\
"this is the shareware version of doom.\n\n"\
"you need to order the entire trilogy.\n\n"PRESSKEY

let MSGOFF	"Messages OFF"
let MSGON		"Messages ON"
let NETEND	"you can't end a netgame!\n\n"PRESSKEY
let ENDGAME	"are you sure you want to end the game?\n\n"PRESSYN

let DOSY		"(press y to quit)"

let DETAILHI	"High detail"
let DETAILLO	"Low detail"
let GAMMALVL0	"Gamma correction OFF"
let GAMMALVL1	"Gamma correction level 1"
let GAMMALVL2	"Gamma correction level 2"
let GAMMALVL3	"Gamma correction level 3"
let GAMMALVL4	"Gamma correction level 4"
let EMPTYSTRING	"empty slot"

//
//	P_inter.C
//
let GOTARMOR	"Picked up the armor."
let GOTMEGA	"Picked up the MegaArmor!"
let GOTHTHBONUS	"Picked up a health bonus."
let GOTARMBONUS	"Picked up an armor bonus."
let GOTSTIM	"Picked up a stimpack."
let GOTMEDINEED	"Picked up a medikit that you REALLY need!"
let GOTMEDIKIT	"Picked up a medikit."
let GOTSUPER	"Supercharge!"

let GOTBLUECARD	"Picked up a blue keycard."
let GOTYELWCARD	"Picked up a yellow keycard."
let GOTREDCARD	"Picked up a red keycard."
let GOTBLUESKUL	"Picked up a blue skull key."
let GOTYELWSKUL	"Picked up a yellow skull key."
let GOTREDSKULL	"Picked up a red skull key."

let GOTINVUL	"Invulnerability!"
let GOTBERSERK	"Berserk!"
let GOTINVIS	"Partial Invisibility"
let GOTSUIT	"Radiation Shielding Suit"
let GOTMAP	"Computer Area Map"
let GOTVISOR	"Light Amplification Visor"
let GOTMSPHERE	"MegaSphere!"

let GOTCLIP	"Picked up a clip."
let GOTCLIPBOX	"Picked up a box of bullets."
let GOTROCKET	"Picked up a rocket."
let GOTROCKBOX	"Picked up a box of rockets."
let GOTCELL	"Picked up an energy cell."
let GOTCELLBOX	"Picked up an energy cell pack."
let GOTSHELLS	"Picked up 4 shotgun shells."
let GOTSHELLBOX	"Picked up a box of shotgun shells."
let GOTBACKPACK	"Picked up a backpack full of ammo!"

let GOTBFG9000	"You got the BFG9000!  Oh, yes."
let GOTCHAINGUN	"You got the chaingun!"
let GOTCHAINSAW	"A chainsaw!  Find some meat!"
let GOTLAUNCHER	"You got the rocket launcher!"
let GOTPLASMA	"You got the plasma gun!"
let GOTSHOTGUN	"You got the shotgun!"
let GOTSHOTGUN2	"You got the super shotgun!"

//
// P_Doors.C
//
let PD_BLUEO	"You need a blue key to activate this object"
let PD_REDO	"You need a red key to activate this object"
let PD_YELLOWO	"You need a yellow key to activate this object"
let PD_BLUEK	"You need a blue key to open this door"
let PD_REDK	"You need a red key to open this door"
let PD_YELLOWK	"You need a yellow key to open this door"

//
//	G_game.C
//
let GGSAVED	"game saved."

//
//	HU_stuff.C
//
let HUSTR_MSGU	"[Message unsent]"

let HUSTR_E1M1	"E1M1: Hangar"
let HUSTR_E1M2	"E1M2: Nuclear Plant"
let HUSTR_E1M3	"E1M3: Toxin Refinery"
let HUSTR_E1M4	"E1M4: Command Control"
let HUSTR_E1M5	"E1M5: Phobos Lab"
let HUSTR_E1M6	"E1M6: Central Processing"
let HUSTR_E1M7	"E1M7: Computer Station"
let HUSTR_E1M8	"E1M8: Phobos Anomaly"
let HUSTR_E1M9	"E1M9: Military Base"

let HUSTR_E2M1	"E2M1: Deimos Anomaly"
let HUSTR_E2M2	"E2M2: Containment Area"
let HUSTR_E2M3	"E2M3: Refinery"
let HUSTR_E2M4	"E2M4: Deimos Lab"
let HUSTR_E2M5	"E2M5: Command Center"
let HUSTR_E2M6	"E2M6: Halls of the Damned"
let HUSTR_E2M7	"E2M7: Spawning Vats"
let HUSTR_E2M8	"E2M8: Tower of Babel"
let HUSTR_E2M9	"E2M9: Fortress of Mystery"

let HUSTR_E3M1	"E3M1: Hell Keep"
let HUSTR_E3M2	"E3M2: Slough of Despair"
let HUSTR_E3M3	"E3M3: Pandemonium"
let HUSTR_E3M4	"E3M4: House of Pain"
let HUSTR_E3M5	"E3M5: Unholy Cathedral"
let HUSTR_E3M6	"E3M6: Mt. Erebus"
let HUSTR_E3M7	"E3M7: Limbo"
let HUSTR_E3M8	"E3M8: Dis"
let HUSTR_E3M9	"E3M9: Warrens"

let HUSTR_E4M1	"E4M1: Hell Beneath"
let HUSTR_E4M2	"E4M2: Perfect Hatred"
let HUSTR_E4M3	"E4M3: Sever The Wicked"
let HUSTR_E4M4	"E4M4: Unruly Evil"
let HUSTR_E4M5	"E4M5: They Will Repent"
let HUSTR_E4M6	"E4M6: Against Thee Wickedly"
let HUSTR_E4M7	"E4M7: And Hell Followed"
let HUSTR_E4M8	"E4M8: Unto The Cruel"
let HUSTR_E4M9	"E4M9: Fear"

let HUSTR_1	"level 1: entryway"
let HUSTR_2	"level 2: underhalls"
let HUSTR_3	"level 3: the gantlet"
let HUSTR_4	"level 4: the focus"
let HUSTR_5	"level 5: the waste tunnels"
let HUSTR_6	"level 6: the crusher"
let HUSTR_7	"level 7: dead simple"
let HUSTR_8	"level 8: tricks and traps"
let HUSTR_9	"level 9: the pit"
let HUSTR_10	"level 10: refueling base"
let HUSTR_11	"level 11: 'o' of destruction!"

let HUSTR_12	"level 12: the factory"
let HUSTR_13	"level 13: downtown"
let HUSTR_14	"level 14: the inmost dens"
let HUSTR_15	"level 15: industrial zone"
let HUSTR_16	"level 16: suburbs"
let HUSTR_17	"level 17: tenements"
let HUSTR_18	"level 18: the courtyard"
let HUSTR_19	"level 19: the citadel"
let HUSTR_20	"level 20: gotcha!"

let HUSTR_21	"level 21: nirvana"
let HUSTR_22	"level 22: the catacombs"
let HUSTR_23	"level 23: barrels o' fun"
let HUSTR_24	"level 24: the chasm"
let HUSTR_25	"level 25: bloodfalls"
let HUSTR_26	"level 26: the abandoned mines"
let HUSTR_27	"level 27: monster condo"
let HUSTR_28	"level 28: the spirit world"
let HUSTR_29	"level 29: the living end"
let HUSTR_30	"level 30: icon of sin"

let HUSTR_31	"level 31: wolfenstein"
let HUSTR_32	"level 32: grosse"

let PHUSTR_1	"level 1: congo"
let PHUSTR_2	"level 2: well of souls"
let PHUSTR_3	"level 3: aztec"
let PHUSTR_4	"level 4: caged"
let PHUSTR_5	"level 5: ghost town"
let PHUSTR_6	"level 6: baron's lair"
let PHUSTR_7	"level 7: caughtyard"
let PHUSTR_8	"level 8: realm"
let PHUSTR_9	"level 9: abattoire"
let PHUSTR_10	"level 10: onslaught"
let PHUSTR_11	"level 11: hunted"

let PHUSTR_12	"level 12: speed"
let PHUSTR_13	"level 13: the crypt"
let PHUSTR_14	"level 14: genesis"
let PHUSTR_15	"level 15: the twilight"
let PHUSTR_16	"level 16: the omen"
let PHUSTR_17	"level 17: compound"
let PHUSTR_18	"level 18: neurosphere"
let PHUSTR_19	"level 19: nme"
let PHUSTR_20	"level 20: the death domain"

let PHUSTR_21	"level 21: slayer"
let PHUSTR_22	"level 22: impossible mission"
let PHUSTR_23	"level 23: tombstone"
let PHUSTR_24	"level 24: the final frontier"
let PHUSTR_25	"level 25: the temple of darkness"
let PHUSTR_26	"level 26: bunker"
let PHUSTR_27	"level 27: anti-christ"
let PHUSTR_28	"level 28: the sewers"
let PHUSTR_29	"level 29: odyssey of noises"
let PHUSTR_30	"level 30: the gateway of hell"

let PHUSTR_31	"level 31: cyberden"
let PHUSTR_32	"level 32: go 2 it"

let THUSTR_1	"level 1: system control"
let THUSTR_2	"level 2: human bbq"
let THUSTR_3	"level 3: power control"
let THUSTR_4	"level 4: wormhole"
let THUSTR_5	"level 5: hanger"
let THUSTR_6	"level 6: open season"
let THUSTR_7	"level 7: prison"
let THUSTR_8	"level 8: metal"
let THUSTR_9	"level 9: stronghold"
let THUSTR_10	"level 10: redemption"
let THUSTR_11	"level 11: storage facility"

let THUSTR_12	"level 12: crater"
let THUSTR_13	"level 13: nukage processing"
let THUSTR_14	"level 14: steel works"
let THUSTR_15	"level 15: dead zone"
let THUSTR_16	"level 16: deepest reaches"
let THUSTR_17	"level 17: processing area"
let THUSTR_18	"level 18: mill"
let THUSTR_19	"level 19: shipping/respawning"
let THUSTR_20	"level 20: central processing"

let THUSTR_21	"level 21: administration center"
let THUSTR_22	"level 22: habitat"
let THUSTR_23	"level 23: lunar mining project"
let THUSTR_24	"level 24: quarry"
let THUSTR_25	"level 25: baron's den"
let THUSTR_26	"level 26: ballistyx"
let THUSTR_27	"level 27: mount pain"
let THUSTR_28	"level 28: heck"
let THUSTR_29	"level 29: river styx"
let THUSTR_30	"level 30: last call"

let THUSTR_31	"level 31: pharaoh"
let THUSTR_32	"level 32: caribbean"

let HUSTR_CHATMACRO1	"I'm ready to kick butt!"
let HUSTR_CHATMACRO2	"I'm OK."
let HUSTR_CHATMACRO3	"I'm not looking too good!"
let HUSTR_CHATMACRO4	"Help!"
let HUSTR_CHATMACRO5	"You suck!"
let HUSTR_CHATMACRO6	"Next time, scumbag..."
let HUSTR_CHATMACRO7	"Come here!"
let HUSTR_CHATMACRO8	"I'll take care of it."
let HUSTR_CHATMACRO9	"Yes"
let HUSTR_CHATMACRO0	"No"

let HUSTR_TALKTOSELF1	"You mumble to yourself"
let HUSTR_TALKTOSELF2	"Who's there?"
let HUSTR_TALKTOSELF3	"You scare yourself"
let HUSTR_TALKTOSELF4	"You start to rave"
let HUSTR_TALKTOSELF5	"You've lost it..."

let HUSTR_MESSAGESENT	"[Message Sent]"

// The following should NOT be changed unless it seems
// just AWFULLY necessary

let HUSTR_PLRGREEN	"Green: "
let HUSTR_PLRINDIGO	"Indigo: "
let HUSTR_PLRBROWN	"Brown: "
let HUSTR_PLRRED		"Red: "

let HUSTR_KEYGREEN	'g'
let HUSTR_KEYINDIGO	'i'
let HUSTR_KEYBROWN	'b'
let HUSTR_KEYRED	'r'

//
//	AM_map.C
//

let AMSTR_FOLLOWON	"Follow Mode ON"
let AMSTR_FOLLOWOFF	"Follow Mode OFF"

let AMSTR_GRIDON	"Grid ON"
let AMSTR_GRIDOFF	"Grid OFF"

let AMSTR_MARKEDSPOT	"Marked Spot"
let AMSTR_MARKSCLEARED	"All Marks Cleared"

//
//	ST_stuff.C
//

let STSTR_MUS		"Music Change"
let STSTR_NOMUS		"IMPOSSIBLE SELECTION"
let STSTR_DQDON		"Degreelessness Mode On"
let STSTR_DQDOFF	"Degreelessness Mode Off"

let STSTR_KFAADDED	"Very Happy Ammo Added"
let STSTR_FAADDED	"Ammo (no keys) Added"

let STSTR_NCON		"No Clipping Mode ON"
let STSTR_NCOFF		"No Clipping Mode OFF"

let STSTR_BEHOLD	"inVuln, Str, Inviso, Rad, Allmap, or Lite-amp"
let STSTR_BEHOLDX	"Power-up Toggled"

let STSTR_CHOPPERS	"... doesn't suck - GM"
let STSTR_CLEV		"Changing Level..."

//
//	F_Finale.C
//
let E1TEXT =
"Once you beat the big badasses and\n" +
"clean out the moon base you're supposed\n"\
"to win, aren't you? Aren't you? Where's\n"\
"your fat reward and ticket home? What\n"\
"the hell is this? It's not supposed to\n"\
"end this way!\n"\
"\n" \
"It stinks like rotten meat, but looks\n"\
"like the lost Deimos base.  Looks like\n"\
"you're stuck on The Shores of Hell.\n"\
"The only way out is through.\n"\
"\n"\
"To continue the DOOM experience, play\n"\
"The Shores of Hell and its amazing\n"\
"sequel, Inferno!\n"


let E2TEXT \
"You've done it! The hideous cyber-\n"\
"demon lord that ruled the lost Deimos\n"\
"moon base has been slain and you\n"\
"are triumphant! But ... where are\n"\
"you? You clamber to the edge of the\n"\
"moon and look down to see the awful\n"\
"truth.\n" \
"\n"\
"Deimos floats above Hell itself!\n"\
"You've never heard of anyone escaping\n"\
"from Hell, but you'll make the bastards\n"\
"sorry they ever heard of you! Quickly,\n"\
"you rappel down to  the surface of\n"\
"Hell.\n"\
"\n" \
"Now, it's on to the final chapter of\n"\
"DOOM! -- Inferno."


let E3TEXT \
"The loathsome spiderdemon that\n"\
"masterminded the invasion of the moon\n"\
"bases and caused so much death has had\n"\
"its ass kicked for all time.\n"\
"\n"\
"A hidden doorway opens and you enter.\n"\
"You've proven too tough for Hell to\n"\
"contain, and now Hell at last plays\n"\
"fair -- for you emerge from the door\n"\
"to see the green fields of Earth!\n"\
"Home at last.\n" \
"\n"\
"You wonder what's been happening on\n"\
"Earth while you were battling evil\n"\
"unleashed. It's good that no Hell-\n"\
"spawn could have come through that\n"\
"door with you ..."


let E4TEXT \
"the spider mastermind must have sent forth\n"\
"its legions of hellspawn before your\n"\
"final confrontation with that terrible\n"\
"beast from hell.  but you stepped forward\n"\
"and brought forth eternal damnation and\n"\
"suffering upon the horde as a true hero\n"\
"would in the face of something so evil.\n"\
"\n"\
"besides, someone was gonna pay for what\n"\
"happened to daisy, your pet rabbit.\n"\
"\n"\
"but now, you see spread before you more\n"\
"potential pain and gibbitude as a nation\n"\
"of demons run amok among our cities.\n"\
"\n"\
"next stop, hell on earth!"


// after level 6, put this:

let C1TEXT \
"YOU HAVE ENTERED DEEPLY INTO THE INFESTED\n" \
"STARPORT. BUT SOMETHING IS WRONG. THE\n" \
"MONSTERS HAVE BROUGHT THEIR OWN REALITY\n" \
"WITH THEM, AND THE STARPORT'S TECHNOLOGY\n" \
"IS BEING SUBVERTED BY THEIR PRESENCE.\n" \
"\n"\
"AHEAD, YOU SEE AN OUTPOST OF HELL, A\n" \
"FORTIFIED ZONE. IF YOU CAN GET PAST IT,\n" \
"YOU CAN PENETRATE INTO THE HAUNTED HEART\n" \
"OF THE STARBASE AND FIND THE CONTROLLING\n" \
"SWITCH WHICH HOLDS EARTH'S POPULATION\n" \
"HOSTAGE."

// After level 11, put this:

let C2TEXT \
"YOU HAVE WON! YOUR VICTORY HAS ENABLED\n" \
"HUMANKIND TO EVACUATE EARTH AND ESCAPE\n"\
"THE NIGHTMARE.  NOW YOU ARE THE ONLY\n"\
"HUMAN LEFT ON THE FACE OF THE PLANET.\n"\
"CANNIBAL MUTATIONS, CARNIVOROUS ALIENS,\n"\
"AND EVIL SPIRITS ARE YOUR ONLY NEIGHBORS.\n"\
"YOU SIT BACK AND WAIT FOR DEATH, CONTENT\n"\
"THAT YOU HAVE SAVED YOUR SPECIES.\n"\
"\n"\
"BUT THEN, EARTH CONTROL BEAMS DOWN A\n"\
"MESSAGE FROM SPACE: \"SENSORS HAVE LOCATED\n"\
"THE SOURCE OF THE ALIEN INVASION. IF YOU\n"\
"GO THERE, YOU MAY BE ABLE TO BLOCK THEIR\n"\
"ENTRY.  THE ALIEN BASE IS IN THE HEART OF\n"\
"YOUR OWN HOME CITY, NOT FAR FROM THE\n"\
"STARPORT.\" SLOWLY AND PAINFULLY YOU GET\n"\
"UP AND RETURN TO THE FRAY."


// After level 20, put this:

let C3TEXT \
"YOU ARE AT THE CORRUPT HEART OF THE CITY,\n"\
"SURROUNDED BY THE CORPSES OF YOUR ENEMIES.\n"\
"YOU SEE NO WAY TO DESTROY THE CREATURES'\n"\
"ENTRYWAY ON THIS SIDE, SO YOU CLENCH YOUR\n"\
"TEETH AND PLUNGE THROUGH IT.\n"\
"\n"\
"THERE MUST BE A WAY TO CLOSE IT ON THE\n"\
"OTHER SIDE. WHAT DO YOU CARE IF YOU'VE\n"\
"GOT TO GO THROUGH HELL TO GET TO IT?"


// After level 29, put this:

let C4TEXT \
"THE HORRENDOUS VISAGE OF THE BIGGEST\n"\
"DEMON YOU'VE EVER SEEN CRUMBLES BEFORE\n"\
"YOU, AFTER YOU PUMP YOUR ROCKETS INTO\n"\
"HIS EXPOSED BRAIN. THE MONSTER SHRIVELS\n"\
"UP AND DIES, ITS THRASHING LIMBS\n"\
"DEVASTATING UNTOLD MILES OF HELL'S\n"\
"SURFACE.\n"\
"\n"\
"YOU'VE DONE IT. THE INVASION IS OVER.\n"\
"EARTH IS SAVED. HELL IS A WRECK. YOU\n"\
"WONDER WHERE BAD FOLKS WILL GO WHEN THEY\n"\
"DIE, NOW. WIPING THE SWEAT FROM YOUR\n"\
"FOREHEAD YOU BEGIN THE LONG TREK BACK\n"\
"HOME. REBUILDING EARTH OUGHT TO BE A\n"\
"LOT MORE FUN THAN RUINING IT WAS.\n"



// Before level 31, put this:

let C5TEXT \
"CONGRATULATIONS, YOU'VE FOUND THE SECRET\n"\
"LEVEL! LOOKS LIKE IT'S BEEN BUILT BY\n"\
"HUMANS, RATHER THAN DEMONS. YOU WONDER\n"\
"WHO THE INMATES OF THIS CORNER OF HELL\n"\
"WILL BE."


// Before level 32, put this:

let C6TEXT \
"CONGRATULATIONS, YOU'VE FOUND THE\n"\
"SUPER SECRET LEVEL!  YOU'D BETTER\n"\
"BLAZE THROUGH THIS ONE!\n"


// after map 06	

let P1TEXT  \
"You gloat over the steaming carcass of the\n"\
"Guardian.  With its death, you've wrested\n"\
"the Accelerator from the stinking claws\n"\
"of Hell.  You relax and glance around the\n"\
"room.  Damn!  There was supposed to be at\n"\
"least one working prototype, but you can't\n"\
"see it. The demons must have taken it.\n"\
"\n"\
"You must find the prototype, or all your\n"\
"struggles will have been wasted. Keep\n"\
"moving, keep fighting, keep killing.\n"\
"Oh yes, keep living, too."


// after map 11

let P2TEXT \
"Even the deadly Arch-Vile labyrinth could\n"\
"not stop you, and you've gotten to the\n"\
"prototype Accelerator which is soon\n"\
"efficiently and permanently deactivated.\n"\
"\n"\
"You're good at that kind of thing."


// after map 20

let P3TEXT \
"You've bashed and battered your way into\n"\
"the heart of the devil-hive.  Time for a\n"\
"Search-and-Destroy mission, aimed at the\n"\
"Gatekeeper, whose foul offspring is\n"\
"cascading to Earth.  Yeah, he's bad. But\n"\
"you know who's worse!\n"\
"\n"\
"Grinning evilly, you check your gear, and\n"\
"get ready to give the bastard a little Hell\n"\
"of your own making!"

// after map 30

let P4TEXT \
"The Gatekeeper's evil face is splattered\n"\
"all over the place.  As its tattered corpse\n"\
"collapses, an inverted Gate forms and\n"\
"sucks down the shards of the last\n"\
"prototype Accelerator, not to mention the\n"\
"few remaining demons.  You're done. Hell\n"\
"has gone back to pounding bad dead folks \n"\
"instead of good live ones.  Remember to\n"\
"tell your grandkids to put a rocket\n"\
"launcher in your coffin. If you go to Hell\n"\
"when you die, you'll need it for some\n"\
"final cleaning-up ..."

// before map 31

let P5TEXT \
"You've found the second-hardest level we\n"\
"got. Hope you have a saved game a level or\n"\
"two previous.  If not, be prepared to die\n"\
"aplenty. For master marines only."

// before map 32

let P6TEXT \
"Betcha wondered just what WAS the hardest\n"\
"level we had ready for ya?  Now you know.\n"\
"No one gets out alive."


let T1TEXT \
"You've fought your way out of the infested\n"\
"experimental labs.   It seems that UAC has\n"\
"once again gulped it down.  With their\n"\
"high turnover, it must be hard for poor\n"\
"old UAC to buy corporate health insurance\n"\
"nowadays..\n"\
"\n"\
"Ahead lies the military complex, now\n"\
"swarming with diseased horrors hot to get\n"\
"their teeth into you. With luck, the\n"\
"complex still has some warlike ordnance\n"\
"laying around."


let T2TEXT \
"You hear the grinding of heavy machinery\n"\
"ahead.  You sure hope they're not stamping\n"\
"out new hellspawn, but you're ready to\n"\
"ream out a whole herd if you have to.\n"\
"They might be planning a blood feast, but\n"\
"you feel about as mean as two thousand\n"\
"maniacs packed into one mad killer.\n"\
"\n"\
"You don't plan to go down easy."


let T3TEXT \
"The vista opening ahead looks real damn\n"\
"familiar. Smells familiar, too -- like\n"\
"fried excrement. You didn't like this\n"\
"place before, and you sure as hell ain't\n"\
"planning to like it now. The more you\n"\
"brood on it, the madder you get.\n"\
"Hefting your gun, an evil grin trickles\n"\
"onto your face. Time to take some names."

let T4TEXT \
"Suddenly, all is silent, from one horizon\n"\
"to the other. The agonizing echo of Hell\n"\
"fades away, the nightmare sky turns to\n"\
"blue, the heaps of monster corpses start \n"\
"to evaporate along with the evil stench \n"\
"that filled the air. Jeeze, maybe you've\n"\
"done it. Have you really won?\n"\
"\n"\
"Something rumbles in the distance.\n"\
"A blue light begins to glow inside the\n"\
"ruined skull of the demon-spitter."


let T5TEXT \
"What now? Looks totally different. Kind\n"\
"of like King Tut's condo. Well,\n"\
"whatever's here can't be any worse\n"\
"than usual. Can it?  Or maybe it's best\n"\
"to let sleeping gods lie.."


let T6TEXT \
"Time for a vacation. You've burst the\n"\
"bowels of hell and by golly you're ready\n"\
"for a break. You mutter to yourself,\n"\
"Maybe someone else can kick Hell's ass\n"\
"next time around. Ahead lies a quiet town,\n"\
"with peaceful flowing water, quaint\n"\
"buildings, and presumably no Hellspawn.\n"\
"\n"\
"As you step off the transport, you hear\n"\
"the stomp of a cyberdemon's iron shoe."



//
// Character cast strings F_FINALE.C
//
let CC_ZOMBIE	"ZOMBIEMAN"
let CC_SHOTGUN	"SHOTGUN GUY"
let CC_HEAVY	"HEAVY WEAPON DUDE"
let CC_IMP	"IMP"
let CC_DEMON	"DEMON"
let CC_LOST	"LOST SOUL"
let CC_CACO	"CACODEMON"
let CC_HELL	"HELL KNIGHT"
let CC_BARON	"BARON OF HELL"
let CC_ARACH	"ARACHNOTRON"
let CC_PAIN	"PAIN ELEMENTAL"
let CC_REVEN	"REVENANT"
let CC_MANCU	"MANCUBUS"
let CC_ARCH	"ARCH-VILE"
let CC_SPIDER	"THE SPIDER MASTERMIND"
let CC_CYBER	"THE CYBERDEMON"
let CC_HERO	"OUR HERO"


#endif
//-----------------------------------------------------------------------------
//
// $Log:$
//
//-----------------------------------------------------------------------------
