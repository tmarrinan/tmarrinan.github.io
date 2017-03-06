function initNavigation() {
	var pages = [
		{name: "Home",         link: "index.html"},
		{name: "Teaching",     link: "teaching.html"},
		{name: "Research",     link: "research.html"},
		{name: "Publications", link: "publications.html"},
		{name: "Awards/Press", link: "awards_press.html"},
		{name: "CV",           link: "TMarrinan_CV.pdf"}
	];
	
	var browser = fetchBrowser();
	if (!browser.isMobile)
		generateMobileNavigation(pages);
	else
		generateDesktopNavigation(pages);
}

function generateMobileNavigation(pages) {
	var main = document.getElementById("main");
	main.style.width = "780px";

	var content = document.getElementById("content");
	content.style.marginLeft = "20px";
	content.style.position = "static";

	var navWrapper = document.getElementById("navWrapper");
	navWrapper.style.height = "56px";

	var navigation = document.getElementById("navigation");
	navigation.style.top = "0px";
	navigation.style.left = "0px";
	navigation.style.width = "100%";
	navigation.style.height = "56px";
	navigation.style.backgroundColor = "#472568"; // rgb(71,37,104) rgb(237,233,240)
	navigation.style.textAlign = "left";

	var menu = document.createElement("div");
	menu.style.display = "block";
	menu.style.float = "left";
	menu.style.width = "40px";
	menu.style.height = "40px";
	menu.style.marginTop = "6px";
	menu.style.marginLeft = "20px";
	menu.style.border = "2px solid #D1C9D9";
	menu.style.borderRadius = "8px";
	var menuIcon = document.createElement("img");
	menuIcon.style.marginTop = "4px";
	menuIcon.style.marginLeft = "4px";
	menuIcon.width = "32";
	menuIcon.height = "32";
	menuIcon.src  = "images/menu.png";
	menu.appendChild(menuIcon);

	var info = document.createElement("div");
	info.style.display = "block";
	info.style.float = "left";
	info.style.marginTop = "8px";
	info.style.marginLeft = "20px";
	info.style.width = "520px";
	info.style.height = "40px";
	var info1 = document.createElement("p");
	info1.style.color = "#D1C9D9";
	info1.innerHTML = "<b>Tommy Marrinan, PhD</b> | Argonne National Laboratory | tmarrinan@anl.gov";
	var info2 = document.createElement("p");
	info2.style.color = "#D1C9D9";
	info2.innerHTML = "Postdoctoral Appointee &ndash; Computing, Environment, and Life Sciences";
	info.appendChild(info1);
	info.appendChild(info2);

	navigation.appendChild(menu);
	navigation.appendChild(info);

	var overlay = document.createElement("div");
	overlay.id = "overlay";
	overlay.style.position = "fixed";
	overlay.style.top = "0px";
	overlay.style.left = "0px";
	overlay.style.width = "100%";
	overlay.style.height = "100%";
	overlay.style.display = "none";
	overlay.style.backgroundColor = "#000000";
	overlay.style.opacity = "0.0";
	overlay.style.transition = "opacity 500ms ease";
	overlay.style.webkitTransition = "opacity 500ms ease";

	var mobileNav = document.createElement("div");
	mobileNav.id = "mobileNav";
	mobileNav.style.position = "fixed";
	mobileNav.style.top = "0px";
	mobileNav.style.left = "-300px";
	mobileNav.style.width = "300px";
	mobileNav.style.height = "100%";
	mobileNav.style.display = "none";
	mobileNav.style.backgroundColor = "#FFFFFF";
	mobileNav.style.transition = "left 500ms ease";
	mobileNav.style.webkitTransition = "left 500ms ease";

	var mobileNavTitle = document.createElement("div");
	mobileNavTitle.style.width = "100%";
	mobileNavTitle.style.height = "56px";
	mobileNavTitle.style.textAlign = "left";
	mobileNavTitle.style.backgroundColor = "#472568";
	var mobileNavClose = document.createElement("div");
	mobileNavClose.style.display = "block";
	mobileNavClose.style.float = "left";
	mobileNavClose.style.width = "40px";
	mobileNavClose.style.height = "40px";
	mobileNavClose.style.marginTop = "6px";
	mobileNavClose.style.marginLeft = "20px";
	mobileNavClose.style.marginRight = "40px";
	mobileNavClose.style.border = "2px solid #D1C9D9";
	mobileNavClose.style.borderRadius = "8px";
	var mobileNavCloseIcon = document.createElement("img");
	mobileNavCloseIcon.style.marginTop = "4px";
	mobileNavCloseIcon.style.marginLeft = "4px";
	mobileNavCloseIcon.width = "32";
	mobileNavCloseIcon.height = "32";
	mobileNavCloseIcon.src  = "images/close.png";
	mobileNavClose.appendChild(mobileNavCloseIcon);
	var mobileNavTitleText = document.createElement("h1");
	mobileNavTitleText.innerHTML = "Navigation";
	mobileNavTitleText.style.color = "#D1C9D9";
	mobileNavTitleText.style.fontSize = "28px";
	mobileNavTitleText.style.lineHeight = "56px";
	mobileNavTitle.appendChild(mobileNavClose);
	mobileNavTitle.appendChild(mobileNavTitleText);

	var mobileNavPages = document.createElement("div");
	var i, j, navpage, pathname, base, current, dot;
	for(var i=0; i<pages.length; i++) {
		pathname = window.location.pathname.split("/");
		
		base = pages[i].link.substring(0, pages[i].link.indexOf("."));
		current;
		if(window.location.protocol === "file:") {
			for(j=0; j<pathname.length; j++) {
				if(pathname[j] === "tmarrinan.github.io") {
					current = pathname[j+1];
					break;
				}
			}
		}
		else {
			current = pathname[1] || "index.html";
		}
		dot = current.indexOf(".");
		if(dot >= 0) current = current.substring(0, current.indexOf("."));
		
		navpage = document.createElement('a');
		if(current === base) navpage.className = "mobile_nav_link_current";
		else                 navpage.className = "mobile_nav_link";
		navpage.href = pages[i].link;
		navpage.textContent = pages[i].name;
		if (i % 2 == 0)
			navpage.style.backgroundColor = "#FFFFFF";
		else
			navpage.style.backgroundColor = "rgb(237,233,240)";//"#D1C9D9";
		mobileNavPages.appendChild(navpage);
	}

	mobileNav.appendChild(mobileNavTitle);
	mobileNav.appendChild(mobileNavPages);

	document.body.appendChild(overlay);
	document.body.appendChild(mobileNav);

	menu.addEventListener("click", showMobileNavigation, false);
	mobileNavClose.addEventListener("click", hideMobileNavigation, false);
}

