# Adapted Plugin Marketplace Design Brief

## 1. Product Goal

Design a premium marketplace style website for Adapted, a software company that builds Stream Deck plugins and related tools.

This website is not a generic app directory. It should feel like a high end product showroom combined with a technical documentation hub.

The site must support two main experiences:

1. A landing and listing experience where visitors can browse all plugins from Adapted
2. A plugin detail experience where each plugin has its own page with product info, screenshots, installation guidance, help content, FAQ, and support material

The overall impression should be polished, modern, dark, premium, technical, and trustworthy.

## 2. Core UX Structure

The site should be built around these page types:

### A. Marketplace Overview Page

This page lists all plugins from Adapted.

It should include:
A strong hero section
A searchable and filterable plugin grid or list
Featured plugins
Category or tag filters
Short descriptions
Visual plugin cards
Quick status markers such as New, Popular, Updated, Certified, Low CPU
Clear entry points into each plugin page

### B. Plugin Detail Page

Each plugin should have a dedicated subpage.

This page should include:
Plugin icon and title
Short product summary
Longer feature explanation
Key benefits
Screenshots or visual previews
Installation steps
Compatibility information
Requirements
Version info
FAQ
Help and troubleshooting sections
Related plugins
Clear CTA areas such as Download, Learn more, Join Discord, Documentation, Support

### C. Help and Documentation Sections

Each plugin detail page should support deeper structured content.

Examples:
How to install
How to configure
Common issues
Best practices
Known limitations
Changelog
Future plans

This content should be easy to scan and should not feel like a boring documentation wall.

## 3. Creative Direction

### North Star

The visual identity should feel like a precision built control surface for advanced creators and power users.

Think:
Obsidian control room
High end pro software
Premium plugin showroom
Dark environment where content becomes the light source

This should not look like a standard SaaS template.
It should feel custom, intentional, and editorial.

### Visual Character

Use deep charcoal surfaces, layered tonal contrast, selective blue illumination, subtle glass effects, and strong typography.

The interface should feel:
Dense but clean
Premium but functional
Technical but inviting
Dark but readable
Modern but not trendy in a cheap way

### Design Principles

1. Use tonal depth instead of visible separators
2. Use layout and spacing to create hierarchy
3. Use asymmetry carefully to avoid a templated look
4. Let key content blocks feel illuminated from within
5. Make every component feel product grade, not bootstrap grade

## 4. Visual System

### Color Philosophy

Color is not decorative. Color is used as functional light.

Base the system on:
Deep gray and charcoal surfaces
Cool electric blue as primary accent
Soft blue tinted neutrals for elevated states
Controlled error and status colors only where needed

Avoid:
Pure black backgrounds
Pure white text blocks
Random accent colors
Flat gray SaaS styling

### Surface Hierarchy

Use layered background tones to create physical depth.

Suggested levels:
Deepest background for page shell and recessed zones
Default elevated surfaces for cards and content panels
Higher surfaces for active navigation, highlighted cards, floating utilities
Glass surfaces for overlays, tooltips, and modals

### No Line Rule

Do not rely on obvious borders to separate sections.
Use tonal shifts, spacing, layering, blur, and subtle contrast changes instead.

If a visible edge is absolutely needed for accessibility, use only a very faint low opacity outline.

### Glow and Glass

Use subtle glow sparingly for:
Focused inputs
Primary actions
Live or active states
Selected filter chips
Status indicators

Use glassmorphism only on select floating elements such as:
Top navigation
Tooltips
Modals
Small utility overlays

It should feel refined, not flashy.

## 5. Typography

Use a premium editorial typography system with a strong distinction between marketing content and technical content.

### Recommended Fonts

Headlines: Space Grotesk
Body and UI text: Inter

### Typographic Roles

Headlines should feel sharp, geometric, and confident.
Body text should feel clean and highly readable.
Technical labels such as version numbers, tags, CPU info, compatibility labels, and metadata should be compact and legible.

### Hierarchy

Use strong contrast between:
Hero headlines
Section titles
Plugin titles
Meta labels
Body descriptions
Help text

Headlines can use tighter tracking for authority.
Body text should remain neutral and readable.

## 6. Layout Direction

### General Layout

The layout should feel structured but not rigid.
Avoid perfect symmetry everywhere.
Use carefully controlled asymmetry to create a premium editorial feel.

### Suggested Shell

Top navigation with slight glass effect
Main content area with generous horizontal rhythm
Optional left sidebar for filters or documentation navigation
Responsive grid for plugin cards
Sticky areas where useful, especially on detail pages

### Spacing

Use whitespace as a separator instead of lines.
Sections should breathe.
Cards should not feel cramped.
The design should feel expensive through spacing and proportion.

## 7. Marketplace Overview Page Requirements

