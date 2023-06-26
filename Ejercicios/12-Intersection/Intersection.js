// function intersection(arr1, arr2) {
// Your code here:
//   const result = [];
//   let index1 = 0;
//   let index2 = 0;
//   while (index1 < arr1.length && index2 < arr2.length) {
//     const num1 = arr1[index1];
//     const num2 = arr2[index2];
//     if (num1 === num2) {
//       result.push(num1);
//       index1++;
//       index2++;
//     } else if (num1 < num2) {
//       index1++;
//     } else {
//       index2++;
//     }
//   }
//   return result;
// }

// function intersection (arr1, arr2) {
//   // Your code here:
//   const result = [];
//   for (const num1 of arr1) {
//     for (const num2 of arr2) {
//       if (num1 === num2) result.push(num1);
//     }
//   }
//   return result;
// }

// Complejidad temporal: O(n*m)

// function intersection (arr1, arr2) {
//   // Your code here:
//   const result = [];
//   for (const num1 of arr1) {
//     if (arr2.includes(num1)) result.push(num1);
//   }
//   return result;
// }
// Complejidad temporal: O(n*m)

// function intersection (arr1, arr2) {
//   // Your code here:
//   return arr1.filter(num1 => arr2.includes(num1));
// }
// Complejidad temporal: O(n*m)

// ! PRIMER CONCEPTO DEL DÍA !!!
// function intersection (arr1, arr2) {
//   // Your code here:
//   const result = [];
//   let index1 = 0;
//   let index2 = 0;
//   let count = 0;
//   while(index1 < arr1.length && index1 < arr2.length) {
//     const num1 = arr1[index1];
//     const num2 = arr2[index2];
//     if (num1 === num2) {
//       result.push(num1);
//       index1++;
//       index2++;
//       count++;
//     } else if (num1 < num2) {
//       index1++;
//       count++;
//     } else {
//       index2++;
//       count++;
//     }
//   }
//   console.log(count);
//   return result;
// }
// Complejidad temporal: O(n+m)

// Solución de Chat GPT
// function intersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   const result = [];

//   for (const num of set1) {
//     if (set2.has(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }

//! ARRAY ASOCIATIVO
// function intersection(arr1, arr2) {
//   console.log(arr1);
//   const arrayAsociativo = [];
//   //                  [ , true, ,true , , true, ... ]
//   //                   0    1  2   3   4    5
//   console.log(arr2);
//   const result = [];

//   for (const num1 of arr1) arrayAsociativo[num1] = true;
//   console.log(arrayAsociativo);
//   for (const num2 of arr2) {
//     if (arrayAsociativo[num2]) {
//       result.push(num2);
//     }
//   }
//   return result;
// }

//! DICCIONARIO
// function intersection(arr1, arr2) {
//   const hashMap = {};
//   for (const num1 of arr1) hashMap[num1] = true;
//   console.log(hashMap);
//   return arr2.filter(num2 => hashMap[num2]);
// }

//! SEGUNDO CONCEPTO DEL DÍA: MAP
function intersection(arr1, arr2) {
  const hashMap = new Map();
  for (const num1 of arr1) hashMap.set(num1, true);
  console.log(hashMap);
  return arr2.filter((num2) => hashMap.get(num2));
}

console.log(intersection([1, 5, 7, 10, 30000, 3], [2, 3, 6, 8, 10, 20])); // [3, 10]

module.exports = intersection;

// Bench Mark

/*
! DIFERENCIAS ENTRE "OBJECT" Y "MAP"

? Los Objetos son similares a los Maps en cuanto a que ambos permiten establecer claves a valores, recuperar dichos valores, eliminar claves, y detectar si existe algo almacenado en una clave determinada. Por esto, los Objects han sido usados históricamente como Maps; no obstante, hay diferencias importantes entre Objects y Maps que hacen mejor usar un Map en la mayoría de casos.
* Las claves de un "Object" son `Strings` y `Symbols`, mientras que para un "Map" pueden ser de cualquier tipo, incluyendo funciones, objetos y cualquier otro tipo primitivo. Puedes saber facilmente el tamaño de un Map usando la propiedad size, mientras que le número de propiedades en un Object tiene que ser deternminado manualmente.
* Un "Map" es un iterable lo que permite iterar directamente sobre el, mientras que si queremos iterar sobre un "Object" necesitamos obtener primero las claves de alguna forma para después iterar sobre el.
* Un "Object" tiene prototipo, por lo que hay claves por defecto en tu mapa que pueden colisionar con tus claves si no eres cuidadoso. En el estandard ES5 esto se puede evitar usando "mapa = Object.create(null)", pero esto raramente se hace.
* "Object" guarda sus propiedades en orden alfanumérico, mientras que Map lo hace en el orden en que son incorporadas.
*/
