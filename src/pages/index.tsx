import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Jyoti Kiran"
      description="Technical Writer & Content Designer">
      <main style={{padding: '4rem 2rem', textAlign: 'center'}}>

        <img
          src="img/hero-animated.svg"
          alt="Jyoti Kiran - Technical Writer and Content Designer"
          width="540"
          style={{ maxWidth: '100%', marginBottom: '1.5rem' }}
        />

        <h1>Jyoti Kiran</h1>
        <h2>Technical Writer & Content Designer</h2>
        <p style={{maxWidth: '600px', margin: '1rem auto'}}>
          Practical insights on documentation strategy and next-gen writing.
        </p>

        <p style={{marginTop: '1rem'}}>
          <Link to="/blog/welcome">✍️ Welcome Note from the Author</Link>
        </p>

        <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            to="/docs/strategy/intro"
            className="button button--primary button--lg">
            Documentation Strategy
          </Link>
          <Link
            to="/docs/nextgen/intro"
            className="button button--secondary button--lg">
            Next-Gen Docs
          </Link>
        </div>

      </main>
    </Layout>
  );
}