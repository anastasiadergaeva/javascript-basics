// Текущее положение пользователя

const positionLat = 12.5;
const positionLong = 27;

// Адрес назначения

const addressLat = 294.24;
const addressLong = 400;

const distance = Math.round(Math.sqrt((addressLat-positionLat)**2 + (addressLong - positionLong)**2));
console.log(`Расстояние от пользователя до пункта назначения составляет примерно ${distance} километров.`);