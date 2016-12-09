// function for main header on Veterans Page
function getHeader() {

  //VETERANS PAGE HEADERS
  //Add images here
  var imagesH1 = 
  ["assets/images/OweYaaSoldier.jpg", "assets/images/militaryWife.png"];

  var randomImagesH1 = imagesH1[Math.floor(Math.random()* imagesH1.length)];
  console.log("Random Image src: ", randomImagesH1);

  var headerOneImages = $('<img>');
  headerOneImages.attr('src', randomImagesH1);
  $("#veteransHeaderOne").append(headerOneImages);	

  //Add images here
  var imagesH2 = 
  ["assets/images/bannerImage.png", "assets/images/bannerImageTwo.png"];

  var randomImagesH2 = imagesH2[Math.floor(Math.random()* imagesH2.length)];
  console.log("Random Image src: ", randomImagesH2);

  var headerTwoImages = $('<img>');
  headerTwoImages.attr('src', randomImagesH2);
  $("#veteransHeaderTwo").append(headerTwoImages); 

  //COMPANIES PAGE HEADERS
  //Add images here
  var companiesImagesH1 = 
  ["assets/images/bannerImage.png", "assets/images/bannerImageTwo.png"];

  var companiesRanImagesH1 = companiesImagesH1[Math.floor(Math.random()* companiesImagesH1.length)];
  console.log("Random Image src: ", companiesRanImagesH1);

  var companiesHeaderOneImages = $('<img>');
  companiesHeaderOneImages.attr('src', companiesRanImagesH1);
  $("#companiesHeaderOne").append(companiesHeaderOneImages); 

  //Add images here
  var companiesImagesH2 = 
  ["assets/images/bannerImage.png", "assets/images/bannerImageTwo.png"];

  var companiesRanImageH2 = companiesImagesH2[Math.floor(Math.random()* companiesImagesH2.length)];
  console.log("Random Image src: ", companiesRanImageH2);

  var companiesHeaderTwoImages = $('<img>');
  companiesHeaderTwoImages.attr('src', companiesRanImageH2);
  $("#companiesHeaderTwo").append(companiesHeaderTwoImages); 
}
// SIGN-UP MODAL

$( "#signUp" ).click(function() {
    $('.modal').modal();
});

$( "#logIn" ).click(function() {
    $('.modal').modal();
});

$( "#veteranSignUp" ).click(function() {
    $('.modal').modal();
});


$( document ).ready(function() {
  


	getHeader();
});

