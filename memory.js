
var karty=['jaskier.png', 'yen.png', 'triss.png', 'geralt.png', 'triss.png', 'iorweth.png', 'yen.png', 'ciri.png', 'jaskier.png', 'iorweth.png', 'ciri.png', 'geralt.png'];


var turnCounter = 0;
var oneVisible = false;
var dupa = true;
var pierwsza = "";
var lock = false;
var pairsLeft=6;



var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');
var c12 = document.getElementById('c12');
var wynik = document.getElementById('wynik');


function pokaz(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	if (opacityValue !=0 && lock==false)
	{
		var obraz="url(img/"+karty[nr]+")";
		$('#c'+nr).css('background-image',obraz);
		
		if (dupa == true )
		{
			dupa = false;
			pierwsza = nr;
		}
		else
		{	
			lock=true;
			turnCounter++;
			$(wynik).html('Turns:'+turnCounter);
			dupa=true;

			if(karty[pierwsza]==karty[nr])
			{
				setTimeout (function() {zniknij(nr, pierwsza)},1000);
			}		
			else
			{
				setTimeout (function(){przywroc(pierwsza, nr)},1000);
			}
		}
	}
}


function zniknij(nr,pierwsza)
{
	$('#c'+nr).addClass('cardA');
	$('#c'+nr).removeClass('card');
	$('#c'+pierwsza).addClass('cardA');
	$('#c'+pierwsza).removeClass('card');
	pairsLeft--;
	if(pairsLeft == 0)
	{
	$("#karty").html('<h1> Wygrana</h1></br><h2>Udało Ci się w '+turnCounter+' turach</h2>');
	$(wynik).html('');
	}
	lock=false;
}


function przywroc(nr,pierwsza)
{
	$('#c'+nr).css('background-image','url(img/karta.png)');
	$('#c'+pierwsza).css('background-image','url(img/karta.png)');
	lock=false;
}

c0.addEventListener("click", function() { pokaz(0); });
c1.addEventListener("click", function() { pokaz(1); });
c2.addEventListener("click", function() { pokaz(2); });
c3.addEventListener("click", function() { pokaz(3); });
c4.addEventListener("click", function() { pokaz(4); });
c5.addEventListener("click", function() { pokaz(5); });
c6.addEventListener("click", function() { pokaz(6); });
c7.addEventListener("click", function() { pokaz(7); });
c8.addEventListener("click", function() { pokaz(8); });
c9.addEventListener("click", function() { pokaz(9); });
c10.addEventListener("click", function() { pokaz(10); });
c11.addEventListener("click", function() { pokaz(11); });
c12.addEventListener("click", function() { pokaz(12); });
