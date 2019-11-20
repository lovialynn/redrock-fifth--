//作业1
let body = document.body;
let but = document.getElementsByClassName('but');
let click = 0,
    i = 0;
but[0].onclick = function () {
    click += 1;
    if (click % 2 == 1)
        body.style.backgroundColor = "#B9B9FF"
    else body.style.backgroundColor = "rgb(139, 62, 32)"
}
but[1].onclick = function () {
    i += 1;
    if (i % 4 == 1)
        body.style.fontSize = 20 + 'px';
    else if (i % 4 == 2)
        body.style.fontSize = 25 + 'px';
    else if (i % 4 == 3)
        body.style.fontSize = 30 + 'px';
    else body.style.fontSize = null;
}
//作业2
//level1
function li() {
    let ul = document.getElementsByClassName('ul')[0];
    ul.addEventListener('click', function showColor(e) {
        var x = e.target;
        console.log(x.innerHTML);
    }, false) 
}
li()
var li = document.getElementsByTagName("li"); 
　　　　for (i = 0; i < li.length; i++) {　　　　
　　　　　　if (i % 2 == 0) {
　　　　　　　　li[i].style.color = 'green'
　　　　　　} else {
　　　　　　　　li[i].style.color = "red";
　　　　　　}
　　　　}
//level2
let int = document.getElementsByTagName('input')[0];
let div = document.getElementsByClassName('div')[0];
but[2].onclick = function(){
    let li2 = document.createElement('li');
    li2.innerHTML = int.value;
    div.appendChild(li2);
}