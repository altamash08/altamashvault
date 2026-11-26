import React from 'react';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import ContinueLearning from '../../components/student/ContinueLearning';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';

const Home = () => {

  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <ContinueLearning />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
