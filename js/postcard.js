function postcard() {
    /*C0d3d_3m41l_c5st0m*/
    var postcard = "h?))_z@Py?MD5d32@(&YR@5p-qM!d23@";
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
        } else if (postcard[i] == 'D') {
            newPostcard[i] = 't';
        } else if (postcard[i] == 'y') {
            newPostcard[i] = 'y';
        } else { //@!Mq p 5@R@5 DM?y@ z _?h
                 //adri @ salas troya . com
            // h?_z@y?MD5@R@5pqM!@
        }
    }
                /*@!MGp5@R@5*/
    /*newPostcard to String*/
    newPostcard = newPostcard.join("");
    return newPostcard;
}