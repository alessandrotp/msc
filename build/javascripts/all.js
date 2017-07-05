// This is where it all goes :)


// Foundation
// $(document).ready(function() {
// 	$(function() {
// 	  $(document).foundation();
// 	});
// });

// Fullpage
$(document).ready(function() {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	// Foundation
	$(function() {
	  $(document).foundation();
	});
	

	// Fullpage
	$('#fullpage').fullpage({
	  anchors: ['None','Home','Blog','Medicos','Certificados','Certificaciones','None','Testimonios','Clinicas','None'],
	  // anchors: ['None','Home','Blog','Medicos','Certificados','Certificaciones','None','Testimonios','''Footer'],
	  // afterRender: function(){
	  //   $('#top-menu-id-2').hide();
	  // },
	  // verticalCentered: false,
	  autoScrolling:false,
	  fitToSection: false,
	  slidesNavigation: true,
	  recordHistory: false,
	  // controlArrows: true,
	  scrollingSpeed: 1000,
	  scrollBar:false,
	  fixedElements: '.header-cont, .header-cont-mobile-2, .mobile-menu',
	  // continuousHorizontal: true,
	  // loopHorizontal: true,

	  afterRender: function () {
	    //on page load, start the slideshow
	     slideTimeout = setInterval(function () {
	         $.fn.fullpage.moveSlideRight();
	     }, 6000);
	   },
	});

	// Searh bar code
	$(function() {
		$(".menu-search").click(function() {  
			$(".search-bar-cont").toggleClass("show");      
			$(".header-col-search").toggleClass("obscure");      
		});
		$(".menu-search-mobile").click(function() {  
			$(".search-bar-cont-mobile").toggleClass("show");    	
		});
	});

	$(function() {
		var options = {
        	autoplay: true,
    	};
		var video = document.getElementById('vimeo_player');
		var player = new Vimeo.Player(video, options);
		player.ready().then(function() {
        	player.setVolume(0);
    	});

		// $( "#play2" ).click(function() {
		//     var options2 = {
		//         width: 320,
		//     };
  // 			player.play(options2);
  // 			$(".play-img-cont").toggleClass("hide");      
		// });
	});

	// Mobile code
	$(function() {
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (w<755){
			$(".header-cont").toggleClass("hide");      
			$(".header-cont-mobile").toggleClass("unhide");    
		}
	});
});

