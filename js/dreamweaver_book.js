function myfunction1()
{
	document.getElementById("p1").innerHTML="The first paragraph has changed to this message";
var txt = "Hello World...!";
var x = txt.length;
alert(x);
}
function myfunction2()
{
	document.getElementById("p2").style.fontSize='30px';
var txt = "We are \"Vikings\"";
alert(txt);
}
function myfunction3()
{
	document.getElementById("p3").style.display='none';
}

function myfunction4()
{
	
var txt = "I can eat bananas all day";
var x = txt.slice(10, 17);
alert("What can i eat whole day :\n"+ x);
}

function myfunction5()
{
var txt = "I can eat bananas all day";
var pos = txt.indexOf("bananas");
alert(pos);
}

function myfunction6()
{
var txt = "Hello World...!";
var txt = txt.toUpperCase();
alert(txt);
}
function myfunction7()
{
var txt = "Hello World...!";
var txt = txt.toLowerCase();
alert(txt);
}
function myfunction8()
{
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
alert(fruits);
}
function myfunction9()
{
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.reverse();
alert(fruits);
}

function myfunction10()
{
alert("your account has been created");
}

