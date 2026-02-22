import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Jyoti Kiran"
      description="Documentation Systems Architect | Content Strategist & Designer">
      <main style={{padding: '4rem 2rem', textAlign: 'center'}}>
        <h1>Jyoti Kiran</h1>
        <h2>Documentation Systems Architect</h2>
        <p>
          I design scalable documentation systems, developer portals, 
          and content architectures that transform documentation into 
          product experience.
        </p>

        <div style={{marginTop: '2rem'}}>
          <Link
            to="/docs/documentation-strategy"
            className="button button--primary button--lg">
            Explore Chapters
          </Link>
        </div>
      </main>
    </Layout>
  );
}