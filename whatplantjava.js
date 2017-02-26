//Global variables
var firstName;
var birthDayOBJ;
var outputArea = document.getElementById('displayImg');
	//outputarea variable replaces displayMsg
firstName = document.getElementById('uname').value;
	//returns first name entered


var descCarnation = '<p> December 22 - January 19 </p> You are the carnation. You are partical and disciplined, but also somewhat pessimistic.';
var descDaffodil = '<p> November 22 - December 21 </p> You are the daffodil. You are an optimistic individual. You are bright and promising, like the first sign of spring.';
var descVenus = '<p> October 23 - November 21 </p> You are the venus fly trap. You are powerful, exciting. Though you are a bold individual, you can also be secretive.';
var descDaisy = '<p> September 23 - October 22 </p> You are the daisy. You are charming, flirtatious and easygoing.';
var descAloe = '<p> August 23 - September 22 </p> You are the aloe plant. You are reliable and practical. You are noted for you ability to help others.';
var descIvy = '<p> July 23 - August 22 </p> You are ivy. You are a creative, expansive, and generous person. You like to intertwine your way into situations and make your opinion heard.';
var descBleeding = '<p> June 21 - July 22 </p> You are the bleeding heart. You are an emotional individual and are very family-oriented. You are loyal and sympathetic.';
var descSun =  '<p> May 21 - June 20 </p> You are the sunflower. You are youthful lovely, and popular. Your bright demenor is like the sun.';
var descBonsai = '<p> April 20 - May 20 </p> You are a bonsai tree. You are reliable and persistent. You are a inflexible and stable person.';
var descCactus = '<p> March 21 - April 19 </p> You are the cactus. You are a daredevil. You are also a confident and dynamic individual.';
var descTulip = '<p> February 19 - March 20 </p> You are the tulip. You are kind and sensitive, and also very selfless.';
var descHanging = '<p> January 20 - February 18 </p> You are the hanging plant. You are friendly and original, and also independent and unpredictable.';

//
//
//user submits information and output function here
function calcPlant() {
	
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
		astroSign = descCarnation;
	} else if ((monthNum == 11 && dayNum >= 22) || (monthNum == 12 && dayNum <=21)){
		astroSign = descDaffodil;
	} else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <=21)){
		astroSign = descVenus;
	} else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <=23)){
		astroSign = descDaisy;
	} else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <=22)){
		astroSign = descAloe;
	} else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <=22)){
		astroSign = descIvy;
	} else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <=22)){
		astroSign = descBleeding;
	} else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <=21)){
		astroSign = descSun;
	} else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <=20)){
		astroSign = descBonsai;
	} else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <=19)){
		astroSign = descCactus;
	} else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <=20)){
		astroSign = descTulip;
	} else {
		astroSign = descHanging;
	}

	outputArea.innerHTML = "<p>Hello " + firstName + ". <p> " + astroSign;

return false;
}


//
//
// check function
function highlight() {
  console.log('highlight called');
}


//
//
// listeners and parameter passing
var aloeObj = document.getElementById('aloe');
var bleedingObj = document.getElementById('bleeding');
var bonsaiObj = document.getElementById('bonsai');
var cactusObj = document.getElementById('cactus');
var carnationObj = document.getElementById('carnation');
var daffodilObj = document.getElementById('daffodil');
var daisyObj = document.getElementById('daisy');
var hangingObj = document.getElementById('hanging');
var ivyObj = document.getElementById('ivy');
var sunObj = document.getElementById('sun');
var tulipObj = document.getElementById('tulip');
var trapObj = document.getElementById('trap');

var helpObj = document.getElementById('help');
var helpMenuObj = document.getElementById('help-menu')


//var displayObj = document.getElementById('display');
var allPlantsObj = document.getElementById('images');
//
//
//event listeners plants
aloeObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'aloe');
}, false);

bleedingObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'bleeding');
}, false);

bonsaiObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'bonsai');
}, false);

cactusObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'cactus');
}, false);

carnationObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'carnation');
}, false);

daffodilObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'daffodil');
}, false);

daisyObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'daisy');
}, false);

hangingObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'hanging');
}, false);

ivyObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'ivy');
}, false);

sunObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'sun');
}, false);

tulipObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'tulip');
}, false);

trapObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'trap');
}, false);
//
//
//event listeners help

helpObj.addEventListener('click', function(evt) {
	helpClick(evt, 'help');
}, false);

helpMenuObj.addEventListener('click', function(evt) {
	closeHelp(evt, 'help-menu');
}, false);


//
//
//functions

function helpClick(evt) {
	helpMenuObj.classList.add('help-menu-active');
	console.log('it werk');
}

function closeHelp(evt) {
	helpMenuObj.classList.remove('help-menu-active');
}


function displayZodSign(evt, whichOne) {
	console.log('it work ' + whichOne);

	var imgArray = allPlantsObj.children;
	console.log('imageArray is ' + imgArray);
	console.log('imgArray length is ' + imgArray.length);
	console.log('imgArray 2 is ' + imgArray[2].tagName);

	//imgArray[0].classList.remove('display');
	//imgArray[3].classList.add('display');

	//loop through array and remove display class from everthing
	for(lp = 0; lp < imgArray.length; lp++) {
		imgArray[lp].classList.remove('active');
	}


	switch (whichOne) {
		case 'aloe':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[3].classList.add('active');
			outputArea.innerHTML = descAloe;
			break;

		case 'bleeding':
			//display big image for pis
			//displayObj.src='img/ful_scorpio.png';
			imgArray[8].classList.add('active');
			outputArea.innerHTML = descBleeding;
			break;

		case 'bonsai':
			//display big image for pis
			//displayObj.src='img/ful_aquarius.png';
			imgArray[1].classList.add('active');
			outputArea.innerHTML = descBonsai;
			break;

		case 'cactus':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[5].classList.add('active');
			outputArea.innerHTML = descCactus;
			break;

		case 'carnation':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[4].classList.add('active');
			outputArea.innerHTML = descCarnation;
			break;

		case 'daffodil':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[6].classList.add('active');
			outputArea.innerHTML = descDaffodil;
			break;

		case 'daisy':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[2].classList.add('active');
			outputArea.innerHTML = descDaisy;
			break;

		case 'hanging':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[10].classList.add('active');
			outputArea.innerHTML = descHanging;
			break;

		case 'ivy':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[11].classList.add('active');
			outputArea.innerHTML = descIvy;
			break;

		case 'sun':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[9].classList.add('active');
			outputArea.innerHTML = descSun;
			break;

		case 'tulip':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[0].classList.add('active');
			outputArea.innerHTML = descTulip;
			break;

		case 'trap':
			//display big image for pis
			//displayObj.src='img/ful_pisces.png';
			imgArray[7].classList.add('active');
			outputArea.innerHTML = descVenus;
			break;

		default:
			//displayObj.src='img/ful_blank.png';
			imgArray[0].classList.add('active');
	}
}



