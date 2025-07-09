async function getPlaceDetails() {
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  // Use place ID to create a new Place instance.
  const place = new Place({
    id: "ChIJN5Nz71W3j4ARhx5bwpTQEGg",
    requestedLanguage: "en", // optional
  });

  // Call fetchFields, passing the desired data fields.
  await place.fetchFields({
    fields: ["displayName", "formattedAddress", "location"],
  });
  // Log the result
  console.log(place.displayName);
  console.log(place.formattedAddress);

  // Add an Advanced Marker
  const marker = new AdvancedMarkerElement({
    map,
    position: place.location,
    title: place.displayName,
  });
}