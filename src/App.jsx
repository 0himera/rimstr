import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import AboutComplex from './components/AboutComplex';
import Map3D from './components/Map3D';
import Advantages from './components/Advantages';
import Architecture from './components/Architecture';
import LivingAreas from './components/LivingAreas';
import FloorPlans from './components/FloorPlans';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />
      <MainBanner />
      <AboutComplex />
      <Map3D />
      <Advantages />
      <Architecture />
      <LivingAreas />
      <FloorPlans />
      <InteractiveMap />
      <Footer />
    </div>
  );
}

export default App;