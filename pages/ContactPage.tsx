import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact SyncSolved | Tell Us What's Slowing You Down</title>
        <meta name="description" content="Get in touch with SyncSolved. Tell us about the workflows and operations that need to be faster. Email: sales@syncsolved.com" />
      </Helmet>

      <div className="pt-24 pb-12 bg-bg">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
          <nav className="flex text-sm font-mono text-fg-subtle mb-8">
            <Link to="/" className="hover:text-fg transition-colors link-underline" style={{ transitionDuration: 'var(--fast)' }}>Home</Link>
            <span className="mx-2">/</span>
            <span className="text-fg">Contact</span>
          </nav>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
