import React, { useRef } from 'react';
import Authentication from '../Authentication/Authentication'
import One from './One.jsx';
import Two from "./Two.jsx";
import Footer from './Footer.jsx';

const Landing = () => {
  const authRef = useRef(null);

  // Scroll function
  const scrollToAuthentication = () => {
    if (authRef.current) {
      authRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
   <One onJoinNowClick={scrollToAuthentication} />
   <Two/>
      <div ref={authRef}> {/* Attach the ref to Authentication component */}
        <Authentication />
      </div>
    <Footer/>
    </>
  )
}

export default Landing
