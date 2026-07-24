# Design QA

## Evidence

- Source visual truth: `/private/var/folders/gy/zqy0dj8j7c1b7kvl_vptq8m00000gn/T/TemporaryItems/com.apple.Photos.NSItemProvider/uuid=6F0CD296-431C-415C-AC89-4BD35C90EB48&code=001&library=1&type=1&mode=2&loc=true&cap=true&keywords=true.jpeg/IMG_5736.jpeg`
- Source dimensions: 3024 × 4032 pixels
- Implementation screenshot: `/Users/dgitman/Documents/Gitman Antique Watches & Raraties/implementation-desktop-viewport.png`
- Implementation dimensions and viewport: 1440 × 900 pixels at 1440 × 900 CSS pixels, device scale factor 1
- Mobile screenshot: `/Users/dgitman/Documents/Gitman Antique Watches & Raraties/implementation-mobile.png`
- Mobile dimensions and viewport: 390 × 844 pixels at 390 × 844 CSS pixels, device scale factor 1
- Comparison image: `/Users/dgitman/Documents/Gitman Antique Watches & Raraties/design-comparison.png`
- State: initial page view; mobile navigation was also tested open

## Full-view comparison

The source flyer and implementation were opened together in a single 1440 × 950 browser comparison. The website is an intentional responsive translation rather than a literal flyer facsimile. It preserves the source’s restrained serif typography, black/ivory palette, fine-rule structure, horological subject, prominent Gitman identity, and direct contact emphasis while adapting the dense flyer copy into a clear web hierarchy.

## Focused comparison

The first viewport was inspected independently at native desktop size. The hero retains the source’s dominant brand, “Moving time around the world” line, antique-watch focus, Howard Gitman attribution, phone number, and appraisal conversion path. The generated watch still life is sharp, historically appropriate, and naturally framed behind the code-native interface.

## Required fidelity surfaces

- Fonts and typography: Cormorant Garamond carries the source’s old-world display character; Montserrat provides legible small uppercase labels. Hierarchy and wrapping are deliberate at both tested breakpoints.
- Spacing and layout rhythm: Desktop uses open editorial spacing; mobile collapses cleanly without horizontal overflow. The dense flyer content is separated into readable bands while preserving its order and emphasis.
- Colors and tokens: Ink black, aged ivory, parchment, walnut, and restrained brass accents follow the source’s monochrome print character while supporting the photographic hero.
- Image quality and assets: The 1536 × 1024 generated hero loads at natural resolution. The source flyer is retained only as external design evidence and no longer ships with or appears in the website.
- Copy and content: The business name, Howard Gitman, 40+ years, buying/selling/repairing/appraising, sought item categories, non-working-condition note, NAWCC membership since 1971, free appraisal offer, phone, and email are all represented.
- Above-the-fold copy diff: No unsupported business claim was added. The headline and concise supporting copy are a web adaptation of the flyer’s stated offer.

## Interaction and browser checks

- Desktop navigation anchors resolve to the intended sections.
- Mobile menu opens and reports `aria-expanded="true"` with all four navigation links visible.
- Phone links use `tel:` and email/appraisal links use `mailto:`.
- No horizontal overflow at 1440 or 390 CSS pixels.
- The hero image loaded completely with non-zero natural dimensions.
- The original flyer asset, markup, and caption were removed; the browser found zero references to `original-flyer`.
- Browser console returned no warnings or errors.
- Production build and GitHub Pages worker tests passed.

## Comparison history

No P0, P1, or P2 mismatches were found in the first formal comparison. In the second iteration, the source flyer was removed at the user’s request and the About section was rebalanced as a centered text-led feature. Browser verification at 1440 × 900 and 390 × 844 found no overflow, missing assets, or console errors.

## Findings

No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- P3: A custom historical Gitman wordmark asset could be commissioned later if an exact digital recreation of the flyer lettering becomes available.

final result: passed
