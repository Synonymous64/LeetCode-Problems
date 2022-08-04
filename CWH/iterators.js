const myArray = ["Apple", "Grapes", "Banana", "Mango"];
// console.table(myArray);

//! Iterators

const Iterators = (values) => {
  let nextIndex = 0;
  //* we will return an object of next name function
  return {
    next: () => {
      if (nextIndex < values.length) {
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

const fruits = Iterators(myArray);
console.log(fruits.next());
console.log(fruits.next().value); // for printing specific values
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
// console.log(fruits.next().value);
