function findRange(arr) {
  let rangeMin = Math.min(...arr);
  let rangeMax = Math.max(...arr);
  return [rangeMin, rangeMax];
}

let numbers = [5, 3, 9, 1, 7];
let result = findRange(numbers);
console.log(result); // Output: [1, 9]
