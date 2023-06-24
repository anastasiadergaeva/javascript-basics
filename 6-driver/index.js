const hasLicense = false;
const age = 5;
const isDrunk = false;

console.log(`Может ли пользователь сесть за руль: ${(hasLicense && (age >= 18) && !isDrunk) ? 'Может' : 'Не может'}`);