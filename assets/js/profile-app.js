$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
//===============================Sliders========================================
$(function()
{
	//Will initiate the div areas for each tab
     $("a#toggle").click(function()
     {
         $("#careerSlider").slideToggle();
         return false;

         $("#projectSlider").slideToggle();
         return false;
     }); 
});


