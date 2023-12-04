
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Coin from './component/Coin'
import Exchanges from './component/Exchanges'
import CoinDetails from './component/CoinDetails'
import Footer from './component/Footer'
import Post from './component/Post'

function App() {
  
  

  return (
    
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin' element={<Coin/>}/>
        <Route path='/exchange' element={<Exchanges/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
        
        </Routes>
      <Footer/>
      </Router>

    </div>  
    
  )
}

export default App
