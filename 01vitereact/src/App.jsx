

import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>      {/*.....(2)  */}
    <p>test para</p>
   </>
  )
}

export default App



/*  JSX 
 {} is called expression or evaluated expression or final outcome.Only final js expression can be written.
 No if..else,do..while,etc.
 Why??
 Kinaki yo username pani object ma key value pair ma convert hunxa ra accessible hunxa.Tara 
 aru code jastai (if..else,loops),etikai object ma lekhna milxa ta.So teivara evaluated
 expression matra milxa.Eg.(main.jsx line 44 and 49)
 else,other  */