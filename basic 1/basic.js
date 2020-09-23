function getValue(){
    var x = document.getElementById('name').value;
    var select = document.getElementById('select').value;
    if(select == "IT"){
    	document.getElementById("result").style.backgroundColor = "purple";
    }
    else if (select == "Hospitality"){
    	document.getElementById("result").style.backgroundColor = "yellow";
    }
    else{
    	document.getElementById("result").style.backgroundColor = "lightgrey";
    }
    if(x.length>5){
    	document.getElementById("result").style.color = "green";
    }
    else{
    	document.getElementById("result").style.color = "red";
    }
    var y = document.getElementById('lastName').value;
    var z = document.getElementById('age').value;
    document.getElementById('result').innerHTML = `Name: ${x} <br> Last Name: ${y} <br> Age: ${z} `;
}
document.getElementById('button').addEventListener('click', getValue, false);

