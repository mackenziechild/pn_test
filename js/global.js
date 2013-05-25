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

// Attempt at submitting the form through ajax

$("#freeCourse").on('submit', function(e){
	e.preventDefault;
	
	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};

	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();

		data[name] = value;
	});

	$.ajax({
			url: url,
			type: type,
			data: data,
			success: function() {
				$('#signupForm').html("<div id='message'></div>");  
		    $('#message').html("<h2>You my friend, are awesome!</h2>")  
		    .append("<p>Thanks for signing up!</p>")  
		    .hide()  
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