import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  strategySidebar: [
    {
      type: 'doc',
      id: 'strategy/intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'strategy/doc-you-didnt-write',
      label: "The Doc You Didn't Write Is the Ticket You'll Get",
    },
    {
      type: 'doc',
      id: 'strategy/proving-your-docs-work',
      label: 'Proving Your Docs Work Without Guessing',
    },
    {
      type: 'doc',
      id: 'strategy/readers-know-more',
      label: 'Your Readers Know More Than You Think',
    },
  ],

  nextgenSidebar: [
    {
      type: 'doc',
      id: 'nextgen/intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'nextgen/ai-writes-the-draft',
      label: 'AI Writes the Draft. You Write the Standard.',
    },
    {
      type: 'doc',
      id: 'nextgen/no-one-reads-from-the-top',
      label: 'No One Reads Your Docs From the Top',
    },
    {
      type: 'doc',
      id: 'nextgen/invisible-architecture',
      label: 'The Architecture No One Sees',
    },
  ],

};

export default sidebars;