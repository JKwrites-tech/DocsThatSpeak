import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const metrics = [
  {
    value: '36% to 71%',
    label: 'CSAT improvement',
    context: 'Achieved at Jiffy.AI within under a year by systematically closing the gap between what users struggled with and what the documentation actually covered.',
    color: '#EAF3DE',
    textColor: '#27500A',
    borderColor: '#C0DD97',
  },
  {
    value: '43%',
    label: 'Reduction in time-to-task',
    context: 'Delivered at SAP through a full redesign of navigation, information architecture, and heading structure. The prose in most articles was unchanged.',
    color: '#E6F1FB',
    textColor: '#0C447C',
    borderColor: '#B5D4F4',
  },
  {
    value: '184%',
    label: 'Increase in upsell click rate',
    context: 'Driven by restructuring content patterns and strengthening narrative alignment across product lines at SAP Business Network.',
    color: '#FAEEDA',
    textColor: '#633806',
    borderColor: '#FAC775',
  },
  {
    value: '50%',
    label: 'Reduction in customer complaints',
    context: 'Achieved at Jiffy.AI through accurate, complete, and consistently on-time documentation across every release cycle.',
    color: '#EEEDFE',
    textColor: '#3C3489',
    borderColor: '#AFA9EC',
  },
  {
    value: '40%',
    label: 'Improvement in content findability',
    context: 'Delivered at FIS Global by overhauling process documentation architecture and aligning structure with how users actually searched.',
    color: '#E1F5EE',
    textColor: '#085041',
    borderColor: '#5DCAA5',
  },
  {
    value: '18%',
    label: 'Reduction in revision cycles',
    context: 'Achieved at SAP by building content evaluation frameworks and metadata standards that powered AI-assisted review and reuse workflows.',
    color: '#FCEBEB',
    textColor: '#791F1F',
    borderColor: '#F09595',
  },
];

const experience = [
  {
    role: 'Lead UA Developer and Content Designer',
    company: 'SAP Labs',
    period: 'Nov 2021 to Dec 2024',
    outcome: 'Redesigned information architecture, pioneered interactive documentation, and headed content analytics for SAP Business Network.',
    tag: 'Enterprise',
    tagBg: '#E6F1FB',
    tagColor: '#0C447C',
  },
  {
    role: 'Senior Technical Writer and Content Designer',
    company: 'FIS Global Solutions',
    period: 'Aug 2020 to Nov 2021',
    outcome: 'Owned end-to-end documentation for APEX Collateral and Global One. Trained global contributors on API documentation and chatbot content.',
    tag: 'Fintech',
    tagBg: '#EAF3DE',
    tagColor: '#27500A',
  },
  {
    role: 'Documentation Manager',
    company: 'Jiffy.AI',
    period: 'Sep 2019 to Aug 2020',
    outcome: 'Joined as the sole writer. Built the entire documentation ecosystem from zero, including the help portal, docs-as-code pipeline, and content analytics.',
    tag: 'AI / Automation',
    tagBg: '#FAEEDA',
    tagColor: '#633806',
  },
  {
    role: 'Senior Technical Writer',
    company: 'Finastra',
    period: 'Dec 2018 to Jul 2019',
    outcome: 'Authored full documentation suite for Fusion Essence banking platform. Led migration of legacy Word-based docs to Adobe FrameMaker.',
    tag: 'Banking',
    tagBg: '#EEEDFE',
    tagColor: '#3C3489',
  },
  {
    role: 'Technical Writer',
    company: 'Epiroc Mining India',
    period: 'Oct 2017 to Nov 2018',
    outcome: 'Documented heavy mining machinery and control systems. Created technical illustrations, SOPs, and safety manuals for field operators.',
    tag: 'Industrial',
    tagBg: '#E1F5EE',
    tagColor: '#085041',
  },
  {
    role: 'Technical Writer',
    company: 'Wipro Technologies',
    period: 'Aug 2016 to Oct 2017',
    outcome: 'Delivered full documentation suite for NetOxygen mortgage platform. Two-time Winners Circle recipient for cross-functional leadership.',
    tag: 'Mortgage Tech',
    tagBg: '#FCEBEB',
    tagColor: '#791F1F',
  },
];

