// Back to Top button
$("#back-to-top").hide();

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	// scrolls back up to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});

$('.showReferences').click(function(e) {
	e.preventDefault();
  $('.references').fadeIn(500)
  $('.showReferences').fadeOut(500)
});


// Sign up form slide in upon click. 
var signupVisible = 0;
$(".man, .woman, .fitpro").click(function(e) {
	e.preventDefault();
	if (signupVisible === 0) {
		$("#signupForm").slideToggle(500);
		signupVisible = 1;	
		$(".select, .signupLinks, .beforeAfter").fadeOut(500);
	} else {
		$("#signupForm").slideToggle(500);
		signupVisible = 0;
		$(".select").fadeIn(500);
	}
});

// Form Submission through Ajax

$('#submit').click(function () {        
      
  var name = $('input[name=name]');
  var email = $('input[name=email]');
  var hire = $('input[name=hire]');

  if (name.val()=='') {
      name.addClass('hightlight');
      return false;
  } else name.removeClass('hightlight');
  
  if (email.val()=='') {
      email.addClass('hightlight');
      return false;
  } else email.removeClass('hightlight');
  
  if (hire.val()=='') {
      hire.addClass('hightlight');
      return false;
  } else hire.removeClass('hightlight');
      
  var data = 'name=' + name.val() + '&email=' + email.val() + '&hire='
  + hire.val();

  $.ajax({
      url: "contact.php",    
      type: "POST",         
      data: data,        
      cache: false,
      success: function (html) {                                 
        $('#signupForm, .signupHeader').fadeOut('slow');                    
        $('.done').fadeIn('slow');
      }     
  });
  return false;
});    


// Changes navigation upon resize below 800px to list icon with dropdown menu.

$("#nav").addClass("js");
$("#nav").addClass("js").before('<div id="menu"><i class="icon-reorder"></i></div>');
$("#menu").click(function(){
	$("#nav").toggle();
});
$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});

// Responsive videos

$("#video").fitVids();