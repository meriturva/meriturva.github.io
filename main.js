$(document).ready( function() {	
  function fullhome() {
      var hometext = $('.home')            
      hometext.css({
          "height": $(window).height() + "px"
      });
  }
  fullhome();
  $(window).resize(fullhome);
    
  var typed = new Typed('.element', {
    strings: ["projects have to go.", "projects could go wrong.", "projects can be fixed.", "projects could be useless.", "projects bring value.", "projects could only be costs."], 
    loop: true ,
    backDelay: 1500,
    backSpeed: 60,                
    typeSpeed: 60,
  });
  
  particlesJS.load('particles', 'particles.json', function() {
      jQuery(".loader").fadeOut("slow");
      jQuery(".preloader").delay(1000).fadeOut("slow");

  });   
});