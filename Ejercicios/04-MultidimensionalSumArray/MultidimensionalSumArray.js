function mdArraySum(arr) {
  // Your code here:
  let sum = 0;

  function sumArray(array) {
    for (let element of array) {
      if (Array.isArray(element)) {
        sumArray(element); // Llamada recursiva si el elemento es un arreglo
      } else {
        sum += element; // Sumar el elemento al total
      }
    }
  }

  sumArray(arr); // Iniciar la suma con el arreglo dado

  return sum;
}

module.exports = mdArraySum;
