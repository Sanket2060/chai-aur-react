import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



/*  For a component to get rendered we just need to pass function(with jsx code) to createRoot.render
 using  < function/>.When function is given like in 1.Eg.MyApp() and (1.).React DOM takes elements
 returned from function and converts them to object(for the element and all attributes) and
  adds it to it's own React DOM tree.
*/
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}
//But can i just pass the element and it's  attributes directly as an object??The answer is yes.But 
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
// Why does the addition of the ReactElement not work?Because React element have different keys
// than the object to be provided to .render.So,it doesn't recognizes our object and doesn't runs.

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"
//But we can create an element on react with the following syntax (by creating elements object
// and then .render works perfectly as it recognizes the syntax.
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)
//Babel injects this into React when called at .render when called at .render

ReactDOM.createRoot(document.getElementById('root')).render(
//  <MyApp/>       -----------1.)
    reactElement 
  
)


// .createRoot method creates virtual DOM tree for the current rendering elements.Virtual



/*   06 Virtual DOM, Fibre and reconciliation->reference:https://github.com/acdlite/react-fiber-architecture 
Virtual DOM: DOM created by react in which only that part of tree   changes that have been 
changed than the previous tree.
Fibre:Fibre is a program that has capabilities to control renders.Sometimes there are multiple
renders at once and we want only the last render after the first render excluding all inbetween
renders which might decrease performance.In this case fibre is beneficial as it renders first
and last only.
Reconciliation:It is the process by  which react finds differences between browser DOM and react 
DOM

Some inaccuracies managed by chatgpt:
The information you've provided contains some inaccuracies and misunderstandings about Virtual DOM, Fiber, and reconciliation in React. Let me clarify these concepts:

    Virtual DOM:
        The Virtual DOM is a concept in React where a lightweight representation of the actual DOM is maintained. It is not created by React; rather, it's a data structure used internally by React.
        When changes occur in a React component, a new virtual DOM tree is created. React then compares this new virtual DOM tree with the previous one to determine the differences (diffing).
        React uses these differences to update only the parts of the actual DOM that have changed, which is more efficient than directly manipulating the entire DOM tree.

    Fiber:
        Fiber is not a program but rather an internal reimplementation of the core algorithm in React. It's designed to make the rendering process more efficient and allow React to be more responsive.
        Fiber does not control renders in the sense of rendering only the first and last render. Instead, it introduces a concept called "scheduling" that allows React to prioritize and interrupt rendering work to maintain a responsive user interface.
        Fiber enables React to break rendering work into smaller units (fibers) and prioritize them based on their importance, such as responding to user input quickly.

    Reconciliation:
        Reconciliation in React refers to the process of comparing the previous virtual DOM tree with the new one and determining the minimal set of changes needed to update the actual DOM.
        React uses a diffing algorithm during reconciliation to identify and update only the parts of the DOM that have changed. It does not compare the browser DOM with the React DOM directly.

In summary, while your description touches on some concepts related to React, there are inaccuracies in the details. It's important to have a clear understanding of these concepts to work effectively with React, as they are fundamental to how React manages and updates the DOM
*/