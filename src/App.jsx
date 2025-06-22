import './App.css'
import Hero from './Components/Hero/Hero'
import Service from './Components/Services/Service'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy'
import AppBanner from './Components/AppBanner/AppBanner'
import "./index.css"
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <div className='overflow-x-hidden  hide-scrollbar'>
      <Hero />
      <Service />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
    </>
  )
}

export default App
