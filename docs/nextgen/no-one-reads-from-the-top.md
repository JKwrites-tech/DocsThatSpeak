---
id: no-one-reads-from-the-top
title: No One Reads Your Docs From the Top
sidebar_position: 3
---

# No One Reads Your Docs From the Top

Here is something most writers know but few write for: no one reads documentation the way it was written.

Writers compose from top to bottom — context first, then procedure, then notes. Users arrive from the middle — a search result, a link from a tooltip, a colleague's Slack message. They land on step 4 with no idea what happened in steps 1 through 3. They scan for the thing they need, skim the paragraph around it, and leave.

Documentation written for a reader who starts at the top and reads to the bottom is documentation optimised for almost no one.

---

## The Three Ways People Read

Research in technical communication and UX has consistently identified three reading patterns that users apply to documentation — often in sequence within a single article.

**Finding** — The user arrives looking for a specific thing. They use Ctrl+F, the page's heading structure, or visual scanning to locate it. If they can't find it within about ten seconds, they leave or raise a support ticket. This phase is entirely about structure and labeling — the quality of your prose is irrelevant here.

**Scanning** — Once the user locates a likely section, they scan it before committing to reading. They are looking for signals that this section contains what they need: a heading that matches their question, a code snippet that looks like the one they're working with, a warning that mentions the error they're seeing. If the section passes this scan, they read it. If it doesn't, they resume finding.

**Reading** — When a user is actually reading your content, you have earned a rare kind of attention. They have found the right section and decided it looks relevant. Now the quality of your writing matters — clarity, accuracy, logical flow. But notice: the user had to get through two prior phases before writing quality became relevant at all.

Most documentation is written almost entirely for the reading phase. Most users never reach it.

---

## Designing for the User Who Arrives in the Middle

The practical implication of how users actually read is that every section of every article needs to be self-sufficient — not just the article as a whole.

A user landing on step 4 of a 7-step procedure should be able to understand what step 4 is asking them to do without having read steps 1 through 3. This doesn't mean repeating every prior step — it means writing each step with enough context that a reader encountering it cold can orient themselves quickly.

**Concrete techniques:**

**Lead with the outcome, not the action** — *"To enable two-factor authentication, navigate to Settings > Security"* tells the reader what they are about to accomplish before asking them to do anything. This lets them confirm they are in the right place before they act.

**Use headings as answers, not labels** — A heading that says *"Authentication"* is a label. A heading that says *"How to set up two-factor authentication"* is an answer to a likely reader question. When users scan, they are looking for the heading that matches the question in their head. Answer-style headings match far more often.

**Front-load every paragraph** — The most important information belongs in the first sentence of every paragraph, not the last. Users who are scanning will read the first sentence and skip to the next heading. If your key information is buried in sentence four, scanners will miss it entirely.

**Make warnings impossible to miss** — A warning about data loss or irreversible actions buried in the third paragraph of a procedure is a documentation failure waiting to happen. If a step has a consequence the user needs to know before acting, that consequence goes before the step — not after it.

---

## The Scannability Test

Before publishing any documentation, apply this test: cover the body text of every section and read only the headings. Can you understand the structure and main content of the article from headings alone?

Then uncover the body text and read only the first sentence of each paragraph. Does the article still make sense?

If the answer to both is yes, you have written documentation that works for users who scan. If the answer is no, you have written documentation that works only for users who read every word — and those users are in the minority.

---

## Why This Matters More Than Ever

As AI search surfaces direct answers rather than article links, and as in-product help increasingly delivers context-sensitive snippets rather than full documents, the ability to write documentation that works non-linearly is becoming more important, not less.

Content that is structured for linear reading cannot be easily chunked, surfaced contextually, or consumed out of sequence. Content that is modular, self-sufficient, and heading-led can be delivered anywhere, in any order, to any user — and it will still make sense.

Writing for how people actually read is not just good practice. It is the foundation of documentation that works in a next-generation content delivery landscape.
