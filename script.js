var style = [
	"persuasive essay",
	"narrative essay",
	"expository essay",
	"descriptive essay",
	"rap",
	"poem",
	"journal",
	"diary",
	"memoir",
	"vignette",
	"letter",
	"speech",
	"blog post"
];
		
var topic = [
	"dogs",
	"nuclear fission",
	"table-top roleplaying games",
	"microtransactions",
	"immigration",
	"property rights",
	"constitutionalism",
	"soundcloud rappers",
	"a recent scientific breakthrough",
	"American exceptionalism",
	"greed",
	"sports in schools",
	"breaking habits",
	"mistakes",
	"professional wrestling",
	"the merits/demerits of the free market",
	"your ideal career path",
	"your pastimes"
]

var targetAudience = [
	"children",
	"your congressman",
	"middle-aged mothers",
	"gamers",
	"teachers",
	"your boss",
	"young adults",
	"teenagers",
	"conservatives",
	"liberals",
	"foreigners",
	"your grandmother"
]
		
function randomStyle(){
	var chosenStyle = style[(parseInt(Math.random() * style.length))];
	return chosenStyle;
}
		
function randomTopic(){
	var chosenTopic = topic[(parseInt(Math.random() * topic.length))];
	return chosenTopic;
}

function randomTargetAudience(){
	var chosenTargetAudience = targetAudience[(parseInt(Math.random() * targetAudience.length))]
	return chosenTargetAudience;
}

function randomizeAll(){
	$("#style").text(randomStyle());
	$("#topic").text(randomTopic());
	$("#targetAudience").text(randomTargetAudience());
}

function toggleTargetAudience(){
	var x = document.getElementById("targetAudienceBigDiv");
	if (x.style.display === "none"){
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
		
$(document).ready(function() {
	randomizeAll();
	document.getElementById("targetAudienceBigDiv").style.display = "none";
	
	$("#randomize").click(function() {
		randomizeAll();
	});
	
	$("#toggle").click(function() {
		toggleTargetAudience();
	});
});