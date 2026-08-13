 /* ---------- CATEGORY: SCROLL TOP ----------- */
 /* begin.scroll back to top */
 function scrollFunction() {
 	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
 		document.getElementById("backtotop").classList.add('active');
 	} else {
 		document.getElementById("backtotop").classList.remove('active');
 	}
 }

 /* When the user clicks on the button, scroll to the top of the document */
 function topFunction() {
 	$("html, body").animate({ scrollTop: 0 }, 1200, 'linear');
 }
 /* end.scroll back to top */

 function myheaders() {
 	if (window.pageYOffset > sticky) {
 		navheader.classList.add("sticky");
 	} else {
 		navheader.classList.remove("sticky");
 	}
 }

 /* header scroll */
 window.onscroll = function() {
 	myheaders()
 	scrollFunction()
 };

 var navheader = document.getElementById("headertop");
 var sticky = navheader.offsetTop;


 window.onload = function() {
 	$(".preloader-layout").fadeOut(1200, function(){ 
 		$(this).addClass('loaded');
 	}); 	
 	$('.banner-box-clip .banner-caption').addClass('animated-caption');
 };

 /* ---------- CATEGORY: DOC READY----------- */
 $(document).ready(function() {

 	/* ---------- CATEGORY: NAVBAR----------- */

 	/*disable scrollbar when showing mainmenu resposive*/ 
 	$('.finebody').click(function(e) {
 		e.preventDefault();
 		$(this).parents().find('body').toggleClass('disablescrollbar');
 	});

 	/* search */
 	$('.button-search').on('click', function(event) {
 		event.stopPropagation();
 		$(this).parents().find('#search-body').addClass('open');
 		$('#search-body input[type="search"]').focus();
 	});
 	$('.search-body').on('click keyup', function(event) {
 		event.stopPropagation();
 		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
 			$(this).parents().find('#search-body').removeClass('open');
 		}
 	});
 	$('.search-body .close , .wrapper').on('click', function(event) {
 		$(this).parents().find('#search-body').removeClass('open');
 	});

 	/* extra condition for navbar submenu in responsive */
 	$('.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
 		event.preventDefault();
 		event.stopPropagation();
 		$(this).parent().siblings().removeClass('show');
 		$(this).parent().toggleClass('show');
 	});

 	/* ---------- CATEGORY: SLIDER ----------- */

 	/* testimony slider */
 	$('.testimony-slider').slick({
 		dots: true,
 		speed: 1500,
 		arrows: false,
 		autoplay: true,
 		autoplaySpeed: 2000,
 		infinite: true,
 		appendDots: '.testimony-slider-dots',
 		slidesToShow: 1,
 		slidesToScroll: 1
 	});
 	$('.testimony-slider-box .myslider-mjk-button-prev').click(function() {
 		$('.testimony-slider').slick('slickPrev');
 	});
 	$('.testimony-slider-box .myslider-mjk-button-next').click(function() {
 		$('.testimony-slider').slick('slickNext');
 	});
     
     
    /* project slider */

 	$('.project-slider').on('init', function(event, slick){ 		
 		// var countSlide = $(this).find('.slick-slide').length;
 		slidetoshow = parseInt(slick.slideCount);
 		if(slidetoshow <= 1){
 			$(this).closest('.project-box').find('.myslider-mjk-button-prev').hide();
 			$(this).closest('.project-box').find('.myslider-mjk-button-next').hide();
 			$(this).closest('.project-box').find('.project-slider-dots').hide();
 		}
 	});

 	$('.project-slider').slick({
 		dots: true,
 		speed: 1500,
 		arrows: false,
 		autoplay: false,
 		autoplaySpeed: 2000,
 		infinite: true,
 		appendDots: '.project-slider-dots',
 		slidesToShow: 1,
 		slidesToScroll: 1
 	});
 	$('.project-box .myslider-mjk-button-prev').click(function() {
 		$('.project-slider').slick('slickPrev');
 	});
 	$('.project-box .myslider-mjk-button-next').click(function() {
 		$('.project-slider').slick('slickNext');
 	});

 	/* global slider for 3 slider */
 	// $('.team-slider').slick({
 	// 	dots: false,
 	// 	speed: 1500,
 	// 	arrows: false,
 	// 	autoplay: false,
 	// 	autoplaySpeed: 1500,
 	// 	infinite: false,
 	// 	slidesToShow: 3,
 	// 	slidesToScroll: 1,
 	// 	responsive: [
 	// 	{
 	// 		breakpoint: 1024,
 	// 		settings: {
 	// 			slidesToShow: 3,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	},
 	// 	{
 	// 		breakpoint: 992,
 	// 		settings: {
 	// 			slidesToShow: 3,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	},
 	// 	{
 	// 		breakpoint: 812,
 	// 		settings: {
 	// 			slidesToShow: 2,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	},
 	// 	{
 	// 		breakpoint: 640,
 	// 		settings: {
 	// 			mobileFirst:true,
 	// 			slidesToShow: 1,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	},
 	// 	{
 	// 		breakpoint: 480,
 	// 		settings: {
 	// 			mobileFirst:true,
 	// 			slidesToShow: 1,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	},
 	// 	{
 	// 		breakpoint: 320,
 	// 		settings: {
 	// 			mobileFirst:true,
 	// 			slidesToShow: 1,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	},
 	// 	{
 	// 		breakpoint: 300,
 	// 		settings: {
 	// 			mobileFirst:true,
 	// 			slidesToShow: 1,
 	// 			slidesToScroll: 1
 	// 		}
 	// 	}
 	// 	]
 	// });
 	// $('.team-slider-box .myslider-mjk-button-prev').click(function() {
 	// 	$('.team-slider').slick('slickPrev');
 	// });
 	// $('.team-slider-box .myslider-mjk-button-next').click(function() {
 	// 	$('.team-slider').slick('slickNext');
 	// });


 	/* ---------- CATEGORY: FANCYBOX ----------- */

 	$('.fancybox').fancybox({
 		afterLoad : function(instance, current) {
 			var pixelRatio = window.devicePixelRatio || 1;

 			if ( pixelRatio > 1.5 ) {
 				current.width  = current.width  / pixelRatio;
 				current.height = current.height / pixelRatio;
 			}
 		}
 	});

 	$('.fancybox-video').fancybox({
 		afterLoad : function(instance, current) {
 			var pixelRatio = window.devicePixelRatio || 1;

 			if ( pixelRatio > 1.5 ) {
 				current.width  = current.width  / pixelRatio;
 				current.height = current.height / pixelRatio;
 			}
 		}
 	});

 	/* ---------- CATEGORY: BANNER ----------- */

 	/*Set banner image to default image when image src is empty */ 
 	$('.banner-box > figure > img').each(function () {
 		if($(this).attr('src')=="") {
 			$(this).attr('src','./themes/images/global/banner-default.jpg');
 		}
 	});

 	/* ---------- CATEGORY: EQUAL HEIGHT ----------- */

 	/* equal height */
 	$('.eqh').equalHeights();
 	$('.eqh-title').equalHeights();
 	$('.eqh-img').equalHeights();
 	$('.eqh-desc').equalHeights();
 	$('.eqh-h3').equalHeights();
 	$('.eqh-h5').equalHeights();
 	$('.eqh-p').equalHeights();
 	
 	/* equal height product*/
 	$('.eqh-card-product-box').equalHeights();
 	$('.eqh-card-product').equalHeights();
 	$('.eqh-card-product-img').equalHeights();
 	$('.eqh-card-product-desc').equalHeights();
 	$('.eqh-card-product-h3').equalHeights();
 	$('.eqh-card-product-p').equalHeights();

 	/* equal height news*/
 	$('.eqh-card-news-box').equalHeights();
 	$('.eqh-card-news').equalHeights();
 	$('.eqh-card-news-img').equalHeights();
 	$('.eqh-card-news-desc').equalHeights();
 	$('.eqh-card-news-h3').equalHeights();
 	$('.eqh-card-news-p').equalHeights();


 	/* ---------- ANIMATE ON SCROLL ---------- */

 	AOS.init(); 


 	/* ---------- JQUERY LAZY FOR LOAD CONTENT ---------- */
 	$('.lazy-content').Lazy({
 		threshold: 0,
 		beforeLoad: function(element) {
 			element.css('opacity', 1);
 		}
 	});


 	$(document).on('click','.truncate-description-link', function(e){	
 		e.preventDefault();	
 		var description = $(this).closest(".casestudy-item").find(".casestudy-description");
 		$(description).toggleClass("limit-description");
 		$(description).attr('data-default', $(description).attr('data-default') === 'show' ? 'hidden' : 'show');
 		$(this).text(function(i, text){
 			return text === "Show more" ? "Show less" : "Show more";
 		})
 	});

 	var countLines = function (event) {

 		var searchCase = document.querySelector(".case-studies-box");
 		if($(searchCase).length > 0) {
 			var searchVal = $('.casestudy-description').map(function(){ 			
 				var height = $(this).height()
 				var fontSize = $(this).css('font-size');
 				var lineHeight = Math.floor(parseInt(fontSize.replace('px','')) * 1.4);
 				var totalLine = Math.ceil(height / lineHeight);
 				return parseInt(totalLine);
 			}).toArray();

 			console.log(searchVal);

 			for (var i = 0; i < searchVal.length; i++) { 			
 				if (searchVal[i] > 6) {
 					var thisClass = $('.casestudy-item[data-index='+i+']');
 					var buttonshow = "<a href='javascript:void(0)' class='truncate-description-link'>Show more</a>";
 					$(thisClass).addClass('truncate-description');
 					$(thisClass).find(".casestudy-description").addClass('limit-description');
 					$(buttonshow).insertAfter($(thisClass).find(".casestudy-description"));
 				}
 			}
 		}else{
 			var searchCase = null;
 		}
 	}

 	countLines(event);

 	/*Form style line*/ 

 	var formstyle = $('.form-group-mjk input:not([data-radio]), .form-group-mjk textarea, .form-group-mjk select');
 	$(formstyle).on('click',function(e) {
 		if ($(this).closest('.form-group-mjk').hasClass('error')) {
 			$(this).parents('.form-group-mjk').addClass('form-style-line-error');
 		} else { 				
 			$(this).parents('.form-group-mjk').addClass('form-style-line');
 		}
 	}).on('focusin', 
 	function(){
 		if ($(this).closest('.form-group-mjk').hasClass('error')) {
 			$(this).parents('.form-group-mjk').addClass('form-style-line-error');
 		} else { 				
 			$(this).parents('.form-group-mjk').addClass('form-style-line');
 		}
 	}).on('focusout', function(){
 		if ($(this).closest('.form-group-mjk').hasClass('error')) {
 			$(this).parents('.form-group-mjk').removeClass('form-style-line-error');
 		} else { 				
 			$(this).parents('.form-group-mjk').removeClass('form-style-line');
 		}
 	});

 	/*Filter items*/

 	var filterContainer = document.querySelector('.filter-container');
 	if($(filterContainer).length > 0) {
 		var filterSingle = $('.filter-container').filterizr({
 			animationDuration: 0.5,
 			callbacks: {
 				onFilteringStart: function() { },
 				onFilteringEnd: function() { },
 				onShufflingStart: function() { },
 				onShufflingEnd: function() { },
 				onSortingStart: function() { },
 				onSortingEnd: function() { }
 			},
 			delay: 25,
 			delayMode: 'progressive',
 			easing: 'ease-in-out',
 			filter: 'all',
 			searchTerm: '',
 			   filterOutCss: {
 				      opacity: 0,
 				      transform: 'scale(0.75)',
 				transition: "0.5s ease-in-out"
 			   },
 			   filterInCss: {
 				      opacity:1,
 				      transform: 'scale(1)',
 				transition: "0.5s ease-in-out"
 			   },
 			   layout: 'sameSize',
 			   selector: '.filtr-container',
 			   setupControls: true,
 			spinner: {
 				enabled: false,
 				fillColor: '#2184D0',
 				styles: {
 					height: '75px',
 					margin: '0 auto',
 					width: '75px',
 					'z-index': 2,
 				},
 			},
 		});
 	}else{
 		var filterSingle = null;
 	}

 	$('.filter-category li').on("click", function () {
 		$('.filter-category li').removeClass('active');
 		$(this).addClass('active');
 		var filter = $(this).data('filter');
 		filterSingle.filterizr('filter', filter);
 	});
//    $("div.filter-item-box").css("display:none");


 });

