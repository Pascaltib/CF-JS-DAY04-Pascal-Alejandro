function getValue(){
    var x = document.getElementById('name').value;
    //document.getElementById('result').innerHTML = x;
    console.log(x);
}
document.getElementById('button').addEventListener('click', getValue, false);

/*function test(){
	var select = document.getElementById('select').value;
	console.log(select);
}
document.getElementById("submit").addEventListener("click",test,false);*/