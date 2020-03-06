// Existe alguns momentos em que precisamos inverter um array.
// Com o método reverte() é possível facilmente. Veja um exemplo :

const array = [1,2,3,4,5];
const reverseArray = array.reverse(); // 
console.log(reverseArray) // [5,4,3,2,1]

// É importante lembrar que o map() é imutavél, ou seja, não altera o array original.
// Já o reverse() altera o array original sendo assim mutável. Veja

const array = [1, 2, 3, 4, 5];
const reversedDoubles = array.reverse().map(num => num * 2);

console.log(array); // [5, 4, 3, 2, 1]
console.log(reversedDoubles); // [10, 8, 6, 4, 2]

// Ta ai uma vantagem de usar o map(), ele não altera o array original. 
// Entretanto, podemos usar primeiro o map () e depois o reverse(), que retorna um novo array.

const array = [1, 2, 3, 4, 5];
const reversedDoubles = array.map(num => num * 2).reverse();

console.log(array); // [1, 2, 3, 4, 5] ( Não altera )
console.log(reversedDoubles); // [10, 8, 6, 4, 2]




