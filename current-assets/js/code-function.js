/******************* get key event keycode *******************/
function getKeyCode(e) {
    if (window.event)
        return window.event.keyCode;
    else
        if (e)
            return e.which;
        else
            return null;
}
/***************** get key event keycode ends ***********/



/****************** Key Restriction function Start here *************/
function keyRestrictValidChars(e, validchars) {
    var key = '', keychar = '';
    key = getKeyCode(e);
    if (key == null)
        return true;



    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    validchars = validchars.toLowerCase();



    if (validchars.indexOf(keychar) != -1)
        return true;



    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;



    return false;
}



function keyRestrictInValidChars(e, invalidchars) {
    var key = '', keychar = '';
    key = getKeyCode(e);
    if (key == null)
        return true;



    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    invalidchars = invalidchars.toLowerCase();



    if (invalidchars.indexOf(keychar) == -1)
        return true;



    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;



    return false;
}
/****************** Key Restriction function End here *************/
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


/*************************************************************************************/