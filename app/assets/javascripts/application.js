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
//= require_tree .


// Autofill composers with values in first inclusion row
$( document ).ready(function(){
	$('.autofill-composers').click(function(){
		$('ul.composer li:first-child input').val($('ul.composer:first-of-type li:first-child input').val());
		$('ul.composer li:first-child select').val($('ul.composer:first-of-type li:first-child select').val());
	})
});

// Toggle menu with burger button
$( document ).ready(function(){
	$('.burger').click(function(){
		$(this).parents('.nav').toggleClass('open');
	})
});

// Show extra attribution input
$( document ).ready(function(){
	$('.another-att-trigger').click(function(){
		$(this).parents('.attributed-to').children('ul').children('li').css('display','block');
	})
});

// Use arrow keys to move around cataloguing table
$( document ).ready(function(){
    $('.title textarea').keydown(function(e){
       if (e.which == 38) { // up arrow
	    $(this).parents('.body-row').prev().children('.title').children('textarea').focus();
       }
    });
});
$( document ).ready(function(){
    $('.title textarea').keydown(function(e){
       if (e.which == 40) { // down arrow
	    $(this).parents('.body-row').next().children('.title').children('textarea').focus();
       }
    });
});
