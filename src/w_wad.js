
let numlumps = 0;

async function W_AddFile (filename) {
    return new Promise((resolve, reject) => {
        try {
            let data = await JS_LoadFile(filename);
        }
        catch {
            reject();
        }

    })

}