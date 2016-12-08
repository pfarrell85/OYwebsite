$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
//===============================DIVS========================================
// $(function()
// {
// 	//Will initiate the div areas for each tab
//      $("a#toggle").click(function()
//      {
//          $("#careerSlider").slideToggle();
//          return false;

//          $("#projectSlider").slideToggle();
//          return false;
//      }); 
// });

$(document).ready(function(){
    $('#box-four').hide
    $("#ul-menu-list li").click(function () {
        $('.box').hide().eq($(this).index()).show();  // hide all divs and show the current div
    });
});
//hide & show divs on click
$(function(){
    $("#box-one").show();
    $("#box-two").hide();
    $("#box-three").hide();
    $("#box-four").hide();
    $("#box-five").hide();

    $('.preview').on('click', function(){
        $('#box-two', '#box-three', '#box-four').toggle();
    });

});
