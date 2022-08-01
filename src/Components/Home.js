import React from 'react';
import Page from '../Layout/Page';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Map from './Map';

const Home = () => {
  return (
    <Page>
      <div>
        <Hero />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Testimonials />
      </div>
    </Page>
  )
}

export default Home;