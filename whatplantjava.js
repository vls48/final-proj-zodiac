//Global variables
var firstName;
var birthDayOBJ;


function calcPlant() {
	var outputArea = document.getElementById('displayMsg');
	//outputarea variable replaces displayMsg

	firstName = document.getElementById('uname').value;
	//returns first name entered

	birthDayOBJ = new
	Date(document.getElementById('bday').value);
	
	var timeBorn = birthDayOBJ.getTime();
	//returns which day of the week the person was born on

	var timeNow = Date.now();

	ageCurr = (timeNow - timeBorn)/31556926000;

	//zodiac calculations
	var monthNum = birthDayOBJ.getMonth();
	var dayNum = birthDayOBJ.getDate();

	//normalize
	monthNum ++;
	dayNum ++;

	var astroSign;

	if ((monthNum == 12 && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)){
		astroSign = 'Capricorn';
	} else if ((monthNum == 11 && dayNum >= 22) || (monthNum == 12 && dayNum <=21)){
		astroSign = 'Sagittarius';
	} else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <=21)){
		astroSign = 'Scorpio';
	} else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <=23)){
		astroSign = 'Libra';
	} else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <=22)){
		astroSign = 'Virgo';
	} else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <=22)){
		astroSign = 'Leo';
	} else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <=22)){
		astroSign = 'Cancer';
	} else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <=21)){
		astroSign = 'Gemini';
	} else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <=20)){
		astroSign = 'Taurus';
	} else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <=19)){
		astroSign = 'Aries';
	} else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <=20)){
		astroSign = 'Pisces';
	} else {
		astroSign = 'Aquarius';
	}

	outputArea.innerHTML = "Hello " + firstName + "." + " You are currently a " +  ageCurr.toFixed(0) +" year old " + astroSign + ".";

return false;
}

