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
	"nuclear power",
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
	"your pastimes",
	"state-funded college tuition",
	"obesity",
	"net neutrality",
	"the draft",
	"the SAT/ACT",
	"grades in academics",
	"secondary language classes",
	"physical education",
	"tobacco products",
	"captial punishment",
	"concussions in contact sports",
	"prohibition",
	"energy drinks",
	"age of suffrage",
	"animal experimentation",
	"rainforests & deforestation",
	"globalization",
	"the Panama Canal",
	"United States intverventionism",
	"pineapple on pizza",
	"tsunamis",
	"World War 3",
	"World War 2",
	"World War 1",
	"Bitcoin",
	"public schooling",
	"the Second Amendment",
	"the Fourth Amendment",
	"the First Amendment",
	"monarchy",
	"government regulations",
	"violent video games",
	"influence of mobile phones",
	"modern communications and education",
	"Internet censorship",
	"universal healthcare",
	"Lockean philosophy",
	"parental control",
	"social movements",
	"online dating",
	"marriage to artificial beings",
	"vigilantism",
	"graffiti",
	"corporal punishment",
	"gothic art",
	"movies",
	"historical documentaries",
	"musical trends",
	"Communism",
	"atrocities",
	"vacations",
	"the atomic bombings of Hiroshima and Nagasaki",
	"mutually assured destruction",
	"an offical nation language in the United States",
	"teenage rebellion",
	"civil disobedience",
	"open rebellion",
	"changes in communication",
	"torture",
	"school uniforms",
	"taxation",
	"technological dependence",
	"marketing to children",
	"Congressional term limits",
	"beauty pageants",
	"prisoners having the vote",
	"year-round school",
	"religious wars",
	"euthanasia",
	"affirmative action",
	"cartoon frogs",
	"how history repeats itself",
	"ancient religions",
	"death",
	"funeral traditions",
	"black holes",
	"the Sun",
	"planets",
	"space travel",
	"science fiction",
	"nationalism",
	"excecute power",
	"the Arab Spring",
	"the 2008 Recession",
	"the Great Depression",
	"police power",
	"freedom and security",
	"minority rights"
	
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
	"your grandmother",
	"millenials",
	"adults",
	"baby boomers",
	"Americans",
	"Canadians",
	"Mexicans",
	"Europeans",
	"Africans",
	"Asians",
	"Former Members of the Mongolian People's Revolutionary Party",
	"the middle class",
	"the working class",
	"plutocrats",
	"billionaires",
	"corporate executives",
	"small business owners",
	"diehard Leninists",
	"married people",
	"divorced people",
	"large families",
	"small families",
	"athletes",
	"martial artists",
	"artists",
	"actors",
	"voice actors",
	"stagehands",
	"musicians",
	"computer enthusiasts",
	"students",
	"middle schoolers",
	"risk-takers",
	"med students",
	"eSports teams",
	"single men",
	"single women",
	"retirees",
	"homeowners",
	"struggling art students",
	"widows",
	"vegetarians",
	"vegans",
	"Buddhists",
	"Christians",
	"Muslims",
	"Jews",
	"environmentalists",
	"middle management",
	"non-native English speakers",
	"deaf people"
	
]

var tone = [
	"absurd",
	"accusatory",
	"admiring",
	"aggressive",
	"ambivalent",
	"amused",
	"angry",
	"apathetic",
	"appreciative",
	"arrogant",
	"assertive",
	"awestruck",
	"belligerent",
	"bitter",
	"callouse",
	"candid",
	"caustic",
	"cautionary",
	"comic",
	"compassionate",
	"complex",
	"concerend",
	"condescending",
	"confused",
	"contemptuous",
	"critical",
	"cruel",
	"curious",
	"cynical",
	"defensive",
	"defiant",
	"demeaning",
	"derisive",
	"detached",
	"dignified",
	"diplomatic",
	"disapproving",
	"disparaging",
	"dispassionate",
	"distressing",
	"docile",
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

function toggleTone(){
	var x = document.getElementById("toneBigDiv");
	if (x.style.display === "none"){
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
		
$(document).ready(function() {
	randomizeAll();
	document.getElementById("targetAudienceBigDiv").style.display = "none";
	document.getElementById("toneBigDiv").style.display = "none";
	
	$("#randomize").click(function() {
		randomizeAll();
	});
	
	$("#toggle").click(function() {
		toggleTargetAudience();
	});
	
	$("#toggleTone").click(function() {
		toggleTone();
	});
});