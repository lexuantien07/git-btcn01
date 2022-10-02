
var lis = document.getElementsByTagName("li");

function liTag1(obj1, obj2) {
    obj1.onclick = function() {
    
        for (let i = 0; i < lis.length - 10; i++) {
            if (lis[i].style.color == "rgb(255, 177, 47)") {
                lis[i].style.color = "#4e77d8";
            }
        }
        for (let i = 6; i < lis.length; i++) {
            if (lis[i].style.color == "rgb(255, 226, 177)") {
                lis[i].style.color = "#FFB12F";
                lis[i].style.backgroundColor = "#FFE2B1"
            }
        }
        obj1.style.color = "rgb(255, 177, 47)";
        obj2.style.color = "#FFE2B1";
        obj2.style.backgroundColor = "#FF962F";
    }
}
function liTag2(obj1, obj2) {
    obj1.onclick = function() {
    
        for (let i = 0; i < lis.length - 10; i++) {
            if (lis[i].style.color == "rgb(255, 177, 47)") {
                lis[i].style.color = "#4e77d8";
            }
        }
        for (let i = 6; i < lis.length; i++) {
            if (lis[i].style.color == "rgb(255, 226, 177)") {
                lis[i].style.color = "#FFB12F";
                lis[i].style.backgroundColor = "#FFE2B1"
            }
        }
        obj2.style.color = "rgb(255, 177, 47)";
        obj1.style.color = "#FFE2B1";
        obj1.style.backgroundColor = "#FF962F";
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

document.getElementById('b').onclick = '';
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

document.getElementById("button1").onclick = function() {
    var listt = document.getElementsByClassName("s-item");
    var listt1 = [];
    for (let i = 0; i < listt.length; i++) {
        if (listt[i].style.color == "white") {
            listt1.push(listt[i]);
            listt[i].removeAttribute('style');
        }
    }
    for (let i = 0; i < listt1.length; i++) {
        document.getElementById("list2").appendChild(listt1[i]);
        listt1[i].className = "se-item";
    }
}
document.getElementById("button2").onclick = function() {
    var listt = document.getElementsByClassName("s-item");
    var listt1 = [];
    for (let i = 0; i < listt.length; i++) {
        
        listt1.push(listt[i]);
        
    }
    for (let i = 0; i < listt1.length; i++) {
        document.getElementById("list2").appendChild(listt1[i]);
        listt1[i].className = "se-item";
    }
}

document.getElementById("button3").onclick = function() {
    var listt = document.getElementsByClassName("se-item");
    var listt1 = [];
    for (let i = 0; i < listt.length; i++) {
        if (listt[i].style.color == "white") {
            listt1.push(listt[i]);
            listt[i].removeAttribute('style');
        }
    }
    for (let i = 0; i < listt1.length; i++) {
        document.getElementById("list1").appendChild(listt1[i]);
        listt1[i].className = "s-item";
    }
}

document.getElementById("button4").onclick = function() {
    var listt = document.getElementsByClassName("se-item");
    var listt1 = [];
    for (let i = 0; i < listt.length; i++) {
        
        listt1.push(listt[i]);
        
    }
    for (let i = 0; i < listt1.length; i++) {
        document.getElementById("list1").appendChild(listt1[i]);
        listt1[i].className = "s-item";
    }
}

// item 3 side

$(function () {
    $("#newsgroup").sortable({
        cursor: "move"
    }).disableSelection();
});


function hideshow1(obj, ctobj, ar,colr) {
    obj.onclick = function() {
        if (obj.className == "triangle-right") {
            obj.className = "triangle-down";
            ctobj.removeAttribute("style");
            ar.style.color = "white";
            colr.className = "n-header";
        } else {
            obj.className = "triangle-right";
            ctobj.style.display = "none";
            ar.style.color = "black";
            colr.className = "n-header changecolor";
        }
    }

}
function hideshow2(obj, ctobj, ar,colr) {
    obj.onclick = function() {
        if (obj.className == "triangle-down") {
            obj.className = "triangle-right";
            ctobj.removeAttribute("style");
            ar.style.color = "black";
            colr.className = "n-header changecolor";
        } else {
            obj.className = "triangle-down";
            ctobj.style.display = "block";
            ar.style.color = "white";
            colr.className = "n-header";
        }
    }

}

hideshow1(document.getElementById("tridown1"), document.getElementsByClassName("contentshow")[0], document.getElementsByClassName("twoside")[0],document.getElementsByClassName("n-header")[0]);
hideshow1(document.getElementById("tridown2"), document.getElementsByClassName("contentshow")[1], document.getElementsByClassName("twoside")[2],document.getElementsByClassName("n-header")[2]);
hideshow2(document.getElementById("triright1"), document.getElementsByClassName("contenthide")[0], document.getElementsByClassName("twoside")[1],document.getElementsByClassName("n-header")[1]);
hideshow2(document.getElementById("triright2"), document.getElementsByClassName("contenthide")[1], document.getElementsByClassName("twoside")[3],document.getElementsByClassName("n-header")[3]);

// validation phần nhập liệu

var submit = document.getElementById("button6");
submit.onclick = function() {
    var check, regex3, regex4, regex5, regex6, checkk = true;
    var testid = document.getElementById("maso").value;
    var regex1 = /^[1][7-9]\d{6}$/;
    var regex2 = /^[2][0-2]\d{6}$/;
    if (regex1.test(testid) == false && regex2.test(testid) == false) {
        document.getElementById("maso").style.border = "1px solid red";
        checkk = false;
    } else {
        document.getElementById("maso").style.border = "1px solid gray";
    }

    var testusername = document.getElementById("name").value;
    regex3 = /[a-zA-Z]+\s+[a-zA-Z]+/g;
    check = regex3.test(testusername);
    if (check == false) {
        document.getElementById("name").style.border = "1px solid red";
        checkk = false;
    } else {
        document.getElementById("name").style.border = "1px solid gray";
    }

    var testaddress = document.getElementById("address").value;
    regex4 = /[a-zA-Z]+\s+[a-zA-Z]+/g;
    check = regex4.test(testaddress);
    if (check == false) {
        document.getElementById("address").style.border = "1px solid red";
        checkk = false;
    } else {
        document.getElementById("address").style.border = "1px solid gray";
    }
        
    var testphone = document.getElementById("phone").value;
    regex5 = /^[0]\d{9}$/;
    check = regex5.test(testphone);
    if (check == false) {
        document.getElementById("phone").style.border = "1px solid red";
        checkk = false;
    } else {
        document.getElementById("phone").style.border = "1px solid gray";
    }

    var testemail = document.getElementById("email").value;
    regex6 = /^[a-z][a-z0-9\._]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/;
    check = regex6.test(testemail);
    if (check == false) {
        document.getElementById("email").style.border = "1px solid red";
        checkk = false;
    } else {
        document.getElementById("email").style.border = "1px solid gray";
    }
    if (checkk == false) {
        return;
    } else {
        var newtr = document.createElement("tr");
        var newnode = document.createElement("td");
        var text = document.createTextNode(testid);
        newnode.appendChild(text);
        newtr.appendChild(newnode);

        newnode = document.createElement("td");
        text = document.createTextNode(testusername);
        newnode.appendChild(text);
        newtr.appendChild(newnode);

        newnode = document.createElement("td");
        var gen1 = document.getElementById("gender1").checked;
        var gen2 = document.getElementById("gender2").checked;
        if (gen1 == true) {
            text = document.createTextNode("Nam");
        } else {
            text = document.createTextNode("Nữ");
        }
        newnode.appendChild(text);
        newtr.appendChild(newnode);

        newnode = document.createElement("td");
        text = document.createTextNode(document.getElementById("date").value);
        newnode.appendChild(text);
        newtr.appendChild(newnode);

        document.getElementsByTagName("table")[0].appendChild(newtr);
        var listselect = document.getElementsByClassName("se-item");
        for (let i = 0; i < listselect.length; i++) {
            alert(listselect[i].textContent);
        }
        
    }

}

var clear = document.getElementById("button7");
clear.onclick = function() {
    document.getElementById("maso").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender1").checked = false;
    document.getElementById("gender2").checked = false;
    document.getElementById("date").value = "";
    document.getElementById("email").value = "";
}