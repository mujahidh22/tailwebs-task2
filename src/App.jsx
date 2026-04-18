import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import BoldApproaches from './components/BoldApproaches'
import SustainingChange from './components/SustainingChange'
import DigitPlatform from './components/DigitPlatform'
import Products from './components/Products'
import Supporters from './components/Supporters'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        {/* BoldApproaches floats over the gap between Stats and SustainingChange */}
        
          <BoldApproaches />
        
        <SustainingChange />
        <DigitPlatform />
        <Products />
        <Supporters />
      </main>
      <Footer />
    </>
  )
}
