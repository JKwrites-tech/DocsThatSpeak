import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Jyoti Kiran"
      description="Documentation Systems Architect | Content Strategist & Designer">
      <main style={{padding: '4rem 2rem', textAlign: 'center'}}>

        {/* HERO ANIMATED IMAGE — add this */}
        <img
          src="img/hero-animated.svg"
          alt="Jyoti Kiran - Documentation Systems Architect"
          width="540"
          style={{ maxWidth: '100%', marginBottom: '1.5rem' }}
        />

        <h1>Jyoti Kiran</h1>
        <h2>Technical Writer & Content Designer</h2>
        <p>
          I design scalable documentation systems, developer portals, 
          and content architectures that transform documentation into 
          product experience.
        </p>

        {/* WELCOME NOTE LINK — add this */}
        <p style={{marginTop: '1rem'}}>
          <Link to="/blog/welcome">✍️ Welcome Note from the Author</Link>
        </p>

        <div style={{marginTop: '2rem'}}>
          <Link
            to="/blog"
            className="button button--primary button--lg">
            View Posts   {/* changed from Explore Chapters */}
          </Link>
        </div>

      </main>
    </Layout>
  );
}