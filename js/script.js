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

//Показать модальное окно для заказа звонка по телефону
  $(".button-first").click(function(){
	$(".showform-phone").fadeIn();
  })

//Показать модальное окно для отправки сообщения с e-mail
  $(".button-second").click(function(){
	$(".showform-mail").fadeIn();
  })


//Закрыть модальное окно
  $(".message-close").click(function(){
	$(".name").val("");
	$(".phone-text").val("");
	$(".e-mail").val("");
	$(".message-text").val("");
	$(".message-background").fadeOut();
  })
});

//Закрыть модальное окно по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.message-background');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.message-background').fadeOut();
	}
});

//Отправка данных методом POST на файл mail.php
$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваши данные получены!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});



