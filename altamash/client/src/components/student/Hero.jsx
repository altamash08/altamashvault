import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <section className="vault-hero relative flex flex-col items-center justify-center w-full px-6 md:px-12 text-center">
      <div className="vault-hero-inner relative z-10 flex flex-col items-center w-full">
        <div className="vault-eyebrow"><span className="vault-live-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
        <h1 className="vault-hero-title max-w-4xl mx-auto font-bold">
          Build skills that matter.<br />
          <span>Unlock what’s next.</span>
        </h1>
        <p className="vault-hero-copy max-w-2xl mx-auto">
          Learn from expert instructors, build practical skills, and move confidently toward your goals.
        </p>
        <div className="vault-search-wrap w-full"><SearchBar /></div>
        <div className="vault-hero-foot"><span>Curated courses</span><i /> <span>Learn at your pace</span><i /> <span>Skills for real life</span></div>
      </div>
      <div className="vault-hero-orb vault-orb-one" />
      <div className="vault-hero-orb vault-orb-two" />
    </section>
  );
};

export default Hero;