function generateDesktopNavigation(pages) {
	var navigation = document.getElementById("navigation");

	var name = document.createElement("h1");
	name.innerHTML = "Tommy Marrinan, PhD";
	var position = document.createElement("h4");
	position.innerHTML = "Postdoctoral Appointee<br/>Computing, Environment, and Life Sciences<br/>Argonne National Laboratory";
	var spacer1 = document.createElement("div");
	spacer1.style.display = "block";
	spacer1.style.width = "290px";
	spacer1.style.height = "6px";
	var email = document.createElement("h4");
	email.innerHTML = "tmarrinan@anl.gov";
	var spacer2 = document.createElement("div");
	spacer2.style.display = "block";
	spacer2.style.width = "290px";
	spacer2.style.height = "32px";
	navigation.appendChild(name);
	navigation.appendChild(position);
	navigation.appendChild(spacer1);
	navigation.appendChild(email);
	navigation.appendChild(spacer2);

	var i, j, navpage, pathname, base, current, dot;
	for(i=0; i<pages.length; i++) {
		pathname = window.location.pathname.split("/");
		
		base = pages[i].link.substring(0, pages[i].link.indexOf("."));
		current;
		if(window.location.protocol === "file:") {
			for(j=0; j<pathname.length; j++) {
				if(pathname[j] === "tmarrinan.github.io") {
					current = pathname[j+1];
					break;
				}
			}
		}
		else {
			current = pathname[1] || "index.html";
		}
		dot = current.indexOf(".");
		if(dot >= 0) current = current.substring(0, current.indexOf("."));
		
		navpage = document.createElement('a');
		if(current === base) navpage.className = "nav_link_current";
		else                 navpage.className = "nav_link";
		navpage.href = pages[i].link;
		navpage.textContent = pages[i].name;
		navigation.appendChild(navpage);
	}
}

