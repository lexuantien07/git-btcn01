var lis = document.getElementsByTagName("li");
for (let x of lis) {
    x.onclick = function() {
        check = true;
        x.style.color = "red";
    }
}

document.getElementById('b').onclick = '';
function liTag1(obj1, obj2) {
    obj1.onclick = function() {
    
        for (let x of lis) {
            if (x.style.color == "red") {
                x.style.color = "#4e77d8";
            }
        }
        obj1.style.color = "red";
        obj2.style.color = "red";
    }
}
function liTag2(obj1, obj2) {
    obj1.onclick = function() {
    
        for (let x of lis) {
            if (x.style.color == "red") {
                x.style.color = "#4e77d8";
            }
        }
        obj1.style.color = "red";
        obj2.style.color = "red";
    }
}
liTag1(document.getElementById("menu1"), document.getElementById("menu11"));
liTag1(document.getElementById("menu2"), document.getElementById("menu22"));
liTag1(document.getElementById("menu3"), document.getElementById("menu33"));
liTag1(document.getElementById("menu4"), document.getElementById("menu44"));
liTag1(document.getElementById("menu5"), document.getElementById("menu55"));
liTag2(document.getElementById("menu11"), document.getElementById("menu1"));
liTag2(document.getElementById("menu22"), document.getElementById("menu2"));
liTag2(document.getElementById("menu33"), document.getElementById("menu3"));
liTag2(document.getElementById("menu44"), document.getElementById("menu4"));
liTag2(document.getElementById("menu55"), document.getElementById("menu5"));

var listofsub = document.getElementsByClassName("s-item");
for (let i = 0; i < listofsub.length; i++) {
    listofsub[i].onclick = function() {
        listofsub[i].style.color = "white";
        listofsub[i].style.backgroundColor = "orange";
    }
}
function subcheck(obj1) {
    obj1.onclick = function() {
        if (obj1.style.color == "white") {
            obj1.style.color = "black";
            obj1.style.backgroundColor = "rgb(238, 238, 238)";
        } else {
            obj1.style.color = "white";
            obj1.style.backgroundColor = "orange";
        }
    }
}
for (let i = 0; i < listofsub.length; i++) {
    subcheck(listofsub[i]);
}

var listofselected = document.getElementsByClassName("se-item");
for (let i = 0; i < listofselected.length; i++) {
    listofselected[i].onclick = function() {
        listofselected[i].style.color = "white";
        listofselected[i].style.backgroundColor = "orange";
    }
}
function slcheck(obj1) {
    obj1.onclick = function() {
        if (obj1.style.color == "white") {
            obj1.style.color = "black";
            obj1.style.backgroundColor = "#fffa90";
        } else {
            obj1.style.color = "white";
            obj1.style.backgroundColor = "orange";
        }
    }
}
for (let i = 0; i < listofselected.length; i++) {
    slcheck(listofselected[i]);
}

$(function () {
    $("#list1, #list2").sortable({
        connectWith: ".lists",
        cursor: "move"
    }).disableSelection();
});