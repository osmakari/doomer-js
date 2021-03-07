
//
// Your plain vanilla vertex.
// Note: transformed values not buffered locally,
//  like some DOOM-alikes ("wt", "WebView") did.
//
class vertex_t {
    x = null; //fixed_t
    y = null; //fixed_t
}

// Each sector has a degenmobj_t in its center
//  for sound origin purposes.
// I suppose this does not handle sound from
//  moving objects (doppler), because
//  position is prolly just buffered, not
//  updated.
class degenmobj_t {
    thinker_t = null; //not used, thinker_t
    x = null; //fixed_t
    y = null; //fixed_t
    z = null; //fixed_t
}

//
// The SECTORS record, at runtime.
// Stores things/mobjs.
//
class sector_t {
    floorheight = null; //fixed_t
    ceilingheight = null; //fixed_t
    floorpic = null; //short
    ceilingpic = null; //short
    lightlevel = null; //short
    special = null; //short
    tag = null; //short

    // 0 = untraversed, 1,2 = sndlines -1
    soundtraversed = null; //int

    // thing that made a sound (or null)
    soundtarget = null; //mobj_t

    // mapblock bounding box for height changes
    blockbox = [0,0,0,0]; //int


    // origin for any sounds played by the sector
    soundorg = null; //degenmobj_t

    // if == validcount, already checked
    validcount = null; //int

    // list of mobjs in sector
    thinglist = null; //mobj_t
    
    // thinker_t for reversable actions
    specialdata = new Uint8Array();

    linecount = null; //int
    lines = []; //line_s, [linecount] size

}

class side_t {
    // add this to the calculated texture column
    textureoffset = null; //fixed_t

    // add this to the calculated texture top
    rowoffset = null; //fixed_t

    // Texture indices.
    // We do not maintain names here.
    toptexture = null; //short
    bottomtexture = null; //short
    midtexture = null; //short

    sector = null; //sector_t

}

//
// Move clipping aid for LineDefs.
//
const slopetype_t = {
    ST_HORIZONTAL: 0,
    ST_VERTICAL: 1,
    ST_POSITIVE: 2,
    ST_NEGATIVE: 3
}


class line_t {

    // Vertices, from v1 to v2. 
    v1 = null; //vertex_t
    v2 = null; //vertex_t

    // Precalculated v2 - v1 for side checking.
    dx = null; //fixed_t
    dy = null; //fixed_t

    // Animation related.
    flags = null; //short
    special = null; //short
    tag = null; //short


    // Visual appearance: SideDefs. 
    //  sidenum[1] will be -1 if one sided
    sidenum = [0,0]; //short

    // Neat. Another bounding box, for the extent
    //  of the LineDef.
    bbox = [0,0,0,0] // fixed_t

    // To aid move clipping.
    slopetype = null; //slopetype_t

    // Front and back sector.
    // Note: redundant? Can be retrieved from SideDefs.
    frontsector = null; //sector_t
    backsector = null; //sector_t

    // if == validcount, already checked
    validcount = null; //int 

    // thinker_t for reversable actions
    specialdata = new Uint8Array();

}

class subsector_t {
    sector = null; //sector_t
    numlines = null; //short
    firstline = null; //short
}

class seg_t {

    v1 = null; //vertex_t
    v2 = null; //vertex_t

    offset = null; //fixed_t

    angle = null; //angle_t

    sidedef = null; //side_t
    linedef = null; //line_t


    // Sector references.
    // Could be retrieved from linedef, too.
    // backsector is NULL for one sided lines
    frontsector = null; //sector_t
    backsector = null; //sector_t

}

//
// BSP node.
//
class node_t {

    // Partition line.
    x = null;
    y = null;
    dx = null;
    dy = null;

    // Bounding box for each child.
    bbox = [
        [0,0,0,0],
        [0,0,0,0]
    ];

    // If NF_SUBSECTOR its a subsector.
    children = [0,0]; //unsigned short
}

// posts are runs of non masked source pixels
class post_t {
    topdelta = null; //byte, -1 is the last post in a column
    length = null; //byte, length data bytes follows
}

// column_t is a list of 0 or more post_t, (byte)-1 terminated
let column_t = post_t;


//
// OTHER TYPES
//

// This could be wider for >8 bit display.
// Indeed, true color support is posibble
//  precalculating 24bpp lightmap/colormap LUT.
//  from darkening PLAYPAL to all black.
// Could even us emore than 32 levels.


class drawseg_t {
    curline = null; //seg_t*
    x1 = null; //int
    x2 = null; //int

    scale1 = null; //fixed_t
    scale2 = null; //fixed_t
    scalestep = null; //fixed_t

    // 0=none, 1=bottom, 2=top, 3=both
    silhouette = null; //int

    // do not clip sprites above this
    bsilheight = null; //fixed_t

    // do not clip sprites below this
    tsilheight = null; //fixed_t

    // Pointers to lists for sprite clipping,
    //  all three adjusted so [x1] is first value.
    sprtopclip = null; //short*
    sprbottomclip = null; //short*
    maskedtexturecol = null; //short*

}

class patch_t {
    width = null; //short
    height = null; //short
    leftoffset = null; //short
    topoffset = null; //short
    columnofs = [0,0,0,0,0,0,0,0]; //int
}

// A vissprite_t is a thing
//  that will be drawn during a refresh.
// I.e. a sprite object that is partly visible.
class vissprite_t {
    prev = null; // struct vissprite_s
    next = null; // struct vissprite_s

    // Doubly linked list.
    x1 = null; //int
    x2 = null; //int

    // for line side calculation
    gx = null; //fixed_t
    gy = null; //fixed_t

    // global bottom / top for silhouette clipping
    gz = null; //fixed_t
    gzt = null; //fixed_t

    // horizontal position of x1
    startfrac = null; //fixed_t

    scale = null; //fixed_t

    // negative if flipped
    xiscale = null; //fixed_t

    
    texturemid = null; //fixed_t
    patch = null; //int

    // for color translation and shadow draw,
    //  maxbright frames as well
    colormap = null; //lighttable_t*
 
    mobjflags = null; //int


}

class spriteframe_t {

    // If false use 0 for any position.
    // Note: as eight entries are available,
    //  we might as well insert the same name eight times.
    rotate = null; //boolean

    // Lump to use for view angles 0-7.
    lump = [0,0,0,0,0,0,0,0]; //short
    
    // Flip bit (1 = flip) to use for view angles 0-7.
    flip = [0,0,0,0,0,0,0,0]; //byte
}

//
// A sprite definition:
//  a number of animation frames.
//
class spritedef_t {
    numframes = null; //int
    spriteframes = null; //spriteframe_t*
}


//
// Now what is a visplane, anyway?
// 
class visplane_t {
    height = null; //fixed_t
    picnum = null; //int
    lightlevel = null; //int
    minx = null; //int
    maxx = null; //int

    // leave pads for [minx-1]/[maxx+1]
    pad1 = null; //byte

    // Here lies the rub for all
    //  dynamic resize/change of resolution.
    top = new Uint8Array(); //byte
    pad2 = null; //byte
    pad3 = null; //byte
    // See above.
    bottom = new Uint8Array(); //byte
    pad4 = null; //byte

}