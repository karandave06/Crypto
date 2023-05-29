import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Coin from './Components/Coin'
import Exchange from './Components/Exchange'
import Coindetails from './Components/Coindetails'
import Footer from './Components/Footer'
function App() {

  return (


    <Router>
    <Header />

    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/coin' element={ <Coin /> }/>
      <Route path='/exchange' element={ <Exchange /> }/>
      <Route path='/coin/:id' element={ <Coindetails /> }/>
    </Routes>
   <Footer />
        
    </Router>
  )
}

export default App
