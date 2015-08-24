angular.module('RockDogPresentation', ['pascalprecht.translate', 'ngSanitize'])
.config(function ($translateProvider) {
  //$translateProvider.useSanitizeValueStrategy('sanitize');
  console.log(window.RDLangEN,window.RDLangNL,window.RDLangDE);
  $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.translations("en", window.RDLangEN);
  $translateProvider.translations("nl_NL", window.RDLangNL);
  $translateProvider.translations("de", window.RDLangDE);
  $translateProvider.fallbackLanguage('en');
  $translateProvider.determinePreferredLanguage(function(){
    return navigator.userLanguage || navigator.language || "en";
  });
  
})
.controller("Rockdog", function($scope) {
  Reveal.slide(0,0,0);
  $scope.Reveal = Reveal;
  var images = new Array();
  images.push({path:"/public/Frame1.png", w:2500, h:3000});
  images.push({path:"/public/Back-w.png", w:2013, h:3008});
  var crnt = 0;
  $scope.image = images[crnt];
  $scope.ch_img = function() {
    crnt++;
    crnt = crnt % 2;
    $scope.image = images[crnt];
  }
 /* $scope.txtRight = "contact";
  $scope.txtBottom = "presentation";
  Reveal.addEventListener( 'slidechanged', function( event ) {
    $scope.$apply(function() {
      $scope.txtRight = $(event.currentSlide).attr("data-nav-right");
      $scope.txtLeft = $(event.currentSlide).attr("data-nav-left");
      $scope.txtUp = $(event.currentSlide).attr("data-nav-up");
      $scope.txtBottom = $(event.currentSlide).attr("data-nav-bottom");
    });
    angular.forEach($('.nav-indicator>strong'), function(indicator) {
      $(indicator).removeClass('swing');
      $(indicator).addClass('swing');
      setTimeout(function() {
        $(indicator).removeClass('swing');
      },3000);
    });
  });*/
  $scope.presiMode = false;
  angular.forEach(window.RockDogPointer[0][0].allow, function(ptr) {
    $(ptr).show().addClass($(ptr).attr('data-entry') || 'zoomIn');
  });
  Reveal.addEventListener( 'slidechanged', function( event ) {
    if ($scope.presiMode !== true) {
      var ptr = window.RockDogPointer[event.indexh][event.indexv];
      $('.pointer').hide();
      //console.log(ptr.allow.join(' '));
      angular.forEach(ptr.allow, function(ptr) {
        $(ptr).show().addClass($(ptr).attr('data-entry') || 'zoomIn');
      });
    }
  });
  $scope.toggleOverview = function() {
    if(Reveal.isOverview()) {
      //$('body').removeClass('zoomOut');
      //$('body').addClass('zoomIn');
      Reveal.toggleOverview();
    } else {
      
      //$('body').removeClass('zoomIn');
      //$('body').addClass('zoomOut');
      Reveal.toggleOverview();
    }
  }
  var toggledContact = false;
  $('.contact-email').hide();
  $scope.toggleContact = function() {
    if (toggledContact === false) {
      /*var x = 0;
      $('.contact-email').removeClass("slideOutRight");
      angular.forEach($(".add-con"), function(jObj) {
        setTimeout(function() {
          $(jObj).addClass("rollOut");
        },0+x);
        x += 400;
      });
      setTimeout(function() {
        $('.contact-email').css("display","inline-block").addClass("slideInRight");
      },300+x);*/
     angular.forEach($('.add-con'), function(jObj){
        $(jObj).removeClass("swing");
      }); 
      $('.contact-email').removeClass("slideOutDown")
      $('.contact-email').addClass("slideInUp").show();
      $('.contact-img').addClass("pulse");
    } else {
      $('.contact-img').removeClass("pulse");
      $('.contact-email').removeClass("slideInUp");
      $('.contact-email').addClass("slideOutDown"); 
      angular.forEach($('.add-con'), function(jObj){
        $(jObj).addClass("swing");
      });     
    }
    toggledContact = !toggledContact;
  }
  $scope.presi_mode = function(heigth, width) {
    if ($scope.presiMode === true) {
      $scope.presiMode = false;
     // Reveal.slide(0,0,0);
      $('.frame-img').addClass("zoomOut");
      $('.controls>div').removeClass("white");
      $('.reveal').show();
      Reveal.togglePause();
      setTimeout(function(){
        $('.frame-img').hide();
        $('.frame-img').removeClass("zoomOut"); 
      }, 700);
    } else {
      $scope.presiMode = true;
      Reveal.togglePause();
      //$('.slides').hide();
      $('.controls>div').addClass("white");
      $('.frame-img').show().addClass("zoomIn");
      $scope.frameImgHeigth = heigth;
      $scope.frameImgWidth  = width;
      presiFrame.animate({
        scrollTop: heigth,
        scrollLeft: width
      }, 200);
      //$('.reveal').addClass("zoomOut");
      //$('.pointer').hide();
      //setTimeout(function(){
        //$('.reveal').removeClass("zoomOut");
          
       // reveal_init("/public/Frame1.png", "2480px 1990px" );
        //Reveal.slide(0,0,0);
      //}, 700);
      
    }
  }
  var presiFrame = $('.frame-img');
  var offset = 250;
  var scrollX = 0, scrollY = 0;
  $('body').on({
    keydown : function(event) {
      console.log(event);
      if ($scope.presiMode === true) {
        event.preventDefault();
      event.stopPropagation();
        switch(event.keyCode) {
          case 40:
            presiFrame.animate({
              scrollTop: presiFrame.scrollTop()+offset
            }, 200);
            break;
          case 38:
            presiFrame.animate({
              scrollTop: presiFrame.scrollTop()-offset
            }, 200);
            break;
          case 39:
            presiFrame.animate({
              scrollLeft: presiFrame.scrollLeft()+offset
            }, 200);
            break;
          case 37:
            presiFrame.animate({
              scrollLeft: presiFrame.scrollLeft()-offset
            }, 200);
            break;

        }
      }
    }
  });
  
});

function reveal_init(imgPath, size) {
  Reveal.initialize({
      // The "normal" size of the presentation, aspect ratio will be preserved
      // when the presentation is scaled to fit different resolutions. Can be
      // specified using percentage units.
      width: 1000,
      height: 600,
      parallaxBackgroundImage: imgPath,
      parallaxBackgroundSize: size,
      // Factor of the display size that should remain empty around the content
      margin: 0.1,
      padding: 1,
      mouseWheel: false,
      // Bounds for smallest/largest possible scale to apply to content
      minScale: 0.2,
      maxScale: 1.5,
      //parallaxBackgroundHorizontal: 800,
      //parallaxBackgroundVertical: 400

  });
}

Reveal.addEventListener( 'ready', function( event ) {
  //console.log($('.controls'));
 // $('.controls').clone().insertAfter($('body'));
});

reveal_init("/public/Achtergrond.png", "1848px 1458px" );

