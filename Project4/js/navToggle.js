(function(){

	var button = document.getElementById('nav-button'),
    wrapper = document.getElementById('nav-wrap'),
    overlay = document.getElementById('nav-overlay');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
  function openNav(){
		open = true;
	    button.innerHTML = "-";
	    overlay.className += " on-overlay";
	    wrapper.className += " opened-nav";
	}
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		overlay.className -= " on-overlay";
		wrapper.className -= " opened-nav";
		overlay.className += " nav-overlay";
		wrapper.className += " nav-wrap";

	}
	document.addEventListener('click', closeNav);

})();
