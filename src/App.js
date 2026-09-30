import { lazy, Suspense } from 'react';
import MainBanner from './Components/MainBanner';
import Dashboard from './Components/Dashboard';
import FrequentlyAskedQuestions from './Components/FrequentlyAskedQuestions';
import Footer from './Components/Footer';
import WhyChoose from './Components/WhyChoose';
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import PricingTable from './Components/PricingTable';
import ContactBlock from './Components/ContactBlock';

const NewFeatures = lazy(() => import('./Components/NewFeatures'));
const ScreensCarousel = lazy(() => import('./Components/ScreensCarousel'));
const MarqueeBlock = lazy(() => import('./Components/MarqueeBlock'));

function App() {
  return (
    <div className="App">

      <Header/>

      <main>

        <MainBanner/>
        <Dashboard/>
        <WhyChoose/>
        <Suspense fallback={null}>
          <NewFeatures/>
        </Suspense>
        <Suspense fallback={null}>
          <ScreensCarousel/>
        </Suspense>
        <FrequentlyAskedQuestions/>
        <PricingTable />
        <Suspense fallback={null}>
          <MarqueeBlock />
        </Suspense>
        <ContactBlock />
        <ContactUs/>

      </main>

      <Footer/>
      
    </div>
  );
}

export default App;
