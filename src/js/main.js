(function () {
  'use strict';

  var beers = [
    'amber',
    'porter',
    'stout',
    'tripel',
    'sour beer',
    'IPA',
    'hefferveisen',
    'cream ale'
  ]

  var bringMeYourBestBeer = function () {
    var beerNumber = (Math.random()*10|0) % beers.length;
    return beers[beerNumber];
  }

  $(function() {
    $('.beer').text(bringMeYourBestBeer());
  });
})();