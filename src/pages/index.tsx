import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Jyothi Kiran"
      description="Senior Technical Writer & Content Designer">
      <main style={{padding: '4rem 2rem', textAlign: 'center'}}>

        <img
          src="img/hero-animated.svg"
          alt="Jyothi Kiran - Senior Technical Writer and Content Designer"
          width="540"
          style={{ maxWidth: '100%', marginBottom: '1.5rem' }}
        />

        <h1>Jyothi Kiran</h1>
        <h2>Senior Technical Writer & Content Designer</h2>
        <p style={{maxWidth: '600px', margin: '1rem auto'}}>
          Practical frameworks for documentation that works, from core strategy to how AI is changing technical writing.
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