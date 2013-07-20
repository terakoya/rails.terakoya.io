map = new GMaps({
  div: '#map',
  lat: window.lat,
  lng: window.lng
});

map.addMarker({
  lat: window.lat,
  lng: window.lng,
  title: 'pixiv株式会社'
});
