import React from 'react';
import VaultBrand from './VaultBrand';

const Footer = () => (
  <footer className="vault-footer w-full text-left">
    <div className="vault-footer-top">
      <div className="vault-footer-brand">
        <VaultBrand light />
        <p>Learn with intention. Build what matters. Keep moving forward.</p>
        <span className="vault-footer-tag">A learning space for your next chapter.</span>
      </div>
      <div className="vault-footer-links">
        <h3>Explore</h3>
        <a href="/">Home</a><a href="/course-list">Browse courses</a><a href="/my-enrollments">My learning</a>
      </div>
      <div className="vault-footer-links">
        <h3>For creators</h3>
        <a href="/educator">Educator dashboard</a><a href="/educator/add-course">Create a course</a><a href="/educator/my-courses">Your courses</a>
      </div>
      <div className="vault-footer-note">
        <span className="vault-footer-kicker">KEEP GROWING</span>
        <h3>One skill can<br/>change your direction.</h3>
        <a className="vault-footer-cta" href="/course-list">Find your next skill <span>↗</span></a>
      </div>
    </div>
    <div className="vault-footer-bottom"><span>© 2026 AltamashVault. Built for curious minds.</span><span>Learn at your pace · Grow on your terms</span></div>
  </footer>
);

export default Footer;
