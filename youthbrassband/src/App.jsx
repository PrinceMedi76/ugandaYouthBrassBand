import Navbar from './components/Navbar'
import Donate from './components/Donate'
import Footer from './components/Footer'
import { Route, Routes}  from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Donate />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
