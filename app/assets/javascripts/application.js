// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require best_in_place
//= require jquery-ui/datepicker
//= require best_in_place.jquery-ui
//= require_tree .

$(document).on('turbolinks:load', function() {
  $(function() {
    $('.best_in_place').best_in_place();
    $('.datepicker_input').datepicker({
      dateFormat: "dd/mm/yy"
    });
  });

  $('form.dashfolio-timeline-form').on('ajax:error', function(jqXHR, error) {
    var $errorObj = $('form.dashfolio-timeline-form .errors');
    $errorObj.html(error.responseText);
  });

  $('#event_end_date_checkbox').on('change', function() {
    $('.timeline-end-date-form').prop('disabled', function(i, v) { return !v; });
  });

  $('.about-header-container a').on('click', function(e){
    e.preventDefault();
    var attribute_tabcontent_about = $(this).attr('href');
    $('.about-content ' + attribute_tabcontent_about).fadeIn(400).siblings().hide();
  });
});


// Below is the javascript for static pages
$(document).ready(function() {
	$('.dashfolio-midbar-about a').on('click', function(e){
		var currentAttrValue1 = $(this).attr('href');

		$('.dashfolio-about').show()
		$('.main-content ' + currentAttrValue1).fadeIn(400);		
		$('.dashfolio-music').hide();
		$('.dashfolio-video').hide();
		$('.dashfolio-pictures').hide();
		e.preventDefault();      
		e.stopPropagation();

		});

		$('.dashfolio-midbar-music a').on('click', function(e){
		var currentAttrValue2 = $(this).attr('href');

		$('.dashfolio-music').show()
		$('.main-content ' + currentAttrValue2).fadeIn(400);
		$('.dashfolio-about').hide();
		$('.dashfolio-video').hide();
		$('.dashfolio-pictures').hide();
		 e.preventDefault();
		 e.stopPropagation();		
		});	

		$('.dashfolio-midbar-videos a').on('click', function(e){
			var currentAttrValue3 = $(this).attr('href');

			$('.dashfolio-video').show();
			$('.main-content ' + currentAttrValue3).fadeIn(400);
			$('.dashfolio-music').hide();
			$('.dashfolio-about').hide();
			$('.dashfolio-pictures').hide();
			e.preventDefault();
			e.stopPropagation();
		});

		$('.dashfolio-midbar-pictures a').on('click', function(e){
			var currentAttrValue4 = $(this).attr('href');

			$('.dashfolio-pictures').show();
			$('.main-content ' + currentAttrValue4).fadeIn(400);
			$('.dashfolio-music').hide();
			$('.dashfolio-about').hide();
			$('.dashfolio-video').hide();
			e.preventDefault();	
			e.stopPropagation();
		});

});

$(document).ready(function(){



$('.music-header-container a').on('click', function(e){
var attribute_tabcontent_music = $(this).attr('href');

$('.music-content ' + attribute_tabcontent_music).fadeIn(400).siblings().hide();
$('.dashfolio-about').hide();
$('.dashfolio-video').hide();
e.preventDefault(); 
e.stopPropagation();		 

});

});


