import mapboxgl from "mapbox-gl";

const iconUrl = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
};

function markerBuilder(type, coordinates) {
  const MarkerElement = document.createElement("div");
  MarkerElement.style.width = "32px";
  MarkerElement.style.height = "39px";
  MarkerElement.style.backgroundImage = `url(http://i.imgur.com/WbMOfMl.png)`;
  if (type === "hotel") {
    MarkerElement.style.backgroundImage = `url(${iconUrl.hotel})`;
  }
  if (type === "activity") {
    MarkerElement.style.backgroundImage = `url(${iconUrl.activity})`;
  }
  if (type === "restaurant") {
    MarkerElement.style.backgroundImage = `url(${iconUrl.restaurant})`;
  }
  return new mapboxgl.Marker(MarkerElement).setLngLat(coordinates);
}

export default markerBuilder;
