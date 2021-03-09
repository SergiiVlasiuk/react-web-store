import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { Header } from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
