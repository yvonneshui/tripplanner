console.log("It is working!");

import mapboxgl from "mapbox-gl";
import markerBuilder from "./marker";
mapboxgl.accessToken =
  "pk.eyJ1IjoieXNodWkxMjYiLCJhIjoiY2trZThhYjgyMGlrZTMxcWJsMHRxa3B3OCJ9.aC7_NH8h93ENv8CEZ9oyLQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const marker = markerBuilder("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
console.log(marker);
marker.addTo(map);
