import React from 'react';

type Props = { url: string };

export default function LinkedInIcon({ url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginLeft: '0.5rem' }}
    >
      <img
        src="/img/linkedin.png"  // points to static/img/linkedin.png
        alt="LinkedIn"
        style={{ width: 20, height: 20, verticalAlign: 'middle' }}
      />
    </a>
  );
}