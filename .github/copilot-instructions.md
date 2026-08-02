# Human Reset Lab — Repository Instructions

## Project Identity

This repository contains the Human Reset Lab digital platform.

Human Reset Lab is a nonprofit foundation focused on human wellbeing, prevention, recovery, reconnection, education, movement, music, community, and accessible human-centered support.

This is not a generic wellness website, gym website, medical website, or commercial landing page.

The platform must express:

- calm;
- dignity;
- authenticity;
- human connection;
- accessibility;
- social responsibility;
- architectural refinement;
- warmth;
- harmony;
- trust.

## Product Vision

Human Reset Lab is the social and human-centered heart of a wider ecosystem of connected platforms and organizations.

All ecosystem websites share the same architectural DNA while maintaining their own identity.

Human Reset Lab must remain visibly independent, nonprofit, trustworthy, and mission-driven. Cross-links to related platforms must only be added when they are contextually relevant and valuable to visitors.

Never create manipulative link networks, doorway pages, duplicate content, hidden links, keyword stuffing, or artificial SEO patterns.

## Visual Direction

The visual language is a modern sanctuary for 2026.

Use:

- warm sand;
- limestone;
- clay;
- terracotta;
- deep brown-red;
- aged bronze;
- cacao;
- soft natural light;
- monumental but calm architecture;
- subtle cinematic depth;
- organic geometry;
- generous spacing;
- refined typography.

The experience may evoke the atmosphere, scale, stillness, and architectural character associated with sophisticated science-fiction worlds, but must never copy protected artwork, characters, logos, costumes, scenes, or identifiable franchise designs.

Create an original Human Reset Lab identity.

Avoid:

- generic wellness templates;
- clinical hospital styling;
- loud fitness branding;
- neon cyberpunk;
- glossy corporate stock imagery;
- excessive gradients;
- visual clutter;
- aggressive conversion patterns;
- autoplay audio;
- decorative animation without purpose.

Motion must regulate rather than stimulate.

## AI Visual Identity

AI-generated imagery must belong to the Human Reset Lab visual DNA.

Every image must feel:

- original;
- cinematic;
- warm;
- calm;
- human;
- architectural;
- inclusive;
- believable;
- consistent with the brand palette.

Store final approved assets in clearly organized directories under `public/`.

Never use copyrighted franchise characters, logos, celebrities, protected compositions, or misleading medical imagery.

All meaningful images require appropriate alternative text. Decorative images must use empty alternative text.

## Sonic Identity

Music and ambient sound may become part of the platform, but sound must never autoplay.

Users must explicitly choose to activate sound.

Audio controls must be:

- accessible;
- keyboard operable;
- easy to disable;
- respectful of reduced-motion and accessibility preferences;
- remembered only with appropriate consent.

## Technical Foundation

Use:

- Next.js;
- React;
- TypeScript in strict mode;
- App Router;
- Supabase;
- PostgreSQL migrations;
- semantic HTML;
- accessible components;
- modular architecture;
- environment-based configuration;
- reusable design tokens;
- server-side security boundaries where supported;
- static-compatible output where required by Hostinger deployment.

Do not introduce a dependency without a clear architectural reason.

Do not hardcode secrets, Supabase service-role keys, private credentials, passwords, tokens, or production identifiers.

Public environment variables must still be documented and validated.

## Architecture

Maintain clear separation between:

- public marketing;
- foundation and mission content;
- knowledge and education;
- intake and contact;
- user portal;
- administration;
- shared components;
- brand configuration;
- data access;
- domain logic;
- integrations;
- SEO;
- analytics;
- accessibility;
- security.

Prefer domain-oriented modules over large generic utility folders.

Do not build temporary patches that bypass the intended architecture.

## Supabase

Supabase project configuration must use environment variables.

Database changes must be delivered through versioned SQL migrations under:

`supabase/migrations/`

Never change production database structures through undocumented manual steps.

Apply row-level security to tenant-specific, personal, intake, portal, and administrative data.

Never expose service-role credentials in browser code.

Never collect health-related, personal, or sensitive information without an explicit purpose, clear consent, proper access controls, and an approved data-retention approach.

## Privacy and Safety

Treat intake, health-related information, personal stories, contact details, and support requests as sensitive data.

Apply privacy by design and data minimization.

Do not imply that Human Reset Lab provides medical diagnoses, emergency care, or guaranteed health outcomes unless that service has been formally established and legally reviewed.

Do not create deceptive testimonials, invented research claims, fake statistics, fake partners, or fake accreditations.

Use placeholders when factual foundation data has not yet been approved.

## Accessibility

Target WCAG 2.2 AA quality.

All functionality must be usable with a keyboard.

Maintain sufficient contrast.

Respect:

- `prefers-reduced-motion`;
- screen readers;
- visible focus states;
- semantic landmarks;
- descriptive labels;
- logical heading structure;
- readable line lengths;
- responsive text scaling.

Atmosphere must never reduce usability.

## SEO

Use technically sound and ethical SEO.

Each page must have:

- a distinct purpose;
- unique metadata;
- one clear primary topic;
- meaningful internal links;
- structured headings;
- canonical handling where necessary;
- accurate structured data;
- crawlable content;
- strong performance.

Do not create mass-generated low-value pages.

Cross-domain links must be editorially relevant and transparent.

## Development Workflow

Never commit feature work directly to `main`.

For every task:

1. inspect the repository;
2. understand existing conventions;
3. create or use a dedicated branch;
4. implement the smallest complete solution;
5. run formatting, linting, type checking, tests, and build validation;
6. document assumptions;
7. open a pull request;
8. summarize changed files;
9. report remaining risks;
10. wait for human approval before merging.

Do not merge your own pull requests unless explicitly instructed.

## Quality Gates

Before declaring work complete, run the available equivalents of:

- dependency installation;
- formatting validation;
- lint;
- TypeScript type checking;
- automated tests;
- production build.

Do not claim a check passed unless it was actually executed.

If a check cannot run, clearly explain why.

## Pull Requests

Pull requests must include:

- purpose;
- scope;
- architectural decisions;
- changed files;
- screenshots for visible UI changes;
- accessibility considerations;
- privacy and security considerations;
- test evidence;
- deployment considerations;
- rollback approach;
- known limitations.

Keep pull requests reviewable and domain-focused.

## Decision Authority

The human project owner controls:

- mission;
- public claims;
- branding approval;
- legal content;
- healthcare positioning;
- privacy policy;
- final visual approval;
- production releases.

The agent may propose decisions but must not silently invent or approve them.
