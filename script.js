var styleList = [
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
		
var topicList = [
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

var targetAudienceList = [
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

var toneList = [
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
	"earnest",
	"egotistical",
	"encouraging",
	"enthusiastic",
	"evasive",
	"excited",
	"facetious",
	"farcical",
	"forceful",
	"formal",
	"frustrated",
	"gentle",
	"grim",
	"hard",
	"humble",
	"humorous",
	"hypercritical",
	"impartial",
	"impassioned",
	"imploring",
	"impressionable",
	"inane",
	"incensed",
	"incredulous",
	"indignant",
	"informative",
	"intense",
	"intimate",
	"ironic",
	"irreverent",
	"jaded",
	"joyful",
	"judgemental",
	"laudatory",
	"light-hearted",
	"loving",
	"macabre",
	"malicious",
	"mean-spirited",
	"mocking",
	"mourning",
	"narcissistic",
	"nasty",
	"negative",
	"nostalgic",
	"objective",
	"optimistic",
	"outraged",
	"outspoken",
	"pathetic",
	"pathetic",
	"patronising",
	"pensive",
	"persuasive",
	"philosophical",
	"playful",
	"pragmatic",
	"regretful",
	"resentful",
	"resigned",
	"righteous",
	"satirical",
	"scathing",
	"scornful",
	"sensationalistic",
	"sentimental",
	"sincere",
	"sceptical",
	"solemn",
	"submissive",
	"sulking",
	"sympathetic",
	"thoughtful",
	"tolerant",
	"unassuming",
	"uneasy",
	"urgent",
	"vindictive",
	"virtuous",
	"whimsical",
	"witty",
	"worried"
	
]

var styleLabel = "You are to write a ";
var topicLabel = " about "
var targetAudienceLabel = " written for ";
var toneLabel1 = " in a "
var toneLabel2 = " tone."

var toneOn = false;
var audienceOn = false;

var style;
var topic;
var audience;
var tone;

function concatenateFull(){
	style = randomStyle();
	
	var firstLetter = style.substring(0,1).toLowerCase();
	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
		styleLabel = "You are to write an ";
	} else {
		styleLabel = "You are to write a ";
	}
	
	topic = randomTopic();
	
	audience = randomTargetAudience();
	
	tone = randomTone();
	firstLetter = tone.substring(0,1).toLowerCase();
	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
		toneLabel1 = " in an ";
	} else {
		toneLabel1 = " in a ";
	}
	
	if (toneOn && audienceOn){
		$("#bigP").text(styleLabel.concat(style, topicLabel, topic, targetAudienceLabel, audience, toneLabel1, tone, toneLabel2));
	}else if (audienceOn){
		var addPeriod = ".";
		var newAud = audience.concat(addPeriod);
		$("#bigP").text(styleLabel.concat(style, topicLabel, topic, targetAudienceLabel, newAud));
	}else if (toneOn){
		$("#bigP").text(styleLabel.concat(style, topicLabel, topic, toneLabel1, tone, toneLabel2));
	}else {
		var addPeriod = ".";
		var newTopic = topic.concat(addPeriod);
		$("#bigP").text(styleLabel.concat(style, topicLabel, newTopic));
	}
	
}
		
function randomStyle(){
	var chosenStyle = styleList[(parseInt(Math.random() * styleList.length))];
	var firstLetter = chosenStyle.substring(0,1).toLowerCase();
	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
		$("#styleLabel").text("You are to write an:");
	} else {
		$("#styleLabel").text("You are to write a:");
	}
	return chosenStyle;
}
		
function randomTopic(){
	var chosenTopic = topicList[(parseInt(Math.random() * topicList.length))];
	return chosenTopic;
}

function randomTargetAudience(){
	var chosenTargetAudience = targetAudienceList[(parseInt(Math.random() * targetAudienceList.length))];
	return chosenTargetAudience;
}

function randomTone(){
	var chosenTone = toneList[(parseInt(Math.random() * toneList.length))];
	var firstLetter = chosenTone.substring(0,1).toLowerCase();
	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
		$("#toneLabel1").text("in an");
	} else {
		$("#toneLabel1").text("in a");
	}
	return chosenTone;
}

function toggleTargetAudience(){
	if (audienceOn){
		audienceOn = false;
	}else {
		audienceOn = true;
	}
}

function toggleTone(){
	if (toneOn){
		toneOn = false;
	}else {
		toneOn = true;
	}
}
		
		
//MAKE TOGGLE BUTTONS CHANGE COLORS
$(document).ready(function() {
	concatenateFull();
	
	$("#randomize").click(function() {
		concatenateFull();
	});
	
	$("#toggle").click(function() {
		toggleTargetAudience();
		concatenateFull();
	});
	
	$("#toggleTone").click(function() {
		toggleTone();
		concatenateFull();
	});
});