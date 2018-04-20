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
    return await getLocation();
}

export function getOnceLocation(): Promise<Location> {
  return syncLocation()
    .then(location => location);
}
