import getDistanceFromThreshold from './getDistanceFromThreshold.js'

const value = 8;
const threshold = 12;

const distance = getDistanceFromThreshold(value, threshold);
console.log(`Distance from threshold: ${distance}`);

