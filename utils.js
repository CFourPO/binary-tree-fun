/**
 * Function to generate a random number in a given range
 * 
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
exports.generateRandomNumber = (min, max) => {
    let sign = (Math.round(Math.random()) === 0) ? -1 : 1; 
    return (Math.round(Math.random() * (max - min)) + min) * sign;
}
