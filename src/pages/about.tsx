import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function About() {
  return (
    <Layout
      title="About the Author"
      description="About Jyoti Kiran — Senior Technical Writer & Content Designer">
      <main style={{maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem'}}>

        <h1>About the Author</h1>

        <h2 style={{marginBottom: '0.25rem'}}>Jyoti Kiran</h2>
        <p style={{color: '#6b7280', fontSize: '1.1rem', marginTop: 0}}>
          Senior Technical Writer &amp; Content Designer
        </p>

        <p>
          I have spent over eight years turning complex products into documentation that 
          people can actually use — across SaaS, cloud, fintech, AI automation, banking, 
          industrial machinery, and enterprise procurement networks.
        </p>

        <p>
          I have built documentation ecosystems from the ground up at companies including 
          SAP Labs, FIS Global, Jiffy.AI, Finastra, Epiroc, and Wipro — working across 
          the full spectrum from DITA-based structured authoring to modern docs-as-code 
          pipelines, API documentation, UX writing, and AI-assisted content workflows.
        </p>

        <p>
          The work I am most proud of is not the volume of content I have delivered. It 
          is the outcomes it produced: CSAT scores that moved from 36% to 71%. A 43% 
          reduction in time-to-task. A 184% increase in upsell click rates. A 50% 
          reduction in customer complaints. Numbers that prove documentation is not a 
          support function — it is a product function.
        </p>

        <h3>Experience</h3>
        <ul style={{lineHeight: '2rem'}}>
          <li>
            <strong>Lead UA Developer &amp; Content Designer</strong> — SAP Labs
            <span style={{color: '#6b7280'}}> · Nov 2021 – Dec 2024</span>
          </li>
          <li>
            <strong>Senior Technical Writer</strong> — FIS Global Solutions
            <span style={{color: '#6b7280'}}> · Aug 2020 – Nov 2021</span>
          </li>
          <li>
            <strong>Documentation Manager</strong> — Jiffy.AI
            <span style={{color: '#6b7280'}}> · Sep 2019 – Aug 2020</span>
          </li>
          <li>
            <strong>Senior Technical Writer</strong> — Finastra
            <span style={{color: '#6b7280'}}> · Dec 2018 – Jul 2019</span>
          </li>
          <li>
            <strong>Technical Writer</strong> — Epiroc Mining India
            <span style={{color: '#6b7280'}}> · Oct 2017 – Nov 2018</span>
          </li>
          <li>
            <strong>Technical Writer</strong> — Wipro Technologies
            <span style={{color: '#6b7280'}}> · Aug 2016 – Oct 2017</span>
          </li>
        </ul>

        <h3>What I Write About</h3>
        <p>
          This site is where I think out loud about documentation — the craft of writing 
          content that genuinely serves readers, and the strategy of building systems that 
          scale. Everything here is drawn from real projects, real products, and real 
          outcomes.
        </p>

        <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <Link
            to="https://www.linkedin.com/in/jyoti-kiran-a48523116"
            className="button button--primary button--lg">
            Connect on LinkedIn
          </Link>
          <Link
            to="/blog/welcome"
            className="button button--secondary button--lg">
            Read My Welcome Note
          </Link>
        </div>

      </main>
    </Layout>
  );
}