function showMobileNavigation(event) {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "block";

	var mobileNav = document.getElementById("mobileNav");
	mobileNav.style.display = "block";

	setTimeout(function() {
		overlay.style.opacity = "0.65";
		mobileNav.style.left = "0px";
	}, 40);
}

function hideMobileNavigation(event) {
	var overlay = document.getElementById("overlay");
	overlay.style.opacity = "0.0";

	var mobileNav = document.getElementById("mobileNav");
	mobileNav.style.left = "-300px";

	setTimeout(function() {
		overlay.style.display = "none";
		mobileNav.style.display = "none";
	}, 500);
}

function fetchBrowser() {
	var browser = {};
	var userAgent = window.navigator.userAgent.toLowerCase();
    // Determine browser
	browser.isIE            = /*@cc_on!@*/false || !!document.documentMode;
	browser.isEdge          = !browser.isIE && !!window.StyleMedia;
	browser.isOpera         = userAgent.indexOf("opr") >= 0;
	browser.isChrome        = !browser.isIE && userAgent.indexOf("chrome") >= 0;
	browser.isWebKit        = userAgent.indexOf("webkit") >= 0;
	browser.isSafari        = !browser.isChrome && !browser.isIE && userAgent.indexOf("safari") >= 0;
	browser.isGecko         = !browser.isWebKit && userAgent.indexOf("gecko") >= 0;
	browser.isFirefox       = browser.isGecko && userAgent.indexOf("firefox") >= 0;
	browser.isWinPhone      = userAgent.indexOf("windows phone") >= 0;
	browser.isIPhone        = userAgent.indexOf("iphone") >= 0;
	browser.isIPad          = userAgent.indexOf("ipad") >= 0;
	browser.isIPod          = userAgent.indexOf("ipod") >= 0;
	browser.isIOS           = !browser.isWinPhone && (browser.isIPhone || browser.isIPad || browser.isIPod);
	browser.isAndroid       = userAgent.indexOf("android") >= 0;
	browser.isAndroidTablet = (userAgent.indexOf("android") >= 0) && !(userAgent.indexOf("mobile") >= 0);
	browser.isWindows       = userAgent.indexOf("windows") >= 0 || userAgent.indexOf("win32") >= 0;
	browser.isMac           = !browser.isIOS && (userAgent.indexOf("macintosh") >= 0 || userAgent.indexOf("mac os x") >= 0);
	browser.isLinux         = userAgent.indexOf("linux") >= 0;
	browser.isElectron      = (typeof window !== 'undefined' && window.process && window.process.type === "renderer") === true;
	// Mobile clients
	browser.isMobile        = browser.isWinPhone || browser.isIOS || browser.isAndroid;

	// Store a string for the type of browser
	browser.browserType = browser.isElectron ? "Electron" :
		browser.isIE ? "Explorer" :
		browser.isEdge ? "Edge" :
		browser.isFirefox ? "Firefox" :
		browser.isSafari ? "Safari" :
		browser.isOpera ? "Opera" :
		browser.isChrome ? "Chrome" : "---";

	// Keep a copy of the UA
	browser.userAgent  = userAgent;
	
	return browser;
}