function postcard() {
    /*C0d3d_3m41l_c5st0m*/
    var postcard = "h?()WET1_z5@%%UY3ffR21AbAb21@)5qeM99!@p?#R=R4$";
    var newPostcard = "";

    /*String to Array*/
    postcard = postcard.split("");
    newPostcard = newPostcard.split("");

    /*Reverse postcard*/
    for (var i = 0; i < postcard.length; i++) {
        newPostcard[i] = postcard[postcard.length - i - 1];
    }
    postcard = newPostcard;

    /*Clear newPostcard content and make it to Array*/
    newPostcard = "";
    newPostcard = newPostcard.split();

    /*Decode string*/
    for (var i = 0; i < postcard.length; i++) {
        if (postcard[i] == '$') {
            newPostcard[i] = 'h';
        } else if (postcard[i] == '!') {
            newPostcard[i] = 'd';
        } else if (postcard[i] == 'G') {
            newPostcard[i] = 'i';
        } else if (postcard[i] == 'ñ') {
            newPostcard[i] = 'Ñ';
        } else if (postcard[i] == '_') {
            newPostcard[i] = 'c';
        } else if (postcard[i] == '*') {
            newPostcard[i] = 'k';
        } else if (postcard[i] == 'z') {
            newPostcard[i] = '.';
        } else if (postcard[i] == ':') {
            newPostcard[i] = 'f';
        } else if (postcard[i] == 'x') {
            newPostcard[i] = 'b';
        } else if (postcard[i] == 'p') {
            newPostcard[i] = '@';
        } else if (postcard[i] == '@') {
            newPostcard[i] = 'a';
        } else if (postcard[i] == '?') {
            newPostcard[i] = 'o';
        } else if (postcard[i] == '4') {
            newPostcard[i] = 'e';
        } else if (postcard[i] == 'M') {
            newPostcard[i] = 'r';
        } else if (postcard[i] == 'q') {
            newPostcard[i] = 'i';
        } else if (postcard[i] == '5') {
            newPostcard[i] = 's';
        } else if (postcard[i] == 'R') {
            newPostcard[i] = 'l';
        } else if (postcard[i] == 'h') {
            newPostcard[i] = 'm';
        } else {
        }
    }

    /*newPostcard to String*/
    newPostcard = newPostcard.join("");
    return newPostcard;
}