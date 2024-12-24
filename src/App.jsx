
import './App.css'
import Cart from './components/Cart'
import DynamicArrayExample from './components/darktheme'
import Apps from './components/darktheme'
import Filter from './components/Filter'
import Home from './components/Home'
import Navbars from './components/Navbar'
// import Apps from './components/darktheme'"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {

  return (
    <>
    
    <Router>
    <Navbars/>

      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/cart' element={<Cart/>}/>

        <Route  path='/navbar' element={<Navbars/>}/>
        <Route  path='/filter' element={<Filter/>}/>
        <Route  path='/drk' element={<Apps/>}/>
        <Route  path='/drk' element={<DynamicArrayExample/>}/>




      </Routes>
    </Router>

    </>
  )
}

export default App
