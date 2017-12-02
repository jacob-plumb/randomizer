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
		
function randomStyle(){
	var chosenStyle = style[(parseInt(Math.random() * style.length))];
	return chosenStyle;
}
		
function randomTopic(){
	var chosenTopic = topic[(parseInt(Math.random() * topic.length))];
	return chosenTopic;
}
		
$(document).ready(function() {
	$("#style").text(randomStyle());
	$("#topic").text(randomTopic());
});