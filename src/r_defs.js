
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

