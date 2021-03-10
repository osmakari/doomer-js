/**
 * 
 * @param {ArrayBuffer} ab 
 */
function JS_ArrayBufferToString (ab) {
    let str = "";
    for(let a = 0; a < ab.byteLength; a++) {
        str += String.fromCharCode(ab[a]);
    }
    return str;
}

/**
 * 
 * @param {string} file
 * @description Loads a file to an buffer
 * @returns Promise (ArrayBuffer)
 */
function JS_LoadFile (file) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();

        xhttp.responseType = "arraybuffer";

        xhttp.onload = (ev) => {
            /**
             * @type {ArrayBuffer}
             */
            let abuff = ev.target.response;
            
            if(abuff && abuff.byteLength > 0) {
                resolve(new Uint8Array(abuff));
            }
            else {
                reject(ev);
            }
        };

        xhttp.open("GET", "assets/" + file, true);
        xhttp.send();
    });
    
}