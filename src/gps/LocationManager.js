function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(location);
      },
      // TODO: error handling
      (error) => {
        reject(error);
      },
    );
  });
}

async function syncLocation() {
  const location = await getLocation();
  return location;
}

export function getOnceLocation() {
  return syncLocation()
    .then(location => location);
}
