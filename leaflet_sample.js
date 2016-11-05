var testData = {
  max: 8,
  data: [{
	    "x_coordinate": 30.2457,
	    "y_coordinate": -97.7688,
	    "zip": 73704
	  },
	  {
	    "x_coordinate": 30.2228,
	    "y_coordinate": -97.7474,
	    "zip": 73301
	  },
	  {
	    "x_coordinate": 30.2457,
	    "y_coordinate": -97.7688,
	    "zip": 78704
	  },
	  {
	    "x_coordinate": 30.2729,
	    "y_coordinate": -97.7444,
	    "zip": 78701
	  },
	  {
	    "x_coordinate": 30.2154,
	    "y_coordinate": -97.796,
	    "zip": 78745
	  }]
};

var baseLayer = L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '...',
    maxZoom: 18
  }
);

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 2,
  "maxOpacity": .8, 
  // scales the radius based on map zoom
  "scaleRadius": true, 
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries 
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'x_coordinate',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'y_coordinate',
  // which field name in your data represents the data value - default "value"
  valueField: 'zip'
};


var heatmapLayer = new HeatmapOverlay(cfg);

var map = new L.Map('map-canvas', {
  center: new L.LatLng(30.2672, -97.7431),
  zoom: 4,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);