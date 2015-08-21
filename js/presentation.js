angular.module('RockDogPresentation', ['pascalprecht.translate', 'ngSanitize'])
.config(function ($translateProvider) {
  //$translateProvider.useSanitizeValueStrategy('sanitize');
  console.log(window.RDLangEN);
  $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.translations("en_US", window.RDLangEN);
  $translateProvider.translations("nl", window.RDLangNL);
  $translateProvider.preferredLanguage("en_US");
  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage('en_US');
})
.controller("Rockdog", function($scope) {
  Reveal.slide(0,0,0);
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

});

Reveal.initialize({
    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions. Can be
    // specified using percentage units.
    width: 1000,
    height: 600,
    parallaxBackgroundImage: '/public/Frame1.png',
    parallaxBackgroundSize: '2330px 1739px',
    // Factor of the display size that should remain empty around the content
    margin: 0.15,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 1.5

});