map = new GMaps({
  div: '#map',
  lat: window.lat,
  lng: window.lng
});

map.addMarker({
  lat: window.lat,
  lng: window.lng,
  title: 'チームラボ株式会社'
});
