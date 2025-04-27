import './App.css'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import HeroComponent from './components/HeroComponent/HeroComponent'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import FAQSection from './components/FAQSection/FAQSection'
import NavigateSection from './components/NavigateSection/NavigateSection'
import FooterComponent from './components/FooterComponent/FooterComponent'
import BannerComponent from './components/BannerComponent/BannerComponent'

function App() {

  return (
    <>
      <BannerComponent />
      <NavBarComponent logo="/assets/images/Logo.png" />
      <HeroComponent />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <NavigateSection />
      <FooterComponent
        logo="/assets/images/Logo.png"
        txt="We believe in the power of play to foster creativity,
              problem-solving skills, and imagination." />
    </>
  )
}

export default App
