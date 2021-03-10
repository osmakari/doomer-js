
let numlumps = 0;

/**
 * 
 * @param {string} filename 
 */
async function W_AddFile (filename) {

    let fileinfo;
    let singleinfo = {
        filepos: 0,
        size: 0,
        name: ""
    };
    
    return new Promise(async (resolve, reject) => {
        try {
            let data = await JS_LoadFile(filename);
            if(filename.slice(filename.length - 3, filename.length) == "wad") {
                // SINGLE LUMP
                fileinfo = singleinfo;
                fileinfo.size = data.length;
                
                let bsstart = filename.lastIndexOf("/");
                if(bsstart < 0) bsstart = 0;
                
                fileinfo.name = filename.slice(bsstart, filename.lastIndexOf("."));
                numlumps++;
            }
            else {
                // WAD FILE
                
            }
        }
        catch {
            reject();
        }

    })

}