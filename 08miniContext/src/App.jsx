import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Footer from './components/Footer'
function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
      <Footer />
      
    </UserContextProvider>
     //Most imp,After useContext.js and userContextProvider.jsx:
    //  yo line use garepaxi yo vitra vako  component pani as a children at userContextProvider.jsx ma add
    //hunxa

  )
}

export default App
