
let defaults = {
        mouse_sensitivity: 5,
        sfx_volume: 13,
        music_volume: 13,
        show_messages: 1,
        key_right: 39,
        key_left: 37,
        key_up: 38,
        key_down: 40,
        key_strafeleft: 51,
        key_straferight: 52,
        key_fire: 29,
        key_use: 57,
        key_strafe: 56,
        key_speed: 54,
        use_mouse: 1,
        mouseb_fire: 0,
        mouseb_strafe: 1,
        mouseb_forward: 2,
        use_joystick: 0,
        joyb_fire: 0,
        joyb_strafe: 1,
        joyb_use: 3,
        joyb_speed: 2,
        screenblocks: 10,
        detaillevel: 0,
        snd_channels: 3,
        snd_musicdevice: 3,
        snd_sfxdevice: 3,
        snd_sbport: 544,
        snd_sbirq: 7,
        snd_sbdma: 1,
        snd_mport: 816,
        usegamma: 0,
        chatmacro0: "No",
        chatmacro1: "I'm ready to kick butt!",
        chatmacro2: "I'm OK.",
        chatmacro3: "I'm not looking too good!",
        chatmacro4: "Help!",
        chatmacro5: "You suck!",
        chatmacro6: "Next time, scumbag...",
        chatmacro7: "Come here!",
        chatmacro8: "I'll take care of it.",
        chatmacro9: "Yes"
    }


 async function M_LoadDefaults () {
    const newData = JSON.parse(JS_ArrayBufferToString(await JS_LoadFile("DEFAULT.json")));
    defaults = {...defaults, ...newData};
    console.log(newData);

}

