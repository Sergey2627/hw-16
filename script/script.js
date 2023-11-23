if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Геолокація не підтримується вашим браузером");
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  console.log(`Ваше місцезнаходження: широта ${latitude} і довгота ${longitude}`);
}
