// JavaScript Document
var trip;
var tripClickFlag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		trip = new Trip([
		{
			sel : $('#hint'),
			position : 's',
			content : allHints[randomNumber],
			expose : false,
			delay : 9000
		}]);				  
		trip.start(); 
		window.trip = trip;												   
		
	});
});