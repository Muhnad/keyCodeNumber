"use strict";
var obj = {
    "8": "backspace",
    "9": "Tab",
    "13": "Enter",
    "16": "Shift",
    "17": "Ctrl",
    "18": "Alt",
    "20": "Caps Lock",
    "27": "Esc",
    "32": "Space",
    "33": "Page up",
    "34": "Page down",
    "35": "End",
    "36": "Home ",
    "37": "Left",
    "38": "Up",
    "39": "Right",
    "40": "Down",
    "45": "Insert",
    "46": "Delete",
    "91": "Windows",
    "106": "Multiply *",
    "107": "Add +",
    "109": "Subtract -",
    "111": "Divide /",
    "144": "NumLk",
    "186": "Semicolon ;",
    "187": "Equal =",
    "188": "Comma ,",
    "189": "Dash -",
    "190": "Dot .",
    "191": "Slash /",
    "219": "Open bracket [",
    "220": "Back slash ",
    "221": "Close bracket ]",
    "222": "Quote ''"
};
window.onkeydown = function (e) {
    var num = e.which,
        keynum = document.getElementById("keynum"),
        keyword = document.getElementById("keyword"),
        char = String.fromCharCode(num).toLowerCase();

    if (obj[num]) {
        keynum.innerHTML = num;
        keyword.innerHTML = obj[num];
    } else {
        keynum.innerHTML = num;
        keyword.innerHTML = char;
    }
};