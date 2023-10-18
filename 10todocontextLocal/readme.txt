Todo app using useContext along with local storage   
->Everything mentioned here also at:https://chat.openai.com/share/46ae08d4-0804-49b3-b831-cadf86eb6085

1.Spread operator usuages:
Sure, let's start with the basics of the spread operator in JavaScript.

The spread syntax `...` is used to expand an iterable like an array, string, or object into individual elements. It's commonly used to make shallow copies of arrays or objects. Here are some basic use cases:

1. **Copying an array**: You can use the spread operator to create a new array that contains the same elements as the original array.

   ```javascript
   const originalArray = [1, 2, 3];
   const newArray = [...originalArray];
   ```

2. **Concatenating arrays**: You can concatenate multiple arrays into a single array.

   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const concatenatedArray = [...array1, ...array2];
   ```

3. **Passing arguments**: You can use the spread operator to pass elements of an array as arguments to a function.

   ```javascript
   const numbers = [1, 2, 3];
   const sum = (a, b, c) => a + b + c;
   const result = sum(...numbers); // This is the same as sum(1, 2, 3)
   ```

4. **Merging objects**: You can use the spread operator to create a new object by merging properties from multiple objects.

   ```javascript
   const obj1 = { name: 'Alice', age: 30 };
   const obj2 = { gender: 'Female' };
   const mergedObject = { ...obj1, ...obj2 };
   ```

5.Spreading and modifying just a single data of object
Spreading and modifying just a single data of an object involves using the spread syntax to create a new object and overriding specific properties within it. This can be achieved by first spreading the original object's properties and then specifying the property you want to modify explicitly. Here's an example:

javascript

const originalObject = { id: 1, name: 'John', age: 30 };

// Spread and modify a single property
const modifiedObject = { ...originalObject, age: 31 };

console.log(modifiedObject);

In this example, originalObject is spread into modifiedObject, and the age property is explicitly set to 31. The resulting modifiedObject will have the same properties as originalObject, but with the age property updated to 31. The other properties remain unchanged.

The spread syntax in this context is useful for creating new objects without modifying the original object directly. It allows for quick and efficient updates to specific properties while maintaining the rest of the object's structure. However, as with shallow copying of arrays, the spread syntax for objects only performs a shallow copy. This means that nested objects within the original object will still be referenced in the new object. If you need a deep copy of the object, you should consider other techniques, such as deep cloning or using libraries like Lodash.



In the context of your example, the spread operator is used in the `addTodo` function to add a new todo item.
 It creates a new object using the spread operator and merges it with the `todo` object. Here's the relevant line of code:

```javascript
setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
```

It creates a new array with the newly created todo at the beginning and spreads the existing todos in the `prev` array.
 This ensures that the new todo is added to the beginning of the array, maintaining the order of the todos.

Part2:Local storage
->Same as js.
->Using localstorage and stringify

Part3:Defining the todos at context
->Tyo pardaina garna ra @todocontext.js ma vanexa.