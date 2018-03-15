import Location from '../model/Location';

function getLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location: Location = {
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

async function syncLocation(): Promise<Location> {
  const location: Location = await getLocation();
  return location;
}

export function getOnceLocation(): Promise<Location> {
  return syncLocation()
    .then(location => location);
}