const skills = [
  'DITA', 'Docs-as-Code', 'REST API Documentation', 'UX Writing',
  'Information Architecture', 'Markdown', 'XML', 'Python',
  'TypeScript', 'PowerShell', 'MadCap Flare', 'Adobe FrameMaker',
  'Ixiasoft DITA CCMS', 'Power BI', 'Adobe Analytics', 'Google Analytics',
  'Postman / Swagger', 'GitHub', 'Figma', 'Generative AI Workflows',
];

function MetricCard({ value, label, context, color, textColor, borderColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: color,
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        padding: '1rem 1.1rem',
        cursor: 'default',
        transition: 'all 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ fontSize: '22px', fontWeight: 600, color: textColor, lineHeight: 1.1, marginBottom: '0.25rem', fontFamily: 'monospace' }}>
        {value}
      </div>
      <div style={{ fontSize: '12px', fontWeight: 500, color: textColor, marginBottom: hovered ? '0.5rem' : 0 }}>
        {label}
      </div>
      {hovered && (
        <div style={{
          fontSize: '11px',
          color: textColor,
          lineHeight: 1.65,
          paddingTop: '0.5rem',
          borderTop: `0.5px solid ${borderColor}`,
          opacity: 0.85,
        }}>
          {context}
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <Layout
      title="About the Author"
      description="About Jyoti Kiran, Senior Technical Writer and Content Designer with 8 years of experience across enterprise SaaS, fintech, AI, and cloud platforms.">
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', margin: '0 0 0.5rem' }}>
            About the author
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: 500, margin: '0 0 0.25rem', lineHeight: 1.2 }}>Jyoti Kiran</h1>
          <p style={{ fontSize: '1.05rem', color: '#6b7280', margin: '0 0 1.25rem' }}>
            Senior Technical Writer and Content Designer
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.75, margin: '0 0 0.85rem', maxWidth: '680px' }}>
            Eight years of turning complex products into documentation that people can actually use, across enterprise SaaS, fintech, AI automation, cloud platforms, banking, and industrial systems.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.75, margin: 0, maxWidth: '680px' }}>
            The work I am most proud of is not the volume of content delivered. It is the outcomes it produced. Documentation is not a support function. It is a product function. The numbers below make that case.
          </p>
        </div>

        {/* Metrics */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', margin: '0 0 0.75rem' }}>
            Impact at a glance. Hover each number to see the story behind it.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '10px',
          }}>
            {metrics.map((m, i) => (
              <MetricCard key={i} {...m} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', margin: '0 0 0.75rem' }}>
            Experience
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {experience.map((e, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '0.75rem',
                background: 'var(--ifm-color-emphasis-100)',
                border: '0.5px solid var(--ifm-color-emphasis-300)',
                borderRadius: '10px',
                padding: '0.85rem 1rem',
                alignItems: 'start',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{e.role}</span>
                    <span style={{
                      background: e.tagBg,
                      color: e.tagColor,
                      fontSize: '10px',
                      fontFamily: 'monospace',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    }}>{e.tag}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '0.35rem' }}>
                    {e.company} &nbsp;·&nbsp; {e.period}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis-700)', lineHeight: 1.6 }}>
                    {e.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', margin: '0 0 0.75rem' }}>
            Skills and tools
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {skills.map((s, i) => (
              <span key={i} style={{
                background: 'var(--ifm-color-emphasis-100)',
                border: '0.5px solid var(--ifm-color-emphasis-300)',
                borderRadius: '6px',
                fontSize: '12px',
                padding: '4px 10px',
                color: 'var(--ifm-color-emphasis-700)',
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* What this site is */}
        <div style={{
          background: '#042C53',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          color: '#B5D4F4',
        }}>
          <p style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.65, margin: '0 0 0.6rem' }}>
            What this site is
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.75, margin: 0, color: '#fff', opacity: 0.9 }}>
            This is where I think out loud about documentation: the craft of writing content that genuinely serves readers, and the strategy of building systems that scale. Everything here is drawn from real projects, real products, and real outcomes.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="https://www.linkedin.com/in/jyoti-kiran-a48523116"
            className="button button--primary button--lg">
            Connect on LinkedIn
          </Link>
          <Link
            to="/blog/welcome"
            className="button button--secondary button--lg">
            Read the Welcome Note
          </Link>
        </div>

      </main>
    </Layout>
  );
}
