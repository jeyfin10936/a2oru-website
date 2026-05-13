import MainBanner from './Components/MainBanner';
import Dashboard from './Components/Dashboard';
import FrequentlyAskedQuestions from './Components/FrequentlyAskedQuestions';
import ScreensCarousel from './Components/ScreensCarousel';
import Footer from './Components/Footer';
import WhyChoose from './Components/WhyChoose';
import Features from './Components/Features';
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import PricingTable from './Components/PricingTable';
import MarqueeBlock from "./Components/MarqueeBlock";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBanner/>
      <Dashboard/>
      <WhyChoose/>
      <Features/>
      <ScreensCarousel/>
      <FrequentlyAskedQuestions/>
      <PricingTable />
      <MarqueeBlock />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;