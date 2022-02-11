
    function calculator(){
				var userEntry=prompt("Calculator to cenvert Litecoin to Canadian dollar","enter a description here");
				var cad= userEntry
				cadPerLTC=71.33
				ltc=cad/cadPerLTC
				var ltc=ltc.toFixed(8)
				document.getElementById("para1").innerHTML="$"+cad+"cad is equal to"+" &#321;"+ltc;
				document.getElementById("para1").style.textAlign='center';
				document.getElementById("h1").style.textAlign='center';
				document.getElementById("para1").style.fontSize='50px';
				}

	function seasonFunction(){
				var message;
				var season = prompt("this is the test of the prompt method","enter your favorite season").toLowerCase();
		if(season=="")
		{
			message="incorrect season";	
		}
		else if(season=="spring")
		{
			message="it is spring";
		}
		else if(season=="autumn")
		{
			message="it is autumn";
		}
		else if(season=="winter")
		{
			message="it is winter";
		}
		else if(season=="summer")
		{
			message="it is summers";
		}
		else if(season=="springon")
		{
			message="it is spring and everything starts growing again";
		}
		else if(season=="autumnon")
		{
			message="it is autumn and leaves are falling";
		}
		else if(season=="winteron")
		{
			message="it is winter so wear warm clothes ";
		}
		else if(season=="summeron")
		{
			message="it is summers drink cold baverages";
		}
		else 
		{
			message="not in this planet";
		}
		document.getElementById("para2").innerHTML=message;
	}
	function if_elseFunction(){
				var message;
				var grades=prompt("this is the test of the prompt method","enter grades");
		if(grades>=95)
		{
			message="honors with A++";	
		}
		else if(grades>=90)
		{
			message="honors with A+";
		}
		else if(grades>=85)
		{
			message="honors";
		}
		else if(grades>=80)
		{
			message="A++";
		}
		else if(grades>=75)
		{
			message="A+";
		}
		else if(grades>=70)
		{
			message="A";
		}
		else if(grades>=65)
		{
			message="B++";
		}
		else if(grades>=60)
		{
			message="B+";
		}
		else if(grades>=55)
		{
			message="B";
		}
		else 
		{
			message="C Ctegory";
		}
		document.getElementById("para3").innerHTML=message;
	
}