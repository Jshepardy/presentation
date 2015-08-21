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
  $(document).ready(function(){
    setTimeout(function(){
      $(".navigate-up").html($("<span class='contact-label up'>Contact</span>"));
    }, 300)
  });
});
