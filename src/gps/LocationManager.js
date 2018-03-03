function getLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(location);
      },
      // TODO: error handling
      error => console.log(error),
    );
  });
}

async function syncLocation() {
  const location = await getLocation();
  return location;
}

export function getOnceLocation() {
  return syncLocation().then(location => location);
}
