angular.module('RockDogPresentation', ['pascalprecht.translate'])
.config(function ($translateProvider) {
  //$translateProvider.useSanitizeValueStrategy('sanitize');
  console.log(window.RDLangEN);
  $translateProvider.translations("en_US", window.RDLangEN);
  $translateProvider.translations("nl", window.RDLangNL);
  $translateProvider.preferredLanguage("en_US");
  $translateProvider.determinePreferredLanguage();
})
.controller("Rockdog", function($scope) {
  $(document).ready(function(){
    setTimeout(function(){
      $(".navigate-up").html($("<span class='contact-label up'>Contact</span>"));
    }, 300)
  });
});