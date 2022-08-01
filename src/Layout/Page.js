import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Page = (props) => {

  const { children } = props;

  return (
    <div>
      <Header />
      <main className="z-0 p-10">
        {children}
      </main>
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Page;