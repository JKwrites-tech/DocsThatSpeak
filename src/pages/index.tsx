import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Docs That Speak"
      description="Technical Writing. Systems Thinking. AI-Augmented.">

      <header className="hero hero--primary">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero__title">Docs That Speak</h1>
          <p className="hero__subtitle">
            Technical Writing. Systems Thinking. AI-Augmented.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <Link
              className="button button--secondary button--lg"
              to="/blog">
              View Posts
            </Link>
          </div>
        </div>
      </header>

    </Layout>
  );
}