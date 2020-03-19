$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    	margin:10,
    	loop:true,
    	dots:true,
    	responsiveClass:true,
    	responsive:{
       	0:{
            items:1
       	},
       	600:{
           	items:2
       	},
       	1150:{
           	items:3,
           	nav:false
        }
    	}
	})

	let owl = $('.owl-carousel');
		
	$(".arrow-end").click(function(){
		owl.trigger("next.owl.carousel");
	});
		
	$(".arrow-start").click(function(){
		owl.trigger("prev.owl.carousel");
	});

	$(".elements").removeClass("anim");

	var menuNav = $(".navigation");

	$(".menu-mobile").click(function() {
		menuNav.toggleClass("navigation-mobile");	
  })

  $(".button-first").click(function(){
	$("html,body").toggleClass("fixed");
	$(".message-background").toggleClass("show-message");
  })
  $(".message-close").click(function(){
	$(".name").val("");
	$(".phone-text").val("");
	$(".e-mail").val("");
	$("html,body").toggleClass("fixed");
	$(".message-background").toggleClass("show-message");
  })
});



