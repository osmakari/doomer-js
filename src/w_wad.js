
let numlumps = 0;

let lumpinfo_t = {
    name: "",
    handle: null, // DATA
    dataoffset: 0, // ADDED - current read position!
    position: 0,
    size: 0
};

/**
 * @type {[lumpinfo_t]}
 */
let lumpinfo = [];


/**
 * 
 * @param {[string]} files 
 */
async function W_InitMultipleFiles (files) {
    for(let f of files) {
        await W_AddFile(f);
    }

    if(!numlumps) {
        console.error("No lumps found!");
    }
    else {
        console.log("Loaded " + numlumps + " lumps");
    }

}


/**
 * 
 * @param {string} filename 
 */
async function W_AddFile (filename) {

    let header = {
        identification: "",
        numlumps: 0,
        infotableofs: 0
    };
    let singleinfo = {
        filepos: 0,
        size: 0,
        name: ""
    };
    let fileinfo = {...singleinfo};
    let length = 0;
    let startlump = 0;
    
    return new Promise(async (resolve, reject) => {
        try {
            /**
             * @type {Int8Array}
             */
            let data = await JS_LoadFile(filename);
            startlump = numlumps;
            

            if(filename.slice(filename.length - 3, filename.length) != "wad") {
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
                let hd = data.slice(0, 12);
                header.identification = JS_ArrayBufferToString(hd.slice(0, 4));
                header.numlumps = new DataView(hd.buffer).getInt32(4, true);
                header.infotableofs = new DataView(hd.buffer).getInt32(8, true);
                console.log(header.numlumps);
                length = header.numlumps * 16;

                let finfo = data.slice(header.infotableofs, header.infotableofs + length);
                fileinfo = {...singleinfo};
                fileinfo.filepos = new DataView(finfo.buffer).getInt32(0, true);
                fileinfo.size = new DataView(finfo.buffer).getInt32(4, true);
                fileinfo.name = JS_ArrayBufferToString(finfo.slice(8, 12));

                numlumps += header.numlumps;
            }
            
            lumpinfo.push({
                handle: data,
                dataoffset: header.infotableofs + length,
                position: fileinfo.filepos,
                size: fileinfo.size,
                name: fileinfo.name
            });

            resolve();
        }
        catch (err) {
            console.error(err);
            reject(err);
        }

    })

}