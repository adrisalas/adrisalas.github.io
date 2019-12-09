load();
function load(){
    console.log(localStorage.getItem("style"));
    var oldlink = document.getElementsByTagName("link").item(1);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    if (localStorage.getItem("style") == 0 || localStorage.getItem("style") == undefined){
        newlink.setAttribute("href", "../css/minimalism-dark.css");
        localStorage.setItem("style",0);
    } else {
        newlink.setAttribute("href", "../css/minimalism-light.css");
        localStorage.setItem("style",1);
    }
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
function change() {
    console.log(localStorage.getItem("style"));
    var oldlink = document.getElementsByTagName("link").item(1);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    if (localStorage.getItem("style") == 0 || localStorage.getItem("style") == undefined){
        newlink.setAttribute("href", "../css/minimalism-light.css");
        localStorage.setItem("style",1);
    } else {
        newlink.setAttribute("href", "../css/minimalism-dark.css");
        localStorage.setItem("style",0);
    }
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}