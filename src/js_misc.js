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
            let abuff = ev.target.response;
            if(abuff && abuff.length > 0) {
                resolve(abuff);
            }
            else {
                reject(ev);
            }
        };

        xhttp.open("GET", "assets/" + file, true);
        xhttp.send();
    });
    
}