//Usecallback,useeffect and use ref:
useCallback:
-Component is rendered if it's state or prop is changed.
-Used to prevent render of the  components whose props and states haven't changed.
-Specially,used for functions as they get rerendered after every render and component in which 
it is passed (as prop) thinks it as a new function to be passed as prop and rerenders the component.
-Usecallback comes to rescue as it provides function and dependency array in which we can 
set variables used in that function and to rerender the function only if the array values have 
changed.
 https://www.knowledgehut.com/blog/web-development/all-about-react-usecallback#things-to-remember%C2%A0
https://www.youtube.com/watch?v=N62nXHTydpA

UseEffect hook:
The `useEffect` hook in React is used for managing side effects in functional components. It allows you to perform actions such as data fetching, DOM manipulation, or subscribing to external events after the component has rendered. `useEffect` accepts a function as its first argument, and an optional dependency array as its second argument. The dependency array is what determines when the effect should run. Here are three common conditions for using `useEffect` based on the dependency array:

1. **No Dependency Array:**
   When you use `useEffect` with no dependency array, it means the effect will run after every render cycle. In this case, the effect function will execute whenever the component renders or re-renders. This can be useful for side effects that should always occur when the component is updated.

   ```javascript
   useEffect(() => {
     // This effect runs after every render.
     // You can perform side effects here.
   });
   ```

   However, be cautious when using this approach, as it can lead to unnecessary and potentially performance-harming side effects if not used carefully.

2. **Empty Dependency Array:**
   When you provide an empty dependency array, `[]`, as the second argument to `useEffect`, it ensures that the effect runs only once, right after the initial render. This is commonly used for side effects that need to be executed when the component mounts but should not be re-run when the component updates.

   ```javascript
   useEffect(() => {
     // This effect runs only after the initial render.
     // Useful for one-time setup or data fetching on component mount.
   }, []);
   ```

   It's especially helpful when you want to prevent the effect from running repeatedly during re-renders.

3. **Dependency Array with Some Dependency Values:**
   When you provide a non-empty dependency array containing specific variables or props, `useEffect` will run the effect whenever any of those dependencies change between renders. This is useful when you want the effect to react to changes in specific values.

   ```javascript
   const someVariable = ...;
   useEffect(() => {
     // This effect runs whenever 'someVariable' changes.
     // You can use 'someVariable' in the effect.
   }, [someVariable]);
   ```

   In this example, the effect will run whenever the value of `someVariable` changes. If you have multiple dependencies in the array, the effect will run if any of them change.

Keep in mind that it's crucial to specify the correct dependencies in the array to ensure that your component behaves as expected and that you avoid potential issues like infinite loops or missed updates. Additionally, using an empty array or omitting the dependency array when it should be provided can have significant implications on the behavior of your component, so choose the appropriate option based on your use case.
based on the given dependencies:if they change only the given function is called.


Useref hoook:
1.create mutuable variable with no-renders on change in values.(variable is similar as created
in useState but useref gives feature that on change in this value it will not rerender.)
2.Manipulate DOM easily.
https://www.youtube.com/watch?v=qv2YPOnDwvA


Further for confidence chatgpt sanga question answer gareko:
https://chat.openai.com/share/1f53db05-4a8b-4483-8053-e55198a709e4
