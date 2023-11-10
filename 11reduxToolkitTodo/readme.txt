Redux Toolkit for state management:

A.Creating store:
-You can keep store inside App folder(not app.jsx file but folder) as a practice.
1.import configure-store and create store using it.
2.????


B.Creating slice:
1.Import create-slice and use it to create a slice.
2.Provide name,initial state and reducers to create-slice and create that slice.

What is the initial state ?
->We have to give initial values at store which gets updated later by the help of reducers.

What are reducers?
->Functions defined through which we can change values at the store.i.e.They are
the only ways to do so.These functions provide two arguments i.e. state and action.
state:it provides current state(state updated after initial state) of the store.
action:it provides the values passed to the reducers using action.payload.Eg.id,todo,etc.


nanoid in Redux
->Used to pass unique keys

C.Adding a data to store
Using store.(data variable in which to add).push(data to be pushed)

D.Export
->Export individual functionality i.e.reducers
->Export main source of all reducers.(to use it at store)-> Eg. export slice_name.reducers

E.Define reducer at store
->reducer:reducer_name

F.Storing data at store from components
->use UseDispatch  (To store at store)
->dispatch sends to reducer and reducer does it's work to store at store

G.Get/retrieve values from store at components
->use useSelector  (to get values from store)
->You get state(state after initial state) at callback at useSelector to retrieve any data you 
like.