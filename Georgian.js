var menuSeparator = chrome.contextMenus.create({type: "separator", contexts:["selection"]});

var LatinToGeorgianGoogleSearch = chrome.contextMenus.create({title: "Latin to Georgian > Google ", contexts:["selection"], onclick: searchGoogle}) ;

var LatinToGeorgianGoogleTranslate = chrome.contextMenus.create({title: "Latin to Georgian > Google Translate", contexts:["selection"], onclick: searchGoogle}) ;

var GeorgianToLatinGoogleSearch = chrome.contextMenus.create({title: "Georgian to Latin > Google", contexts:["selection"], onclick: searchGoogle}) ;


var GeorgianLatinLookup = [];

function searchGoogle(info, tab) {
	var inputText = info.selectionText ;
	
	//pseudo code before lookup complete
    var replacedText = inputText.replace(inputText, "ა") ;

	var url = encodeURI(("https://www.google.com/search?q=" + replacedText));

	chrome.tabs.create({
		"index": tab.index + 1, 
		"url":   url
	});
}

