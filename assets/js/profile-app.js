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
    // $('#box-four').hide
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
    $("#box-six").hide();

    $('.preview').on('click', function(){
        $('#box-two', '#box-three', '#box-four', '#box-five', '#box-six').toggle();
    });

});

// JOURNAL MODAL 
$('.journal-modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .7, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    starting_top: '4%', // Starting top style attribute
    ending_top: '4%', // Ending top style attribute
    }
); //END 

// CAREER MODAL 
$('.careergoals-modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .7, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    starting_top: '2%', // Starting top style attribute
    ending_top: '2%', // Ending top style attribute
    }
); //END MODAL

$('#modal-close').on('click', function() {
    $('#modal1').modal('close');
    $('#modal2').modal('close');
    // $('#login').webuiPopover('hide');
})
