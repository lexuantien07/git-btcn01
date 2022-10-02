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
