function hoverCircle() {
	document.getElementById('text').innerHTML = "you are in the circle";
}

function notHover(){
	document.getElementById('text').innerHTML = "you are outside of the circle";
}

function circleClick(){
	document.getElementById('circle').style.backgroundColor = "lightgrey";
}

function circleDbClick(){
	document.getElementById('circle').style.backgroundColor = "blue";
}


document.getElementById("circle").addEventListener('mouseover',hoverCircle,false);

document.getElementById("circle").addEventListener('mouseout',notHover,false);

document.getElementById("circle").addEventListener('click',circleClick,false);

document.getElementById("circle").addEventListener('dblclick',circleDbClick,false);