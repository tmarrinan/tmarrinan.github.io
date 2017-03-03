function initNavigation() {
	var pages = [
		{name: "Home",         link: "index.html"},
		{name: "Teaching",     link: "teaching.html"},
		{name: "Research",     link: "research.html"},
		{name: "Publications", link: "publications.html"},
		{name: "Awards/Press", link: "awards_press.html"},
		{name: "CV",           link: "TMarrinan_CV.pdf"}
	];
	
	var navigation = document.getElementById('navigation');

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


	for(var i=0; i<pages.length; i++) {
		var pathname = window.location.pathname.split("/");
		
		var base = pages[i].link.substring(0, pages[i].link.indexOf("."));
		var current;
		if(window.location.protocol === "file:") {
			for(var j=0; j<pathname.length; j++) {
				if(pathname[j] === "tmarrinan.github.io") {
					current = pathname[j+1];
					break;
				}
			}
		}
		else {
			current = pathname[1] || "index.html";
		}
		var dot = current.indexOf(".");
		if(dot >= 0) current = current.substring(0, current.indexOf("."));
		
		var navpage = document.createElement('a');
		if(current === base) navpage.className = "nav_link_current";
		else                 navpage.className = "nav_link";
		navpage.href = pages[i].link;
		navpage.textContent = pages[i].name;
		navigation.appendChild(navpage);
	}
}