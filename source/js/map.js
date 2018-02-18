var myPlacemark, myMap;

ymaps.ready(function() {
  myMap = new ymaps.Map('map', {
    center: [59.93861765, 30.32293928],
    zoom: 17,
    controls: []
  }, {suppressMapOpenBlock: true}, { });

  myPlacemark = new ymaps.Placemark([59.93861765, 30.32293928], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-30, -90]
  }),

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});
