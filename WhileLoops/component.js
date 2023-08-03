// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
  case 'Pure Strawberry Joy':    
    return 0.5;
    break;
  case 'Energizer':
  case 'Green Garden':
    return 1.5;
    break;
  case 'Tropical Island':
    return 3;
    break;
  case 'All or Nothing':
    return 5;
    break;
  default:
    return 2.5;
}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limeIndex = 0;

  while (wedgesCut < wedgesNeeded) {
    const currentLime = limes[limeIndex];
    switch (currentLime) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }

    limeIndex++;

  }

  return limeIndex;
}


const limes = ['small', 'medium', 'medium', 'large'];
const wedgesNeeded = 27;
const limesCut = limesToCut(wedgesNeeded, limes);
console.log(limesCut);

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
  
  while(timeLeft > 0){
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}