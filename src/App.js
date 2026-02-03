import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import NoiseSection from './components/NoiseSection';
import NewsSection from './components/NewsSection';
import EventMap from './components/EventMap';
import Slogan from './components/Slogan';
import Experts from './components/Experts';
import Registration from './components/Registration';
import Partners from './components/Partners';
import ProposalForm from './components/ProposalForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NoiseSection />
      <NewsSection />
      <EventMap />
      <Slogan />
      <Experts />
      <Registration />
      <Partners />
      <ProposalForm />
      <Footer />
    </div>
  );
}

export default App;