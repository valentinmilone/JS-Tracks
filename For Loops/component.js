// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalCount += birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
  const daysPerWeek = 7;
  const startIndex = (week - 1) * daysPerWeek;
  const endIndex = startIndex + daysPerWeek;
  let totalCount = 0;
  
  for (let i = startIndex; i < endIndex; i++) {
     totalCount += birdsPerDay[i];
  }
  
  return totalCount;
}



/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) 
    birdsPerDay[i]++;
  return birdsPerDay;
}
