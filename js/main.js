'use strict';

ymaps.ready(function () {
  var myMap = new ymaps.Map(document.querySelector('.map'), {
          center: [59.938576, 30.324072],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemarkWithContent = new ymaps.Placemark([59.938549, 30.323010], {

      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/pin.svg',
          iconImageSize: [80, 140],
          iconImageOffset: [-34, -150],
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});
