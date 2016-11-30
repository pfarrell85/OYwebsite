function getHeader() {
  var imageList = 
  ["assets/images/OweYaaSoldier.jpg", "assets/images/sliderTest.jpg", "assets/images/sliderTest2.jpg",
  "assets/images/sliderTest3.jpg"];

  var randomImg = imageList[Math.floor(Math.random()* imageList.length)];
  console.log("Random Image src: ", randomImg);

  var headerImages = $('<img>');
  headerImages.attr('src', randomImg);
  $("#imgHeader").append(headerImages);	
}

$( document ).ready(function() {
  
	getHeader();

});