### Hero Section

The top of the marketplace should immediately communicate quality.

Include:
Brand statement for Adapted
Short explanation of what the plugins are
Strong visual composition
Primary CTA
Secondary CTA
Optional featured plugin spotlight

### Plugin Listing Area

This area should support:
Search
Category filters
Tag filters
Sorting
Featured section
Regular plugin grid or list

Each plugin card should include:
Icon
Name
Short description
Category or tags
Optional status markers
Hover state with tonal lift or glow
Clear click affordance

Hover states should feel tactile and premium through tonal shift and slight elevation.

### Featured Plugin Treatment

Featured plugins can be larger or visually distinct.
They should feel curated, not just pinned.

## 8. Plugin Detail Page Requirements

The plugin page is a mix of product page and technical help center.

### Above the Fold

Include:
Plugin icon
Title
One sentence summary
Primary CTA
Secondary CTA
Compatibility badges
Trust markers such as Certified, Updated recently, Low CPU

### Main Content Blocks

Structure the page into clear sections such as:
Overview
Features
Screenshots
How it works
Installation
Setup steps
FAQ
Troubleshooting
Versions and changelog
Support and links
Related plugins

### Side Content

Consider a sticky side panel for:
Quick facts
Download button
Version
Requirements
Links
Status
Documentation anchors

### Help Content UX

Long help content must be highly readable.
Use:
Anchored sections
Expandable FAQ areas
Callout panels
Code or config blocks if relevant
Step cards for setup flows

The documentation should feel integrated into the product experience, not like a separate wiki.

## 9. Components

### Buttons

Primary buttons should feel illuminated and premium, using a subtle blue gradient or lit surface effect.
Secondary buttons should use elevated surfaces without hard borders.
Tertiary actions should be text based but still intentional.

### Cards

Plugin cards should have soft rounded corners, layered surfaces, and premium hover feedback.
No visible divider lines between card content regions.

### Inputs

Search inputs should feel recessed by default.
On focus they should brighten slightly and gain a subtle blue glow.

### Filter Chips

Chips should feel compact, tactile, and selectable.
Selected chips should ignite into the primary accent color.
Unselected chips should remain tonal and calm.

### Badges

Use small polished badges for:
New
Popular
Updated
Certified
Low CPU
Beta
Requires setup

These should feel like integrated UI instruments, not random labels.

### Status Indicators

Small glowing indicators can be used for:
Live support
Actively maintained
Online integration
Warning states

Use them sparingly.

### Navigation

Top navigation should feel premium and calm.
Documentation subnavigation on plugin pages should be clear and sticky where appropriate.

## 10. Motion and Interaction

Animation should be subtle, fast, and product grade.

Use motion for:
Hover elevation
Card reveal
Section transitions
Filter changes
Expandable content
Modal appearance

Avoid:
Bouncy motion
Overly playful transitions
Heavy parallax
Anything that feels gimmicky

Motion should communicate precision and responsiveness.

## 11. Content Tone

The UI tone should reflect a professional software company.

Use language that feels:
Confident
Clear
Technical when needed
Helpful
Minimal
Trustworthy

Avoid sounding generic, overhyped, or overly corporate.

## 12. Accessibility and Readability

Even though the design is dark and premium, readability must remain excellent.

Requirements:
Strong text contrast
Clear focus states
Large enough hit areas
Accessible navigation
Scannable help content
Good mobile responsiveness

Accessibility should be built into the premium aesthetic, not treated as an afterthought.

## 13. Implementation Guidance for Codex

Build this as a polished modern web interface, not as a template clone.

Priorities:
1. Strong visual hierarchy
2. Premium dark design with tonal layering
3. Excellent plugin card design
4. Great plugin detail page structure
5. Help content that feels elegant and easy to navigate
6. Reusable design system primitives
7. Responsive layout for desktop first, but fully solid on mobile

Prefer:
Tonal separation over borders
Depth through layered surfaces
Subtle blur and glow
Strong typography
Editorial spacing
Carefully chosen asymmetry

Do not build:
A generic bootstrap looking dashboard
A flat monochrome docs page
A noisy cyberpunk interface
A marketplace that feels cheap or crowded

## 14. Deliverables Expected

Create:
1. Marketplace overview page
2. Plugin detail page
3. Reusable card components
4. Search and filter UI
5. FAQ and help content components
6. Status badges and metadata components
7. Navigation system
8. Responsive mobile layout
9. Design tokens or theme variables for colors, radii, spacing, surfaces, glow, and typography

## 15. Final Design Intent

The final result should feel like this:

Adapted is a serious software company.
These plugins are premium tools.
This is the best place to discover, evaluate, install, and learn about them.

The design should feel like a luxury control interface for creators, not just a plugin list.
